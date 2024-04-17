import { SVGProps } from "react";

export function StarIcon (){
    return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m14.43 10l-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6l-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8l3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61l3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z"/></svg>
    )
}

export const PlayListAddIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"} {...props}>
      <path d="M2 7H21" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16.5 2L13.5 7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9.5 2L6.5 7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M11.5 21C7.02166 21 4.78249 21 3.39124 19.6088C2 18.2175 2 15.9783 2 11.5C2 7.02166 2 4.78249 3.39124 3.39124C4.78249 2 7.02166 2 11.5 2C15.9783 2 18.2175 2 19.6088 3.39124C21 4.78249 21 7.02166 21 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 18H22M18 22L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );


export const LeftToRightListTriangleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"} {...props}>
      <path d="M11 5.5L21 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5.4 16.8926C6.46667 17.607 7 17.9642 7 18.5C7 19.0358 6.46667 19.393 5.4 20.1074C4.33333 20.8218 3.8 21.1789 3.4 20.9111C3 20.6432 3 19.9288 3 18.5C3 17.0712 3 16.3568 3.4 16.0889C3.8 15.8211 4.33333 16.1782 5.4 16.8926Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5.4 3.89263C6.46667 4.60702 7 4.96421 7 5.5C7 6.03579 6.46667 6.39298 5.4 7.10737C4.33333 7.82176 3.8 8.17895 3.4 7.91105C3 7.64316 3 6.92877 3 5.5C3 4.07123 3 3.35684 3.4 3.08895C3.8 2.82105 4.33333 3.17824 5.4 3.89263Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 12L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 18.5L21 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );

export const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"} {...props}>
    <path d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function DeleteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17"/></svg>
  )
}