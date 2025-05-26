"use client";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import UploadIcon from "@/public/assets/icons/upload.svg";

type FileUploaderProps = {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
};

const FileUploader = ({ files, onChange }: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="file-upload">
      <input {...getInputProps()} />
      {files && files.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          alt="Uploaded file "
          width={1000}
          height={1000}
          className="max-h-[400px] overflow-hidden object-cover"
        />
      ) : (
        <>
          <Image src={UploadIcon} alt="Upload Icon" width={40} height={40} />
          <div className="file-upload_label">
            <p className="text-14-regular">
              <span className="text-green-500">Click to upload </span>
              or Drag and Drop
            </p>
            <p>SVG , PNG , JPG or GIF (max 800 x 400 )</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FileUploader;
