/**
 * Get input data and transform data
 * @class
 */
class Transformer {
    constructor(data) {
        /**
         * data to transform
         * @property {data}  
         */
        this.data = data;
    }
    /**
     * @return {newActivityData} the new activityData transform and ready for the graphic
     * 
     * @method 
     */
    getTransformedActivityData() {
        const newActivityData = []
        this.data.forEach(
            element => (
                newActivityData.push({ kcal: element.calories, kg: element.kilogram })
            )
        );
        return newActivityData;
    }
    /**
     * @return {newPerformanceData} the new performanceData transform and ready for the graphic
     * @method 
     */
        getTransformedPerformanceData() {
        const newPerformanceData = []
        newPerformanceData.push(...this.data);
        newPerformanceData.forEach((element, index) => {
            delete element.kind
            const categorie = this.getKind()[index][0].toUpperCase() + this.getKind()[index].slice(1);
            element.subject = categorie
        });
        return newPerformanceData;
    }
    setKind(kind) {
        this.kind = kind;
    }
    getKind() {
        return this.kind
    }
}
export default Transformer