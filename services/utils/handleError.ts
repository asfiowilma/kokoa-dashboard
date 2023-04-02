import { AxiosError } from 'axios'
import { toast } from 'react-hot-toast'

const handleError = (reason: AxiosError): null => {
  toast.error(reason.message)
  return null
}

export default handleError
