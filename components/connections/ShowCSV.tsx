import { useState } from 'react'
import FileInput from '../FileInput/FileInput'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export const ShowCSV = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file)
  }
  return (
    <div className="show-csv h-[calc(100vh-60px)] flex items-center justify-center flex-col">
      <div className="max-w-5xl mx-auto">
        <Input
          className="label mb-4"
          type="text"
          placeholder="Connection Name"
        ></Input>
        <FileInput onFileChange={handleFileChange} />
        {selectedFile && (
          <div className="mt-4">
            <p className="text-lg">Selected file: {selectedFile.name}</p>
          </div>
        )}
        <div className="action-btns mt-8 flex gap-2 justify-center">
          <Button variant="default">Save</Button>
          <Button variant="secondary">Add Next</Button>
        </div>
      </div>
    </div>
  )
}
