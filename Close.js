import React, { memo } from 'react'

export default memo(function Close() {
  return (
    <div>
      <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Welcome to TextUtils !</strong> Enter the text below,spelling mistakes are highlighted
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
})
