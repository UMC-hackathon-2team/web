import { getSimilar } from '@/api/memory'
import { QUERY_KEY } from '@/constants/key'
import { useQuery } from '@tanstack/react-query'

function useGetSimilar() {
	return useQuery({
		queryKey: [QUERY_KEY.memory, 'similar'],
		queryFn: () => getSimilar(),

		staleTime: 5 * 60 * 1_000, // 5분
		gcTime: 10 * 60 * 1_000, // 10분
		refetchInterval: 10 * 60 * 1_000, // 10분
	})
}

export default useGetSimilar
