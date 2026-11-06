// Service worker ขั้นต่ำ: ทำให้ติดตั้งแอปได้ (PWA) โดยไม่แคชไฟล์ใดๆ — ข้อมูลทั้งหมดเป็นเรียลไทม์จาก Firebase
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* ปล่อยผ่านไปที่เครือข่ายตามปกติ */ });
