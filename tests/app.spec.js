// SPDX-License-Identifier: AGPL-3.0-or-later
// Recorridos principales de la aplicación y revisión automática de accesibilidad (axe, WCAG 2.1 AA).
const { test, expect } = require('@playwright/test');
const { default: AxeBuilder } = require('@axe-core/playwright');

async function sinFallosDeAccesibilidad(page) {
    const resultado = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    expect(resultado.violations.map(v => `${v.id}: ${v.help}`)).toEqual([]);
}

test('la pantalla de inicio ofrece los dos modos y el pie con licencias e IA', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Generador de Sonidos por Edad' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Iniciar Modo Test' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Iniciar Modo Manual' })).toBeVisible();
    const pie = page.locator('footer');
    await expect(pie).toContainText('AGPL v3');
    await expect(pie).toContainText('CC BY-SA 4.0');
    await expect(pie.getByRole('link', { name: 'nivel 4 del MIAE' })).toHaveAttribute('href', 'https://jjdeharo.github.io/miae/?nivel=4');
    await sinFallosDeAccesibilidad(page);
});

test('modo manual: suena un tono, se detiene y se vuelve al inicio', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Iniciar Modo Manual' }).click();
    await page.getByRole('button', { name: /menores de 30 años - 16,000 Hz/ }).click();
    await expect(page.locator('#currently-playing')).toContainText('16000 Hz');
    await page.getByRole('button', { name: 'Detener Sonido' }).click();
    await expect(page.locator('#currently-playing')).toHaveText('');
    await sinFallosDeAccesibilidad(page);
    await page.locator('#manual-screen').getByRole('button', { name: 'Volver al Inicio' }).click();
    await expect(page.locator('#home-screen')).toBeVisible();
});

test('modo test: el barrido avanza y «¡Lo escucho!» da un resultado', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Iniciar Modo Test' }).click();
    await sinFallosDeAccesibilidad(page);
    await page.getByRole('button', { name: 'Iniciar Test' }).click();
    const oigo = page.getByRole('button', { name: '¡Lo escucho!' });
    await expect(oigo).toBeVisible();
    await expect.poll(async () => Number(await page.locator('#current-frequency').textContent())).toBeLessThan(20000);
    await oigo.click();
    await expect(page.locator('#test-results')).toBeVisible();
    await expect(page.locator('#results-content')).toContainText('Hz');
    await expect(page.getByRole('button', { name: 'Iniciar Test' })).toBeVisible();
    await sinFallosDeAccesibilidad(page);
});

test('se maneja con el teclado', async ({ page, browserName }, testInfo) => {
    test.skip(testInfo.project.name === 'movil', 'en el móvil no hay teclado físico');
    await page.goto('/');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button', { name: 'Iniciar Modo Test' })).toBeFocused();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await expect(page.locator('#manual-screen')).toBeVisible();
});
