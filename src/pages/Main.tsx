import styles from './styles.module.css';
import LatestNews from '../components/LatestNews/LatestNews';
import NewByFilters from '../components/NewByFilters/NewByFilters';

const Main = () => {
	return (
		<main className={styles.main}>
			<LatestNews />
			<NewByFilters />
		</main>
	);
};

export default Main;
