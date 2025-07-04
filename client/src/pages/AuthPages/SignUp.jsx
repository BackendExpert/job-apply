import React from 'react'

const SignUp = () => {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <DefaultInput
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                />
                <DefaultInput
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                />
                <DefaultInput
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                />
                <button
                    type="submit"
                    className="w-full py-3 mt-4 bg-indigo-500 text-white font-semibold rounded-xl hover:bg-indigo-600 transition"
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default SignUp