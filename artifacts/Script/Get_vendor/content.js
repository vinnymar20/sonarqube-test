
const seq = modules.sequelize;

const DB_HOST = "10.0.10.124";

try {
    
  
    const sequelize = new seq("DWH_BUSDAT", "neptune.connector", "TraktorHebat#2028!", {
        host: DB_HOST,                       
        dialect: "mssql",
        logging: false,                     
        dialectOptions: {
            options: {
                encrypt: false,               
                trustServerCertificate: true  
            }
        }
    });

  
    await sequelize.authenticate();
    console.log("Connected to MSSQL");
 
    const [results] = await sequelize.query("SELECT * FROM dt_gld.vendor_master");


    await sequelize.close();

   
    result.status = 200;
    result.data = {
        success: true,
        message: "Success to retrieve data",
        data: results
    };

} catch (err) {

    // log.error(err);

    result.status = err.response?.status || 500;
    result.data = {
        success: false,
        message:
            err.response?.data?.message ||
            err.response?.data?.error ||
            err.message
    };

}
