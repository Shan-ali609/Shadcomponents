import React from 'react'
import Popupform from '../pagecomp/Popupform'
export default function Passwordform() {
  return (
    <div>
         <Popupform dialprop = {true}  accountform = {true} pwdform={true} sheetcond={false}  accountbtn = {false} />
    </div>
  )
}
