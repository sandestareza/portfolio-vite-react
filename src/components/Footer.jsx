import React from 'react'

const Footer = () => {
    return (
        <div className="p-3 dark:bg-slate-900 dark:text-gray-300 bg-slate-100 dark:shadow-footer">
            <p className="font-sans text-center text-sm">Copyright &copy; {new Date().getFullYear()} by Sandesta Reza</p>
        </div>
    )
}

export default Footer