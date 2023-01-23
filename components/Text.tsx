import React from 'react'
import styles from '@/components/Text.module.css'

interface Props{
    txt: string;
}

const Text: React.FC<Props> = ( { txt } ) => {
  return (
    <p className={styles.p}>{txt}</p>
  )
}

export default Text
