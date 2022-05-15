import React from 'react'
import { useTranslation } from 'react-i18next'

const Hello = () => {
  const { t, i18n } = useTranslation()

  return (
    <div>
      {t('title')}
    </div>
  )
}

export default Hello