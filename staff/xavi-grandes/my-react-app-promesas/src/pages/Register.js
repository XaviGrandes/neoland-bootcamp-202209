import log from '../utils/coolog'
import registerUser from '../logic/registerUser'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
    log.info('Register -> render')

    const navigate = useNavigate()

    const handleRegister = event => {
        log.info('Register -> handleRegister')

        event.preventDefault()

        const { name: { value: name }, email: { value: email }, password: { value: password } } = event.target

        try {
            // registerUser(name, email, password, error => {
            //     if (error) {
            //         alert(error.message)

            //         return
            //     }

            //     navigate('/login')
            // })

            registerUser(name, email, password)
                .then(() => navigate('/login'))
                .catch(error => error.message)
        } catch (error) {
            alert(error.message)

            event.target.password.value = '' // TODO improve this, do not manipulate the dom directly, do it by means of React
        }
    }

    return <main className="h-full flex flex-col items-center justify-center gap-2 bg-white dark:bg-black text-black dark:text-white bg-blue-200">
        <div className='bg-white'>
            <form className="flex flex-col gap-2 m-4" onSubmit={handleRegister}>
                <label htmlFor="name" className="container__item--left">Name</label>
                <input name="name" type="text" id="name" placeholder="input your name" className="border-b border-black text-black" />
                <label htmlFor="email" className="container__item--left">E-mail</label>
                <input name="email" type="email" id="email" placeholder="input your e-mail" className="border-b border-black text-black" />
                <label htmlFor="password" className="container__item--left">Password</label>
                <input name="password" type="password" id="password" placeholder="input your password" className="border-b border-black text-black" />
                <button className="p-2 border rounded-xl">Register</button>
            </form>
            <Link to="/login" className="underline">Login</Link>
        </div>
    </main>
}

export default Register