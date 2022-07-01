import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteParams, RouteRecordRaw } from 'vue-router'
import Home from './pages/Home.vue'
//import { isAutorized } from 

export type AppRouteNames =
    | 'global-feed'
    | 'my-feed'
    | 'login' //login 및 회원가입 화면
    | 'loading' //loading UI
    | 'main' //대기화면. 유닛의 리스트, 퀘스트 등을 팝업으로 확인 가능
    | 'event' //이벤트 화면. 이벤트 디테일을 보여주는 팝업 있 이런 시발.
    | 'shop' //상점
    | 'unit-detail' //대기 화면 및 대기 화면의 유닛 리스트 팝업을 통해 유닛을 선택할 시 개개의 유닛을 확인하는 화면
    | 'factory' //유닛 제조 및 개조
    | 'mission-select' //수행 가능한 미션 중 미션을 고르는 화면
    | 'in-game' //전투 화면
    | 'game-result' //게임 결과 화면

export const routes: RouteRecordRaw[] = [
    {
        name: 'global-feed',
        path: '/',
        component: Home,
    },
    {
        name: 'my-feed',
        path: '/my-feed',
        component: Home,
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('./pages/Login.vue'),
    },
    {
        name: 'loading',
        path: '/loading',
        component: () => import('./pages/Loading.vue'),
    },
    {
        name: 'main',
        path: '/main',
        component: () => import('./pages/Main.vue'),
    },
    {
        name: 'event',
        path: '/event',
        component: () => import('./pages/Event.vue'),
    },
    {
        name: 'shop',
        path: '/shop',
        component: () => import('./pages/Shop.vue'),
    },
    {
        name: 'unit-detail',
        path: '/unitdetail',
        component: () => import('./pages/UnitDetail.vue'),
    },
    {
        name: 'factory',
        path: '/factory',
        component: () => import('./pages/Factory.vue'),
    },
    {
        name: 'mission-select',
        path: '/missionselect',
        component: () => import('./pages/MissionSelect.vue'),
    },
    {
        name: 'in-game',
        path: '/ingame',
        component: () => import('./pages/InGame.vue'),
    },
    {
        name: 'game-result',
        path: '/gameresult',
        component: () => import('./pages/GameResult.vue'),
    },
]