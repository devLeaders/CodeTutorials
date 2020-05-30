import {useEffect} from "react"
import {Formik} from "formik"
import _ from "lodash"

export const useFormDelay = (formik: any, phrase: string) => {
    let timer: number

    const handleTyping = (e: React.ChangeEvent) => {
        clearTimeout(timer)
        formik.handleChange(e); 
    }

    useEffect(() => {
        phrase && (timer = _.delay(formik.submitForm, 1000))
    },[phrase])

    return{
        handleTyping
    }
}