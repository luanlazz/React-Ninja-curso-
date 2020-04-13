import React, { useState, useEffect, useReducer, useRef } from 'react'
import t from 'prop-types'
import {
  CircularProgress,
  Grid
} from '@material-ui/core'
import TextField from './text-field'

function FormAddress ({ onUpdate = () => {} }) {
  const [cep, setCep] = useState('')
  const [fetchingCep, setFetchingCep] = useState(false)
  const [addressState, dispatch] = useReducer(reducer, initialState)
  const addressField = useRef()
  const numberField = useRef()

  useEffect(() => {
    onUpdate(addressState)
  }, [addressState, onUpdate])

  useEffect(() => {
    async function fetchAddress () {
      if (cep.length < 9) {
        return
      }

      setFetchingCep(true)
      const data = await fetch(`https://apps.widenet.com.br/busca-cep/api/cep/${cep}.json`)
      setFetchingCep(false)

      if (!data.ok) {
        dispatch({ type: 'RESET' })
        addressField.current.focus()
        return
      }

      const result = await data.json()
      if (!result.ok) {
        dispatch({
          type: 'FAIL',
          payload: {
            error: result.message
          }
        })
        return
      }

      dispatch({
        type: 'UPDATE_FULL_ADDRESS',
        payload: result
      })

      if (result.address.length > 0) {
        numberField.current.focus()
      } else {
        addressField.current.focus()
      }
    }

    fetchAddress()
  }, [cep])

  function handleChangeCep (e) {
    const cep = e.target.value
    setCep(cepMask(cep))
  }

  function cepMask (value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
  }

  function handleChangeField (e) {
    const { name, value } = e.target
    dispatch({
      type: 'UPDATE_FIELD',
      payload: { name, value }
    })
  }

  return (
    <Grid container spacing={2} alignItems='center'>
      <TextField
        label='CEP'
        xs={4}
        autoFocus
        value={cep}
        onChange={handleChangeCep}
        error={!!addressState.error}
      />
      <Grid item xs={8} >
        {fetchingCep && <CircularProgress size={20} />}
        {!!addressState.error && !fetchingCep && <h4>{addressState.error}</h4>}
      </Grid>

      {[
        {
          label: 'Rua',
          xs: 9,
          name: 'address',
          inputRef: addressField
        },

        {
          label: 'Número',
          xs: 3,
          name: 'number',
          inputRef: numberField
        },

        {
          label: 'Bairro',
          xs: 6,
          name: 'district'
        },

        {
          label: 'Complemento',
          xs: 6,
          name: 'complement'
        },

        {
          label: 'Cidade',
          xs: 9,
          name: 'city'
        },

        {
          label: 'Estado',
          xs: 3,
          name: 'state'
        }
      ].map((field) => (
        <TextField
          {...field}
          key={field.name}
          value={addressState[field.name]}
          onChange={handleChangeField}
          disabled={fetchingCep}
        />
      ))}
    </Grid>
  )
}

FormAddress.propTypes = {
  onUpdate: t.func
}

function reducer (state, action) {
  switch (action.type) {
    case 'UPDATE_FULL_ADDRESS':
      return {
        ...state,
        ...action.payload,
        error: null
      }

    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }

    case 'FAIL':
      return {
        ...initialState,
        error: action.payload.error
      }

    case 'RESET':
      return {
        ...initialState
      }

    default:
      return state
  }
}

const initialState = {
  code: '',
  address: '',
  number: '',
  district: '',
  complement: '',
  city: '',
  state: '',
  error: null
}

export default FormAddress
