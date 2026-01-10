import { getRandomMemory } from '@/api/memory'
import { QUERY_KEY } from '@/constants/key'
import { useQuery } from '@tanstack/react-query'

function useGetRandomMemoryList() {
	return useQuery({
		queryKey: [QUERY_KEY.memory],
		queryFn: () => getRandomMemory(),

		staleTime: 5 * 60 * 1_000, // 5분
		gcTime: 10 * 60 * 1_000, // 10분
		refetchInterval: 10 * 60 * 1_000, // 10분
	})
}

export default useGetRandomMemoryList
