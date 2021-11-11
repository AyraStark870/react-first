
import React, { Fragment, useState} from 'react';

const Titulo = ({title='aqui va el titulo'}) => {

  return (
  <Fragment>
      <h1>titulo: {title} </h1>
  </Fragment>
  )
}

export default Titulo;