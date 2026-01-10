import { postMemory } from '@/api/memory'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEY } from '@/constants/key'
import type { RequestMemoryDto } from '@/types/memory'

function usePostMemory() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (body: RequestMemoryDto) => {
			return postMemory(body)
		},
		onSuccess: data => {
			console.log('기억 작성 API 성공:', data)
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.memory] })
		},
		onError: error => {
			console.error('기억 작성 과정에서 에러 발생:', error)
		},
	})
}

export default usePostMemory
