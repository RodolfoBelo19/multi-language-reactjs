import React from 'react'
import { withTranslation } from 'react-i18next'

const ThankYou = ({t}) => {
  return (
    <div>
      {t('sub_title')}
    </div>
  )
}

export default withTranslation()(ThankYou)