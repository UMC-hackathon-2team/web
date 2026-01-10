// 익명으로 기억 작성
export interface RequestMemoryDto {
	content: string
}

interface MemoryResult {
	content: string
	categoryId: number
	letter: string
	summary: string
}

export interface ResponseMemoryDto {
	isSuccess: boolean
	code: string
	message: string
	result: MemoryResult
}

// 기억 랜덤 조회
interface RandomMemoryResult {
	memoryId: number
	name: string
	sadCount: number
}
export interface ResponseRandomMemoryDto {
	isSuccess: boolean
	code: string
	message: string
	result: RandomMemoryResult[]
}

// 기억 상세 조회
interface DetailMemoryResult {
	memoryId: number
	content: string
	summation: string
}
export interface ResponseDetailMemoryDto {
	isSuccess: boolean
	code: string
	message: string
	result: DetailMemoryResult
}

// 기억 공감 및 취소
export type EmpathyRequestType = 'INCREMENT' | 'DECREMENT'
export interface RequestEmpathyDto {
	type: string
}
export interface EmpathyResult {
	memoryId: number
	sadCount: number
}
export interface ResponseEmpathyDto {
	isSuccess: boolean
	code: string
	message: string
	result: EmpathyResult
}

// 비슷한 기억 조회
export interface SimilarResult {
	memoryId: number
	name: string
	sadCount: number
}
export interface ResponseSimilarDto {
	isSuccess: boolean
	code: string
	message: string
	result: SimilarResult[]
}
