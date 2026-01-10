import { createContext, useContext, useState, ReactNode } from 'react'
import TextModal from '@/components/common/modal/TextModal'

interface TextModalData {
	text: string
}

interface TextModalContextType {
	isOpen: boolean
	openModal: (data: TextModalData) => void
	closeModal: () => void
}

const TextModalContext = createContext<TextModalContextType | undefined>(undefined)

export const useTextModal = () => {
	const context = useContext(TextModalContext)
	if (!context) {
		throw new Error('useTextModal must be used within TextModalProvider')
	}
	return context
}

interface TextModalProviderProps {
	children: ReactNode
}

export const TextModalProvider = ({ children }: TextModalProviderProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [modalData, setModalData] = useState<TextModalData>({ text: '' })

	const openModal = (data: TextModalData) => {
		setModalData(data)
		setIsOpen(true)
	}

	const closeModal = () => {
		setIsOpen(false)
	}

	return (
		<TextModalContext.Provider value={{ isOpen, openModal, closeModal }}>
			{children}
			<TextModal text={modalData.text} isOpen={isOpen} onClose={closeModal} />
		</TextModalContext.Provider>
	)
}
