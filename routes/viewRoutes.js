const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(viewsController.alerts);

router.get('/', authController.isLoggedIn, viewsController.getOverview);

router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
router.get('/usa/:slug', authController.isLoggedIn, viewsController.getUsa);
router.get('/rus/:slug', authController.isLoggedIn, viewsController.Russia);

router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/signup', authController.isLoggedIn, viewsController.getSignupForm);

router.get('/postlink', authController.isLoggedIn, viewsController.getPost);
router.get('/place', authController.isLoggedIn, viewsController.getBestplace);
router.get('/sites', authController.isLoggedIn, viewsController.getBestsites);
router.get('/flight', authController.isLoggedIn, viewsController.getBestflight);
router.get('/me', authController.protect, viewsController.getAccount);

router.get('/my-tours', authController.protect, viewsController.getMyTours);

router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData
);

module.exports = router;
