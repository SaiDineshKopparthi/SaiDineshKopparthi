import { useEffect, useRef } from 'react'
import clickSound from './sounds/click-sound.mp3'
import linkClickSound from './sounds/link-click-sound.mp3'


const useButtonClickSound = () => {
    const audioRefClick = useRef(null)
    const audioRefLinkClick = useRef(null)

    useEffect(() => {
        audioRefClick.current = new Audio(clickSound)
        audioRefLinkClick.current = new Audio(linkClickSound)

        audioRefClick.current.preload = 'auto'
        audioRefLinkClick.current.preload = 'auto'

        const handleButtonClick = (event) => {
            const tagName = event.target.tagName.toLowerCase();
            if (tagName === 'button') {
                audioRefClick.current.play().catch(error => {
                    console.error('Error playing click sound:', error);
                });
            } else if (tagName === 'a') {
                audioRefLinkClick.current.play().catch(error => {
                    console.error('Error playing click sound:', error);
                });
            }
        }

        document.addEventListener('click', handleButtonClick)

        return () => {
            document.addEventListener('click', handleButtonClick)
        }
    }, [])
}

export default useButtonClickSound;