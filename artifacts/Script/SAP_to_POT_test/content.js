try {

    // Ambil request body dari SAP / Postman
    const body = req.body;

    // Validasi body
    if (!body) {
        result.data = {
            success: false,
            message: "Request body tidak ditemukan"
        };

        complete();
        return;
    }

    const {
        no_do,
        do_created
    } = body;

    // Validasi no_do
    if (!no_do) {
        result.data = {
            success: false,
            message: "no_do wajib diisi"
        };

        complete();
        return;
    }

    // Validasi do_created
    if (!do_created) {
        result.data = {
            success: false,
            message: "do_created wajib diisi"
        };

        complete();
        return;
    }

    // Simpan ke table test_sap
    const newData = entities.test_sap.create({
        no_do: no_do,
        do_created: do_created
    });

    const savedData = await entities.test_sap.save(newData);

    // Response
    result.data = {
        success: true,
        message: "Data DO berhasil diterima dari SAP",
        data: savedData
    };

    complete();

} catch (error) {

    console.log("ERROR SAP TO POT:", error);

    result.data = {
        success: false,
        message: error.message
    };

    complete();
}