import { useState } from 'react'
import FileInput from '../FileInput/FileInput'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ConnectionLayout } from './ConnectionLayout'
import { ActionBtnGroup } from './ActionBtnGroup'

export const ShowCSV = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file)
  }
  return (
    <ConnectionLayout title="Upload  CSV">
        <Input
          className="label mb-4"
          type="text"
          placeholder="Connection Name"
        ></Input>
        <FileInput onFileChange={handleFileChange} />
        <ActionBtnGroup />
    </ConnectionLayout>
  )
}
