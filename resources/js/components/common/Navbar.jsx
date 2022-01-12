import React, { useState, useRef, useEffect, useCallback } from 'react'
import styled, { keyframes } from "styled-components";
import { Select } from 'antd';

const shadow = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(39, 39, 39, 0.8);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(39, 39, 39, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(39, 39, 39, 0);
  }
`;

const Container = styled.div`
    height: 100px;
    background: ${props => props.hasBackground ? "#000000ac" : "transparent"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    position: fixed;
    box-sizing: border-box;
    top: 0;
    z-index: 1;
    width: 100%;
    color: white;
    transition: .5s ease-in-out;
`;

const Logo = styled.img`
    height: 80%;
    margin: auto 0;
    display: block;
`;


const MenuContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Menu = styled.div`
  
    border-radius: 50%;
    background: rgba(0,0,0,.4);
    box-sizing: border-box;
    height: 70px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    img {
        width: 50%;
        display: block;
        margin: auto;
    }

    &:hover {
        animation: ${shadow} 1s linear;
    }
    
`;

const CustomSelect = styled(Select)`
    min-width: 100px;
    margin-right: 20px;
    cursor: pointer;
    color: white;
    font-size: 1.2em;

    .ant-select-selector{
        background: transparent !important;
        border-radius: 0px !important;
        border: 0px !important;
    }

    .ant-select-selection-item{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 20px;
    }
`;

const Option = styled(Select.Option)`
    img {
        width: 20px;
    }
`;

const DropdownIcon = styled.img`
    width: 10px !important;
    
`;

const Flag = styled.img`
    width: 20px;  
    margin-right: 5px;
`;

function useEventListener(eventName, handler, element = window) {
    // Create a ref that stores handler
    const savedHandler = useRef();

    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    // ... without us needing to pass it in effect deps array ...
    // ... and potentially cause effect to re-run every render.
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(
        () => {
            // Make sure element supports addEventListener
            // On
            const isSupported = element && element.addEventListener;
            if (!isSupported) return;

            // Create event listener that calls handler function stored in ref
            const eventListener = (event) => savedHandler.current(event);

            // Add event listener
            element.addEventListener(eventName, eventListener);

            // Remove event listener on cleanup
            return () => {
                element.removeEventListener(eventName, eventListener);
            };
        },
        [eventName, element] // Re-run if eventName or element changes
    );
}

function Navbar() {
    const [hasBackground, setHasBackground] = useState(false);

    const handler = useCallback(
        ({ }) => {
            console.log(window.innerHeight)
            const currentScrollPos = window.pageYOffset;
            const visible = currentScrollPos > (window.innerHeight / 3);
            setHasBackground(visible);
        },
        [setHasBackground]
    );

    useEventListener("scroll", handler);

    return (
        <Container hasBackground={hasBackground}>
            <Logo src="/logo_white.png" alt="logo" />
            <MenuContainer>
                <CustomSelect defaultValue="en" suffixIcon={<DropdownIcon src="/icon/down.svg" alt="open" />}>
                    <Option value="en"> <Flag src="/icon/flags/en.png" alt="en" /> EN</Option>
                    <Option value="pt"> <Flag src="/icon/flags/pt.png" alt="pt" /> PT</Option>
                </CustomSelect>
                <Menu>
                    <img src="/icon/menu.svg" alt="menu" />
                </Menu>
            </MenuContainer>


        </Container>
    )
}

export default Navbar
