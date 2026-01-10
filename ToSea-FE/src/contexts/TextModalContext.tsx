import { createContext, useContext, useState, type ReactNode } from 'react'
import TextModal from '@/components/common/modal/TextModal'

interface TextModalData {
	memoryId: number
	title?: string
	text: string
}

interface TextModalContextType {
	isOpen: boolean
	openModal: (data: TextModalData) => void
	closeModal: () => void
}

const TextModalContext = createContext<TextModalContextType | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
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
	const [modalData, setModalData] = useState<TextModalData>({ memoryId: 0, text: '' })

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
			<TextModal
				memoryId={modalData.memoryId}
				title={modalData.title}
				text={modalData.text}
				isOpen={isOpen}
				onClose={closeModal}
			/>
		</TextModalContext.Provider>
	)
}
