import type {
	RequestMemoryDto,
	ResponseDetailMemoryDto,
	ResponseEmpathyDto,
	ResponseMemoryDto,
	ResponseRandomMemoryDto,
	ResponseSimilarDto,
} from '@/types/memory'
import { axiosInstance } from '@/utils/AxiosInstance'

// 익명으로 기억 입력
export const postMemory = async (body: RequestMemoryDto): Promise<ResponseMemoryDto> => {
	try {
		const { data } = await axiosInstance.post('/api/memories', body)
		return data
	} catch (error) {
		console.log('익명으로 Memory 작성 과정에서 오류 발생: ', error)
		throw error
	}
}

// 기억 랜덤 조회
export const getRandomMemory = async (): Promise<ResponseRandomMemoryDto> => {
	try {
		const { data } = await axiosInstance.get('/api/memories/random')
		return data
	} catch (error) {
		console.log('RandomMemory를 과정에서 오류 발생: ', error)
		throw error
	}
}

// 기억 상세 조회
export const getDetailMemory = async (memoryId: number): Promise<ResponseDetailMemoryDto> => {
	try {
		const { data } = await axiosInstance.get(`/api/memories/${memoryId}/details`)
		return data
	} catch (error) {
		console.log('Detail Memory를 과정에서 오류 발생: ', error)
		throw error
	}
}

// 기억 공감 및 취소
export const postEmpathy = async (
	memoryId: number,
	type: 'INCREMENT' | 'DECREMENT' = 'INCREMENT'
): Promise<ResponseEmpathyDto> => {
	try {
		const { data } = await axiosInstance.post(`/api/memories/${memoryId}/empathy-actions`, { type })
		return data
	} catch (error) {
		console.log('Empathy Memory를 과정에서 오류 발생: ', error)
		throw error
	}
}

// 비슷한 기억 조회 (백엔드에서 설정한 쿠키를 통해 카테고리 전달)
export const getSimilar = async (): Promise<ResponseSimilarDto> => {
	try {
		// withCredentials가 이미 axiosInstance에 설정되어 있어 쿠키가 자동으로 전송됨
		const { data } = await axiosInstance.get('/api/memories/similar')
		return data
	} catch (error) {
		console.log('Similar Memory를 과정에서 오류 발생: ', error)
		throw error
	}
}
