// General Crud Repository to enhance code readability and remove
// code repeatition

class CrudRepository {
    constructor(model){
        this.model =model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("something went wrong in crud service")
            throw {error}
        }
    }

    async delete(modelId){
        try {
            await this.model.destroy({
                where: {
                    id: modelId
                }
            })
            return true;
        } catch (error) {
            console.log("something went wrong in crud service")
            throw {error}
        }
    }

    async get(modelId){
        try {
            const result = await this.model.findByPk({
                where : {
                    id: modelId
                }
            });
            return result;
        } catch (error) {
            console.log("something went wrong in crud service")
            throw {error}
        }
    }

    async geAll(){
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("something went wrong in crud service")
            throw {error}
        }
    }

    async update(modelId,data){
        try {
            const result = await this.model.update(data,{
                where: {
                    id: modelId
                }
            });
            return result;
        } catch (error) {
            console.log("something went wrong in crud service")
            throw {error}
        }
    }
};

module.exports = CrudRepository;