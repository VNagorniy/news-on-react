import { useAppDispatch, useAppSelector } from '@/app/appStore';
import NewsList from '@/widgets/news/ui/NewsList/NewsList';
import PaginationWrapper from '@/features/pagination/ui/Pagination/Pagination';
import { TOTAL_PAGES } from '@/shared/constants/constants';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { setFilters } from '@/entities/news/model/newsSlice';

import styles from './styles.module.css';
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi';
import { NewsFilters } from '@/widgets/news';
import NewsListWithPagination from '../NewsListWithPagination/NewsListWithPagination';

const NewsByFilters = () => {
	const filters = useAppSelector((state) => state.news.filters);
	const news = useAppSelector((state) => state.news.news);

	const debouncedKeywords = useDebounce(filters.keywords, 1500);

	const { isLoading } = useGetNewsQuery({
		...filters,
		keywords: debouncedKeywords
	});

	const { data } = useGetCategoriesQuery(null);

	return (
		<section className={styles.section}>
			<NewsFilters filters={filters} categories={data?.categories || []} />

			<NewsListWithPagination isLoading={isLoading} news={news} filters={filters} />
		</section>
	);
};

export default NewsByFilters;
