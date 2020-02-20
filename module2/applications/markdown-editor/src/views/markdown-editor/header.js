'use strict'

import React, { PropTypes } from 'react'
import Button from 'components/button'
import SaveMessage from 'components/save-message'

const MarkdownEditorHeader = ({ isSaving, handleCreate, handleRemove }) => (
  <header className='editor-header'>
    <SaveMessage isSaving={isSaving} />

    <Button onClick={handleCreate} kind='success'>
      Criar novo
    </Button>

    <Button onClick={handleRemove} kind='danger'>
      Remover
    </Button>
  </header >
)

// MarkdownEditorHeader.propTypes = {
//   handleCreate: PropTypes.func.isRequired,
//   handleRemove: PropTypes.func.isRequired
// }

export default MarkdownEditorHeader
