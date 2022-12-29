import { Button, useColorMode } from "@chakra-ui/react";
import { MouseEventHandler } from "react";
import styles from '../styles/Home.module.css'

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode()
    return <>
        <div className={styles.description}>
            tech.dev.br - Um guia para devs do Brasil
            <Button onClick={toggleColorMode}>
                Ativar Modo {colorMode === 'light' ? 'Escuro' : 'Claro'}
            </Button>
        </div>
    </>

}