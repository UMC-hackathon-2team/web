import { getDetailMemory } from '@/api/memory'
import { QUERY_KEY } from '@/constants/key'
import { useQuery } from '@tanstack/react-query'

function useGetDetailMemory(memoryId: number) {
	return useQuery({
		queryKey: [QUERY_KEY.memory, memoryId],
		queryFn: () => getDetailMemory(memoryId),
		enabled: memoryId > 0, // memoryId가 유효할 때만 쿼리 실행

		staleTime: 5 * 60 * 1_000, // 5분
		gcTime: 10 * 60 * 1_000, // 10분
		refetchInterval: 10 * 60 * 1_000, // 10분
	})
}

export default useGetDetailMemory
