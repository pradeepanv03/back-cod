const express = require('express');
const router = express.Router();
const PricingPlans = require('../plans/PricingPlanModel');

// Create a new plan
router.post('/store-plan', async (req, res) => {
    const { name, packageType, unlimitedAds, price, durationDays, numOfCars, featuredAds, featuredMaxCar, description, status } = req.body;

    try {
        const newPlan = new PricingPlans({
            name,
            packageType,
            unlimitedAds,
            price,
            durationDays,
            numOfCars,
            featuredAds,
            featuredMaxCar,
            description,
            status,
        });

        await newPlan.save();
        return res.status(201).json({ message: 'Plan added successfully!', newPlan });

    } catch (error) {
        return res.status(500).json({ message: 'Error storing plan details.', error: error.message });
    }
});

// Get all plans
router.get('/plans', async (req, res) => {
    try {
        const plans = await PricingPlans.find();
        return res.status(200).json(plans);
    } catch (error) {
        return res.status(500).json({ message: 'Error retrieving plans.', error: error.message });
    }
});

// Get a specific plan by ID
router.get('/plans/:id', async (req, res) => {
    try {
        const plan = await Plans.findById(req.params.id);
        if (!plan) {
            return res.status(404).json({ message: 'Plan not found.' });
        }
        return res.status(200).json(plan);
    } catch (error) {
        return res.status(500).json({ message: 'Error retrieving plan.', error: error.message });
    }
});


// Update a plan by ID
router.put('/update-plan-data/:id', async (req, res) => {
    const { name, packageType, unlimitedAds, price, durationDays, numOfCars, featuredAds, featuredMaxCar, description, status } = req.body;

    try {
        const updatedPlan = await PricingPlans.findByIdAndUpdate(
            req.params.id,
            { name, packageType, unlimitedAds, price, durationDays, numOfCars, featuredAds, featuredMaxCar, description, status },
            { new: true }
        );
        if (!updatedPlan) {
            return res.status(404).json({ message: 'Plan not found.' });
        }
        return res.status(200).json({ message: 'Plan updated successfully!', updatedPlan });
    } catch (error) {
        return res.status(500).json({ message: 'Error updating plan.', error: error.message });
    }
});


// Update a plan's status by ID
router.put('/update-plan/:id', async (req, res) => {
    const { status } = req.body;

    try {
        const updatedPlan = await PricingPlans.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        if (!updatedPlan) {
            return res.status(404).json({ message: 'Plan not found.' });
        }
        return res.status(200).json({ message: 'Plan status updated successfully!', updatedPlan });
    } catch (error) {
        return res.status(500).json({ message: 'Error updating plan status.', error: error.message });
    }
});

// Delete a plan by ID
router.delete('/delete-plan/:id', async (req, res) => {
    try {
        const deletedPlan = await PricingPlans.findByIdAndDelete(req.params.id);
        if (!deletedPlan) {
            return res.status(404).json({ message: 'Plan not found.' });
        }
        return res.status(200).json({ message: 'Plan deleted successfully!' });
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting plan.', error: error.message });
    }
});

// Get all active plans
router.get('/active-plans', async (req, res) => {
    try {
        const activePlans = await PricingPlans.find({ status: 'active' });
        return res.status(200).json(activePlans);
    } catch (error) {
        return res.status(500).json({ message: 'Error retrieving active plans.', error: error.message });
    }
});


module.exports = router;
