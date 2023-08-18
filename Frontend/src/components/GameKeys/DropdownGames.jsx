import React from 'react'
import { Dropdown } from 'flowbite-react'


const DropdownGames = () => {

    return (
        <Dropdown
            label="Sort by"
            class='bg-logo-color h-10 rounded hover:bg-logo-color-hover'
        >
            <Dropdown.Item>
                Dashboard
            </Dropdown.Item>
            <Dropdown.Item>
                Settings
            </Dropdown.Item>
            <Dropdown.Item>
                Earnings
            </Dropdown.Item>
            <Dropdown.Item>
                Sign out
            </Dropdown.Item>
        </Dropdown>
    )
}

export default DropdownGames