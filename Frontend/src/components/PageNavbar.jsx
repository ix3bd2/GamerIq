import React from 'react'
import { Dropdown, Navbar, Avatar } from 'flowbite-react';


const PageNavbar = () => {


    return (
        <Navbar
            fluid
        >
            <Navbar.Brand href="https://gamer-iq.com">
                <img
                    alt="Gamer IQ logo"
                    className="mr-3 h-10 sm:h-9"
                    src="../src/assets/images/logo.png"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    GAMER IQ
                </span>
            </Navbar.Brand>

            <div className="flex md:order-2">
                {/* <Dropdown
                    inline
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Earnings
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Sign out
                    </Dropdown.Item>
                </Dropdown> */}


                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    active
                    href="#"
                >
                    <p>
                        Home
                    </p>
                </Navbar.Link>
                <Navbar.Link href="#">
                    Game Keys
                </Navbar.Link>
                <Navbar.Link href="#">
                    PC Parts
                </Navbar.Link>
                <Navbar.Link href="#">
                    Accessories
                </Navbar.Link>
                <Navbar.Link href="#">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default PageNavbar