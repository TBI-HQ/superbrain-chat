// components/FileInput.tsx
import React, { ChangeEvent } from 'react';

interface FileInputProps {
  onFileChange: (file: File | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onFileChange }) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      onFileChange(event.target.files[0]);
    } else {
      onFileChange(null);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-semibold
          file:bg-zinc-50 file:text-zinc-900
          file:cursor-pointer
          hover:file:bg-zinc-300"
      />
    </div>
  );
};

export default FileInput;
