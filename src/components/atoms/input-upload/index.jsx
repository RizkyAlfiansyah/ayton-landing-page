import React from "react";
const InputUpload = (props) => {
    const {
        id = "",
        children = <></>,
        multiple = false,
        onChange = () => { },
        accept = "*/*",
    } = props;

    const fileUpload = (files) => {
        const tempFile = [];
        for (let i = 0; i < files.length; i++) {
            tempFile.push({
                preview: URL.createObjectURL(files[i]),
                file: files[i],
                name: files[i].name,
            });
        }
        onChange(tempFile);
    };

    return (
        <>
            <label htmlFor={id} className="py-3 px-4 rounded-lg bg-transparent border-white border-[1px] text-white cursor-pointer">
                <input
                    className="hidden"
                    type="file"
                    value={""}
                    id={id}
                    name={id}
                    multiple={multiple}
                    accept={accept}
                    onChange={(e) => fileUpload(e.target.files)}
                />
                {children}
            </label>
        </>
    );
};

export default InputUpload;
