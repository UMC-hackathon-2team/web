import { postEmpathy } from '@/api/memory'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEY } from '@/constants/key'

function usePostEmpathy() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ memoryId, type }: { memoryId: number; type: 'INCREMENT' | 'DECREMENT' }) => {
			return postEmpathy(memoryId, type)
		},
		onSuccess: (_data, { memoryId }) => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.memory, memoryId] })
		},
		onError: error => {
			console.log('공감 과정에서 에러 발생: ', error)
		},
	})
}

export default usePostEmpathy
