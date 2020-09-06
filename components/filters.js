import styles from './filters.module.css';

export default function Filters (props) {
    let startYear = 2006;
    let endYear = 2020;
    let launchYearFilter = [];
    for(let i = startYear; i <= endYear; i++) {

        let buttonStyle = [styles.filterButton];
        if (props.filters.filterYear == i) {
            buttonStyle.push(styles.filterButtonClicked);
        }
        
        launchYearFilter.push(
            <button 
                key={i} 
                onClick={() => props.handleFilterYearClick(i)}
                className={buttonStyle.join(' ')} > {i} 
            </button>
        );
    }

    let filterSucessfulLaunchButtonClass = [styles.filterButton];
    if (typeof(props.filters.sucessfulLaunch) === "boolean") {
        filterSucessfulLaunchButtonClass.push(styles.filterButtonClicked);
    }

    let filterSucessfulLandingButtonClass = [styles.filterButton];
    if (typeof(props.filters.sucessfulLanding) === "boolean") {
        filterSucessfulLandingButtonClass.push(styles.filterButtonClicked);
    }

    return (
        <div className={styles.filterContainer}>
            <div className={styles.filterContents}>
                <div className={styles.filterHeroTitle}>
                    Filters
                </div>

                <div className={styles.filters}>
                    <div className={styles.filterHero}> Year </div>
                    <div className={styles.filterContentOption}> {launchYearFilter} </div>
                </div>
                
                <div className={styles.filters}>
                    <div className={styles.filterHero}> Successful Launch </div>
                    <div className={styles.filterContentOption}>
                        <button 
                            onClick={() => props.handleFilterSucessfulLaunch(true)}
                            className={props.filters.sucessfulLaunch === true ? filterSucessfulLaunchButtonClass.join(' ') : styles.filterButton} > True 
                        </button>
                        <button 
                            onClick={() => props.handleFilterSucessfulLaunch(false)}
                            className={props.filters.sucessfulLaunch === false ? filterSucessfulLaunchButtonClass.join(' ') : styles.filterButton} > False 
                        </button>
                    </div>
                    
                </div>
                
                <div className={styles.filters}>
                    <div className={styles.filterHero}> Successful Landing </div>
                    <div className={styles.filterContentOption}>
                        <button 
                            onClick={() => props.handleFilterSucessfulLanding(true)}
                            className={ props.filters.sucessfulLanding === true ? filterSucessfulLandingButtonClass.join(' ') : styles.filterButton} > True 
                        </button>
                        <button 
                            onClick={() => props.handleFilterSucessfulLanding(false)}
                            className={ props.filters.sucessfulLanding === false ? filterSucessfulLandingButtonClass.join(' ') : styles.filterButton} > False 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}