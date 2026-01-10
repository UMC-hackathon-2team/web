import { createContext, useContext, useState, ReactNode } from 'react'
import AITextModal from '@/components/common/modal/AITextModal'

interface AITextModalData {
	title: string
	text: string
}

interface AITextModalContextType {
	isOpen: boolean
	openModal: (data: AITextModalData) => void
	closeModal: () => void
}

const AITextModalContext = createContext<AITextModalContextType | undefined>(undefined)

export const useAITextModal = () => {
	const context = useContext(AITextModalContext)
	if (!context) {
		throw new Error('useAITextModal must be used within AITextModalProvider')
	}
	return context
}

interface AITextModalProviderProps {
	children: ReactNode
}

export const AITextModalProvider = ({ children }: AITextModalProviderProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [modalData, setModalData] = useState<AITextModalData>({ title: '', text: '' })

	const openModal = (data: AITextModalData) => {
		setModalData(data)
		setIsOpen(true)
	}

	const closeModal = () => {
		setIsOpen(false)
	}

	return (
		<AITextModalContext.Provider value={{ isOpen, openModal, closeModal }}>
			{children}
			<AITextModal title={modalData.title} text={modalData.text} isOpen={isOpen} onClose={closeModal} />
		</AITextModalContext.Provider>
	)
}
