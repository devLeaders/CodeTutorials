import {useEffect, useRef} from "react"
import _ from "lodash"

export const useFormDelay = (formik: any, phrase: string) => {
    const timer = useRef<number>(0)
    const handleTyping = (e: React.ChangeEvent) => {
        clearTimeout(timer.current)
        formik.handleChange(e); 
    }

    useEffect(() => {
        phrase && (timer.current = _.delay(formik.submitForm, 1000))
    },[phrase, formik.submitForm])

    return{
        handleTyping
    }
}