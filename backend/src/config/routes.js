const express = require('express')

module.exports = function (server) {
    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // Billing Cycles Routes
    const billingCycle = require('../api/billingCycle/billingCycleService')
    billingCycle.register(router, '/billingCycles')
}