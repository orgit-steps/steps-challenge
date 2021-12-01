import React from 'react';
import Loader, { LoaderProps } from "react-loader-spinner";

export const LoaderComponent = (props: LoaderProps) => {
    const {type, color, height, width} = props;
    return (
     <>
        <div>Loading...</div>
        <Loader
        type={type}
        color={color}
        height={height}
        width={width}
      />
    </>
    );
}