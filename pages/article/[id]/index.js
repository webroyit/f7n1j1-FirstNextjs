import {useRouter} from 'next/router'

const article = () => {
    // Get the parameters from URL or route
    const router = useRouter()
    const {id} = router.query

    return (
        <div>
            An article {id}
        </div>
    )
}

export default article
