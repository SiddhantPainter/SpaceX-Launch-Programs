import styles from './launchPanel.module.css';

export default function LaunchPanel({ launchData }) {

    let launchDataDisplay = (
        <div style={{ width: '100%', textAlign: 'center', marginTop: '75px', fontWeight: 600, fontSize: '24px'}}>
            No Records Found
        </div>);

    if(launchData.length > 0) {
        launchDataDisplay = (
            <div className={styles.container}>
                {launchData.map(function(singleData) {
                    return (
                        <div 
                            key={singleData.flight_number}
                            className={styles.card} >
    
                            <div className={styles.heroImageContainer}>
                                <img 
                                    src={singleData.links.mission_patch}  
                                    alt={singleData.mission_name}
                                    className={styles.heroImage} />
                            </div>
    
                            <div className={styles.heroHeader}> {singleData.mission_name} #{singleData.flight_number} </div>
                            <hr />
    
                            <div className={styles.cardText}> <b>Mission Ids:</b> {singleData.mission_id.length > 0 ? singleData.mission_id : <i>No Records found</i>} </div>
    
                            <hr />
                            <div className={styles.cardText}>
                                <table className={styles.cardTable}>
                                    <tbody>
                                        <tr>
                                            <td><b>Launch Year:</b></td>
                                            <td style={{textAlign: "right", marginLeft: '10px'}}>{singleData.launch_year || <i>No Records found</i>}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Successful Launch:</b></td>
                                            <td style={{textAlign: "right", marginLeft: '10px'}}> { singleData.launch_success !== null ? (singleData.launch_success ? 'Yes' : 'No') : <i>Unknown</i>}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Successful Landing:</b></td>
                                            <td style={{textAlign: "right", marginLeft: '10px'}}> { singleData.launch_failure_details ? 'Yes' : 'No' }</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    return launchDataDisplay;
}