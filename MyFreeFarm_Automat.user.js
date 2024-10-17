﻿// ==UserScript==
// @name           MyFreeFarm Automat
// @namespace      https://github.com/BastianKanaan/GMscripts_MyFreeFarm
// @author         BastianKanaan
// @description    Extends MyFreeFarm
// @icon           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB94BGgo6NO+u5q4AAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAS0ElEQVRo3t2aeYxl11ngf+fub3+172t3V1cv7sVuJ3bs7jh2QtoMDoHEwRlCbMJEATRiSaKBQTNBCKGwBwSDNAyTQVGCYJIMEINjxrFix3E73mO7TW/V1VXVtS+v6i13v+ee+aNvQSXDaCTS7W7nSE/v3veuzrm/8y3nO9934Dq08cE+APv9E/1//tDN+16/9+hNJ/l+bXv3jAHw4zf1P/sLdx5TRqXyc++fHPvsGzW+/kbC5vMOyyvrfOSDJz99eM/gj+09fkK9Na/fW8sVzr86NfOl7ydgB+iK46TnVz75wJNtHZX3rcuUI8dvFS9cnuHQ7YcOWprTfvb8pUe/H4BzwH7g0H/59INfq3Z09++ZHBPHbn8LpVKF3WNdWPlOdeIdd962MDf/8vSl+XPX8mW0awxrAiPAgd/4xXf+wdaG74yP7BL9w/vp7x2h1WrRM3SYwf5+8cLz31Yf/w8f/fK1nn3tGkt2D3AE6J7o6xoc7Cjyq//pt3ntm88wMzvDhfMX+dmP/AJJnDKxe0j09HQZDzzwns+9GVW6CBwGjgIdhbz91vfdffjg6soWrhcwf+p5Cu7L3DwhWTkdYvVWCeOEQsFm//5dY1/4wld+880kYQeYBG4CqoD23uMTk0mcQJTQF9R4/48PM3mwDU2HDz5Y5dk/+VPc5YuErZpKooZ9LSVsXOX+BNAB7AUK2X1yx97C7oXpNQb7Nrn5pw5hOA6FthLFYh4hdD7+B8NceHGKi2eqYmTfmAGwb3I3Z85O3fAS1oHubckC6IZ9uGCWCruHN6lWHNIwQRc6BjqkGpqCNEkZPTTG0aFZtuqBPjQ08NPXAvZaAJtA2w7NUQ+9c/Lt5XQOWh5hrY5yfbQoRAYBKvRJ4xgZxcReQD5vMaK9yu9+5j//iWEY4s2g0nYGvO0MxX9/9PTnT1R6P1UqCVJDR/kJdiIQrsIqRghT4KEIpCSNJAuLa3zm7179qJaibnRgDejJgP9JOp3thZueOJvygwdTND0lcFuEWhEtdTALvTTXlmikCV4ScHFhixefXEHSuStKkxveadnAQOas/qm1vHhlq5Uwta6rsUosiCWuVsfJF2itzNMKY+a36sxsNXnhYkI5LLBSWz71ZvDSCkiz739eoyyjMI81VV7Vd6skYLSasrK4gWnnWKt7PL+4wbwbcv6yRKsrZDHXSGqbr74ZAg8t89D9O/stWNbuTS+8+Mzs2hfqstBNnPYOdRpcXNjg4VeXeOqSz/RcghuIb6zr5m+2omQ1NZ2/q7da4c7O+3u6abruDQWsA0PfDTzSVji26QZWJOWFxbr73OTuwcPfeL1ezhcNljydlmdDW+XJ8zPzd/lRsr6vo/xbtkjW26qVwzKJb7INo6OtWl1fWl2LbkQvnQJxJm0NEKZh6yptpNvx9fmt5MXjk72DD798meFyldHDY6xeuMi79nYpJWXqJJH2ajOaqW3UHtvudMsLGOjtYWF55YZahwUggRngEuAC6txa7XHNMF/Z9txRLJNATxnuG2Civ5ORgS56nPTtaPrpr03V9DDwGztht9vVgL0WwBpwGXgKeAVwoyiqNf1gbXtC2goWInLYZUG1UqH25JP4iTr32JnlQ4D92OJm5f83UG93xw2h0gKwsusGcDZbl8eziVADXe33juXlD0QrDRWWcqK2sIDSneSx80sngX6E8IZ7OvvCIPx5Kwnu6eru7J1fWPLLPQMvrtc2v+XknadMzXhdIlr79k2kZ86cv67AaQbqZtd+di8Bdctw9ZerVb3njjvGeOyvT4tG1zD27GX8vqH/wfmlxf6eronRnJqKIt/RCqCcrjNzm+7Nq6GaX52bzxb1K166v7e7HIeRByTXEzgCpjKnlX5HgG3ak+++d39PwcirNAzEsZN38sg/rvPAJ3+WwTb7o3rs3xPWVsYKhQKRq3GmqR2bvrjwIkBfZztL67XvGGhxebVxoyQAomzWLaAL2AVU/u29t9y/d3Skc31pXcTSQG6sENpF3nLLfkwh1ckfua991/4J8fpzL4jXaukTtWbTLBdL7e3t1bzQ9Uaj2Ypv1M3Ddoi5F9iH0Mf/6Jfu/3hff2/n8uqaGpk8KjQErcYmt/YNUe7sxVCJiBPFI5//K0bGB5UoNnNffGL5z8BNLNNMhRDb/uGqbCautoS1LPh4i2ZYRz54fOxT02cv5A/ceozugWFh6RrDh46RMxX9g33IyOeRv36EXYfeQhi02FhaIG9pg1uxuVDbrD8p0zSQUsrvNpEbCTiXpXZGH7xj6NerxTIqidk9Ocljjz6Bcuv09HfxyFe+Stxy6R4a5IlHHuXlp75O4jbxo0jEErW3r3Ty3LL/a2EYXFXYqwksssTdGLC3krf3j7XlbtPRcEyTrz/9Eh0lm5X1TVIl2FxZZGpmjqVLM7SVHSqlAghFEkuWN13hWCb5fOH3Li2sRlwDFbwasJ3AMeCtQLtjm/vcZsDK0ipx4DMx2EGpYGPmHGYvnKVUKVCpFMmZkKQphbxFqlL8WHLq9ByXV+tYmnr4Rk3xlLKU7AGgAmiDbcXROI7xIonne4g0xrYMOtqKKB0sXWekr51c3sa2DNAExZyDbgiUUrx8YYGiKd9+cM/I0I0GrGe7o7EsPQsIYywXTUgF9Uhi6ALimJxlolKJY1uEcYRKFbahUcw5yCQlUQpN03jv8UnZ3T/6e4+/PM14d+F1gIN7x24YYCMLH/PbP1QKdpvrxtQiVHfBVK6fgoypbTZJZYqUkqYb0Gq51BsegecjU4Vp6FimSVuloPte0xsYHHnu+bNzxfvu2P/S6XOXtR86cdMNAWzuyD8DcGig7cFFTzLl6YslS6AZEEcRtVod3wuo111818P3ApIgIooTfM9ndnkLw9AJooR7Dvf/yumZpeMyFY3ZxfUj9905ceGpqcR49+0Hrjuwk9mwBqj+jvKEX6/1zSVO0JeT3cLURck2SJXACTxi10PFCaam02h4+J5HqxnQagUIDUzLIJKSYs7S9/ZXz69uNqtz6631raY7/s4J89w/PPM6B/eOXzdgLfPO5Svxslm9Y9D52DyVxDKNhW4rNUxDo5wzKBo6XqpI/AAZxsRxQj5no3QTJRSWbdBRLWFbFn2dbSgUd9/UN9zd1XVpq+l1P/Pa5ZnaVn38/e84/Nrpc9OMDQ1cF2Anc1gOkPzAwYFfPr0hieL46YG86u0pWMLUBW4sidDo6KzS0dlGV3cbpUKOaql4ZWnK5wmimDSVOI6FF0TIVKGhiYqVjpRLxc/t37/vyEtT66cCzzv4Y3cfefzS5QV2jY2+oYHHdv7qIKAf29VzX1vJmVgMrItFgkP1ZsserFg4to6tGygFVr5AgiBVYDsWmiEIY4lMU8rlIqZloJRASYmuCYIwYrS3Kp77x7nDfhAuOI716GpLqo5c+p5Dk2NDT7905itvFPB2wewo0FMpFQffc3Tgoadn/MgPAtMKG/nx9jwVxyDvGPihBNNB6Dq6YWCaJkLXcf0QhcJ2TDTdQEMgUZiGRhgmxHFCznHQdNT5uZUfHBgc/JlarXYp1osHunPpe7p7B+szC8vfeiNUusCVIwx9QO1Hjw3/4jcvNVLXD6OBkjDiVKiSdaXbpp+gmRapEDTDmI2WS8P1EAIKeQfbsdhqeDRaTYI4wnV9kFBrtIhlSsv1OTTeJ0p5G5toutFonlrf2Lzv23PuZncu/AzkR/fsGrumwGYWZIwD0Vv39LxrvRU4F5fr2sbm5meDVqs43u4IKSFNFZoSRGGEIaCQc+hpr2KYOkopQGEaBuVino5yBamg1fLZaLYo5hyUglimmJbJiSPjTM0utR05eji/Xqutu2H03hdeX/jGB06MPn3h4qVrBiyyRPu+LNAwBkvmQ6emNnyU+l89He0fyosUSxOkKiWIU/woIQgTGq0Av9EijWMsXYNUIVNoNT1sU6fp+bgND5mmyFjh+REKsC2Tjc06HaUcmoCVxaUBgHIhf07Y+enZ5fp/vf/43qeulQ0XM7sdAtI793R96HI9Km648fkkkSqvJUuDRXO8aOvkTAOlFJoQCAFJClbOQaBQQoMkxTINdEPH9ULCMMaxbaRUpGlKkqRX4FVKGEs620rUtpq4CV9yXW/2ns0t99spX0U3/02QiNroYF+nqZuvbDVbV03COjDMlRM5EjTVXS3fvpFYsZTyrKZp+ZxObzVvYusGhi4wdZ04VSRSIYDID2h5Ic2mT8sLCMOYzS2XVKZoCKIoQUMjjCVC10gVFPN5ysU8XpCwf9cAtdpGEeB/AqWCE11aWP7EesM/ZSfNP7+0EHbs3TV+1YArwO4MfOnEnvaPnpqubTbr9dO6pr3X8/2/7ygX26p5k0SlCK5ItmKbWLqGKQSJTFFSoWRK04+4vLKB6wW03ABTNwjDmCCKiRKJkXltL4yRSiA0TSGgo1rdzn2ztLoOwOziyudn17x77z7onD13cfqqAJvAKFeOMWzkC6UeX5jdbpRsaZro8Tz/V1WaunHghVGicEyNSKboQqMZJRhCQ8oEmUjcIKTpBshEUrBtio6NLgQtPyBOJE3PRyaStVodqRQqVTRavmr4sTB041LLC+0slP3OF9T1+a3Zxc7b9u/5yPcKLID2TJ0DYPX43p6fu7AWrIF6rOV6f6ZQAhCJZtYNTRBn2z5Ng7a8RStO0DVBkkiUlGi6Rhgl+F5IFMbouo7rRfhhTN62UUJQLhexLRs3DIklIkpk0PCT11zPS7JMaG7nS55fXDu9VR34xNTy+tr3Cmxly1AB8Hs622/ZjNJ+HYoykT+j69r2wMKP5GyqaypOwLEM5SWSVigpWgZ+IgmTBJRCi2NKtoFhGtRaHp4fYZk6OcfCDyLiRBJEEW4Y4waKWKGaftR0/fCroF7Jgp7hnQ53fGyE6csLv79e23z4e/HSItvrTmSJtODmfYMfO3NhfmKr5eaKxcIXPM9f2t4a6kKj3TZuacmUMFGiu+SIWCriVF7J7pk6ptAIAZWCbuhoAhQCzdBBaTiOQy6XI4xT5YYRKCXcIDntOPYDj3/r9N9mWtYF9ALrWXWDza36VVmW8lw5OlgE6sBpLySuNVo/Cnw7CAK5Q0NEmKZJTpMHLMtWUYq26SW6VGAYembTOoapkyqNOE2xHQelG0gEXpiAptEKY7XphuFGoyXbndic7BPKFP7//vIT5/44G0ftSDq4wObViqVFthPalu4isOD5/rcy9R7LbHv7WdJUxUut+JRlaL2aprXphrB9qVQrlFiGLrw4JVUQK5AIEqHjBpFKFEITBoFENfx4c2WjuXDrUNJ727jBSIcSBwaMwx1tldwLF7a+lgG7mQC2MolflUjLzuykLftUdjwbA142+P91liqX16MH7yqWBroMqmUDLyFtxiKN0NKtKEn9SKogTNRGvaWabkCqNLXa9NKl9a2VMzOrXx+vhGNv321zebaBYRpcXvTV0b74lz58ct/bdpRzljLoq1ZqcTKYy0AtK3L72X9JVhVMMg1RgJbP5wuHxjoO//xxcef0vMvJm6ts+Zp4/KWafmbRXdts+m5k5J93DJkbK5vHUxkJITQ1t7gcN1Nz5vLa5peUgnfd1/e+szMe3zzbYs9EiaWkcvTcc3NfvevW4tc+98+5s3912eX/BexnBe04m1G5YxC5Q52sTPLDcRTd8sl71Nv+8kXdPTMTBz/dGXacXTPCMNbCT93f1fWhP579Q2j6dWClxhPZZBmZr6gCb2svO3t6qpZ6/Fm/dWoxfPIDLflDDz8z99vnloK/3dW38e/+4/tGf/fTX5755LVI8YSZymzXYHfOqMqkvpVd54CxA4P5vlAvqi89PfP3F5brS3aq+Jvn1pcfPb124fSFRnrylp77d5RNkmwyrcwploD8B2/r3qOEEb+0Lv8QWEsTpW6f7MkpmWivzYfrR4btT0B+ZHJ88A1P8TSA2UzKGmD+8B5zNPRD0dtWHsrplE3L5qETvWVQ0aKr+x97R+Ew6IVsIs8BLwELmafdyplGZbIUGlEYGWut8NfzjjNpxam4a1QdB9Z1jbwfSH7nJ4f+/dnp+TccOM7sei3TgvLMuplsLgUEUsnJ7lLBqwUM5pI2YLrDTpwwEtxztKcGPAGcAp4HngXmgKYhlIg2EzYWWkRReELCVlKLWF2MASzdE4G35qnVmfrw9aoP17OKfwGQX359/excq1TYajSfnUqdNNoKT/zDlHgYaOnNRHlrLqbSXgGmd5jI+Uyte5qRrD06Q9Nqb/sw1NbCIFj64gWTFaUfA37kken6oyA/HHUMfwqWuV6tANwJ/BrwF9le+W7gs6OVwnYq4k9vGuy8cP/+8jPQb/4L6/0w8BPAFxHi+I7//puZyx/YMc5f2MXKEa5z07Ii2k8AN2c7KwG8e8czd+Rs+wN2tTM33Nv9L/XRA9wP3PVdGpf7rue6rsYL/x8HbwtumjbAVwAAAABJRU5ErkJggg==
// @date           15.10.2024
// @version         2.9.82
// @license         GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @include         /^(http|https):\/\/(|www\.|s\d+\.)au\.myfreefarm\.com\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)veselaferma\.com\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.com\.br\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.de\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.cz\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.dk\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.gr\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)migranjalinda\.es\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)mabelleferme\.fr\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.com\.hr\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.ae\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.ir\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.it\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)enkicsitanyam\.hu\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.nl\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.co\.nz\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.no\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)wolnifarmerzy\.pl\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)pt\.myfreefarm\.com\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)fermavesela\.ro\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)mojaderewnja\.ru\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.se\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)th\.myfreefarm\.com\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)tr\.myfreefarm\.com\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.co\.uk\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.com\/.*$/
// @include         /^(http|https):\/\/(|www\.|s\d+\.)myfreefarm\.com\.vn\/.*$/
// @exclude         http://*/dyn_bubbles.php*
// @exclude         http://*/login_inc.php*
// @exclude         http://*/stadt/*
// @exclude         http://*/nachrichten/*
// @exclude         http://*/vertraege/*
// @exclude         http://*/nutzer/*
// @exclude         http://*/payment/*
// @grant           GM_addStyle
// @grant           GM_deleteValue
// @grant           GM_getValue
// @grant           GM_listValues
// @grant           GM_log
// @grant           GM_registerMenuCommand
// @grant           GM_setValue
// @grant           GM_xmlhttpRequest
// @grant           unsafeWindow
// @require         https://raw.githubusercontent.com/linus--tux/GMscripts_MyFreeFarm/master/MyFreeFarm_Common_functions.user.js
// ==/UserScript==

const VERSION=GM_info["script"]["version"];
const neededVersionBerater="2.10.65";
const neededVersionFunctionFile="2.1.12";
const GM_Home  =GM_info["script"]["namespace"];
const GM_Source=GM_info["script"]["namespace"];
// [version,date,[[de,en],[de,en],...]]
const CHANGELOG=[["2.0","29.05.2014",[["Migration nach openuserjs.org","Migration to openuserjs.org"],["Script wird jetzt auf GitHub entwickelt","Script now developed on GitHub"]]]
                ,["2.1","11.07.2014",[["Neu: Changelog","New: Changelog"],["Refaktorierung der Zonen-Daten","Refactoring of zones data"]]]
                ,["2.1.1","12.07.2014",[["Bugfix","Bugfix"]]]
                ,["2.1.2","22.08.2014",[["Bugfix: Sägewerk und Schreinerei durch Patch 18.08.2014","Bugfix: Sawmill and carpentry by patch 18.08.2014"]]]
                ,["2.1.3","02.09.2014",[["Neu: Doppelte Sicherung des Bots gegen Ausfälle. Entsprechende Optionen.","New: Double protection against failing of the bot. Corresponding options."],["Refaktorierung der Optionen","Refactoring of settings"]]]
                ,["2.1.4","09.09.2014",[["Bugfix","Bugfix"]]]
                ,["2.1.5","09.12.2014",[["Bugfix","Bugfix"]]]
                ,["2.1.6","18.12.2014",[["Neu: Bot für Waltraud kann jetzt in den Optionen aktiviert werden","New: Bot for donkey can be activated in options"]]]
                ,["2.2.0","01.02.2015",[["Neu: Ernte-Bot für Güterhof","New: Cropping bot for megafield"]]]
                ,["2.4.0","12.02.2015",[["Anpassung an Firefox 35","Fix for Firefox 35"]]]
                ,["2.4.1","13.02.2015",[["Bugfix: Optionen","Bugfix: Settings"]]]
                ,["2.5","27.06.2015",[["Neu: Bot für Güterhof","New: Bot for megafield"],["Korrektur der Queue-Berechnung","Correction of queue calculation"],["Refaktorierung des Loggings","Refactoring of logging"]]]
                ,["2.5.1","03.07.2015",[["Neu: Anpassung für Pflanzen der Kräuter","New: Fix for planting herbs"]]]
                ,["2.5.2","05.07.2015",[["Text-Korrekturen","Text fixes"]]]
                ,["2.5.3","11.07.2015",[["Kleinere technische Korrekturen","Smaller technical fixes"]]]
                ,["2.5.4","28.07.2015",[["Fix: Fünftes Regal","Fix: Fifth rack"]]]
                ,["2.5.5","31.07.2015",[["Anpassung an Spiel-Update","Fix for game update"]]]
                ,["2.5.6","31.08.2015",[["Anpassung an Spiel-Update","Fix for game update"]]]
                ,["2.5.7","14.10.2015",[["Anpassung an Spiel-Update","Fix for game update"]]]
                ,["2.5.8","31.10.2015",[["Anpassung an Spiel-Update: Lagerbestände 5. Farm","Fix for game update: storage 5th farm"]]]
                ,["2.5.8a","02.11.2015",[["Fix: Exotische Früchte","Fix: exotic fruit"]]]
                ,["2.5.9","23.11.2015",[["Kleiderspende: Bot kann in den Optionen aktiviert werden","Bot for clothing donation. Check your options!"]]]
                ,["2.6.0","25.11.2015",[["Bugfix: Kräuter und exotische Früchte für Nichtpremium","Bugfix: Herbs and exotic fruits for nonpremium."]]]
                ,["2.6.1","30.11.2015",[["Bugfix: Exotische Früchte Feld 26 ","Bugfix: exotic fruits Field 26."]]]
                ,["2.6.2","01.12.2015",[["Neue Option: Timeout zum Schliessen von offenen Fenstern ist nun einstellbar.","New Option: Timeout for closing an open window can now be set."]]]
                ,["2.7.0","13.12.2015",[["Neu: Ponyhof","New: Ponyfarm"]]]
                ,["2.7.1","18.12.2015",[["Bugfix: Heilkräuter-Verfügbarkeit gemäss Tierarzt-Level","Bugfix: Selection of herbs according to veterinary level"]]]
                ,["2.8.0","27.12.2015",[["Tinkturen","tinctures"]]]
                ,["2.8.1","04.01.2016",[["Bugfix: Bäume ernten für Nicht-Premium-Spieler","Bugfix: Forestry for Non-Premium-Accounts"]]]
                ,["2.8.2","08.01.2016",[["Bugfix","Bugfix"]]]
                ,["2.9.0","10.01.2016",[["Neu: Biospritanlage","New: Fuelstation"]]]
                ,["2.9.1","13.01.2016",[["Bugfix: Picknick und Blumenwiese Nicht-Premium-Accounts","Bugfix: Picknick and fields of flower for non premium accounts "]]]
                ,["2.9.2","15.01.2016",[["Bugfix: Biosprit und Baumerei","Bugfix: fuelstation and forestry"]]]
                ,["2.9.3","16.01.2016",[["Bugfix: Ertragsberechnung bei Blumenwiese","Bugfix: calculation of yield at flower meadow"]]]
                ,["2.9.4","05.02.2016",[["Bugfix: Blumenwiese Nicht-Premium-Accounts","Bugfix: fields of flower for non premium accounts "]]]
                ,["2.9.5","09.02.2016",[["Bugfix Tinkturen","bugfix: tinctures"]]]
                ,["2.9.6","10.02.2016",[["Bugfix Tinkturen","bugfix: tinctures"]]]
                ,["2.9.7","16.02.2016",[["Feature 1: Güterhof bevorzugen ","Feature 1: prefer megafield"]]]
                ,["2.9.8","25.02.2016",[["Optimierungen am Güterhof","improvements on megafield"],["Tooltip: Ertragsberechnung verbessert","Tooltip: yield-calculation improved"]]]
                ,["2.9.9","06.03.2016",[["Feature: Automatische Auswahl des Schwierigkeitsgrads beim Tierarzt","Feature: Automatic selection of the difficulty at the vet"]]]
                ,["2.9.10","10.03.2016",[["Megafield Premium Pflanzung","Megafield Premium Planting"],["Game-Update: Tierarzt Fix","Game-Update: Vet Fix"]]]
                ,["2.9.11","12.04.2016",[["Bugfix","Bugfix"]]]
                ,["2.9.12","18.04.2016",[["Bugfix: halbautomatische Ernten der Unkräuter, Steine, Baumstümpfe und Kakerlaken ","Bugfix: semi-automatic harvesting the weeds, stones, tree stumps and scrapers"]]]
                ,["2.09.13","09.05.2016",[["Tierarzt: automatsche Behandlung","Vet: automatic treatment"]]]
                ,["2.09.14","24.05.2016",[["Verbesserungen bei den Verträgen und im Güterhof ","Megafield and Contract Improvements"]]]
                ,["2.09.15","25.05.2016",[["Bugfix: Güterhof und Pony-Farm ","Bugfix: Megafield and Ponyfarm"]]]
                ,["2.09.16","30.05.2016",[["Verbesserung Tierbehandlung und Fabriken ","Improvements: animal treatment and factory"]]]
                ,["2.09.17","30.05.2016",[["Bugfix ","Bugfix"]]]
                ,["2.09.18","30.05.2016",[["Neues common_function_file","New common_function_file"]]]
                ,["2.09.19","28.06.2016",[["Bugfix Güterhof und Verträge","Bugfix: megafield and contract"]]]
                ,["2.09.20","12.07.2016",[["Anpassung an Spiel-Update 12.07.2016","Fix for game update 12.07.2016"]]]
                ,["2.09.21","15.08.2016",[["Eisdiele","ice cream parlor"]]]
                ,["2.09.22","16.08.2016",[["Bugfix Picknick Bereich","Bugfix Foodworld"]]]
                ,["2.09.23","30.08.2016",[["Bugfix","Bugfix"]]]
                ,["2.09.24","05.09.2016",[["Bugfix","Bugfix"]]]
                ,["2.09.25","13.09.2016",[["Anpassung an Spiel-Update 12.09.2016","Fix for game update 12.09.2016"]]]
                ,["2.09.26","20.09.2016",[["Bugfix","Bugfix"]]]
                ,["2.09.27","22.09.2016",[["Gießen Felder Nicht-Premium-Accounts","Watering fiel nonpremium accounts"]]]
                ,["2.09.28","27.09.2016",[["Verbesserung Tooltip","Improvements tooltip"]]]
                ,["2.09.29","10.10.2016",[["Ställe produzieren für Bauerclub-Auftrage (Option beachten!)","Staple produce for guildjob (Look at option!)"]]]
                ,["2.09.30","11.10.2016",[["Bugfix Bauerclub-Auftrage Ställen","Bugfix stable guildjob"]]]
                ,["2.09.31","17.10.2016",[["Verbesserung Megafield, Error Log, and Bugfixes","Improvements Megafield, Error Log, and Bugfixes"]]]
                ,["2.09.32","18.10.2016",[["Produktion Tieraufzuchtsprodukte","Production animal breed products"]]]
                ,["2.09.33","24.10.2016",[["Güterhof: 2x2 Erntemaschine (Optionen-Automat)","Megafield: 2x2 harvester (Check options automat)"],["Verbesserungen: Güterhof","Improvements: Megafield"],["Verbesserungen: Ställe und Fabriken","Improvements: stable and factories"]]]
                ,["2.09.34","26.10.2016",[["Automatisches tägliches Abholen des 5000kT Puzzlepaket (siehe Optionen - Automat)","Automatic daily pick of 5000kT puzzle package (Check options automat)"]]]
                ,["2.09.35","26.10.2016",[["Tieraufzucht","Animal breeding"]]]
                ,["2.09.36","21.11.2016",[["Verbesserungen (Kleinvieh macht auch Mist :D)","Improvements"],["Option: NPC-Preis Berechnung","Option: NPC price calculation"]]]
                ,["2.09.37","28.11.2016",[["Verbesserungen Tieraufzucht","Animal breeding"]]]
                ,["2.09.38","21.12.2016",[["Bauerclub-Auftrage: Fabriken (Bonbonküche, Käserei, Mayo-Küche, Wollspinnerei)","guildjob: factory (sweets, cheese, mayonnaise kitchen, wool spinning)"]]]
                ,["2.09.39","29.12.2016",[["Winter Sport Spass (Bitte Option Olympia Run beachten!)","Winter Sport Fun (check the option olmpia run)"]]]
                ,["2.09.40","29.01.2017",[["Mühle 2. Slot","Windmill second slot"]]]
                ,["2.09.41","01.02.2017",[["Bauerclub-Auftrage: Bugfix Fabriken ","guildjob: bugfix factory"]]]
                ,["2.09.42","07.02.2017",[["Bauerclub-Auftrage: Bugfix Ställe (Nicht Premium) ","guildjob: bugfix stable non premium"]]]
                ,["2.09.43","14.03.2017",[["Anpassung an Spiel-Update 14.03.2017","Fix for game update 14.03.2017"]]]
                ,["2.09.44","15.03.2017",[["Bugfix Strickerei, Ölfabrik","Bugfix Knitting, Oelfactory"]]]
                ,["2.09.45","16.03.2017",[["Erstes Feld Farm 6","First field on farm 6"]]]
                ,["2.09.46","28.03.2017",[["Bugfix Login, ","Bugfix Login"]]]
                ,["2.09.47","28.03.2017",[["Bugfix II Login, ","Bugfix II Login"]]]
                ,["2.09.48","30.03.2017",[["Teeverfeinerung, ","Tea factory"]]]
                ,["2.09.49","25.04.2017",[["Monsterfruchtaufzucht","megafruit farm"]]]
                ,["2.09.50","09.05.2017",[["Speedup Ponyfarm","Speedup Ponyfarm"]]]
                ,["2.09.51","11.05.2017",[["Newsfenster automatisch schließen","auto close newsbox"]]]
                ,["2.09.52","18.05.2017",[["Verbesserungen, Bugfix","Improvements, Bugfix"]]]
                ,["2.09.53","27.06.2017",[["Siebenschlaefer Event","seven sleepers day event"]]]
                ,["2.09.54","11.07.2017",[["Einfache Lösung für Eisauslieferungs Event (beachte Option: Ice delivery event )","simple solution for ice delivery event (see option: Ice delivery event)"]]]
                ,["2.09.55","12.07.2017",[["Bugfix Eisauslieferungsevent","bugfix ice delivery event"]]]
                ,["2.09.56","06.08.2017",[["Bugfix Tieraufzuch","Bugfix Animal Breeding"]]]
                ,["2.09.57","28.08.2017",[["Wettessen","SpeedEating"],["Bugfix","Bugfix"]]]
                ,["2.09.58","21.09.2017",[["Neue Optionen (Monsterfruchtzucht, Wettessen)","New option (megafruit, speedeating)"]]]
                ,["2.09.59","17.10.2017",[["Schmetterlinge füttern","Butterfly feeding"]]]
                ,["2.09.60","31.10.2017",[["Bugfix","Bugfix"]]]
                ,["2.09.61","01.11.2017",[["nach jedem neuen Schmetterlings Slot die Option deaktivieren und aktivieren","deactivate and activate the option after new butterfly slot"]]]
                ,["2.09.62","09.11.2017",[["Bugfix","Bugfix"]]]
                ,["2.09.63","15.05.2018",[["Bugfix","Bugfix"]]]
                ,["2.09.64","28.06.2018",[["Bugfix","Bugfix"]]]
                ,["2.09.65","31.07.2018",[["Produktion Kuhrennen","Production cowracing"],["Bugfix Monsterfurcht","Bugfix megafruit"]]]
                ,["2.09.66","01.09.2018",[["Kuhfütterung","Cow feeding"]]]
                ,["2.09.67","12.09.2018",[["Bugfix","Bugfix"]]]
                ,["2.09.68","09.10.2018",[["Täglicher Login Bonus","Daily login bonus"]]]
                ,["2.09.69","15.10.2018",[["Täglicher Login Bonus","Daily login bonus"]]]
                ,["2.09.70","25.10.2018",[["Bonus Alien Invasion","Alieninvasion bonus"]]]
                ,["2.09.71","05.12.2018",[["Adventskalender","xMas-Calendar"]]]
                ,["2.09.72","25.07.2019",[["Kuhrennen","Cow running"]]]
                ,["2.09.73","09.10.2019",[["Obststand","Fruitshop"],["Braver Ben","farmdog"],["Farm 7","farm 7"]]]
                ,["2.09.74","29.01.2020",[["Transport Hauptfarm-Farm7","Transport Mainfarm to farm7"]]]
                ,["2.09.75","08.04.2020",[["Bugfix Fabriken","bugfix factory"]]]
                ,["2.09.76","19.05.2020",[["Update 19-05-2020","Update 19-05-2020"]]]
                ,["2.09.77","09.02.2021",[["Bugfix","Bugfix"]]]
                ,["2.09.78","11.03.2021",[["Obststand II","Fruitshop"],["Angelprodukte produzieren","produce fishing products"]]]
                ,["2.09.79","12.05.2022",[["Farm 8","Farm 8"],["Pfadfinderprodukte produzieren","produce scouts products"]]]
                ,["2.09.80","17.10.2023",[["Farm 9","Farm 9"],[""]]]
                ,["2.09.81","19.10.2023",[["Transport Hauptfarm-Farm8 + Farm9","Transport Mainfarm to farm8 and farm9"]]]
                ,["2.09.82","15.10.2024",[["Transport Hauptfarm-Farm10","Transport Mainfarm to farm10"]]]
            ];

if(!VERSIONfunctionFile){
    alert("Hi, I am the Automaton-Script.\nThe function-file is missing.\nPlease install me again.");
    location.href=GM_Source;
}else if(compareVersions(neededVersionFunctionFile,VERSIONfunctionFile)>0){
    alert("Hi, I am the Automaton-Script.\nThe function-file is too old.\nPlease install me again.");
    location.href=GM_Source;
}
const LOGGING_ARBITER=false;
const PRODSTOP=-1;
const PRODSTOPold=66; // TODO remove
const MILLSTOPold=0; // TODO remove
const ExtendedListCHAR="l";
var extendedListReg=/^l(\d+)$/;
const REPEAT_NO_LIMIT=-1;
const REPEAT_RESTART=0;
const OPTION_ITEM_REPEAT=false; // should be OPTION_LIST_REPEAT=!OPTION_ITEM_REPEAT, But is not needed
const OPTION_LIST_REPEAT=true;  // should be OPTION_LIST_REPEAT=!OPTION_ITEM_REPEAT, But is not needed
const DEFAULT_ZONELIST_ITEM=[PRODSTOP,0,0,false,false,REPEAT_NO_LIMIT];// ["prodId","AmntToDo","AmntToGo","rackMode","mode","AmntToRepeat"] //mode=Field,Rack,Time,Repeat
const DEFAULT_ZONELIST_ITEM_ARRAY=[DEFAULT_ZONELIST_ITEM];
const DEFAULT_ZONELIST_ITEM_ARRAY2=[DEFAULT_ZONELIST_ITEM,DEFAULT_ZONELIST_ITEM];
const DEFAULT_ZONELIST_ITEM_ARRAY3=[[PRODSTOP,0],[PRODSTOP,0],[PRODSTOP,0]];
const DEFAULT_ZONELIST_MILL=[PRODSTOP,0,0,0,[]]; // {"pId":PRODSTOP,"AmntTodo":0,"AmntMax":0,"AmntItem":[]}
const DEFAULT_ZONELIST_MILL_ARRAY=[DEFAULT_ZONELIST_MILL];

const _TEXTE_STOP="----";
const row1=2;const row2=21;const row3=38;const row4=55;const row5=72;const row6=89;const row7=108;
const col1=2;const col2=21;const col3=40;const col4=55;

//Icon images
const IMAGES={"repeat_off":'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAACXBIWXMAAAsSAAALEgHS3X78AAABoUlEQVR4nK2TQW7aQBRAfZ54wKEhEaA48djYhDiqMQdooKRpthjqdgHYSjcp66B0GYsDhB273IJUjdQcoVd4XUApVqqWViye%2Fnz90dOfmT8KoGyCjUj%2BS1T363x7evr%2BR9F0OmU0Gq1wPY%2FX8%2FzzzQ2WaWIcGiRJwjPRl4cHfK%2FGoX6AKeUSS0osaWIucKwybvWY46Mq0pD0%2B72lTHl8%2FIpjO1jSpFKpcHF%2BQdAO6LTbBCkCukGHE9flxHXxfT%2Fd0eXHS0xDYts269xRxbZ5%2B%2BYcQJlM7u6T24TZbGYoZ60zTEMSR9Faok9XV8t9Yfcde%2FldBv0BSqv1mgNd50P4fi3RKmEYUioUaTQaKNEgolQo0gmCpajb7awl7QQBpUKR01enz4vVoypCFX8VjcdjXuRy7OV36fV66WJ%2BZwctm0XTNOr1OjXPo%2Ba9xPO8JTXPw7EdhKqS286h7%2B%2BTGshms4nYUtnWNLSshhAqQl2wNUf9masCLZOlXC7%2FmqPVjobDIdmMICMEcRwTx9EirqyjOZPJXeqb%2FPb8uq7%2F8wtu7Pf%2FAH%2Fz8ulFilh2AAAAAElFTkSuQmCC'
             ,"repeat_on":'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAACXBIWXMAAAsSAAALEgHS3X78AAABqklEQVR4nK2T30uTURyHP%2Fe7ty533au79vJdEYEU0sA3V4ZdRNCFYb5jkMwNG7MmEnolJd4JzqSgCLop6jaC%2FoIEZ7%2FYVCbm6%2Bbcu6eLN96pw83Ii%2BfinO85D%2Bd8vucI0GlwKpJ%2FFr3%2FUjPPhj8y%2F7pES9HD%2BSIDqTw3kg2uj%2BXpT%2BSxRtewRtdQzwrq%2Fszd7HeaRM9e%2FeZMz1dkrqKLP1oT2fa48I1Lww2ZFt%2FtELi8jqwaikJwCAwbOmN1umJ1OmN1DBsfRT0Ct%2BDtp33TF10dL6GbLhqE8aV6092bshiE4AgAyiw42LNbLH8omQrFHXQHwtn2EkC9M66%2FLjy2jawSkcwmCqUqaAjMicqJRAcxJ7y9oYSDIrO7KA7hqbIvupLdOJHUnKqgOHRlyt6EvbxH%2BqUnCtoFdH%2BnrSi16KARByWg92n5cDFw7ydKVlEaziWLPkayiJEqYPwdBx8U0PAGSkPgkRe8Lzn%2F5Bd67KJJPNKV48lU0SR0zDQadOhEt1%2FsoWnQNPTlXPpyLlauxrWlffoPEH1eJfFmt%2FllH6Vjzm2bUcu%2F9j%2F8AfkMLDj%2BSRDIAAAAAElFTkSuQmCC'
             ,"shuffle_off":'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAACXBIWXMAAAsSAAALEgHS3X78AAAB4UlEQVR4nK2RzW4SARhF53U6%2F1YhKWVgBmYoA%2BpAcWmT2lJtrAuHtiSApRNWpcvKBNyV1I21ryArNnZDAnvfAF%2FhuDCpIQSssYu7%2BZLv5OZcARAeIg8C%2BS%2FQZnGTyXjMHSjsdAjDkDAM6XRClj2PRiP6l5f0ul3SqRRW0qTf7wMIQsJIkLZSpKwUlmlhxOP4vj8D%2FHhxgWM7JOIGpmni2A75XA43m8UyLU5OPiDs7pap%2BD4V3%2BfwfYUNO4OZNNkrlwGEer1GIpHAsW02nAyHvs%2Fb%2FX2e5vI8y%2BcpFIpMf07n63%2Fq9Uin0gyHw0Gv28OIG9hpm3qtNtMy42R4s%2Fea6XTKQtm3t98H48nkR8Z2sJIm7w4O5ty1z85mbgvFviiViMfWcbPu0gGWgqrVKtFIhNhajJuvN1x%2FuZ6DHR8dLW%2FUaDTQNZ3okwjV42MG3wZEo1G2Xm5xdfX57lmWJFz3T1vBcRw8z8PznlMsFFAkmUe6TqlYBBAa9QaaqqKpKpIoUvA83GwWTdPQVJXHq6u%2FZYsrK8iihCxKKJKMqiqUd3ZmardaLdbXYqiKgizLKIqMrmnomoYkimy%2F2kZoNpsEwSnBaUAQBH8Ve95uEwQBiiKjygrt9vni%2Be8TwzDuN%2F%2B%2F5hdpvvKVfR9GiQAAAABJRU5ErkJggg%3D%3D'
             ,"shuffle_on":'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAACXBIWXMAAAsSAAALEgHS3X78AAAB4UlEQVR4nK2Sy2sTURSHz35ci8vYhYumiBtfiDAhuKmKKMSSiiYWrGCxNH1ErJoxpPURISRgu1EEVzEmdVNBEAS7FP8DpRJMojWk1o6NSSad%2BVxMbQxNS8QuPrj3cs6Py3eOALIdbEvIfwXtcr3lyeySuh50%2Bc4n%2BiJZ%2FOEsvnCW1Juf6mbND2d0tW%2BiwNnxz0j3PHLoPQPRPICIHCvQxJGPHL6UIzNXVQF59a6u9t4uorg%2BIEfnEXfOrjuj27hzHB%2FOI3sCFvuuWewds%2BgatRAvyOkKzouLZOZM1TX0HTmhIz0m4gXnCDiuYtd5YYcfWjrqSViID4JP6%2Fgf6IinjPjgQMginLJYd%2BKDjpG%2F7q1chNMW07MGyoVlpB%2BctxoNfziVMJveNp2K40oJGTBRhtkQ0vb4u%2B8uIQEDCcJYahUt%2BWtD2Mn7pa1%2F5En8QAIryE1Qpy2mXtZQBhfZr5XQkuWGk8AKu0cXGveO8QJd2lec2gKdoSIS1JEIOGK2F8%2FUMhI2kRsVZKhEZ6iI4%2Fo3JAISMlAGv6zt0aSBRKoNonDwcbNIb7KOEgOJYtdMGvY5CnLPxB3LI%2F6ZMuczFc6la%2FQ%2Br20pNv66gj%2B9iueZicRB4tD%2Fotp6j9pl56M2x%2F%2Bv%2FAYjnimH96%2FpaAAAAABJRU5ErkJggg%3D%3D'
             ,"rotate":'data:image/gif;base64,R0lGODlhEAAPAKEAAICAgAAAAP%2F%2F%2F%2F%2F%2F%2FyH5BAEKAAIALAAAAAAQAA8AAAIrlI%2BpAOGgTnM0xAmlTS9yF21CRSGlQZrVcaKkKKqxNylBZmDhiy8U4wkiCgA7'
             ,"minus":'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABGdBTUEAAK%2FINwWK6QAAAClJREFUKFNj%2FA8EDKQAkAZSAAMpisGuGcQagAEFCi28eLD7gdjgJTkeAMUo9xhLWaTjAAAAAElFTkSuQmCC'
             ,"plus":'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABGdBTUEAAK%2FINwWK6QAAAChJREFUKFNj%2FA8EDKQAkAZSAAMuxUBLsUoNZg0gNxPC4BAdTp4mNrYBvNHfMGxUbs8AAAAASUVORK5CYII%3D'
             ,"reload_all":'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARCAYAAAAougcOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAeBJREFUeNq0lEsoRGEYhg%2FjmksZcivkspIslGwoFohcSixkx2Kk7Ni5bIaNhWthocbIzlIoSaFYkIQikdhKNBkZl%2FH%2B03vq6%2FTPSPLVc%2Br83%2Ftfzve%2F37EZoSMF%2BMGH8Yew%2FZDvB7VgH%2FiCaKJAAojnep882I%2BRA4rAKiccggqLJhl0gXXwQN0tWAJ1IDLY4gVgBlyBd0408QAndVlgy5KXvIEp3Ual4FoIP8Wn%2B5lrYWn2xPgKaANloBsciNyk3CANXDLxCEZAKpjn2CywU%2BsUi%2FRoqhED3Mx7eaeBGOPgK09rhgO0ivdocE%2FtTIg7zQSn1M0rN2SAYX6NmjghxEegBpQw3wwa6KI1EA6ywQtPbYaH4%2BWsjNEB7mjRRs2pjjUX%2B2W5rzHNvE7mDiLwSKILVKmeNeITNqWN5bKLu%2FOxNHFBnGp%2BlVFFy%2Frpe91Fqgm5wEXdBagEhaCaZZGRwcP5aZ5AmJ7fYZPpIg%2BcU7doMYObNjbfXTp3tYj6LoB0ywb5YEM0pXnyJtFbg6Dd0ifTcpEwMCeSZ2Ac9HH8RuTU%2FyyRh%2Fn4bcdHs9F8QSY%2BgV5qY2l7r0WjXLoM6kP9u1QUg1Gwy1JsggHhFhnqJ7rNDRwcizD%2BIVQFhug2bXwLMABxaqOs9lkr9wAAAABJRU5ErkJggg%3D%3D'
             ,"singleArrowUp":'data:image/gif;base64,R0lGODlhBQAJAIAAAP%2F%2F%2FwAAACH5BAEAAAAALAAAAAAFAAkAAAIMhBEXibz2FIOzHVQAADs%3D'
             ,"singleArrowDown":'data:image/gif;base64,R0lGODlhBQAJAIAAAP%2F%2F%2FwAAACH5BAEAAAAALAAAAAAFAAkAAAIMDA5hqJh72otLJlcAADs%3D'
             ,"timlinebutton":'data:image/gif;base64,R0lGODlhFwAXAKIBAG1MG%2F%2F%2F%2F3FoUpiLZYhzTm1SNHthPF1BGSH5BAEAAAEALAAAAAAXABcAAAOIGLrc%2FjBCAoAhpBQj1dgLwIhRFgyCUgTCGoAOxwzLwRjyQnAC0Rgk36thgxQZO8YqtzAcA5gA6SV0PJW1k4NgczJzlkNVcSgzNS5pbwahBXI4qLYzVHADR%2FfDN8Uv9HpWSjZCgToqVjKAWBoOAwcyF2%2BIb31EaXhVB5ZWB5hvByl0eGWln6OjCQA7'
             ,"gear":'data:image/gif;base64,R0lGODlhMAAwAPcAADQCBGSCZJzWnDQqZGSCnMzW/GSqnDRWNMz+zDRWZJzWzJyqnAQqNMz+/GRWnJyqzGSqZJyCzJxWZPzWzGQqNJyCZMzWnGQqZJyCnPzW/GRWNGRWZMzWzMyqnDQqNPz+/MyqzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAB8ALAAAAAAwADAABwj/AD8IHEiwoMGDCBMqRMghA4KFECMiXMChIoeCFSVqPIiBYoYGHAoItJhxo8kNBEJaBMGBZcOLJhVaHBgAQ8UMJFtyaOAwZkKdLEE8sFggZwEEOFn6NCg0Z8WiIBZgIDB1wQIQPHV+KBkzwIKhHIYGfRBgg9mzDmoOhQrVp9kKD8QqAFEWJYaaBCoQkJD3K0mlJssmuMrywYINaQOkJYB3qmIMYjnMjbkhwQaKcw/nnVoBw93NnKle1WqSgFmKIBTc3eC1o1XPjKl6Vnv1gU8CBB4IBWEgN+CBDzqEliraMAiNwYOjzmwTJtPXsqVepSjRb9jrhh9MkEl8AQGp2b9C/5QatrYF3YYhlvcsFXIHw1IVLgigs6JuBVYjgugguqPhCF8toBAGDnSA324CgCCURBzwB6B/X/GHQUJl5fXdV6mNJhF8uQX4AAEabJCQaXWhtMB5QlEX0QMdQSbdBgwIiBAGZgl2mW4JXiVRVC4C+IBZ8tUl5GhD6VZdgB7KiJBhjlV2GUujqbgQi1d1FEFHx0V02GVz2RdWlgN66FpHDWj5ZGEtBaWAcwfFhaRh34EpE1gcIMDSmpIpaGRBdkYVlY9f3aWlSwW4FFROkaEXYXhVsRjRZSqBgEBRFRnqJY4KfqnbYR5s0NGjl221FZU7pVbpX3Mp8B4HhzHggasiLuxE12lF0XjABgawROlKXbY0l2EDuAoAAwGMd9YGHJR16wGdUqTSs5WuyRIGr3rgAQHbLeSdBgmEeJZlyxK6EqUuDbWBtSlVx9oGt0Jg1gEXHDBABy8lJVVZdEYlFb07bumVQBW8exlIFzUQgLXWHkDvU0puVBOYrBJAwQYuZXQws8xuQG7DSw0EArt0VnQuwtZS9GOxHRvELpYWrZYAwrd6EICcKQsk8FkTbsUuyRqwWbPNB7x8wK0EDNQByQl08LPKB1AA763OcUCABwdIufRAW76MbEFRdUDz1aNGVcFvYJdt9tlop6322hIFBAA7'
             ,"gearFlat":'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAgAAAAIACH+pydAAAaeklEQVRo3q15aVgVx7b2W9Xde2JvJlEZBQdQxAiiRHFOjBqDMUdRHDFRI2oUvWo0xCFRHI5eogFCjMNRg0IgIjiEIIoaLwgogqIEDahRZhk3iGzYu4f6fqC557n3uc/3fc+51T/W011d1WtVVb9rrXcR/C+1ovyi/KL8/7Gbey3Za6n4j/If5T8KSPgy4cuEL0HgAx/4/NXf67U0vZav/uuEoaGhoaGh/7re5H/q2L9g/4L9CwB+Lb+WXwuCR3iER2CKj+Kj+MDVep71POt5OGf62vS16WuEqHxVvipfPGtNaU1pTYH3lt1bdm/ZjbGvpzuWsSJjRcaKnf9udcnqktWlaR+wk+wkO9lVRP2oH/WjjBmYgRmkly0hLSEtIdvVwjRhmjAtZwVNokk0ieSyJJbEktiYxpjGmMYYoPFs49nGs4hQJamSVEnwsH3f9n3b97GSeBNv4g3O5jObz2w+g5yvzdfma4H9s/bP2j/rv9vJ/9cHJyJORJyIAOi39Fv6LXiWx/JYHiS2l+1le/G58xznOc5zyI6SopKikiKm943yjfKNImLF3Yq7FXfZEvdk92T3ZFpw9MbRG0dvKMd07+re1b3rO7D/zP4z+8/c1s9gMVgMFurDylk5K0cX38a38W3KSSFMCBPCaBy3mFvMLd6uH7ti7IqxK6bghfML5xfO5B/ETMzEzHD34d2Hdx+Sw4E/BP4Q+ANb7BDiEOIQgqP3/e/73/cnlQGrAlYFrGJ9uCXcEm4J1B+1fdT2URvMf1T9UfVHFXDB7YLbBbf/tJf+Zfi8E/NOzAPofrqf7gcvX5WvylchWQ5aDloOYpfXHa87XndIv4tFF4suFrEu43njeeN5Q2BUXVRdVB3C3le/r35fTWY63HS46XCTLDXkGfIMeQCZSCaSieov6BP6hD6hwWhBC1rkp1wOl8PlKBXcKe4Ud0qp4GfwM/gZgPCJ8InwierdN3o5fuj4oeOHcC7RlehKdNzmD3754JcPfmErtzpsddjqoP44rCysLKxMO3R2++z22e2sz/W71+9ev0ta2q62XW27CnNHUkdSRxJU513Pu553BYInB08OnvxPv0DCiIQRCSMAKUfKkXJALScsJywnoLQZ24xtRnyxqHBR4aJC8pXjOcdzjueYVcagjEEZg/ZlWHtZe1l7rb3zMvll8svko0lBVkFWQVb/5rRj9o7ZO2arrnh7eXt5e00otmbWzJot+6bn1p5be26dm6zL1+Xr8jGRc+QcOUfc4H/mf+Z/ZjmqMFWYKoyMa0pvSm9Kr+5Tml6aXpq+PPzmmJtjbo75Tevf4t/i32IOl+qleql+0JTx48aPGz8uuZVv5Bv5RtvrJYElgSWBoVdsNttsttmcM6t7QTkHTbQmWhMtNymvlFfKK2jEfmI/sR+6qjKrMqsy/wkDDuYezD2YCzw79+zcs3MYFhsVGxUbheWvuz/79dyv5349F1PbO6B3QO+AtU5aL62X1kuJ6Yrtiu2KpesaLY2WRkuaXu2v9lf7Oy7QB+oD9YGjj6qyVdmqbLzffcSRzh3njnPHwQsHhAPCAYC38BbeAvBOvBPvhC5+PD+eH4/dlt8tv1t+x+62Hm092noUf/uYf8w/5r+f6t3o3ejduOmpe4Z7hnuG14d0L91L9wI1MTUxNTEvr90ZcWfEnREf7bNysXKxcrlxVR+vj9fHkzx1f3V/dX82OiMiIyIjAtjlu8t3ly9ATounxdMiECqECqEChNL9pftL95Od4nRxujidbal+Vv2s+llUuuN0x+mO0z8PUh1VHVUdlQcoK5QVygr6PSkmxaSYDVD6K/2V/tRCZ9KZdCa8aTbNptkKSDJJJsl4X9gv7Bf200yhr9BX6AtJqBPqhDrwwnJhubAcnXwfvg/fB1o6lo6lY6EXHgoPhYeMcBzHcRxpNw0zDTMNA3Tv6N7RvQNnuMENbkzHbrFb7BZbwm/ht/Bb6NZqVKMaL28UbSzaWLRxcjPSkY70gtn6gfqB+oHkKQkgASSA9W9wbXBtcAVIQkFCQUIBIM4X54vzybiWhS0LWxaynG7QcS4YaTvSdqRt2SbrudZzrefqE2Rv2Vv2xhy0oQ1tyEcqUpEKkFASSkKVsG50xxZOxak4FfVQuapcVa5gJIWkkBRAWiwtlhaDyEbZKBsBwggjDNB9q/tW9y2Y9RHrI9ZHQPSz9bP1s2FW9in7lH3MheSRPJKnVHSDMa1h+Syf5RMvDMRADASQhCQkSYu6wY9PeGB8YHxgPD3Ye7D3YO/Bix/hHu7hHi3U99b31vdWRiQmJSYlJgE8buEWbgHNY5rHNI9h6o07N+7cuBMju09+7dtZ47LGZY273kd3TXdNd22GK51NZ9PZSiLLZtksmwLOcIYzwC6yi+wiPcqX8WV8GaBt07Zp2wBpmbRMWgbS+WHnh50fAuwyu8wuA7SUltJSgGSSTJIJmFpNraZWkI6RHSM7RgLqneqd6p1QOy50XOi4kDSpTCqTysRB8Vf8FX94kWASTIIBNpFNZBNRyM/h5/BzeFPTgKYBTQOA5pzmnOacS7PulN4pvVOKPRoHjYPGAadgBzvYAXCAAxwAumjtorWL1gK2VbZVtlW4+t2P3/343Y9YFpQVlBWUBZwuPF14unC+e3N7c3tz++338BRP8ZT2QzOa0cw4spqsJqsBjud4jge4KC6KiwI6VZ2qThVg8jX5mnwBaKCBBuCP8cf4Y4BQL9QL9X8ZCn2ZvkxfBtjNs5tnNw/gt/Pb+e3A893Pdz/fDbSHt4e3hwPcF9wX3BeAkqvkKrn4hYvn4rl4DGm50XKj5QY7U1JVUlVStWaXn7ufu5970h7/VP9U/1TyfaAcKAfKSmzGexnvZbwHLCpbVLaoDKAx42PGx4wH2ja0bWjbgL5Waiu1lZp8nDElY0rGFKBXZK/IXpE0Ubgv3Bfu29zAERzBEQA2sIENFr/ZQTFajBajAbOV2cpsBYi+oq/oC5An5Al5AoltZpvZZoDVsTpWxxqUFCVFSVEmKZzCKZySJRVKhVIhzonTxGniNEAdq45Vx0J2CHQIdAgE6oLrguuCgY7yjvKOcoA7yh3ljrIWdofdYXegaeFauBauasuO0B2hO0JPZzr5Ovk6+QIJUQlRCVEkL357/Pb47SiflDEpY1IGcG3EtRHXRoAjsTWxNbE16OtV6FXoVUhMCEc4wukr6Yn0RHoid4i3xdvi7eUz3RrcGtwajqYJT4WnwlNlIp1FZ9FZ9EZHZUdlRyUgVAgVQgUgEIEIBGCj2Wg2GhamYzqmg4plsSyWxQLpJrqJbiLB3DnuHHcOn/NL+CX8EoB7zD3mHrMDnCfnyXmSbTSaRtNodAoBQoAQgC7iQTyIBzTGLcYtxi2AR5RHlEcUoBgVo2JUNrQHtQe1B9GDxUKxUCwsqVBfUl9SX/rRg7vKXeWu0hZDjaHGUKOEVm+r3la9jdwWfAQfwYc1ceo0dZo6Da05fjl+OX5U67zIeZHzItfWstSy1LJUw989CzwLPAu+CjYUGYoMRX3foSvpSrqSDZGj5Wg5mjibQ82h5lBAv1i/WL8YQCMa0QiRNJJG0ggV2UV2kV2sjA6jw+gw8oV6mXqZellDBFrRitYcP0uJpcRS0tRXvixfli87reM1vIbX0JMkm2STbJxldsyO2WGoEClECpFgcoFcIBeAdAV3BXcFA2oHtYPagVUq4Uq4Ek6Gd7Z2tna2arPPRJyJOBNxjdfaaG20Nk4/P0p+lPwoWVnHrJgVs+o88ir4VfCrYCwhtxfeXnh7IdBkaDI0GSL/w3ap7VLbpdvjSD2pJ/WdF1Q5qhxVjmaearhquGo4iVfNVM1UzYT8ctXLVS9Xgaruq+6r7oOoK9QV6gpASVASlAQAv+N3/M6s2SP2iD0iL+kQOoQOSV/ous91n+u+0IeGOkOdoa61OHtw9uDswYASp8QpcVMn2622W223+sxHhuOG44bj1qvpKDqKjsIk/jn/nH+OayyNpbE0oC25LbktGcyxl2Mvx14QRT/RT/SDqmNVx6qOVYrx1fNXz189N4uYgRmYQR+/2vVq16tdL2dVD6keUj3k/U6yiqwiq+6205GJIxNHJnJp+kn6SfpJf7tibW9tb22PM/od+h36HRpH1VjVWNVYEsq1cW1cG0BlKlMZpNtAEPVm9Wb1ZoBaUStqBXAiJ3IiBM6X8+V8yUv5V/lX+dfm67VXaq/UXlk5u2BlwcqCla3FBQEFAQUBnI0h0BBoCOTdNds02zTbLme1R7dHt0fvMJtHmUeZRwHsHrvH7iktUrgULoUDTMVUTAVIBVKBVADS+VXnV51fgZdqpVqpFuDMnJkz0zjDOsM6wzptL22CNkGbwCcZ8g35hvye9YZYQ6whdupJ+0/tP7X/FOB72/a27W1L15BUkkpS4aT0VnorvbH7daCRwLfwLXwLGSccEg4JhwBaRItoEQi1p/bUHhAmChOFiQDGYzzGA/gJP+EnZTbrYB2sg8KkMWlMmrvZwzyHeQ7zrNkpRoqRYiQ3yeJn8bP4ydee1z6vfV5L7ptzzDnmHHgINUKNUHO1tzxVnipPVU7K6+X18np6DwwMDCe4aC6ai8ZS9jv7nf0OWKIt0ZZoEK4n15PrCYh7xb3iXiyVtJJW0iJbXiOvkdewKPm4fFw+DpAG0kAa6FyqoiqqAqhNqU2pTSkOwxrWsEYqMRETMQF8Lp/L57LHvJk382Y85ilPeQq8jtgUOp1Op9MBwUVwEVwA/iv+K/4rgJd5mZcRy7/gX/AvAHGIOEQcYn/HPto+2j4a0D/SP9I/YunXHa87Xnckw63nW8+3ns+NsZ9uP91+OmCXbJdsl2ywJ/kkn+TTJfIMeYY8A75SvBQvxWO05CK5SC6A7CF7yB6APFQeKg+FImfIGXIGIB2SDkmHUCr9Tfqb9Dd2R/lD+UP5gyWSb8g35BsAUzEVU8lysofsIXsAWu5S7lLuIm1VninPlGfSbmG9sF5YD6iCVcGqYLJYtV61XrUe7Vw4F86FA6rfVL+pfgPlenG9uF4AZ8vZcraAcFm4LFwGuFAulAulT/l+fD++HyL1g/SD9IOG/3pq8KnBpwZP23DB74LfBT9Fa5drl2uXS+wa7jXca7gnRzTdb7rfdB/Qemu9td5LJ7MUlsJSAHm5vFxervgpG5WNykYMkoKlYCkYkDPlTDkTYBqmYRpQsa/YV+wLKN8p3ynfoZUcJofJYbKRG8AN4AZQwhazxWwxoDgpToqTySwOFYeKQwFyNehq0NUgoONEx4mOEwu39SjoUdCjYGso9w/uH9w/2BW79Xbr7dZ7ZlrnWedZ5wnpr4mPwsbKxsrGSoywkq1kKxnQ/qn9U/snIFaIFWIFIJfIJXIJXGWVrJJVqK53qXepd2korB9UP6h+0MYPzV3mLnPX5f4uqS6pLqn6iF6uvVx7uX7+pfmp+an56Wcl0hhpjDQGg2gtraW1uI1TOIVTsFHKlDKlDDBlmjJNmYCtj62PrQ9uSq1Sq9SKsZ0HOg90HrD8zcSbeBP/5BKNp/E0nrwwx5njzHE182pDakNqQz45hsM4jMM17sRxmOMwx2Gwe3Hvxb0X92A88OeBPw/8ydlt6Luh74a+srHArcCtwO3acY+zHmc9zr67VFWoKlQVKmfM28zbzNtoSOu+1n2t+4Deb/V+q/dbgPmU+ZT5FCTZU/aUPcF3gyAOKhpFo2hY0Kt+r/q96kcGSpFSpBTZ/h0/j5/Hz1M1MEfmyBzVu6TJ0mRpMvux242ST167Q0bCSBgJA7Gctpy2nAY4Pafn9IBwXjgvnFd2yH6yn+xHdzR6Nno2el61mnRo0qFJhyabPjr40cGPDgrOFzde3Hhxo7hD56Rz0jkhzFRnqjPVQU1kvayX9cBvK35b8dsKctVmoM1Am4EUXR93fdz1sfyeaadpp2nnv80aWje0bmjdt6lWN6xuWN2QXwlXhCvCFU5fObZybOVYwGqg1UCrgYBusm6ybjJg3mfeZ96HTjlEDpFDoJXCpDApjD1iUSyKRbFiabA0WBpM54vviu+K72KTfEw+Jh9TjIqsyIpM1yiJSqKSCD+ykqwkKyGzEBbCQsD9FVLX8DV8DaD0U/op/ZTJokE0iAaaVdOnpk9Nn89k1QXVBdWFH3iaR/NoHi1zeuL0xOkJ2/t0+NPhT4cjm8vn8rl89owwxhhjQPqD9AfpD4CSKSVTSqYQ67QnaU/SnrCXPnk+eT55dvMjUiJSIlKKr7rHuce5x/VpwAZswAZ2Wn4gP5AfkNDnJ5+ffH4S6GnsaexpBIQWoUVoAcwR5ghzBJh0S7ol3QKRiEQkglfSUmmptBTjpbnSXGkuPpRlWZZl7FSsFWvFGorSR+mj9AFFJzrRCahL1aXqUkDZrGxWNv+VZHnTt+nb9G08anVudW51bkvLD88Pzw8fEtmdXFXf71Xfq75XPbmd/Dz5efJzNnlC5oTMCZl42R3JgvCEEEIIkBWYFZgVCHjHeMd4x+C9ZZ7LPJd5Is20wLTAtKDnE24+N5+bz2+j79B36DuA/FR+Kj/FW3w8H8/HA26dbp1unUBNeE14TTjQnXYCujpdna4OhKSRNJIGsGSWzJKhl7+Wv5a/xl26jq6j6wBWxIpYEaBEKVFKFCgxEiMxAm8wRuot9ZZ6A1KgFCgFAvCHP/xxnxWzYlbMLuh4Ha/jbWYN+WHID0N+2LriA58PfD7wWfWGjF5X/bD6YfVDjOhZ3rO8Zzmur8M6rAMYSRQTxUQRaN7WvK15G+J/rvu57uc6fKx9oH2gfaBdGrM6ZnXM6tsN/VL6pfRLeesXJUPJUDJYCDhw4MgZRCACEQBllFEGyHvlvfJeoKGwobChEOj6e9ffu/4O0Bl0Bp0BIBCBCATkHDlHzgGkVClVSgWkNdIaac1/vqex1lhrrAE2ho1hYwCLncXOYgcgFKEIBTAUQzEUQAISkADQF/QFfaGkmJeYl5iX0DkvjC+ML4xfXtcO0w7TDts3ifuU+5T7lP4H8SE+xEeZULWhakPVBoC+pruhKdYUa4rJxkDfQN9AX8B/l/8u/12GfO1h7WHtYZdk7jR3mjsNsNvsNruNfqQX6UV6/bUTmd1EiNxBdVRHdeyAc4xzjHMM4GjvaO9oD1Fdq65V1wLKW8pbyluAtF3aLm0HlM+Uz5TPABVTMRUDNDGaGE0MRDlXzpVzActMy0zLTJZE4kgciZMZiSARJILNQxaykAVgEAZhENBNmys7hVwhV8gFhAXCAmGBZ751kXWRdRHwmmBxs7W3tbe1ByBDhgyQQ2mH0g6lAVPXTl07dS3wcvDLwS8HU6fOnzt/7vxZqTPeMt4y3lp80y/TL9MvM35Mz5SeKT1TmJXoLrqL7koad5e7y90l74kpYoqYQjl+ED+IHwSj5Ca5SW6KjxgrxoqxOKhUKVVKFZ0nLZGWSEsgSt9J30nfQZAkSZIkdIm2oq1oC43lkuWS5RI8ZBvZRrZRAvAJPsEn9JTZ1exqdoWWj+Fj+Bik0kgaSSOVbAQhCEHKRGzFVmzlZzb3aO7R3ONRSllLWUtZy+SLyl5lr7K3JsFGbaO2UZOB1JN6Uk9WtiBvQd6CPIAaOgwdhg7AJs4mziYOxO+y32W/y0qdU6JTolMiafWe7T3be/apscUBxQHFAcsuNexo2NGwg7zF/8b/xv/GTTVqjBqjRj5dbCo2FZt+PFF5qfJS5aWnIR3uHe4d7rRWlmRJluhBS72l3lIPmN8zv2d+D4KZmImZAGZmZmYGjYWzcBYOkFfKK+WV8O7eeZrSerb1bOvZulsVPSp6VPRYObfxx8YfG3+8FCSrZbWspjHdJ5Kf2axp1jRrHnWVB5QHlAdM9WP1rJ7V1yTYutm62bqRcXQcHUfHsTJltDJaGQ0kfJ7wecLnADl1/tT5U+eB9PHp49PHA2fsz9ifsQfeeIeHVx5eeXiF83FJc0lzSZNL86fmT82fOve4y2qX1S6r15fUN9c31zcf6RrYd2DfgX1PHj4ddDrodJBdwfBZw2cNnxXyU3dou/CwQ5hDmEPYuE4yhAwhQ7BeTBATxAR8K7VL7VI71MoaZY2yBubW9Nb01vSGvfXH64/XH/9yVM3Mmpk1M89fIzPIDDKjZW+Hd4d3h7fNj8PWDFszbM23UbSBNtCGHnZVfar6VPVZs0xpUpqUpqolNhobjY2GLuIauUauUUmgITSEhkArDZAGSAPQOcdpjtMcp3+ixWP3xO6J3QOUPy5/XP4Y5NiOYzuO7QAze5g9zB7Q34i8EXkjkpRP2D5h+4TtbMbrYYVvxlcdqTpSdYTOL79ZfrP8JrY1PGx42PBQ8VG8FC/Fa+RWP+JH/Mit3Vp/rb/WX/rJ/I35G/M3xE78Q/xD/EPZRUaRUWSUkNfc0dzR3JE9d2LVxKqJVRPOvC5fsEuul1wvudK3aCWtpJXKIFOTqcnUxM5qM7WZ2kyAbCKbyCYYX557ee7lObJce1J7UnuSnWXr2Dq2Dlq2lW1lW9FZuKpwVeEqYNe0XdN2Tfun0tjarWu3rt0KxFbFVsVWgY3mRnOjOZDr7Dq7ztDx2p045x7IPZB7gE4dfWD0gdEH8PbtCbcn3J4A31FJo5JGJSnHbky5MeXGFMrdn3V/1v1ZgG+Fb4VvRfME00+mn0w/mQZ1l750f4gTxAniBOxhXsyLeRFOXievk9cBYpaYJWY18VUHqg5UHQCq1dXqajX9QP29+nv19/LvFaMqRlWMwk0/Jz8nPyfqp/XV+mp9UVdUXFRcVMxWqu+q76rvsrPyI/mR/Ag6VKISlTAVrSpaVfRPhv9fi6P/j+1NaU2JWhO1JmoNsCluU9ymOJCSwyWHSw6jFo5whCOcnrQ8aXnS8pGs89B56DwmL2e72W622/IFohGNaG6mXCqXyqWd04yHjYeNhw9f5Bq4Bq7h+eNuQoT0UZwVZ8WZVc7fM3/P/D3/7ftv7JD/fw34Vxfgr5Zok2iTaPPX7Zty+BuFlryWD1/L2xiMwRgM+gaUXtPUCiywwIJQGGCAAb++fr8F5PXVnbaz0GWhy0KX/et6/x8ZvcC0DnKq6gAAACJ6VFh0U29mdHdhcmUAAHjaKy8v18vMyy5OTixI1csvSgcANtgGWBBTylwAAAAASUVORK5CYII='
             ,"copy":'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRFYGBgAAAA%2F%2F%2F%2FhOOiKAAAAAN0Uk5T%2F%2F8A18oNQQAAACtJREFUeNpiYIQCJihggLKQBcDyIAhmIVQwMqCrYKCCCnRb4O5AcylAgAEAYrYBDtxJwuMAAAAASUVORK5CYII%3D'
             ,"PRODSTOP_30":'data:image/gif;base64,R0lGODlhHgAeALMMAN3Mu%2B7u3e7du%2F%2Fu3f%2FuzN3Mqu7dz%2B7uzNvKpdO%2BlgAAAP%2F96P%2F%2F%2FwAAAAAAAAAAACH5BAEAAAwALAAAAAAeAB4AAASqkEmQqr04JyQ7qkKwjGRpjseXANKHiGccGxVDIbKp7Hy%2FCBdYbtQrKkaU1XC5Ix1Ay1yzVDlEYzzTx3rVHbUJbpf4BYu709N2vMjG1icjKa0OM%2Bflt12KN6bhWCV%2BbguAOmwjhnOIiXtePldrRYwkhnmMgJeYe5qbAm2QlBU4lCdPiqUfQAkDpSQ3NlWuSR1JAAIDAQQBAwe5u72%2FAQerCR0SAgUayxksEhEAOw%3D%3D'
             ,"PRODSTOP_25":'data:image/gif;base64,R0lGODlhGQAZALMAAAUEBZSUiODOrPHn1fv74u/iylFTStjFoPz+7SknJHt8caypmkA8OBweHNrVw8TGtCH5BAAAAAAALAAAAAAZABkAAwTWEKFxahXXWlyLREVHIGNJfhJBcNMhmDCyKHStLKHjDueYSgaAcAgwDHQHR285Kjiez0bCQzkMYljJgAEwYa5ZGEFR9K0Oqk+Y4GAYT4hvOgxye7xoJqqUACiYciYBCYQAAQgOfnoYc0sBAQQPDQ0LlZUPEoGOhwhBREIGI4wxjyUPlqiYcWhpEqV7eqJWR08Fg4QJkLGZaAsGQYd0P7JgpXRYo49qy3RfAQCEClnDcBgvu8JVAjzHegNfBw8F01gqOkoUAg5XYO0q7QUPBx5aHBr3+PMSEQA7'
             ,"PRODSTOP_15":'data:image/gif;base64,R0lGODlhDwAPAMQXAP%2F%2F7%2Fv34evexfTv1%2B7nytO%2Bf%2FPrz%2BHTsP%2F758uxM9rHn9nFiufYttzLpv%2F%2B6t%2FPqv%2F%2F6tfDmtzKpf%2F%2B6f365AAAAP%2F96P%2F%2F%2FwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABcALAAAAAAPAA8AAAVk4LVEzWOeZrQkI2FBcAxNg9QCk6VbVd8PEUXAsSvyXgcJJWc8WhwMJdNY0UGlOp%2FzGV3uqtXd1ev09cZMbXGsbkIjAUi4%2BXwoBL6Jfj8BGIJ3FAgUhIUUfwUiEgoNjY4NEhGJIQA7'
             ,"PRODSTOP_windmill_52":'data:image/gif;base64,R0lGODlhNAAxANU%2FAKt2Q9CtdYx5VurUo9S4ieLMmq6JV5WHadvHkjY5OndoSWlsZ7ule%2BrRnqqTbOXEjebRo9jPrenKk6%2Bkksmzh%2B%2B2cZFjMquZc5iFWOTJlfXxuHFcO7WUZeLGkd7JnMWaZ1JMQOrOmMuRTKOMaLSect7IlWxfRcKtguvWp%2BPTqNzAjeTPn%2BO8gtXEmdjClNzFl4x7YNO9kO%2FgrKF6X%2B7Yot%2BvV19RZ%2FCZWoxyTezLkUczIO3YqV1KLmxYPgAAAP%2F%2F%2FyH5BAEAAD8ALAAAAAA0ADEAAAb%2FwJ9wSCwaj8ikcslk7naVaOVGpdZ8SUQuR7iJqrmodSoqfz4igwFgaQNwlh6vB%2BIlEqCETjf8TGtlAB9sbQo9cjw8ezo%2Bez53j3c6d5KVdyA6mDo8RY2NCY2MjHqkk4t4mSB1domJdaogdKp4bTNEioqLp3t3uaausKqtsbFzdIexOHC2RJm%2Bur14vTyv1Dw2dHPGh9zIOA7KFjhFrbp7w7DWwt09JuwKC4fxIDAMDjNsDuSIiZvq1KpkKXDXYwG8eAoSKlzYAwYBezPw6RuyQFuri8fiFSy4wAS8gwI%2BJsSxAMdHhwwmfJhhwEKRbnG0yeNmsKDHkyYNblCwocdO%2F4PxCCAIcEYNAAa3DmE7hE6VOxM3FZgUAKOqgKsCMADAYMBBSgZcCJwJRE4qjAMR0c7gymGEAwMk4solceECAwYkHJDwwZdvDASACQgmQBQAgCIAalTYgkAw0Qt59ZJgcOIEBQIUMlem62DEgREjfDg4MeGEYC2EzxwmIkhEAMCNhSIoUUBFCRUqXOiOwbuF7xKycyDwUYHAjgg5IkR4QqBCgBurhwAIECC5dQTKV2h%2F8GCAhBUQCnjokKJAgQ5ClxNHcLz9DsCL0dwg4mB6jvbCcwxAkWI%2FCgkoDADBChl00IF2HWTA3g598bVFck%2BEBYgIrBkQAAFbRPgADQOsEP8CDTmgEKCAIazQQQEpQBACe1pEocWCT7wXBRoU9vGBUPc9McAAHmwRwhMoRDBACBI0kEGDfL1YgWIZxsgYGTUK4cAHOca4YwYZhLCidShk6YGR4K3gQ4s13BBFGDto4ORzZUT5gx9NRihgDiuUUEJytKFYggQpNICCDw80F0UNYeSogZo75BDAhAYQ4VqVieonQQErFBBDCRGU%2BAAE%2FkGQgg8rEoCkDzHGiMANE7opwmKloqBfA%2Bbh5gKlKnSAQggi%2FqnCa4JVoIUPkCaaGhoBOErog66KKCCBHqjgQQorSODfDn8%2BUEMMzWEIbITUojDUDWNNJMSqD0rLaQSjNjj%2FwA77%2BTDAAxdykcOYOQrZwgNDETXIB44G4KsEOdSKXLp99TnAqI0BiylyCATKwq5EtcTvEK7FUIGdCaZQIgQQ7AlBA3xpt0MDKdwqQQe8jRlCAyGcJ8EDLHBHmAEiWDABETUQRgBttjUwQAMNcLojXwNAS7LPBYTwQgwqjFpgBytDwEIA9whCxAeLEvCCCi%2BsQEPQO%2BLaF4DaDVgpBA908DMNMrRNJAslZACeChMwsIa4P4ggGNcZmMexzz4f7IME5q7Q5woPSJDBfT%2FHyPKOIhbAAgUcoIW3Aaa9UEDf2qHAMad8USttittBzd0OXzewQ4kDyMDuAJJDhANSQ3AQ%2F8BllAa9QgMeignqrSmMTCkEHkgQgn40gJiD7vvtAC0LNXzAwAwWHECEARycoEIBEGTQoXZHhvwxybD3XUJ4IXDKO5E7UruDBCqwwEAA9gDAjBBwfcB1BxKYrR1fKCoAgHYkHg94QG7aYd2QCLQCAaHHOSdgwAjsxxoOkCAALijBA7QzKb5koGsQUNaAPPACF7TAAyiA1X66VwDNmSgDLMAM%2FRxggfv9AAAcMMCNCHCgDjSNYD6AwIFeYEAPmIdSBzTgiVT0ABdgxh4HsIAAiGCBHErvQi6IIRB94EMPuCAGXzShbkzINAMWoAROpAADLuAZE4xjCBYAgAA4oJfbYf%2BGApaxDAV6oxsCxEAzmQmkHv3Imz%2Fe5R4YEMAG3igEKQrALaC5C144Uxe8SLJudamLAy6wybpMhjIR5ExVLLABHjDyBz3AwQwOwErQOAADI8AADKhCFQxggJW3pEpVZjlLW7KSlbu8Sg%2BkYoI2NEMpG1iAMm9iAh5swAQb2IkylCEVBYQkIQJQxlW0whI1eGUQM4DDGy0AgzjEEQ5tEAc%2BuqIGBkjvDCNQgwHwYRj7zeAt9cEAXrrizjdwQwg6SKcF1qAACxRUAVVhCVow4ICGvnINBsAA9QTwBhzIE6IRbWhLmNIDISSiDamEQ0E3IA5lwECiB3DoQ7lyAMMoAx%2BAKeVKRLtyADXg4CKNTMQbxFHQOJjFpLL85QFsuUqJirMqFlUGVyTqALX0YA8u%2BYEFAppKAMCAmgY9yyphAIBfnqWmrJxBOUU6zZceYJcwwAcuovrUNiT0qmU961WzitWDDjMO71hIQrjBAwtwYgg%2ByMUw%2BcoNeDThsIhNrGKZEAQAOw%3D%3D'
             ,"PRODSTOP_windmill_26":'data:image/gif;base64,R0lGODlhGgAYANU%2BAJqCWlVOP6d3Q7ijerWpj0wyGJJnNOm4c4BWK11hTBURDnJxZnRmTR8bFM2IQ82sd0VBN5uJZ2tcRNeoXsu1itS%2BkkI1JrajflNFMn9wV15SPuybZfe9WI1%2BY%2FeZP%2FfcZkhMZ8hkJZmDXcOneGBob29UNYFhOrOedMOphYh1V62WcYRoRaaQbFkJGS8tKK6JVcWaY4p5XZaJbWhYPl1IKY5yTPLnvMu2jd7Cj%2B7Ok6mUb9XJpXhmSerYqf%2F%2F%2FwAAACH5BAEAAD4ALAAAAAAaABgAAAb%2FQJ9QaON4PjkPbiKAOV%2BDl4E34xVcwoLWpeByFd2wa%2ByCQBSFmpDsupoLEFogkAjQZvgZRCYwCHk0WjRyMwEzCVULPIuLATI3NQBCeAhaARBzIHQJiHg8IAA9MAIOQjQxqJEALzoDMA87NyoSFhI9OTgPDjBCDgc2tzY5OR8cOT3CPRcMFD07PTgOBEIvxzjHzzgHzxXPHSURz9AbpT4wxz3I6bg4ERkWOQcTOMjxDgJCOMDHNsDp%2FRdYHDCxQkS%2FHuR4hcixL0cFChQqVOiXoceBAxIu1HMiBMYBdBcaiGyAAUcGDQxuRGiWTt4LIQ8OXMv2rAGKHfRyRNCQIgKO2J8w%2FPgYMOHADZw3elhgsANnrKZQcewYgM%2BHjgc3sMbSICHWjaNfbxAgsIOAWDVDXzwYcDVCgwFmxxJgO6Au3LFodbxgpWNEAwsYMDDQQViGDAAydCQmXFWHgBcAYpyQwKByB8SoZKACENkwDyEyDOiIIWNBjUU1UC1SRIUHa0BCFtBYsKDOoEF16Awy5AmAAASSECD4jcAAAMJE9wpY%2FmKUkxsGaPhAQMNADQMIUgtYvEqHcRl7X8iAwQOLjxaiYxggXSN1%2B%2FY8EKA%2BHb9AbBKmhujfz19IEAA7'
             ,"functionR":'data:image/gif;base64,R0lGODlhDwAPAIABAAAAAP%2F%2F%2FyH5BAEAAAEALAAAAAAPAA8AAAIcjI%2BpixAOn2R0SmdwXbHbnXgeqGhRRpbXqqVuAQA7'
             ,"functionF":'data:image/gif;base64,R0lGODlhDwAPAIABAAAAAP%2F%2F%2FyH5BAEAAAEALAAAAAAPAA8AAAIdjI%2Bpy20AAwQynlkpvhFvB4ZiRn5lZz2olo6uWwAAOw%3D%3D'
             ,"functionT":'data:image/gif;base64,R0lGODlhDQANAIABAAAAAP%2F%2F%2FyH5BAEAAAEALAAAAAANAA0AAAIYjI9pEMz5oFozNmRPphrPK4Xbx4WeQ34FADs%3D'
             ,"mode_repeat":'data:image/gif;base64,R0lGODlhDQANALMCABiI%2BqvI%2BQAAAIit902Q9ypz8gNN8Ory%2FgZ6%2B2yX79Xh%2Bkqn%2FEh26X%2B5%2BypX1v%2F%2F%2FyH5BAEAAAIALAAAAAANAA0AAARFUMhJa3XBisSKM85QMQZYGgRFGMUQBOg7FUgmpUGRSLQ9BYiCJFHIpCRAITJAqAUGAESDskAgotdFpQEALL5TDUBDrkQAADs%3D'
             ,"mode_1time":'data:image/gif;base64,R0lGODlhDQANALMPAEtJSkJBQmVkZZWVlXNxciwrKz49PlFQUYqJiX5%2BfYCAgE9PT4CAf6GgoDAvLwAAACH5BAEAAA8ALAAAAAANAA0AAAQv8MlJq33n1hAm%2Fx8AdA9hnoQALIsmAYIrEbJUANPB6jrg%2FLaCcFj4FWTCmqFWiQAAOw%3D%3D'
             ,"arrowright":'data:image/gif;base64,R0lGODlhGQARALMPAGAzHPvNoK5tTcWQZva%2FknZMMLN%2FWMBzTc%2BrfuuvfoJYP8eCXJtlRP%2Foudmabf%2F%2F%2FyH5BAEAAA8ALAAAAAAZABEAAATZ8L2iCrj26g2Kl5NBNA0RnGVCrAGRBORQPNWwJo6T7HmfDwhYw6NQGAYDw2K5ODifAsZhORoUjUjDQTB9Tj0UgWCEqBgRjoVBqWU6MIw4olH2GNBRgYERZQwCHRcMBQN0RH8KDFeLDAYVGQUCdFc2HJYARRmSCIcBOQsDDqGgCWUKGgJznEUMKjw8Cy8NGGJAhol%2BaUsDTU46F0drDpNFerxNvFxTDn4GXAYJDVasSrwHony%2BaVJTL4ODBXwLYs5ceXlSA6UUNESKi5lgRJkKIFfyFh4YGvMSEQA7'
             ,"arrowleft":'data:image/gif;base64,R0lGODlhGQARALMPAGAzHPvNoK5tTcWQZva%2FknZMMLN%2FWMBzTc%2BrfuuvfoJYP8eCXJtlRP%2Foudmabf%2F%2F%2FyH5BAEAAA8ALAAAAAAZABEAAATa8L2iCrj26g2Kl5NBNA0RnGVCrAGRBORQPNWwJo6T7HmfDwhYw6NQiAYLAUNwaDoPi2h00BgUjQkmw1NYOKMHpgHYQFSMCMY24wAfDAsD3IEoVwrwwvoSGCgNS0oCdGVEfhlEgBRXRQwKMGZFCAIYRRyXACMIhpMakglIDgMDbTmQiwwIfgIZDQEJCwM8Oy6FCmoOcgMGFggOX79RonaNsAICcgxtYVADULEGVVcMY0gHosdNogsMTQsvW2tLSchLYYHd3bKbCjREjoxFXFy3RCBn8xYeGBuLEhEAOw%3D%3D'
             ,"windmill":'data:image/gif;base64,R0lGODlhEAAUALMPAN%2Ff3%2FX19fz8%2FPb29u%2Fv7%2Fn5%2BfLy8u3t7fr6%2BvPz8%2Bjo6NfX19nZ2fHx8f%2F%2F%2F%2F%2F%2F%2FyH5BAEAAA8ALAAAAAAQABQAAARh8MlJ6zyWYsmcy4%2FHTMphWAahVEDiLNLiJEDmHAUAFMcHAg6DwVEDSQIIRMB4FDgFS5CnICl4MojBgKJFVAJBlCMaGjgEFoHDPPn4KG5LQg5aVewWQl5qeVf0f1JgQmN%2BEQA7'
             ,"zone_off_1":'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAMAAABZj73OAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBQTFRF9OietathnI8%2FbGAQiHoqVkoCeHlXGxcCeW8ef4YvWlw4VVkaQUM2OTUVMy8W%2F%2F%2F%2FkSeAWQAAABB0Uk5T%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FAOAjXRkAAAI1SURBVHjajJSJkuMgDESNjiCDIf%2F%2Ft9MtiDdz1FaUoyq2HlK35ByP1ur8PK72OFq76pjjw9hIm8cfYSJ4S1gRCzGzCEU4kd7qr3QkqCZiwR%2FIT0B1tEZkfAdKKSI6B7KGZSSyKO%2BsEj8aMx8e1TXw9Ubgt5pkYxE%2FqsSsVd1rHV7tG2MlehA5v1UpEsjXWqv7gJa7KzJa%2BwnkPIe8AWIADAi%2BYELW2EVU543guizh6ZL6oAydcxNCAx0xVDdCi6QkkCmKxtSqjUglYsXghinKhhCRhuySPWFu7riHpofPGDlBHMLjQlF%2FVyGCnlAflwdkg6ujYok8daCqsQ8cdYpmlXOyhOV6BJzqItMnbUtAOA70hBw177JM3gCQSnM55ZHHMzQScnaH4Z8LWRtID2DumByJ06ckWAI3QrK9jeBE%2BCVcWdwRH3guVomlGbADdNhWdCNpMKYl5Nixa%2Fqd2brU4BLcfDV2Cf1Oji%2Blqlx8tLKsFRJ50qsK%2BypJ8B3LCshICfyYRxJvWjayILpX0M3OTnmU44EOXo1hjvEPEmiiU%2BmvLfEl4CHFbKSVXHnZZbAfOULb4s0xMNYokE8tVwciXBk6KWszcox6Dx4Ge64fwDOAROfzlmvmNE74pNidnZahUOHuYy7tKLOfl7vkMvMk2pMLDCmvGvhipYanvpfjOfBUPB4P2Z%2B%2FQvYt6O7X83iWOXvcLv8vzrP3UYCQGaNn4E%2Bt%2F4p2X8f%2Fa3kSAXR9FiiB%2BBJgAN9SIFE8j2AJAAAAAElFTkSuQmCC'
             ,"zone_off_2":'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAMAAABZj73OAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC1QTFRFpZ1SQ0kG4taG%2Beyec3Y%2BiYY4ta9nLy8MycBzVVka5OumQUM2OTUV1NuW%2F%2F%2F%2F3YzMqgAAAA90Uk5T%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8A1NyYoQAAAhVJREFUeNqMlIt24jAMRKUgy5Id8%2F%2BfuzNyoA3dc9pJCMGZaz0QiOXs0Pl57uM6v97nNMmZ%2BPRX9Wkm02Z%2FbB3Q46duq8koaR1Lx%2BvhWGN8AET22vFQI%2FKOwscL%2Bs40OcYq7VBnMrE8K8hRTJAYa%2FvX5d4a7yhmZwERIseBj2aZyORm32ItuZHH0ZrggExVzxST%2FxBrYMsGpLXziAgPp5oqVrT3T2ZQ8UboBxGFYKkjVG%2Fjbi857ET6ZXcXF7NO4osZNzFnIFn%2BDYVtYDM%2FtKwSk%2BT%2BwhAiQXOrrmn3x92PplcUa71ygjziYMss2QTc3P1j%2Ba4FyTNG1GRE0Jm2X2ove%2FlNu1THECW2uxJjZg33XvX43n4sgR%2FaSCIxeScmgaSM3U7FnXL7aEm7ojHrinISaBJ1YTH0VuNS0ULd9s61F6IoyeOiQpDOQpJWYcIvcymPV5RwTBfKIOQohu1Yw4Hkiq5vordXLUq7E3JAK1U4AQtI6lr6TeKvKJxhxiDUkDyaCEQqyg1BUzaS3H0nxvYKJvNC8oZk5YRfZYLE8O9qcDlCU9jPhrxyrGocDrSoZUWZarPy8is7WY1RekXB159subGVbC2mT3xiNE5lWoyVWEYtzXI17A2E42ZNhF9xYlpdnv3EQOPEwR8y97lrP6jpRt3zKU%2FvHXWJ%2F67GCQ8gT8efrc78Xfgjmf4kgsv8o8r9T4ABAOePJPxoP9uNAAAAAElFTkSuQmCC'
             ,"zone_off_3":'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAMAAABZj73OAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBQTFRFlJxmZmYk%2Bfrn%2FvCm8OOVfodZb3hLqrJ8iYQxusSR0dOW3em6VVkaQUM2OTUV%2F%2F%2F%2Fvz9GpgAAABB0Uk5T%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FAOAjXRkAAAJASURBVHjalJTbkuMwCESRLUAXbP%2F%2F3043klOp2oedwVGixBw1t1gsrvsPdl0m5fobUkwuu%2B560moda4Ndrfn2rxGJEhtJ1%2FNz4TVUO35zH5Xn8f2mSsR9vghl6jyXxHmKiNbTTRVcMcOPEVQpH4SxjTnHwI5fxV3O092JYD8WUr6Rc3gfc3SGcB5TOp21b0THWYO5WPtCKg72DqR3ZNBdEAzBgRs9kQaktfs4XuRYCKCOnVpYH9KxhxaQOoiUZkA2hFjE1aWnQLkQhhNB4RYId8VqLzIQDS8kKhCIojDp6ZxaQgQqeB2LMdN0ErMSZigxghTNnAQIqtCoEk3LVrFg0gDJSpZhouS5mB%2FB78COChXeUGqhPj2dtx1YZDSoUj7pr8BSoc9vO0hMxIi%2BM5eSKqyXFcSFxFXo8Dl9GTIxzCRViOymmI0xEBgS79P7MX3k%2BVjDtXCIJVtpX4hwEE2zneKTDXoVsoSerYzSrj0sti0LvYYARZjsKgH3WnvsXAh4bXQPFVy60WwNxiAVenVpO5cLQ48eJXJhCNEPsY%2BJrpBql9bkDQz%2B%2BCipIpzJmTJKbyAQ45g22i4yq12isebMffXTMnrdiQ1PgCfjjwyENKiSeAucx45ChTIYzAV4ixsqBf%2F9di%2FkXSCFYaMOHGkfgzEhHDyTEnnuwGMpGk6qWBGpzmqsI4IriMSNbpZ4gNyIrylcDAGZ2rflUOOmCgvKEC4gYKKw%2Fv8zUHiAPUQePjjjNwa%2FZyHPc%2F3O7nT%2BEWAAeDwox7VxSqQAAAAASUVORK5CYII%3D'
             ,"zone_on_1":'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAiCAMAAAAj3NpiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBQTFRFMCkCS0QZWFIn5OTkZF80cGo%2FkpdInqJobHIbQTwQg3xThIsxNDATLysRGRsO%2F%2F%2F%2FeL4JQQAAAAR0Uk5T%2F%2F%2F%2FAEAqqfQAAAKFSURBVHjalJSBcuMwCEQBY0fEWP%2F%2FubcLcpKZa26umsRNLT0tLEhi5vP61ZhARInlb8ZlbpLuz%2B%2FDXcMsIlQjQw1%2FVYmF79%2BpHWv4CXVwILBBpFLNvqlhHdeAAheNQBKihY2fw0MomnNGyNTWaRA7DZVr%2FIxhtcQUCTwYYNxqwAfUxvkzNiegyefMhnRx9hVzC5GbMoa4IiQ3Tjg5jnvl%2FoYUFLIHpFLW3xSCloXVcqNZ9twLon2tpvh2YsryJd%2BO04E9dMdwd4PVvlehWKScdAOPjtDCsVVoZmHngcVrgKaUK1xUgZnILKYuR3xHz6TaOKh2lEpTbAgEQytQ01lDyhDFNraj0VQWhqiMHDbjT6UKEtIqAStHKND0IshHg0HmOKLak1LVSVZibI8oNzpR5EYQLeytdrYVLWX8Z67osHtDmiT4NVFvtZPr35RVibQSS62Dki3H7BCzLIweWZ%2BjOloFY1rqdC0CTrWkVrmp9vKCiLdmaKeq5W2WJFaDutVY65phyfvTmLHuRRhPGIMElUsNIRp85PEjQZDSZt3DJrEIuonHpyUAHR3kLClZYnQQUenL%2F6JsqSGipN7u9aPByq3vArz9pCq3CxjkMbnDUDSBLFuitVK7j5micE7m7aSw4XhuyWETuoO44nWDrNYqSqoAl51FcbGg6syRzcdXVXfi%2Bdaik7gUJu6hKn9ggkeZil4XEC%2BpIqPKtShxxodeaS1QzBs9h4I4c2Dv85ulTTd4uN0HJrcZpBMbkQrOe%2FDAo6OjqGiq4hTzMXKT7Zpx7s%2FH8fifcTzHGBrANjS6nSde%2FQs9%2BnOesPjaiEFvSkZ83IV%2Fj%2Fum5G22NbY95i%2FGg8QfAQYARBYtCPYYox4AAAAASUVORK5CYII%3D'
             ,"zone_on_2":'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAiCAMAAAAj3NpiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBQTFRF5OTkenZNIyYDVlQpmZxsh441REMXZWI5fXxVa3IbNDATLysRh4BYGRsOcHRP%2F%2F%2F%2FSbUjIgAAAAF0Uk5TAEDm2GYAAAJHSURBVHjalJTZdsMgDEQB2RKL4f8%2FtzOS7ThpH9Lx0prDZbQQkojM8S9NEUsqNkf%2Fj4aYpG52vJRzxbse9VLmjctvPND6jYEL7MhHjoFzmAvmkBKTD6zm5ezhxlyDKJ2CzjWwdrxxC6rwC%2FYIYvkoBjmgTVNv79hhjq0aRF0Phf0hDW4tv2NdoVHIrE9Vzzuw%2FdiObbsxLdAQld%2BUx1l32SVpYPXmBJBKmfOTi47Arjm2keEVBZCiMub84O5GomhtN2L0ut2qqQKipjpXX0zowuqDy6sHFNxDK175INabx7cx6MAIoJjYfWXam41br%2FVye7S7dmKw7Kzpevl4O82yhNseO%2BhMLWeU0hHH9LJxRhG3WLjtzx0JGWcb5OlZ2NQliBnCKBvQH1hVNXDDMdEySoQJmz5dpcic7xiiHl2wgxHcOGuJv7aUNsXrO4uNy616eNpZPTFlcobc8emYOTOLg11Kv7CapQNhzfFStAAnjK1qtFs270YieqR4YpjTL4yO1otwpyysXPpa5SERvdwU%2F3O6txgroM56YqOMD0xvjJCK5%2Ba4cDf%2F6dZZEyU2iMHO2R6PIfPASu%2BrekVxMYTZxbEuzI3dFX%2F8Qx0zumGbsJ5oDfOd3HPuJrv9JQQdQdY6YE55%2F6CGQ6Fowxz5jXEeQ6884PzLCz24SzRpaXeID6uQL%2Bg3cnZWho4mktJkrJiaPxlSLHEU%2BhIOyNZTSgNhZhxd3%2BlAYqrAEova9m3%2FhtpbQ3rJhR6Ort%2BJP7p0ahvze20kfgQYAMBcNxD0Ae3kAAAAAElFTkSuQmCC'
             ,"zone_on_3":'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAiCAMAAAAj3NpiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBQTFRF5OTkZWpOT1EvNTkbh441nqFmQUMfX187foFufnhPa3EbNDATLysRGRsOh4BY%2F%2F%2F%2FnNS9VwAAAAF0Uk5TAEDm2GYAAAJ1SURBVHjalJXbYqMwDESxZCTf%2F%2F9zOyObbJKXbUUKTvDxSGNBLxGf408xgVxGrP8hdIjLpZ7WKypiVVxj9B3Pj5KI%2BVrv4Aoqjv29nvVemEGtS%2FvE6ueoHvYbax%2FYIxfXUnA1SZjqfjD8ZC3U6jdWS6QGCoWIGCgzWyWp2lqZmLaM%2B1x3R1mlplJSCqm6JLlQzKUsnrGgbKzsCIhzU8S2tIono3luqzo8TKu2%2FI4dwZrEPbi0r6KBAZCUDNtFzNpd7sLPy0BgvhWxsaKqGPBDZfrTskPt%2FlCrUMNsLJ6gYDoGsHownGVtLN%2FvFObi4AkOqg41g5ehRin6s7ZaPkkGB4sZyA2QKhAsIsaEiYetxOxJkt5jK5U1maIk25lyK%2FDBX4q8xY9aGH8cOZiJSTAloHTqCJvsH%2FZqEYMIktQDlSN19EqiscT6G0aIbrOV5AEeiFoOZ78xr4KHUPcOM8fiXooTqRsSnXTpLUmk1816D79hPU1L2%2FGUHmhwNVF2CdTYGJ0IH3ljojzo%2FWmWDXE%2F0Mt9HjVM6A9mh4jNJi6BE7JoNaREtdEybhkTjNIwmnu7AFrsOevZuygTefZHjZ7LUxtnRWZcmcK266X%2BRLgdtYDibqewRBeGncCcqofqoLrYsQTtwkMan1632DYmhnUIqB45o9g8tUnm9IjXICKm%2Bu7hHXNHw0thWuMMvJleYNpUPAkpOoYeSlRuA1i2S0cTqUgRyEO28AGBxiHFZw9I6HcbVLtmVLeRfQ5PSbUtJeydqJvj1tq4rmsMw5vyXvevYoEyBXbB1Nbyr6CcAXWKUW%2FiX9V%2BGfwvtGPydeKef4ibxI8AAwD7gTKmcpqQCwAAAABJRU5ErkJggg%3D%3D'
             ,"help":'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABJVJREFUeNp8lFtoHFUYx%2F9n5z6zm91cbZqUGkNiUxtLY7V3SvviQxGFKr4oBV9E8KHgQ1H7UMQHUUQslAp58Fa0FC8UClofKlopbSP0loaYNE3CdjeXzW66u3OfMzN%2Bs01ASnHg%2F3TO%2Bc3%2FO%2F%2FvfCyOYzDG8PD33dnzmigwnTFBj4EsA%2BNxzJZ5GFoB9%2BxDBw9EeMTHHgYOf%2F%2BzKEviWkmSX1AkdbsgyBsEQWgL4zDwPL8Y%2BO4lx7PPLi7MX3%2F%2F8Fve%2FwJPfH1GlmVpv66l321vaduZ1lUxRUtxFCLgHK7P4bgeqqa9XK2VTy7MFT798L13Ko8EfvLFV4quGQcNLXd8TUdbrimtCNrIJYgzd5HJz0JyXJRbW1F4vA%2FlDZthe5yXSsUz47evHf52%2BMQSseIEKK6SibsDkfRxLtvUahgaLKuGHUePYKlcxiKtN5EGRRGDsoxTh94Edu0XNT37Smf3E0nZb5OcBCMcO3YMyDy2VmDSkWyuZVdzNgNFVeDZDu6MXMYPu3bj6oEXMbpnL5ao7PXTUyhU72N24yYomiE4jtfVtW7d8uj1v0cJyBsOOeebYlV4SZFFRFFEdwaomo77H3yEzYGH5uZW5Fpa8M%2Bz26C%2F%2FBe6JsdxYW4O6%2FUmyKrWphq51%2Fo3bvpzYmx0ogH0ebhVR8qIwghBwJMfQNd1AvXDSOug1GGbJnKWhSS%2BKU2DY1ug1JOrSgmi3Nfa0bkPY6PFBtB1%2Fb4wCClFHwrJdV1Qq0ASBbiOjXrVQ21iDFtOfo4x2n%2B5tx%2BiJIOHHIEfgnzooqxspaXzD4CO2%2BR5HrWEC5EggsCQpA%2BEYCZH5rdzeO70KRTGxvDNkwNY2rYHXS3tiGiL5%2FrwAl8Iw6iTDrQ3gASyLQrBMm1qpEbjUd8lfw5h1Zfx6pfDuJnP47OdexE99TQ6166HamTgU1%2FarkNQl87WE1SuAbRtM19TTGiUbkTOQrpHz0%2Fko1JaxPL0NC7mWmD29KG3qwd6OkuuQpiJCceBadX9xbl8lVByA2hWl2%2BxlG7LkqSH4QOQ69MVOAocL8Cvz2xHgaWQybYCgkwVBQ1ntbqFet2MK6VitVQslAjlNYALhdkbZOoKS4n7IipTVZJg5EbSYirC4sAgvJpFcSrkyKMwHNj0cmo1E%2BWlebs4M3GP86BMqEoDeOPKxfzAEP%2BRSeoQtU5WN1QosgQ%2FCMBCD0d%2F%2BQkXIobj6WZkqEfDMEadyq3VqsFiYXK%2BODM1TZh84m316blTt6%2F9TuWe9tdtfN0wmjTNMFidQnLqVZwjwIiioVIpI6DXynkM06wF5fnJwp2bI%2BN0fpY0kThcHQ5Jv2YYS23p6ul7o72773kj295GDcti7jPbrBKEULIKQdIi7jteZW7y3uzErakoDO%2FS2T9Il0jz%2Fx1fAqmNNETPaX9Hd8%2FuTHNHtygbaVoXaB%2BjWei65lKldG%2BmZNWrlRVnl1eUlOw%2FPGDFFehAKiUM0TvrlWRljSCIOjWnSM3vR5zTVInv07kEcJN0nVRIEn7kxF5xmiElnd9D6iY1k1RSMvZrpCJpNYjEabB6%2BF8BBgAdzmULFXvFdAAAAABJRU5ErkJggg%3D%3D'
             ,"powerups":'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAAeCAMAAAB0fZJ0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFT0Q16cuwdGQts4lwSzgszKubmicorKiw%2Fv78sDAxa0YQxaZRSTAO2cO3pYM557JxzctrzIyLt3dJk1Mo07ao%2Fs5m%2Ff2ujo1tkEQc%2BvM1UktH2MyF1MjNloU%2FmWQ3oVopiHpLpGU57bbDh1VWwH1JmmksaDIPtaxN%2F%2F%2BYr654qYZF5rGGmHhF9e3mmWhjp3k34dTE%2BOvZnYVJyINUq3FF%2FbFRzIJGiXY7uHM72phZdHN47%2BbjOi8nxXtyom5C9sdOp4pSl2Nex8NSeHJI9%2FLtr7CX49nVOCIbmns5%2F5WYpmhUrZdbtJGPsokasm46pGdpdGlFhHJQgWw5iW1mgFgXmFsy5%2BJJimQQelU1PAwH%2BvyJq3ZWqn16qWAuwItkt5JJ25to1JpJ%2F9brZVc5Y2RnZ2RIwaRmuIVb8amxl2hItpddeTIsTBcMmEskqUlAkV1llItV%2FOJzdUlJdWNbuXlW88ommZSXZlRI1K8mq54x5sSk%2F42DqpxJ8NvHTkMZo3RtiWVfZFQp%2BsmGj11Z%2BvrFiYBV%2BPTytIhCxlVI36dm5OBr5Z5Of108xK5w8fHvqW55wZ1I%2Ff7WmnEsh3Vte3uAyZJUnJRbwoGByJRqu3Z6m5aiYkYoenFspXsVmVtK0og8hoCG7J2nfVlU1qUejIWRlkQ7x7Rj%2BuhbwHc8fHlYZT8%2Fi2VB4JA%2F0o5c9fZz1c4mzolO6t%2FbcFkwdG1206F88ubEroBd7Otx%2BFFP6cKFa2xtkGEnmHJspVlx%2F%2F9pW042ekpUpnExdkcj%2FNKC49aKlY%2BdvG9awp2Fx5od%2FPr4r2c0mJY7bFpThnMqildF4uKJgnp4nmZzZ2JRnH51%2F%2BP4gjwTvb21oJx7pJyqXh4Hb15EIRoMf2tfr25sfYF0sGd32799Wjg4WltMWlleYV8nikEz3ZSi9%2Fv6sz046%2BXP%2BN2l%2F3x3wLqC47pz383Cnn5R%2F8HE%2BtDhhoY9b0w9pqJBnlMjz4dy7%2B%2BY7PCObkRN7ceV360fjpGQgFBSf19c%2F%2F%2F%2FFMHsBAAAAQB0Uk5T%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FAFP3ByUAAAjlSURBVHjabJYLVFLpFsePiCMaWqEV2cgjhdLwERL4QINwxItpipCaoU5k5oM09ebcJjEzLcuyzHymWZn5nPGVllQ%2BmqsD6txeVqhdQ63u7WbOWMxMNgzzHc2yuv%2B1DgvY6%2F87%2B%2Bzzrb03pH0v1H8v37x588C0jg1K%2B7lQ7snPQfTAtL1c%2B%2F%2FCNpfh8PNk9w%2F%2FQXNf5MkTp31EarVa5OPQnPwpHbV2OtNSgVer8QpMwV6bz8iXp087zprr9NZ%2BwkbpHMWTg4K4QDFKsokipOEj79qrlgPKmXBMjHJAhNH7OPe1mfPMEkWz%2B3x2xtVKZRDXbLtzbm5u2xgSPSByNJqX%2BmUnSUwQcqwNRJ23myGVEp%2BCeanLpx3fm5vGVOgBPOblB7ZLpjqGO5b74Kv7QF89KG%2BDyCY%2BPXNw1F46OQjZ9oc%2BHL2vvyd3DDmgoHnMod0XqpXc0X%2FvAeEXL6weLGszA2a9OXaGEzYIWWX1w%2BWDB0%2BeXPrbv1ZYLRuTCjF678w64JnG9txvOP4MhUI9O%2B5xf48z1EXDvHtweZgkiFllZX9ujbs7bF5kFTeKxGNMZ9moNZIgKG%2FF76uXrl69ZcvvS3870roo704xEWM%2FW0y6krt948pt9%2B5tW2m08pdt934x3XjKrCsxZLbm0%2BogKG7Rdwd%2F%2FvZ%2Ff5MD%2FxZgDi8mWnrMsHXoSmZ6xZEb3x1ZtGFD77L7Xz5YdWRR3GixZWIGnNdCbFDS3afndu58Wpi2wS978bmVP%2B%2FcmgDhEvXe3ZlJcVp3aem3V65ceX5p%2FZLdu5csmGwvxoBbQ1q5E5kbHrdqw4bXvb1TU1PjUG7RsHmFFwcKnKmKjk8M8s%2FswsWFt2PfGG7urY7Nzn96bvE1M4hGA1V5FjYQM3iodt363QcO%2F8fgcObZ2nVLlqyr95sxQ1odUBGC%2Bet9U4hxWFIm13nPHX4eQYzE4TK0ckvlUN%2F%2BTYAcq1EZXtoMdcTGbsrPTzmP7CL2aLXJJkEQw%2FFsbe1RBwPADu30qTx79Gi9mxgpdJNDqAIy15fBMGeM%2B4bfCR8NHzWDcsv%2FuINghCMD8UbaZHUM9KcGgDs63jADWm%2F0qzo6NOwR9nkzJBGH0jYDM4nkWKmwsyxI3HUsB08CdLojLguYPaBkSyWUzmBMIcKLior%2B%2BbCo6OHDorLy3PZGfnsxMVi7RhKTsF8TX62CVEzDkkurv0cjkSro1av4PmSNpEFeqVRR3DodHUsUnYdCdp3uNI6KiLDzIeFqgLkH2uujDCfw%2BXxEO8Qc4jJhbS9rQ6b6MsIhmpu8eQA5bFFtWHJh%2Bebv3769tHRL65HW1s3f9HechwJFL20UykGKUIgXCYXCzpBdIVEOhw9H0IhCIS4QogVDaxRkX5jNT5UOmZkxpdIhZlEukzmO4PtCGKFN2AC03yIeiRZ4L4d14yTqYOs3AWhV%2FHmzQIXpWhHZ141EIuXgSCS7iIsFBQYGBokUEk5G4kOOblAYkVxFgfNOlTrrt0Gp0lH9MiYzFYFAcNox2AangVf%2BaZp4Jpos8P470PL13gI0VxUfr0nKUvQki8h%2BbiBnEyBZyBPexS%2B%2B4E3K4F817RgTKEzRVUWlUBhZ0ib9MWZqo7jIGUbz%2BQyC2EHSUIdNusZms39CotGG3hfevr1QAtDVGo1mf19NJWB3ESbtKBQ3TwrL6xgvOvpiCytHJpP153iKLfGgJl3peZMUfvEZ%2Fe1DQ2g0kzs0JG3kg5OTLnbA2xRgk%2B6m2Nqy05BoUHQg7wBuvEVaWpptQmSlHmCnW7uRcDhZS%2Ffh7pZo3SgqTgjYQhJF7EAE77Kryos12XhLP7ep7datsltnnMvONPIpFGrcoGWpvNlEfDcFwG1VgF0SEOD9Y4lUAx6EnZJQIzKy8enisKyN7ew8Q3kGBk%2Bio4xzSP05QMbWYstIyB7TFc6i8sXlZaBFlueWl5eVlze1IxgManoWPVLbTCw%2BlcJmp2nQhgJDQ0Oy4McLApXGwoKd0kfDe7j7dA1a23WSSDISq%2BXik2gWSQCyloEXa55F50HyEKE4jspIhZrKzIbAIeTC57AY0e%2FJ4riJ9LT2iq6Ea%2Bw0i2o0IKOBBBdKkKAo7GuDdKwcFYJPpdrlwCWWeXpFqliyQBOBDEfqtPZ1U5hCWlPMK445AyFlNuUyh9BSWKmIfnNrUJIBF21GIi7JP9aigwnYaDBY4PNiGB%2B7KWU40sdWC8yBfOMSUkCAQCBgtPw0KQN559gZH7L2BWZIa4PBiePM%2B8elSOdySDo%2BjkD093sah54gUCrTQK%2FqsXyVcC1WA84JF139RsUFmRtaPCrcOkgfAG00A5gpdjme1lQqNYrH20FleXntqKjYQcBV2sI9ticxi5NHNQdlcW5LhcHmgLwgjuOEhRu4C4aWBCoeT1a9AWW20FSjycWP8vOHWfQ0eDDpYbJ890VFJCZ2B%2FOin%2FB4vO5uB9eQB35O2AaY7U6kiau89ll7Nra3I0DGAFxREcXZQdedaf56PjVJd7eCk7EJ6NGjR5vYhYsXn0rPlLjMTFoaLdBPtyWYxyudEa%2Fb9ddfdatmzPBMe0mkNVZ5LTgR6ml8KPQE0IIFeb5RdcLZwfIsAobn5%2Be7Frq6uhaCj%2Fx8f7%2BFatPZmeYBMks%2F9ngF0A%2FwBWRVFeVkIn83i41EtCzfvH2r%2FgHUC18czrF6ScbcHA%2Bm4fqGt%2BYXjoyMXL9%2BfSQ7tm9ZpnpummpfwmbW6a9ra2tBH6%2Btraf4vTPP7hCmirpgPmeq9zWs3ilO3lV69PH3S0IGzcEhsu9P%2F9vZI9nZ2bcTqo5dHdj4YYcwAuYaPjX0xNdAoRRgrp81z7JRpiaYupBJDodAIHDSrR5nikrn707uwfi6uhb%2F4WH%2FM8PDy15M1GP15q8%2B9kTY7OdHSScQZszBGR%2FtbC66%2BMq6sMyJxxOZTvXqJ58sTihToojulLlwYmJhppMjlvfx1qWV9xBhMwjD5lKjT%2FdBrYtpMFEowWJNSnW%2F%2FHydfPayhwdHJSZsPZfPV82Ml7rBRAlWUsrb6PF%2BIftLgAEAiLKf3pFD0foAAAAASUVORK5CYII%3D'
             ,"min-restore":'data:image/gif;base64,R0lGODlhKAAUAMQAAPYCA%2F3V1gdQBupTUP%2FExP2oqXGeYP67u%2F%2F%2F2Kw8JVqISP6zs9MUFOgGBskKCvmXlyFBE9MHB8sbEv%2FfvOM5OSQ%2FEP%2FkwMolHOQWFoy8gPf2xv%2Ffu8wXDL4SBhlEGf%2F52iH5BAAAAAAALAAAAAAoABQAAAX%2FoCB4UGWeqAl5okimcLW2BjLdW75N%2Bm1pClHtxuv1Jr%2BgB5HoOJ9QaALhWTajWOe0%2BuEAvuBwuGNZdcVoMNnsTYsbnQ073AA07vgIXO45u8UdExV9HAwOERGHDIsMEhcMEYGDfm9feABxbAMPBAcLCwUPDwUFnwNxk22WeKwRmBupm5%2BeB7WzC6ewhIaHvYyNkIFsFKOlxrYHBacTmg8HBAsHAQW11cvNpNnHydeEFAUEndLh4QEHFKiEm9qkn9G46V0YhvS8vw7xHOvZt9bxEnXoCNwziQGxUtGqVSOQK9UfQLq6fFNIrmJDQg%2FH8JHH6MIFCfUW4YsoIaOajQAtRKWps8fMBZNf1vR5CVMmggEfJXDYybOnhC1LcErQ2bPoTyoCMiBA8KGp06dNlxoQoZQp1KtSW1TZyrVrlRYjvIr9KiAEADs%3D'
             ,"floppyDisk":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEg0lEQVR4XqWVW2xUVRSGv7l12tIZytBSMRVjSIg2RhCEmJhA0MjtwagJPmDQ+NK0miZaiA+UCBgMCCUBYoU0qEgxKYlaRUVsFa1EUihMh4ItRTQSLO1M6fTCXM5t7+3JyeTEQBswfMnKydpn7fWv/Z+dHA/3jsAFH/cOs4HxXCwAtNYfjilAc3L3nVPnshpQdxs1NTWqtvZNJ1+xbKn65KMPnSegtm/booC+nIgnZxHqZG+K65kxzjY3sOH5pXh9PpSUyEwGO4FcPmvVi/x0opVkcpj44AA5GBsbJRjMt9eu03H6HMdbf04B01yBtp5Bui7+Sc93TWx+bAakR0GCZRgQLEBmsxgFU/j9Wj+vffoFDfv3ANDadoJgno9HKh4lmx4jY9ftqG8AWA6c9JNDKQ9SSPLtKQZTAp+ZB1KBJ4DHVKjAFBZt2oWzc9lSANrb20kkhujv76enp4/q6kqi0XPYdmGf4CCQ51p07MIA5y9d5kbHUerr65kIn8/Hjve3UVExx7HHnp6OjjPE4wnCU8N28yiN+3bTf30Q0zQ5eOjIsNfdDEhdcifqNr7D3j17AZg3by6lJRGKQkWsX7cOXdOc5teu9TvNAenHRaEUDl1dXSiluJXOzk56e3uprKykqrqKq3//xeYtm5j3+EJGksN8+00LALY9AK8Cv7gWfd89QGf0IldPNnPgwAEmIxwOc6T5EOlUilTqpiMCOB8XYGAwwVDiBrZIGihzLZKaRHglxcXF3Imt7+3ky5aveaNmvXMl7eZ0d/ew+4OPuTGcdE6QA9ci3QtSiskscmlqamLNmjXEYjEaGxupra3FME3OdMao3LCT/e++RY6VAK5FX53/hwuxbkZbP6P+8GHulrKyMqSUpNNpNuxrIfrj57Qcdix+EBh2T2AIhWZYBBcsoa6uDl3XuRXNUvgR+P3uNtauXUsmkyEvXIrP6yGe1gFut0iZCl0XhIrL8UZmUWQXW0IipHLs8vu85OkmocKga5/X68W0BDPz88jqplNj6dbEAl4TJJLkeMbZGDt+EA8+iqdFKC6ZgRDCDhMppB0WCoWp6cQ1gRwZYsnqKh6aOR2kMckJAiCFACXoaz/KSysXs2LVc44d+QWFAM7k6dRNRsdGMLQs3bEobZ2XSUfmcuVKH/PnViClObEAKCxhgZRkUimeeXa53TifzZs2MpSIA7Bt+y6SySH0bAbNjieefIrmY6cofKAM09Io8CuENomAVKAUBH0AOFMX2PFfUjfHMQ0DgMj0UkJFYbuuwL2KQS+34S5ZlkBKO0zhTCeFwDQtEvHBnP8Cw9Ac/6cUhSi7v5xQeCqWZYIynPV4VhH0TPINLvzWRoAAaUtiGjrZTMa5fsIS7q3RtSzTIiWUls10fi66rjlDGbpBQCqkHUqICQUWNWx9+8zTL7xMqDhC+ew5nDt7mvLycl6vrqJkxn0A9uRhQqGp+P0BRkeG+eNyH7qmUYQPYWgYXolyDUMBbuYHFgKnuAcenr+YS9FfAV4B2oAxRyAn5AMKcxFw1/8/CjCBNJD9F+Hva8TmTxPaAAAAAElFTkSuQmCC"
             };
const BUILDING2FEED=[,,[1,2],[3,4],[5,6],[7,8],,[9,21],[10,110],[11,151],[12],[92,93],[108,109],,,[153,154]]; // task_new_product
const FEEDBONUSTIME={"1":600,"2":1200,"3":900,"4":1800,"5":2400,"6":4800,"7":4800,"8":9600,"92":14400,"93":28800,"108":3600,"109":1800,"153":1560,"154":3120};//in sek  // task_new_product
const CROPCOST={"13":2.5,"14":180,"15":30,"16":500};

var linecount=0;
var handled=new Object();
handled.set=function(zoneNrS){
    try{
        handled.zoneNrS=zoneNrS.toString();
        handled.slot=(handled.zoneNrS.match(/\.(\d+)$/)?parseInt(/\.(\d+)$/.exec(handled.zoneNrS)[1],10):null);
        handled.zoneNrF=handled.zoneNrS.replace(/\.\d+$/,"");
        handled.farmNr=Math.floor((handled.zoneNrF-1)/6)+1;
        handled.zoneNr=getGarden(handled.zoneNrF);
        if (handled.slot&&handled.slot!=null){
            handled.zoneNrL=getZoneListId(handled.zoneNrF,handled.slot);
        }else{
            handled.zoneNrL=getZoneListId(handled.zoneNrF);
        }
        if (handled.slot==null) {
            handled.slot=(handled.zoneNrL.match(/\.(\d+)$/)?parseInt(/\.(\d+)$/.exec(handled.zoneNrL)[1],10):null);
        }
        handled.zoneBuildingTyp=getBuildingTyp(handled.zoneNrF);
    }catch(err){GM_logError("handled.set","zoneNrS="+zoneNrS,"",err);}
};
const queueItemBoxWidth=58;
const queueItemBoxTimeHeight=28;
const STEPPINGRACK=100;
const STEPPINGFIELD=1;

var zoneList=new Object(); // zoneList[zoneNrL][queueNum]=DEFAULT_ZONELIST_ITEM
var zoneToList=new Object();
var emergencyPlants=new Array();
var zoneWaiting=new Object();
var zoneSettings=new Object();
var autoMillStorage=new Object();
var modeOverViewFarms=null;
/* quest-bot needs review
var valQuestActivate=null;
var valQuestActivateUntilNr=null;
var valQuestSolving= null;
var valQuestSolvingUntilNr=null;
var valLodgeQuestSolving=null;
*/
var automatStarted=unsafeData.automatStarted=false;
var zoneTimeline=new Object();
var automatIcons=new Object();

//olympia
var isSchokolade = true;

//const CLOSETIME=180;
const RAISETIME=2000; //milliseconds
const OpenWindow={"all":["multiframe","divQueueBox","divChooseBox","infoPanel","friendscontainer","guildmaincontainer","createguildbox","reallocateBuildingContainer","messages_main"]
                 ,"farm":["farmhousecontainer"]
                 ,"city1":["cart","shop","shopframe","animaldealer","wbwcontainer","adcolumn"]
                 ,"city2":["lotterycontainer","fishpoolinner","formuladealer","windmillinner","collectorscontainer"]
                 };
const MenuCommand=["_currRack","autoMillStorage","buildinginfos","city","cityzones","currentslot","farm","farmamount","farmisinfo","farmisaway","forestry_action","forestry_area","forestry_area_name","forestry_area_pid","forestry_area_run","forestry_area_time","forestry_area_watertime","forestry_cache_area","forestry_farmis","forestry_production_products","forestry_production_run","forestry_production_time","forestry_questdelay_run","forestry_questdelay_time","forestry_quests","forestry_quicknavi","forestry_remain","forestry_run","forestry_slotremain","forestry_slotrun","forestry_slots","forestry_stock","forestry_unlock","forestry_user_buildings","forestry_waterall_cost","formulas","fremains","ftimer","garten_kategorie","garten_prod","garten_zeit","GMberaterDone","GMberaterVersion","GMbotConfigData","GMcalcToLodgeCampaignNr","GMcalcToLodgeQuestNr","GMcalcToQuestNr","GMcurrentPowerup","GMguid","GMgut","GMlodgeCampaignNr","GMlodgeQuestData","GMlodgeQuestNr","GMlodgeTimeEnd","GMlotteryCollectForPrize","GMnpcSaison","GMpreisBeob","GMprodBlock","GMprodGrowTime","GMprodMinRack","GMprodMinRackInit","GMprodMinRackSettings","prodName","prodNameSort","GMprodPlantSize","GMprodRequire","prodStock","prodTyp","prodYield","GMquestNr","GMquestState","readyZone","reallocateBuildingSet","GMsetCalcToLodgeQuest","GMsetCalcToQuest","GMstatBotgutBeob","GMstatBotpreisBeob","GMstatBotVersion","GMusername","GMvalFarmiLimits","GMzoneAddToGlobalTime","guildquestlist_level","locationinfo","lotrack","lotteryprizes","now","poweruprack","produkt_category","produkt_ernte","produkt_level","produkt_name","produkt_x","produkt_y","punkte","QUESTS","rackElement","racksortinfo","unsolvedquests","userfarminfos","userquests","windmillinfo","zoneList","zoneSettings","zoneToList","zoneWaiting"];

var botArbiter=new function(){
    var stack=new Object();
    var interval=null;
    var intervalBusy=false;
    this.add=function(event){
    try{
        if(LOGGING_ARBITER){ GM_logInfo("botArbiter.add","event="+event,"bot.isActive()="+bot.isActive(),"Begin"); }
        var priority, fkt=null;
        switch(event){
            case "sessionEnds":             priority=999;fkt=doGameSessionEnds;     break;
            case "megafield":               priority= 30;fkt=autoMegafield;         break;
            case "otherAccMegafieldReady":  priority= 34;fkt=doGameOtherAccReady;   break;
            case "farm":                    priority= 30;fkt=autoFarm;              break;
            case "farmersmarket":           priority= 25;fkt=autoFarmersmarket;     break;
            case "windmill":                priority= 20;fkt=autoWindmill;          break;
            case "forestry":                priority= 10;fkt=autoForestry;          break;
            case "foodworld":               priority= 10;fkt=autoFoodworld;         break;
            case "map_stall":               priority=  5;fkt=autoMapStall;         break;
            case "clothingDonation":        priority=  5;fkt=autoClothingDonation;  break;
            case "donkey":                  priority=  5;fkt=autoDonkey;            break;
            case "lottery":                 priority=  5;fkt=autoLottery;           break;
            case "buyPetsParts":            priority=  5;fkt=autobuyPetsParts;      break;
            case "vehicles1":
            case "vehicles2":
            case "vehicles3":               
            case "vehicles4":               
            case "vehicles5":               
            case "vehicles6":               priority=  5;fkt=autoVehicles;          break;
            case "activatePowerUp":         priority=  5;fkt=autoActivatePowerUp;   break;
            case "farmi":                   priority=  5;fkt=autoFarmi;             break;
            case "goBattleDailyBonus":      priority=  5;fkt=autoBattleDailyBonus;  break;
            case "goDailyLoginBonus":       priority=  5;fkt=autoDailyLoginBonus;   break;
            case "goIceDelivery":           priority=  5;fkt=autoIceDelivery;       break;
            case "goOlympiaRun":            priority=  5;fkt=autoOlympiaRun;        break;
            case "goSiebenSchlaefer":       priority=  5;fkt=autoSiebenSchlaeferRun;     break;
            case "goXMasCalendar":          priority=  5;fkt=autoXMasCalendar;     break;
            case "farmdog":                 priority=  2;fkt=autoFarmDog;     break;
            // case "quest":          priority=  5;fkt=autoActivateQuest;   break;
            // case "lodgeQuest":     priority=  5;fkt=autoActivateLodgeQuest;break;
            case "otherAccReady":           priority=  1;fkt=doGameOtherAccReady;   break;
        }
        if (!bot.isActive()) {
            GM_logWarning("botArbiter.add","event="+event,"","Bot is off");
        } else if (fkt==null) {
            GM_logWarning("botArbiter.add","event="+event,"","No bot-function");
        } else {
            if (intervalBusy) { // Currently looping through stack. Try again in 100ms
                window.setTimeout(botArbiter.add, 100, event);
            } else {
                stack[event]=[priority, fkt]; // Put event into stack (if not already there)
                window.setTimeout(botArbiter.start, 100);
            }
        }
    }catch(err){GM_logError("botArbiter.add","event="+event,"",err);}
    }
    this.clear=function(event){
    try{
        if(LOGGING_ARBITER){ GM_logInfo("botArbiter.clear","event="+event,"intervalBusy="+intervalBusy,"Begin"); }
        if(stack[event]){
            if(intervalBusy){ // Currently looping through stack. Try again in 100ms
                window.setTimeout(botArbiter.clear, 100, event);
            }else{
                delete stack[event];
            }
        }
        if(LOGGING_ARBITER){ GM_logInfo("botArbiter.clear","","stack="+implode(stack,"botArbiter.clear/stack"),"End"); }
    }catch(err){GM_logError("botArbiter.clear","event="+event,"",err);}
    }
    this.run=function(){
    try{
        intervalBusy=true;
        try{
            if (LOGGING_ARBITER) {
                GM_logInfo("botArbiter.run","","stack="+implode(stack,"botArbiter.run/stack")+" readyZone="+implode(unsafeData.readyZone,"botArbiter.run/readyZone"),"Begin");
            }

            if (bot.isActive() && !bot.isBusy() && checkOpenWindow()) {
                var found=null;
                var count=0;
                for (event in stack) { // Go through [priority,fkt]-attributes of stack
                    if (!stack.hasOwnProperty(event)) { continue; }
                    count++;
                    if (found==null || stack[found][0]<stack[event][0]) { // Check for priority of event
                        found=event;
                    }
                }
                if (LOGGING_ARBITER) {
                    GM_logInfo("botArbiter.run","","stack="+implode(stack,"botArbiter.run/stack")+" readyZone="+implode(unsafeData.readyZone,"botArbiter.run/readyZone")+" found="+found,"After search");
                }
                if (found) {
                    stack[found][1](bot.start()); // Call bot function
                    delete stack[found];
                    count--;
                }
                if (count==0) {
                    try{
                        window.clearInterval(interval);
                    } catch (err) {}
                    interval=null;
                }
            }
        }catch(err){GM_logError("botArbiter.run","","",err);}
        intervalBusy=false;
    }catch(err){GM_logError("botArbiter.run","","",err);}
    }
    this.start=function(){
    try{
        if(bot.isActive() && !interval) { // Bot is set to 'active' and we're currently not within an interveral
            interval=window.setInterval(botArbiter.run,RAISETIME); // Execute botArbiter.run every RAISETIME milliseconds. Result value is needed to cancel periodical execution.
        }
    }catch(err){GM_logError("botArbiter.start","","",err);}
    }
    this.stop=function(){ //TODO the bot is not deactivated until the timer is run out... after that the button should change... inbetween it should have an inbetween state
    try{
        if(LOGGING_ARBITER){ GM_logInfo("botArbiter.stop","","bot.isActive()="+bot.isActive(),"Begin"); }
        if(intervalBusy){ // Indicates, if we're currently within an interval
            window.setTimeout(botArbiter.stop, 100); // Call botArbiter.stop in 100ms again
        }else{
            stack=new Object();
            try {
                window.clearInterval(interval); // Stop periodical executement of botArbiter.run (set in botArbiter.start)
            } catch(err) {}
            interval=null;
        }
    }catch(err){GM_logError("botArbiter.stop","","",err);}
    }
    this.check=function(){
    try{
        if(LOGGING_ARBITER){GM_logInfo("botArbiter.check","","","Begin");}
        // Testing for actions to do
        botArbiter.stop();
        if(bot.isActive()){
            if($("divSessionEnd")){
                botArbiter.add("sessionEnds");
            }
            checkReadyZone(); // farm, windmill, forestry
            if (settings.get("account", "botUseFarmi") && unsafeWindow.farmisinfo && unsafeWindow.farmisinfo[0] && (settings.get("account", "farmiReject") || settings.get("account", "farmiAccept"))) {
                checkFarmi(1);
            }
            if($("divGoToClothingDonation") && !zoneWaiting["clothingDonation"]) {
                var log = unsafeData.latestClothingDonationLog;
                if (!log && (settings.get("account","botUseClothingGamble") || settings.get("account","botUseClothingDonation")) || // No log available (and at least one option is checked) => Let bot open the dialog
                    settings.get("account","botUseClothingGamble") && unsafeWindow.clothingdonation_data.data.gambleremain < 1 || // We need to gamble
                    settings.get("account","botUseClothingDonation") && log["gambleInfo"][0]["gain"] > 0) { // We should donate
                    botArbiter.add("clothingDonation");
                }
            }
            if(settings.get("account","botUseDonkey") && $("divGoToDonkey")) {
                botArbiter.add("donkey");
            }
            if(settings.get("account","botUseLottery") && settings.get("account","lotteryActivate") && $("divGoToLottery")) {
                botArbiter.add("lottery");
            }
            //22102016
            if(settings.get("account","botUsebuyPetsParts") && $("divGoTobuyPetsParts")) {
                botArbiter.add("buyPetsParts");
            }

            if(settings.get("account","garage1")>0) {
                if (unsafeWindow.farms_data.map.vehicles[1]&&isNaN(unsafeWindow.farms_data.map.vehicles[1][settings.get("account","garage1")].remain)){
                    botArbiter.add("vehicles1");
                }
            }

            if(settings.get("account","botUseFarmDog") && unsafeWindow.farmdog_isset == 1 && unsafeWindow.farmdog_harvest == 0) {
                botArbiter.add("farmdog");
            }

            if (settings.get("account","garage2")>0 ) {
                if (unsafeWindow.farms_data.map.vehicles[2]&&isNaN(unsafeWindow.farms_data.map.vehicles[2][settings.get("account","garage2")].remain)){
                    botArbiter.add("vehicles2");
                }
            }

            if (settings.get("account","garage3")>0 ) {
                if (unsafeWindow.farms_data.map.vehicles[3] && isNaN(unsafeWindow.farms_data.map.vehicles[3][settings.get("account","garage3")].remain)){
                    botArbiter.add("vehicles3");
                }
            }

            if (settings.get("account","garage4")>0 ) {
                if (unsafeWindow.farms_data.map.vehicles[4] && isNaN(unsafeWindow.farms_data.map.vehicles[4][settings.get("account","garage4")].remain)){
                    botArbiter.add("vehicles4");
                }
            }

            if (settings.get("account","garage5")>0 ) {
                if (unsafeWindow.farms_data.map.vehicles[5] && isNaN(unsafeWindow.farms_data.map.vehicles[5][settings.get("account","garage5")].remain)){
                    botArbiter.add("vehicles5");
                }
            }

            if (settings.get("account","garage6")>0 ) {
                if (unsafeWindow.farms_data.map.vehicles[6] && isNaN(unsafeWindow.farms_data.map.vehicles[6][settings.get("account","garage6")].remain)){
                    botArbiter.add("vehicles6");
                }
            }

            if ($("pentecostevent_link")) {
                if ( unsafeWindow.pentecostevent && unsafeWindow.pentecostevent.data && unsafeWindow.pentecostevent.data.data) {
                    var pentecosteventData = unsafeWindow.pentecostevent.data.data;
                    if (pentecosteventData.water_remain < 0 && pentecosteventData.water >=50  ) {
                        unsafeWindow.pentecostevent.careCommit('water') ;
                        GM_logInfo("Pfingst-Event","","","Pfingst-Event: wässern "+ getDaytimeStr(unsafeWindow.Zeit.Server));
                        window.setTimeout(function() {
                                unsafeWindow.hideDiv("pentecostevent")
                        },1000);
                    }
                    if (pentecosteventData.fertilizer_remain < 0 && pentecosteventData.fertilizer >=60  ) {
                        unsafeWindow.pentecostevent.careCommit('fertilizer') ;
                        GM_logInfo("Pfingst-Event","","","Pfingst-Event: düngen "+ getDaytimeStr(unsafeWindow.Zeit.Server));
                        window.setTimeout(function() {
                            unsafeWindow.hideDiv("pentecostevent")
                        },1000);
                    }
                }
            }


            if ($("oktoberfest_link") ) {
                if (!unsafeData.oktoberfestBonus) {
                    GM_logInfo("Oktoberfest","","","Oktoberfest: Brezel "+ getDaytimeStr(unsafeWindow.Zeit.Server));
                    unsafeWindow.oktoberfest.init();

                    if ($("oktoberfest").querySelector(".mini_close")) {
                        window.setTimeout(function() {
                            unsafeWindow.oktoberfest.close();
                        },1000);
                    }
                }
            }

            //27062017
            if ($("loginevent_link")){
                for(var a in unsafeWindow.loginevent.data.config.rewards) {
                    if(unsafeWindow.loginevent.data.today==parseInt(a)) {
                        if(unsafeWindow.loginevent.data.data.rewards&&unsafeWindow.loginevent.data.data.rewards[a]){

                        } else {
                            botArbiter.add("goSiebenSchlaefer");
                        }
                    }
                }
            }
            //12072017
            if ((settings.get("account","botUseIceDelivery"))&&($("deliveryevent_link"))){
                var item=unsafeWindow.deliveryevent;
                if ((item) &&
                    ( !item.data.data.tour || (item.data.data.tour.remain<=0) ) &&
                    (item.data.data.points>=item.data.config.spots.playground.points)
                )   {
                        botArbiter.add("goIceDelivery");
                } else if ((item) &&
                    ( !item.data.data.tour || (item.data.data.tour.remain>0) ) &&
                    (item.data.data.points>=item.data.config.spots.playground.points)
                )   {
                    window.setTimeout(function() {
                        botArbiter.add("goIceDelivery");
                    }, (item.data.data.tour.start-now+item.data.data.tour.duration+10)*1000);
                }
            }

            if((settings.get("account","botUseOlympiaRun")) && (isSchokolade) && ($("olympia_link"))) {
                botArbiter.add("goOlympiaRun");
            }

            if(settings.get("account","botUseDailyLoginBonus")) {
                var item = unsafeWindow.loginbonus;
                if(item.data.data.rewards&&item.data.data.rewards[item.currentDay]&&!item.data.data.rewards[item.currentDay].done){
                    botArbiter.add("goDailyLoginBonus");
                }
            }

            if(settings.get("account","botUseBattleDailyBonus") && !unsafeData.battleDailyBonusDone &&  $("battle_link"))  {
                botArbiter.add("goBattleDailyBonus");
            }

            if(settings.get("account","botUseXMasCalendar") && $("calendar_link")) {
                if (!unsafeData.xMasCalendarDailyDone) {
                    botArbiter.add("goXMasCalendar");
                }
            }

            var cell;
            if(settings.get("account","botUseWindmill")){
                if(checkPowerUp(1)){
                    botArbiter.add("activatePowerUp");
                }
            }

            cell=$("linkOtherAccReady");
            if(cell){
                if (settings.get("account","botPreferMegafield") && cell.getAttribute("ismegafield")==="true") { // String-Vergleich ohne implizite Typ-Konvertierung nötig, da das Attribut als String zurückkommt!
                    botArbiter.add("otherAccMegafieldReady");
                } else {
                    botArbiter.add("otherAccReady");
                }
            }
            cell=null;
        }
        if(LOGGING_ARBITER){GM_logInfo("botArbiter.check","","","End");}
    }catch(err){GM_logError("botArbiter.check","","",err);}
    }
};
var bot=new function(){
try{
    var action,active,busy,interval,durationRun,durationStep,runId=0,divInfo;
    this.isActive=function(){
    try{
        return !!active;
    }catch(err){GM_logError("bot.isActive","","",err);}
    };
    this.isBusy=function(){
    try{
        return !!busy;
    }catch(err){GM_logError("bot.isBusy","","",err);}
    };
    this.init=function(){
    try{
        divInfo=$("divBotInfo");
        active=settings.get("server","botActive");;
        if(active===undefined){active=false;}
        if(active){
            bot.activate();
        }else{
            bot.deactivate();
        }
    }catch(err){GM_logError("bot.init","","",err);}
    };
    this.activate=function(){
    try{
        active=true;
        settings.set("server","botActive",active);
        busy=false;
        var cell;
        if(cell=$("divAutomatButtonBot")){
            cell.style.backgroundColor="#f55";
            cell.setAttribute("mouseOverText",getText("automat_botStop"));
            cell.firstElementChild.classList.add("rotating");
        }
        if(cell=$("divBotInfo")){
            cell.style.display="block";
            cell.innerHTML="Busy:--";
        }
        cell=null;
        botArbiter.check();
    }catch(err){GM_logError("bot.activate","","",err);}
    };
    this.deactivate=function(){
    try{
        active=false;
        settings.set("server","botActive",active);
        bot.end();
        var cell
        if(cell=$("divAutomatButtonBot")){
            cell.style.backgroundColor="";
            cell.setAttribute("mouseOverText",getText("automat_botStart"));
            cell.firstElementChild.classList.remove("rotating");
        }
        if(cell=$("divBotInfo")){
            cell.style.display="none";
        }
        cell=null;
        botArbiter.stop();//TODO the bot is not deactivated until the timer is runS out .. after that the buttoN should change.. inbetween it should have a inbetween state.
        stopCloseWindowTimer();
    }catch(err){GM_logError("bot.deactivate","","",err);}
    };
    this.start=function(){
    try{
        GM_logInfo("bot.start","","","",0);
        try {window.clearInterval(interval);} catch (err){}
        durationRun=settings.get("country","maxDurationBotRun");
        durationStep=settings.get("country","maxDurationBotStep");
        busy=true;
        interval=window.setInterval(bot.run,1000);
        runId++;
        return runId;
    }catch(err){GM_logError("bot.start","","",err);}
    };
    this.end=function(){
    try{
        GM_logInfo("bot.end","","","",0);
        top.unsafeData.autoAction=null;
        runId++;
        busy=false;
    }catch(err){GM_logError("bot.end","","",err);}
    };
    this.run=function(){
    try{
        GM_logInfo("bot.run","","","",0);
        durationRun--;
        durationStep--;
        if(divInfo.style.display!="block"){ divInfo.style.display="block"; }
        if(divInfo.innerHTML!="Busy: "+action){ divInfo.innerHTML="Busy: "+action; }
        if(!busy){
            try {window.clearInterval(interval);} catch (err){}
            divInfo.innerHTML="Busy: --";
            botArbiter.check();
        }else if((durationRun>0)&&(durationStep>0)){
            divInfo.innerHTML +="<br>Reset:"+getTimeStr(durationRun);
            divInfo.innerHTML +="<br>Reset:"+getTimeStr(durationStep);
        }else{
            switch(settings.get("country","botErrorBehaviour")){
            case "reload":
                top.location.href=top.location.href;
            break;
            default:
                try {window.clearInterval(interval);} catch (err){}
                busy=false;
                divInfo.innerHTML="Busy: --";
                botArbiter.check();
            }
        }
    }catch(err){GM_logError("bot.run","","",err);}
    };
    this.setAction=function(str){
    try{
        durationStep=settings.get("country","maxDurationBotStep");
        action=str;
        top.unsafeData.autoAction="automat: "+action;
    }catch(err){GM_logError("bot.setAction","str="+str,"",err);}
    };
    this.checkRun=function(type,run,noBot){
    try{
        if((!noBot)&&(!active)){
            GM_logInfo("bot.checkRun","type="+type+" run="+run,"","BOT INACTIVE");
            return false;
        }else if(!busy){
            GM_logInfo("bot.checkRun","type="+type+" run="+run,"","BOT BUSY NOT SET");
            return false;
        }else if(run!=runId){
            GM_logInfo("bot.checkRun","type="+type+" run="+run,"runId="+runId,"BOT WRONG RUN ID");
            return false;
        }else{
            return true;
        }
    }catch(err){GM_logError("bot.checkRun","type="+type,"",err);}
    };
}catch(err){GM_logError("bot","","",err);}
};
var settings=new function(){
    var data={"global":{},"country":{},"server":{},"account":{}};
    var dataDefault={"global":{},
                     "country":{"valCloseWindowTimer":30,"pauseShort":[300,700],"pause":[2000,4000],"maxDurationBotRun":300,"maxDurationBotStep":30,"botErrorBehaviour":"reload","valRestartBotTimer":30},
                     "server":{"botActive":false},
                     "account":{"autoPlant":true,"autoWater":true,"autoFeed":true,"botUseClothingDonation":false,"botUseBattleDailyBonus":true,"botUsebuyPetsParts":false,"botUseClothingGamble":false,"botUseDonkey":false,"botUseFarmDog":false,"botUseFarmersmarket":false,"botUseButterfly":false,"botUseCowracingFeed":true,"botUseFishing":false,"botUseFishingLookSp":true,"botUseVetTreatment":true,"botUseMegafruit":false,"botUseSpeedEating":false,"botUseDailyLoginBonus":true,"dailyLoginSelectProduct":1,"botUseFarmi":false,"botUseFoodworld":false,"botUseForestry":false,"botUseGuildJop":false,"botUseIceDelivery":false,"botUseLottery":false,"botUseMap_stall":false,"botUseMegafield":false,"botUseOlympiaRun":false,"botPreferMegafield":true,"botUseMegafieldPremiumPlanting":true,"megafieldSmallVehicle":1,"megafieldBigVehicle":0,"botUseWeather":false,"botUseWindmill":false,"botUseXMasCalendar":true,"disableCropFields":false,"farmiAccept":false,"farmiAcceptAboveNr":100,"farmiAcceptBelowMinValue":false,"botUseFarmiFoodworld":true,"farmiReject":false,"farmiRejectUntilNr":90,"farmiRemoveMissing":false,"farmiRemoveMissingAboveNr":10,"lotteryActivate":false,"lotteryDailyLot":false,"powerUpActivate":false,"seedWaitForCrop":30,"showQueueTime":true,"useQueueList":false,"garage1":0,"garage1ProductFrom1":0,"garage1ProductFrom5":0,"garage2":0,"garage2ProductFrom1":0,"garage2ProductFrom6":0,"garage3":0,"garage3ProductFrom1":0,"garage3ProductFrom7":0,"garage4":0,"garage4ProductFrom1":0,"garage4ProductFrom8":0,"garage5":0,"garage5ProductFrom1":0,"garage5ProductFrom9":0,"garage6":0,"garage6ProductFrom1":0,"garage6ProductFrom10":0}
                    };
    var require=    {"global":{},
                     "country":{},
                     "server":{},
                     "account":{"farmiAccept":[["account","botUseFarmi"]],"farmiAcceptAboveNr":[["account","botUseFarmi"]],"farmiAcceptBelowMinValue":[["account","botUseFarmi"],["account","farmiAccept"]],"botUseFarmiFoodworld":[["account","botUseFarmi"],["account","botUseFoodworld"]],"farmiReject":[["account","botUseFarmi"]],"farmiRejectUntilNr":[["account","botUseFarmi"]],"farmiRemoveMissing":[["account","botUseFarmi"]],"farmiRemoveMissingAboveNr":[["account","botUseFarmi"]],"lotteryActivate":[["account","botUseLottery"]],"lotteryDailyLot":[["account","botUseLottery"],["account","lotteryActivate"]],"powerUpActivate":[["account","botUseWindmill"]]}
                    };
    this.init=function(){
    try{
        settings.load("global");
        settings.load("country");
        settings.load("server");
        settings.load("account");
    }catch(err){GM_logError("settings.init","","",err);}
    }
    this.load=function(scope){
    try{
        var key;
        switch(scope){
        case "global": key="settings"; break;
        case "country": if(COUNTRY){ key=COUNTRY+"_settings"; } break;
        case "server": if(COUNTRY&&SERVER){ key=COUNTRY+"_"+SERVER+"_settings"; } break;
        case "account": if(COUNTRY&&SERVER&&USERNAME){ key=COUNTRY+"_"+SERVER+"_"+USERNAME+"_settings"; } break;
        }
        if(key){
            data[scope]=explode(GM_getValue(key,"{}"),"settings");
        }
    }catch(err){GM_logError("settings.load","scope="+scope,"",err);}
    }
    this.save=function(scope){
    try{
        var key;
        switch(scope){
        case "global": key="settings"; break;
        case "country": if(COUNTRY){ key=COUNTRY+"_settings"; } break;
        case "server": if(COUNTRY&&SERVER){ key=COUNTRY+"_"+SERVER+"_settings"; } break;
        case "account": if(COUNTRY&&SERVER&&USERNAME){ key=COUNTRY+"_"+SERVER+"_"+USERNAME+"_settings"; } break;
        }
        if(key){
            GM_setValue(key,implode(data[scope],"settings"));
        }
    }catch(err){GM_logError("settings.save","scope="+scope,"",err);}
    }
    this.get=function(scope,key){
    try{
        if((scope in data)&&(key in data[scope])){
            return data[scope][key];
        }else if((scope in dataDefault)&&(key in dataDefault[scope])){
            return dataDefault[scope][key];
        }else{
            GM_logWarning("settings.get","scope="+scope+" key="+key,"","Settings unknown. Function returns null.");
            return null;
        }
    }catch(err){GM_logError("settings.get","scope="+scope+" key="+key,"",err);}
    }
    this.set=function(scope,key,value){
    try{
        data[scope][key]=value;
        settings.save(scope);
    }catch(err){GM_logError("settings.set","scope="+scope+" key="+key,"",err);}
    }
    this.reset=function(scope,key){
    try{
        delete data[scope][key];
        settings.save(scope);
        return settings.get(scope,key);
    }catch(err){GM_logError("settings.reset","scope="+scope+" key="+key,"",err);}
    }
    this.checkRequire=function(scope,key){
    try{
        if(require[scope][key]){
            for(var j=require[scope][key].length-1;j>=0;j--){
                if(!settings.get(require[scope][key][j][0],require[scope][key][j][1])){ return false; }
            }
        }
        return true;
    }catch(err){GM_logError("settings.checkRequire","scope="+scope+" key="+key,"",err);}
    }
    // Special functions
    this.getPause=function(isShort){
    try{
        var val=settings.get("country",isShort?"pauseShort":"pause");
        return getRandom(val[0],val[1]);
    }catch(err){GM_logError("settings.set","scope="+scope+" key="+key,"",err);}
    }
};
var closeWindowTimer=null;
var closeWindowTime=settings.get("country","valCloseWindowTimer");
var openWindows=null;
function startCloseWindowTimer(){
try{
    var divCWL=$("divCloseWindowLayer");
    if(divCWL.style.display!="block"){ divCWL.style.display="block"; }
    var divCW=$("divCloseWindow");
    if(divCW.style.display!="block"){ divCW.style.display="block"; }
    var cell;
    if(!bot.isBusy()){
        if(--closeWindowTime>0 && !checkOpenWindow(true)){
            GM_logInfo("startCloseWindowTimer","","closeWindowTime="+closeWindowTime+" openWindows="+implode(openWindows,"startCloseWindowTimer"),"",0);
            divCW.innerHTML=getText("automat_CloseWindowTimer").replace("%1%", getTimeStr(closeWindowTime)) + "<br>" + getText("automat_CloseWindowTimerClick");
            if(!closeWindowTimer) closeWindowTimer=window.setInterval(startCloseWindowTimer,1000);
        }else{
            //-- GM_log("closingEventTimer closeWindowTime:"+closeWindowTime);
            if((cell=$("multiframe"))&&(cell.style.display=="block")){
                click($("multiframe").contentDocument.getElementsByClassName("link2")[0].firstElementChild);
            }else if((cell=$("divQueueBox"))&&(cell.style.display=="block")){
                click($("divQueueBoxClose"));
            }else if((cell=$("divChooseBox"))&&(cell.style.display=="block")){
                click($("divChooseBoxClose"));
            }else if((cell=$("infoPanel"))&&(cell.style.display=="block")){
                click($("infoPanelClose"));
            }else if((cell=$("friendscontainer"))&&(cell.style.display=="block")){
                click($("friendsclose").getElementsByClassName("link")[0]);
            }else if((cell=$("guildmaincontainer"))&&(cell.style.display=="block")){
                click($("cancelscreen2"));
            }else if((cell=$("reallocateBuildingContainer"))&&(cell.style.display=="block")){
                click($("reallocateBuildingContainerHeader").getElementsByClassName("link")[0]);
            }else if((cell=$("farmhousecontainer"))&&(cell.style.display=="block")){
                click($("fhclose").getElementsByClassName("link")[0]);
            }else if((cell=$("cart"))&&(cell.style.display=="block")){
                unsafeWindow.clearCart();
            }else if((cell=$("shop"))&&(cell.style.display=="block")){
                $('transp3').style.display='none';
                $('shopframe').src='';
                $('shop').style.display='none';
                //click($("shopframe").contentDocument.getElementsByClassName("link2")[0].firstElementChild);
            }else if((cell=$("shopframe"))&&(cell.style.display=="block")){
                $('transp3').style.display='none';
                $('shopframe').src='';
                $('shop').style.display='none';
                //click($("shopframe").contentDocument.getElementsByClassName("link2")[0].firstElementChild);
            }else if((cell=$("animaldealer"))&&(cell.style.display=="block")){
                click($("animaldealerheader").getElementsByClassName("link")[0]);
            }else if((cell=$("wbwcontainer"))&&(cell.style.display=="block")){//competitie
                click($("wbwhead").getElementsByClassName("link")[0]);
            }else if((cell=$("adcolumn"))&&(cell.style.display=="block")){
                click($("adcolumnheader").getElementsByClassName("link")[0]);
            }else if((cell=$("lotterycontainer"))&&(cell.style.display=="block")){
                click($("lotteryhead").getElementsByClassName("link")[0]);
            }else if((cell=$("fishpoolinner"))&&(cell.style.display=="block")){
                click($("fishpoolheader").getElementsByClassName("link")[0]);
            }else if((cell=$("formuladealer"))&&(cell.style.display=="block")){
                click($("formuladealerheader").getElementsByClassName("link")[0]);
            }else if((cell=$("windmillinner"))&&(cell.style.display=="block")){
                click($("windmillinner").getElementsByClassName("big_close")[0]);
            }else if((cell=$("collectorscontainer"))&&(cell.style.display=="block")){
                 click($("collectorshead").getElementsByClassName("link")[0]);
            }
            botArbiter.start();
            stopCloseWindowTimer();
        }
    }else{
        stopCloseWindowTimer();
    }
    cell=null;
}catch(err){GM_logError("startCloseWindowTimer","","",err);}
}
function stopCloseWindowTimer(){
    try{
        GM_logInfo("stopCloseWindowTimer","","closeWindowTimer="+closeWindowTimer,"Begin",1);
        try{ window.clearInterval(closeWindowTimer); }catch(err){}
        closeWindowTimer=null;
        //closeWindowTime=CLOSETIME;
        closeWindowTime=settings.get("country","valCloseWindowTimer");
        if($("divCloseWindowLayer")){ $("divCloseWindowLayer").style.display="none";}
        if($("divCloseWindow")){ $("divCloseWindow").style.display="none";}
        GM_logInfo("stopCloseWindowTimer","","closeWindowTimer="+closeWindowTimer,"End",1);
    }catch(err){GM_logError("stopCloseWindowTimer","","",err);}
}
function checkOpenWindow(justcheck){
try{
    var allWinClosed=true;
    var help;
    openWindows="";
    GM_logInfo("checkOpenWindow","justcheck="+justcheck,"automatStarted="+automatStarted+" busy="+bot.isBusy()+" closeWindowTimer="+closeWindowTimer,"Begin",1);
    if(automatStarted&&!bot.isBusy()){
        var currLocation=unsafeData.gameLocation.get();
        for(var ctn in OpenWindow){
            if(!OpenWindow.hasOwnProperty(ctn)){ continue; }
            if((ctn=="all")||(ctn=="farm"&&currLocation[0]=="farm")||(ctn=="city1"&&currLocation.equals(["city","1"]))||(ctn=="city2"&&currLocation.equals(["city","2"]))){
                for(var i=OpenWindow[ctn].length-1;i>=0;i--){
                    if((help=$(OpenWindow[ctn][i]))&&(help.style.display=="block")){
                        openWindows +=(openWindows!=""?", ":"")+OpenWindow[ctn][i];
                        GM_logInfo("checkOpenWindow","justcheck="+justcheck,"container="+ctn+" window="+OpenWindow[ctn][i],"Window is open");
                        allWinClosed=false;
                    }
                }
            }
        }
        if(justcheck===true){
            return allWinClosed;
        }else if(allWinClosed){
            if(closeWindowTimer&&!justcheck){
                //-- GM_log("checkOpenWindow 1");
                stopCloseWindowTimer();
            }
            return true;
        }else if(!closeWindowTimer&&!justcheck){ //garden can be open for eve
            //-- GM_log("checkOpenWindow 2");
            startCloseWindowTimer();
        }
    }else if(bot.isBusy()&&closeWindowTimer&&!justcheck){
        //-- GM_log("checkOpenWindow 3");
        stopCloseWindowTimer();
    }
    help=null;
    return false;
}catch(err){GM_logError("checkOpenWindow","justcheck="+justcheck,"ctn="+ctn+" wn="+wn,err);}
}

var restartBotTimer=null;
var restartBotTime=30; //standard

function restartBot(){
    try {
        if (settings.get("country","valRestartBotTimer")>=0) {
            /*var divReStL=$("divRestartLayer");
            if(divReStL.style.display!="block"){ divReStL.style.display="block"; }*/
            var divReSt=$("divRestart");
            if(divReSt.style.display!="block"){ divReSt.style.display="block"; }
            if (--restartBotTime>=0){
                divReSt.innerHTML=getText("automat_RestartBotTimer").replace("%1%", getTimeStr(restartBotTime)) + "<br>" + getText("automat_RestartBotTimerClick");
                if(!restartBotTimer) restartBotTimer=window.setInterval(restartBot,1000);
            } else {
                //if($("divRestartLayer")){ $("divRestartLayer").style.display="none";}
                if($("divRestart")){ $("divRestart").style.display="none";}
                try{ window.clearInterval(restartBotTimer); }catch(err){}
                restartBotTimer=null;
                restartBotTime = settings.get("country","valRestartBotTimer");
                bot.activate();
            }
        }
    }catch(err){GM_logError("restartBot","restartBotTime="+restartBotTime,"ctn="+ctn+" wn="+wn,err);}
}

function getFarmZoneBonus(zoneNr,product){
    GM_logInfo("getFarmZoneBonus","zoneNr="+zoneNr+" product="+product,"","Begin",1);
    try{
        var bonus=1;
        var zoneNrF=zoneNr.toString().replace(/\.\d+$/,"");
        var currBonus=unsafeData.zones.getBonus(zoneNrF);
        var currBonusSpecial=unsafeData.zones.getBonusSpecial(zoneNrF);
        if(currBonusSpecial&&(currBonusSpecial[0]==product)){
            bonus-=currBonusSpecial[1]/100;
        }
        if(currBonus){
            bonus-=currBonus/100;
        }
    }catch(err){
        GM_logError("getFarmZoneBonus","zoneNr="+zoneNr+" product="+product,"",err);
        if(Math.ceil(zoneNrF/6)==parseInt(unsafeWindow.farm,10)){
            if(unsafeWindow.userfarminfos[Math.ceil(zoneNrF/6)][getGarden(zoneNrF)]["specialwaterbonus"][0]==product){
                bonus=1 - parseInt(unsafeWindow.userfarminfos[Math.ceil(zoneNrF/6)][getGarden(zoneNrF)]["specialwaterbonus"][1],10)/100;
            }else if(unsafeWindow.userfarminfos[Math.ceil(zoneNrF/6)][getGarden(zoneNrF)]["waterbonus"]){
                bonus=1 - parseInt(unsafeWindow.userfarminfos[Math.ceil(zoneNrF/6)][getGarden(zoneNrF)]["waterbonus"],10)/100;
            }else if(unsafeWindow.userfarminfos[Math.ceil(zoneNrF/6)][getGarden(zoneNrF)]["time"]){
                bonus=1 - parseInt(unsafeWindow.userfarminfos[Math.ceil(zoneNrF/6)][getGarden(zoneNrF)]["time"],10)/100;
            }
        }
    }
    GM_logInfo("getFarmZoneBonus","zoneNr="+zoneNr+" product="+product,"bonus="+bonus,"End",1);
    return bonus;
}
function getLowestTimeFarmZone(timeTable){
    GM_logInfo("getLowestTimeFarmZone","timeTable="+implode(timeTable,"getLowestTimeFarmZone/timeTable"),"","Begin",1);
    for(var i in timeTable){
        if(!timeTable.hasOwnProperty(i)){ continue; }
        if(zoneNrF===undefined) var zoneNrF=i;
        if(timeTable[i] < timeTable[zoneNrF]){
            zoneNrF=i;
        }
    }
    GM_logInfo("getLowestTimeFarmZone","","zoneNrF="+zoneNrF,"End",1);
    return zoneNrF;
}
function getHighestTimeFarmZone(timeTable){
    GM_logInfo("getHighestTimeFarmZone","timeTable="+implode(timeTable,"getLowestTimeFarmZone/timeTable"),"","Begin",1);
    for(var i in timeTable){
        if(!timeTable.hasOwnProperty(i)){ continue; }
        if(zoneNrF===undefined) var zoneNrF=i;
        if(timeTable[i] > timeTable[zoneNrF]){
            zoneNrF=i;
        }
    }
    GM_logInfo("getHighestTimeFarmZone","","zoneNrF="+zoneNrF,"End",1);
    return zoneNrF;
}

String.prototype.count=function(match){
    var res=this.match(new RegExp(match,"g"));
    if(res==null){ return 0; }
    return res.length;
};
String.prototype.repeat=function(num){
     return new Array(num+1).join(this);
};
String.prototype.leftPad=function(len, str){
    return (new Array(len - this.length + 1)).join(str).concat(this);
};
String.prototype.replaceArray=function(arr){
    if(typeof arr!="object") throw("Argument not a Object or Array :" + typeof arr +"<br>");
    // if(!(arr instanceof Array)) throw("Argument not a Array :" + typeof arr +"<br>");
    var val=this;
    for(var key in arr){
        if(!arr.hasOwnProperty(key)){ continue; }
        // GM_log("replace :" + key + " with : " + arr[key] + " : " + val);
        val=val.replace(new RegExp("%"+key+"%","gi"),arr[key]);
    }
    return val;
};
String.prototype.toTitleCase=function(){
    return this.toLowerCase().replace(/^./, this.match(/^./)[0].toUpperCase());
};

Object.prototype.allEqual=function(){
    var equal=true, num=null;
    for(var key in this){
        if(!this.hasOwnProperty(key)){ continue; }
        // GM_log("prototype.average key: " + key + " num: " + this[key] + " tot: " + total + " len: " + len);
        if( typeof this[key]=="number"){
            if(num!=this[key] && num!=null){
                equal=false;
                break;
            }
            num=this[key];
        }
    }
    return equal;
};
Object.prototype.average=function(){
    var total=0, len=0;
    for(var key in this){
        if(!this.hasOwnProperty(key)){ continue; }
        // GM_log("prototype.average key: " + key + " num: " + this[key] + " tot: " + total + " len: " + len);
        if( typeof this[key]=="number"){
            total +=this[key];
            len++;
        }
    }
    return total/len;
};
Object.prototype.averageFieldTime=function(amount){
    var total=0, len=0;
    for(var key in this){
        if(!this.hasOwnProperty(key)){ continue; }
        if( typeof this[key]=="number"){
            // GM_log("prototype.averageFieldTime key: " + key + " num: " + this[key] + " tot: " + total + " len: " + len);
            total +=this[key];
            len++;
        }
    }
    // GM_log("End prototype.averageFieldTime tot: " + total + " amount: " + amount + " len: " + len);
    return (total*amount)/(len*len);
};

function calcDauer(dauer,bonus){ //dauer in sek, bonus zB 0.85
    var gesamtdauer=0;
    while(dauer>0){
        dauer *=bonus;
        help=Math.min(dauer,86400);
        dauer -=help;
        gesamtdauer +=help;
    }
    return gesamtdauer;
}
function calcProductScore(product, zoneNrF, amount, endtime){
    GM_logInfo("calcProductScore","product="+product+" zoneNrF="+zoneNrF+" amount="+amount+" endtime="+endtime,"","Begin",1);
    switch(getBuildingTyp(zoneNrF)){
    case "windmill":
        return unsafeData.prodPoints[3][product];
    break;
    case "sawmill":case "carpentry":
        if(amount==null || amount===undefined){ amount=1; }
        return unsafeData.prodPoints[1][product]*amount;
    break;
    case "forest":
        if(amount==null || amount===undefined){ amount=calcProductPositions(product, zoneNrF); }
        return unsafeData.prodPoints[1][product]*amount;
    break;
    case 1:
        if(amount==null || amount===undefined) amount=calcProductPositions(product, zoneNrF);
        if(unsafeData.currentPowerup && unsafeData.currentPowerup[product] && unsafeData.currentPowerup[product][0] > (endtime==null?now:endtime)){
            return (unsafeData.prodPoints[0][product]+unsafeData.currentPowerup[product][2])*amount;
        }else{
            return unsafeData.prodPoints[0][product]*amount;
        }
    break;
    case 2:
        if(amount==null || amount===undefined){ amount=unsafeData.zones.getAnimals(zoneNrF); }
        return unsafeData.prodPoints[0][product]*unsafeData.prodYield[0][product]*amount;
    break;
    case 3:
    case 4:
    case 13: //Sushibar
        if(amount==null || amount===undefined){ amount=1; }
        return unsafeData.prodPoints[0][product]*unsafeData.prodYield[0][product]*amount;
    break;
    case 6: //Fuelstation
        if(amount==null || amount===undefined){ amount=1; }
        zoneNrF=zoneNrF.split(".");
        var farmNR=Math.floor((zoneNrF[0]-1)/6)+1;
        var data=unsafeWindow.farms_data.farms[farmNR][unsafeData.zones.getLocation(zoneNrF[0]).zoneNr];
        return data.data.constants.slot_level[data.data.data.slots[zoneNrF[1]].level].output*unsafeData.prodPoints[0][350];
    break;
    case 5: //Ponyfarm
        var data = unsafeData.pony_data;
        if (data) {
            for (var fId in data["farmis"]) {
                var f = data["farmis"][fId];
                if (f["status"] == 1) {
                    continue;
                }
                if (f["type"] == product) {
                    return f["data"]["points"];
                }
            }
        }
        return 3500*product; // We guess the amount of points
    break;
    case "megafield":
        return unsafeData.prodPoints[4][product];
    break;
    default:
        GM_logWarning("calcProductScore","product="+product+" zoneNrF="+zoneNrF+" amount="+amount+" endtime="+endtime,"getBuildingTyp="+getBuildingTyp(zoneNrF),"Building type unknown. Function returns 0.");
        return 0;
    }
}
function calcProductAmount(product, zoneNrF, amount, endtime, minPlanted){
    GM_logInfo("calcProductAmount","product="+product+" zoneNrF="+zoneNrF+" amount="+amount+" endtime="+endtime+" minPlanted="+minPlanted,"","Begin",1);
    switch(getBuildingTyp(zoneNrF)){
    case "windmill":
        return 1;
    break;
    case "sawmill":case "carpentry":
        if(amount==null || amount===undefined){ amount=1; }
        return unsafeData.prodYield[1][product]*amount;
    break;
    case "forest":
        if(amount==null || amount===undefined){ amount=calcProductPositions(product, zoneNrF); }
        return unsafeData.prodYield[1][product]*amount; //no minPlanted because planted is other product.
    break;
    case 1:
    case 4:
    case 13: //Sushibar
        if(amount==null || amount===undefined){ amount=calcProductPositions(product, zoneNrF); }
        if(unsafeData.currentPowerup && unsafeData.currentPowerup[product] && unsafeData.currentPowerup[product][0] > ((endtime==null||endtime===undefined)?now:endtime)){
            return (unsafeData.prodYield[0][product]-(minPlanted?1:0)+unsafeData.currentPowerup[product][1])*amount;
        }else{
            return (unsafeData.prodYield[0][product]-(minPlanted?1:0))*amount;
        }
    break;
    case 2:
        return unsafeData.zones.getAnimals(zoneNrF) * unsafeData.prodYield[0][product];
    break;
    case 3:
        return unsafeData.prodYield[0][product];
    break;
    case 6: //Fuelstation
        zoneNrF=zoneNrF.split(".");
        var farmNR=Math.floor((zoneNrF[0]-1)/6)+1;
        var data=unsafeWindow.farms_data.farms[farmNR][unsafeData.zones.getLocation(zoneNrF[0]).zoneNr];
        return data.data.constants.slot_level[data.data.data.slots[zoneNrF[1]].level].output;
    break;
    case 5:
        return 1340; // TODO: Was bei rauskommt
    break;
    case "megafield":
        return unsafeData.prodYield[4][product];
    break;
    default:
        GM_logWarning("calcProductAmount","product="+product+" zoneNrF="+zoneNrF+" amount="+amount+" endtime="+endtime,"getBuildingTyp="+getBuildingTyp(zoneNrF),"Function returns 0");
        return 0;
    }
}
function calcEmptyProductPositions(product, zoneNrF){
    var returnn=0;
    if(getBuildingTyp(zoneNrF)==1 && zoneNrF!="farmersmarket-1"){
        var size=unsafeData.prodPlantSize[0][product];
        var tempZoneProductionData=unsafeData.zones.getProduction(zoneNrF);
        if(tempZoneProductionData){
            if(tempZoneProductionData[1] && !isNaN(tempZoneProductionData[1][size])){
                returnn=tempZoneProductionData[1][size];
            }else{
                returnn=120/size;
            }
        }
    }else if(getBuildingTyp(zoneNrF)==1 && zoneNrF=="farmersmarket-1"){
        var tempZoneProductionData=unsafeData.zones.getProduction(zoneNrF);
        returnn=36;
    }else if(isNaN(zoneNrF)){
        var size=unsafeData.prodPlantSize[1][product];
        var tempZoneProductionData=unsafeData.zones.getProduction(zoneNrF);
        if(tempZoneProductionData){
            if(tempZoneProductionData[1] && !isNaN(tempZoneProductionData[1][size])){
                returnn=tempZoneProductionData[1][size];
            }
        }
    }
    if(!tempZoneProductionData[3]){
        GM_logInfo("calcEmptyProductPositions","zoneNrF="+zoneNrF+" product="+product,"return="+returnn,"Returned data is flagged to be old.",0);
    }
    GM_logInfo("calcEmptyProductPositions","zoneNrF="+zoneNrF+" product="+product,"return="+returnn,"End",1);
    return returnn;
}
function calcProductPositions(product, zoneNrF){
    try{
        var returnn=1;
        if(getBuildingTyp(zoneNrF)==1 && zoneNrF!="farmersmarket-1"){
            var size=unsafeData.prodPlantSize[0][product];
            var tempZoneProductionData=unsafeData.zones.getProduction(zoneNrF);
            if(tempZoneProductionData){
                if(tempZoneProductionData[2] && !isNaN(tempZoneProductionData[2][size])){
                    returnn=tempZoneProductionData[2][size];
                }else{
                    returnn=120/size;
                }
            }
        }else if(getBuildingTyp(zoneNrF)==1 && zoneNrF=="farmersmarket-1"){
            var tempZoneProductionData=unsafeData.zones.getProduction(zoneNrF);
            returnn=36;
        }else if(isNaN(zoneNrF)){
            var tempZoneProductionData=unsafeData.zones.getProduction(zoneNrF);
            if(tempZoneProductionData){
                // var size=unsafeData.prodPlantSize[1][product];
                if(tempZoneProductionData[2] && !isNaN(tempZoneProductionData[2])){
                    returnn=tempZoneProductionData[2];
                }
            }
        }
        if(tempZoneProductionData&&(!tempZoneProductionData[3])){
            GM_logInfo("calcProductPositions","zoneNrF="+zoneNrF+" product="+product,"return="+returnn,"Returned data is flagged to be old.",0);
        }
        // GM_log("calcProductPositions: zoneNrF:"+zoneNrF+" product:"+product+" return:"+returnn);
        return returnn;
    }catch(err){ GM_logError("calcProductPositions","product="+product+" zoneNrF="+zoneNrF,"",err); }
}
function calcInGameProductAmountOnField(product, zoneNrF, endtime){
    try{
        var iBase=0;
        var tempZoneProductionData=unsafeData.zones.getProduction(zoneNrF);
        if(tempZoneProductionData){
            if(tempZoneProductionData[0][0][product]){
                for(var i in tempZoneProductionData[0][0][product]){
                    if(!tempZoneProductionData[0][0][product].hasOwnProperty(i)){ continue; }
                    if(endtime===undefined || endtime==null || tempZoneProductionData[0][0][product][i][1]<=endtime){
                        iBase +=calcProductAmount(product,zoneNrF,tempZoneProductionData[0][0][product][i][0],tempZoneProductionData[0][0][product][i][1],false);
                    }
                }
            }
            if(!tempZoneProductionData[3]){
                GM_logWarning("calcInGameProductAmountOnField","zoneNrF="+zoneNrF+" product="+product+" endtime="+endtime,"return="+iBase,"Returned data is flagged to be old.",0);
            }
        }
        return iBase;
    }catch(err){
        GM_logError("calcInGameProductAmountOnField","product="+product+" zoneNrF="+zoneNrF+" endtime="+endtime,"",err);
        return 0;
    }
}
function calcInGameProductAmount(product,zoneNrF,endtime,includeThisField){
    try{
        GM_logInfo("calcInGameProductAmount","product="+product+" zoneNrF="+zoneNrF+" endtime="+endtime+" includeThisField="+includeThisField,"","Begin",1);
        var type=getZoneStockType(zoneNrF);
        var iBase=unsafeData.prodStock[type][product]?unsafeData.prodStock[type][product]:0;
        var fzType=getBuildingTyp(zoneNrF);
        if(includeThisField||(fzType=="sawmill")||(fzType=="carpentry")||(fzType=="forest")){
            iBase +=calcInGameProductAmountOnField(product, zoneNrF, endtime);
        }
        for(var i=0;i<unsafeData.ALL_ZONES["farm"].length;i++){
            var fz=unsafeData.ALL_ZONES["farm"][i];
            if((!includeThisField)||(fz!=zoneNrF)){
                iBase +=calcInGameProductAmountOnField(product, fz, endtime);
            }
        }
        GM_logInfo("calcInGameProductAmount","product="+product+" zoneNrF="+zoneNrF+" endtime="+endtime+" includeThisField="+includeThisField,"return="+iBase,"End",1);
        return iBase;
    }catch(err){
        GM_logError("calcInGameProductAmount","product="+product+" zoneNrF="+zoneNrF+" endtime="+endtime+" includeThisField="+includeThisField,"",err);
        return 0;
    }
}
function getZoneProduction(zoneNrS,timeBegin,timeEnd){
    // getTotalProduction
    try{
        var t1=timeBegin?timeBegin:0;
        var t2=timeEnd?timeEnd:NEVER;
        var production={};
        var zoneErnteCurr=unsafeData.zones.getProduction(zoneNrS);
        if(zoneErnteCurr){
            for(var iTypeStr in zoneErnteCurr){
                if(!zoneErnteCurr.hasOwnProperty(iTypeStr)){ continue; }
                for(var iProdStr in zoneErnteCurr[iTypeStr]){
                    if(!zoneErnteCurr[iTypeStr].hasOwnProperty(iProdStr)){ continue; }
                    for(var i=0;i<=zoneErnteCurr[0][iTypeStr][iProdStr].length();i++){
                        if((t1<=zoneErnteCurr[0][iTypeStr][iProdStr][i][2])&&(zoneErnteCurr[0][iTypeStr][iProdStr][i][2]<=t2)){
                            if(!production[iTypeStr]){ production[iTypeStr]={}; }
                            if(!production[iTypeStr][iProdStr]){ production[iTypeStr][iProdStr]=0; }
                            production[iTypeStr][iProdStr]+=zoneErnteCurr[0][iTypeStr][iProdStr][i][0];
                        }
                    }
                }
            }
        }
        return production;
    }catch(err){
        GM_logError("getZoneProduction","zoneNrS="+zoneNrS+" timeBegin="+timeBegin+" timeEnd="+timeEnd,"",err);
        return {};
    }
}

function calcProductionTime(product, zoneNrF){
try{
    var bonus;
    var time;
    GM_log("calcProductionTime:"+ " product: "+product+" zoneNrF: "+zoneNrF );
    if (typeof zoneNrF=="undefined") {
        GM_log("calcProductionTime:"+ " product: "+product+" zoneNrF: "+zoneNrF );
        GM_log(calcProductionTime.caller);
        return 0;
    }
    switch(getBuildingTyp(zoneNrF)){
    case 1:
    case 4:
    case 13: //SushiBar
        bonus = getFarmZoneBonus(zoneNrF, product);
        time=(product==PRODSTOP?0:unsafeData.prodGrowTime[0][product]*60);
        time=calcDauer(time,bonus);
        break;
    case 2:
        bonus = getFarmZoneBonus(zoneNrF, product);
        time=(product==PRODSTOP?0:unsafeData.prodGrowTime[0][product]*60);
        time*=bonus;
        var zoneNrL=getZoneListId(zoneNrF);
        if(zoneList[zoneNrL][0][0]!=PRODSTOP){
            time -=zoneList[zoneNrL][0][1]*FEEDBONUSTIME[zoneList[zoneNrL][0][0]]/unsafeData.zones.getAnimals(zoneNrF);
            if(zoneList[zoneNrL][1][1]>0){
               time -=zoneList[zoneNrL][1][1]*FEEDBONUSTIME[zoneList[zoneNrL][1][0]]/unsafeData.zones.getAnimals(zoneNrF);
            }
        }
        break;
    case 3:
        bonus = getFarmZoneBonus(zoneNrF, product);
        time=(product==PRODSTOP?0:unsafeData.prodGrowTime[0][product]*60);
        time*=bonus;
        break;
    case 5: // Pony
        time = product == PRODSTOP ? 0 : 3600*product; // product is either 2, 4 or 8
        break;
    case 6: //Fuelstation
        zoneNrF=zoneNrF.split(".");
        var farmNR=Math.floor((zoneNrF[0]-1)/6)+1;
        var data=unsafeWindow.farms_data.farms[farmNR][unsafeData.zones.getLocation(zoneNrF[0]).zoneNr];
        time = product == PRODSTOP ? 0 : data.data.constants.slot_level[data.data.data.slots[zoneNrF[1]].level].duration;
        break;
    case "megafield":
        time=(product==PRODSTOP?0:unsafeData.prodGrowTime[4][product]*60);
        break;
    case "windmill":
        time=(product==PRODSTOP?0:parseInt(unsafeWindow.formulas[0][product][4],10));
        //time*=bonus;
        break;
    case "forest":
        bonus = getFarmZoneBonus(zoneNrF, product);
        time=(product==PRODSTOP?0:unsafeData.prodGrowTime[1][product]*60);
        time=calcDauer(time,bonus);
        break;
    case "sawmill":
    case "carpentry":
        bonus = getFarmZoneBonus(zoneNrF, product);
        time=(product==PRODSTOP?0:unsafeData.prodGrowTime[1][product]*60);
        time*=bonus;
        break;
    }
    return time;
}catch(err){
    GM_logError("calcProductionTime_Automat","product="+product+" zoneNrF="+zoneNrF,"",err);
    return 0;
}
}
function isVisibleZone(zoneNr){
    if(extendedListReg.test(zoneNr)){
        return false;
    }else if(isNaN(zoneNr)){
        zoneNr=zoneNr.toString().replace(/\.\d+$/,"");
        switch(zoneNr){
        case "windmill":
            return(unsafeData.gameLocation.check("city",2));
        break;
        case "sawmill": case "carpentry": case "forest":
            return(unsafeData.gameLocation.check("forestry"));
        break;
        case "foodworld-1": case "foodworld-2":case "foodworld-3":case "foodworld-4":
            return(unsafeData.gameLocation.check("foodworld"));
        break;
        case "farmersmarket-0": case "farmersmarket-1": case "farmersmarket-2":case "farmersmarket-3":case "farmersmarket-4":case "farmersmarket-5":case "farmersmarket-6":case "farmersmarket-7":case "farmersmarket-8":case "farmersmarket-9":case "farmersmarket-11":
            return(unsafeData.gameLocation.check("farmersmarket"));
        break;
        default:
            return false;
        }
    } else {
        zoneNr=(parseInt(zoneNr,10));
        return(unsafeData.gameLocation.check("farm",Math.floor((zoneNr-1)/6)));
    }
}
function getZoneTimes(zoneNrL){
// return: {"sawmill.1":1426123455,"sawmill.2":1426123455}
    GM_logInfo("getZoneTimes","zoneNrL="+zoneNrL,"","Begin",1);
    try{
        var help, fz;
        if(!settings.get("account","showQueueTime")){
            GM_logInfo("getZoneTimes","zoneNrL="+zoneNrL,"","End: disabled",1);
            return new Object();
        }
        noTime=false;
        var zoneTimes=new Object();
        if("megafield"==zoneNrL){
            for(var i=1,l=unsafeData.BUILDING_SLOTS["megafield"];i<=l;i++){
                fz="megafield."+i;
                help=unsafeData.zones.getEndtime(fz);
                zoneTimes[fz]=((help==NEVER)?now:help);
            }
        }else{
            for(var fz in unsafeData.ALL_SLOTS){
                if(!unsafeData.ALL_SLOTS.hasOwnProperty(fz)){ continue; }
                help=unsafeData.zones.getEndtime(fz);
                zoneTimes[fz]=((help==NEVER)?now:help);
            }
        }
        if(zoneNrL===undefined){
            GM_logInfo("getZoneTimes","zoneNrL="+zoneNrL,"","End",1);
            return zoneTimes.clone();
        }else{
            var returnn=new Object();
            var zones=getZonesFromList(zoneNrL);
            for(var i=0;i<zones.length;i++){
                returnn[zones[i]]=zoneTimes[zones[i]];
            }
            zoneTimes=null;
            GM_logInfo("getZoneTimes","zoneNrL="+zoneNrL,"","End",1);
            return returnn.clone();
        }
    }catch(err){
        GM_logError("getZoneTimes","zoneNrL="+zoneNrL,"",err);
        return new Object();
    }
}
function getFarmZonesTyp(zType){
    var zoneT=new Array();
    for(var fz=1;fz<=6*parseInt(unsafeWindow.farmamount,10);fz++){
        if(getBuildingTyp(fz)==zType || zType===undefined){
            zoneT.push(fz);
        }
    }
    return zoneT;
}
function getZoneActiveList(){
    GM_logInfo("getZoneActiveList","","","Begin",1);
    var zones=new Object();
    var returnn=new Array();
    for(var zoneNrF in zoneList){
        if(!zoneList.hasOwnProperty(zoneNrF)){continue;}
        zones[zoneList[zoneNrF]]=1;
    }
    for(var zoneNrL in zones){
        if(!zones.hasOwnProperty(zoneNrL)){continue;}
        returnn.push(zoneNrL);
    }
    zones=null;
    GM_logInfo("getZoneActiveList","","zoneNrL="+zoneNrL+" return="+implode(returnn,"getZoneActiveList/returnn"),"End",1);
    return returnn;
}
function getZonesFromList(zoneNrL){
    GM_logInfo("getZonesFromList","zoneNrL="+zoneNrL,"","Begin",1);
    var returnn=new Array(); // [[zoneNrF,slot],...]
    // if(isNaN(zoneNrL)){
    //  returnn.push(zoneNrL);
    // }else{
    var zoneNrS;
    if("megafield"==zoneNrL){
        for(var i=1,l=unsafeData.BUILDING_SLOTS["megafield"];i<=l;i++){
            zoneNrS="megafield."+i;
            if(!unsafeData.zones.getBlock(zoneNrS)){
                returnn.push(zoneNrS);
            }
        }
    }else{
        for(var zoneNrS in zoneToList){
            if(!zoneToList.hasOwnProperty(zoneNrS)){continue;}
            if(zoneToList[zoneNrS]==zoneNrL){
                //help=zoneNrS.split(".");
                //returnn.push([(isNaN(help[0])?help[0]:parseInt(help[0],10)),(help[1]?parseInt(help[1],10):null)]);
                returnn.push(zoneNrS);
            }
        }
    }
    GM_logInfo("getZonesFromList","zoneNrL="+zoneNrL,"return="+implode(returnn,"getZonesFromList/returnn"),"End",1);
    return returnn;
}
function createZoneList(zoneNrS){
    switch(getZoneType(zoneNrS)){
    case "windmill": zoneList[zoneNrS]=DEFAULT_ZONELIST_MILL_ARRAY.clone(); break;
    case 2: zoneList[zoneNrS]=DEFAULT_ZONELIST_ITEM_ARRAY2.clone(); break;
    default: zoneList[zoneNrS]=DEFAULT_ZONELIST_ITEM_ARRAY.clone();
    }
    GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList",implode(zoneList,"createZoneList"),"createZoneList");
}
function getZoneListId(zoneNrF,slot){
try{
    var zoneToListId = zoneNrF;
    // No configurable zone pairing for Megafield
    if("megafield"==getBuildingTyp(zoneNrF)){
        if(zoneNrF.match(/\.\d+$/)){
            zoneToListId=zoneNrF.toString().replace(/\.\d+$/,"");
        }
    }else if(unsafeData.zones.isMultiSlot(zoneNrF)&&(!zoneNrF.match(/\.\d+$/))){
        zoneToListId += "."+(slot?+slot:1);
    }

    if(!zoneToList[zoneToListId]){ setZoneListId(zoneToListId,zoneToListId); }
    if(!zoneList[zoneToList[zoneToListId]]){ createZoneList(zoneToList[zoneToListId]); }
    return zoneToList[zoneToListId];
}catch(err){GM_logError("getZoneListId","zoneNrF="+zoneNrF+" slot="+slot,"",err);}
}
function setZoneListId(zoneNrF,zoneNrL){
try{
    if(!unsafeData.ALL_SLOTS[zoneNrF]){ return false; }
    if((!extendedListReg.test(zoneNrL))&&(!unsafeData.ALL_SLOTS[zoneNrL])){ return false; }
    zoneToList[zoneNrF]=zoneNrL;
    GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneToList",implode(zoneToList,"setZoneListId/zoneToList"));
    GM_logInfo("setZoneListId","zoneNrF="+zoneNrF+" zoneNrL="+zoneNrL,"","Change Queue: Zone "+getZoneName(0,zoneNrF,zoneNrF,null,false,true,false,true)+" paired to Queue "+getZoneName(0,zoneNrL,zoneNrL,null,false,true,false,true));
}catch(err){GM_logError("setZoneListId","zoneNrF="+zoneNrF+" zoneNrL="+zoneNrL,"",err);}
}
function deleteZoneInList(zoneNrL){
try{
    delete zoneList[zoneNrL];
    delete zoneSettings[zoneNrL];
    for(var fz in zoneToList){
        if(!zoneToList.hasOwnProperty(fz)){ continue; }
        if(zoneToList[fz]==zoneNrL){ setZoneListId(fz,fz); }
    }
    GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneSettings",implode(zoneSettings,"deleteZoneInList/zoneSettings"));
    GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList",implode(zoneList,"deleteZoneInList/zoneList"));
    GM_logInfo("deleteZoneInList","zoneNrL="+zoneNrL,"","Remove General Queue:"+extendedListReg.exec(zoneNrL)[1]);
}catch(err){GM_logError("deleteZoneInList","zoneNrL="+zoneNrL,"",err);}
}
function addZoneToList(){
try{
    var newZone=1;
    for(var lz in zoneList){
        if(!zoneList.hasOwnProperty(lz)){ continue; }
        if(extendedListReg.test(lz)){
            if(extendedListReg.exec(lz)[1]!=newZone) break;
            newZone++;
        }
    }
    zoneList[ExtendedListCHAR+newZone]=DEFAULT_ZONELIST_ITEM_ARRAY.clone();
    // GM_log("zoneList "+ implode(zoneList,"addZoneToList/zoneList"));
    zoneList.sortObj();
    // GM_log("zoneList "+ implode(zoneList,"addZoneToList/zoneList"));
    zoneSettings[ExtendedListCHAR+newZone]={"repeat":false,"shuffle":false};
    GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneToList",implode(zoneToList,"addZoneToList/zoneToList"));
    GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneSettings",implode(zoneSettings,"addZoneToList/zoneSettings"));
    GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList",implode(zoneList,"addZoneToList/zoneList"));
    GM_logInfo("addZoneToList","","","Adding General Queue:"+newZone);
    return ExtendedListCHAR+newZone;
}catch(err){GM_logError("addZoneToList","","",err);}
}
function getFarmZone(gardenNr, farm){
    if(farm==null || farm===undefined){ farm=unsafeWindow.farm; }
    if(isNaN(gardenNr)){ return gardenNr; }
    else { return parseInt(gardenNr,10) + 6*(parseInt(farm,10)-1); }
}
function getGarden(zoneNr){
    var zoneNrF=zoneNr.toString().replace(/\.\d+$/g,"");
    if(isNaN(zoneNrF)){
        switch(zoneNrF){
        case "windmill":
            return "windmill";
        break;
        case "forest":case "sawmill":case "carpentry":
            return "forestry";
        break;
        case "foodworld-1": case "foodworld-2":case "foodworld-3":case "foodworld-4":
          return "foodworld";
        break;
        case "farmersmarket-0":case "farmersmarket-1":case "farmersmarket-2":case "farmersmarket-3":case "farmersmarket-4":case "farmersmarket-5":case "farmersmarket-6":case "farmersmarket-7": case "farmersmarket-8":  case "farmersmarket-9":case "farmersmarket-11":
          return "farmersmarket";
        break;
        case "megafield":
            return "megafield";
        break;
        case "map_stall1": case "map_stall2":
            return "map_stall";
        break;
        default:
            GM_logWarning("getGarden","zoneNr="+zoneNr,"","Zone unknown. Function returns null");
            return null;
        }
    }else{
        return (((parseInt(zoneNrF,10)-1)%6)+1);
    }
}
function getZoneStockType(zoneNrFL){//zoneNrFL=zoneNrF or zoneNrL
    var fzType=getBuildingTyp(zoneNrFL);
    if(extendedListReg.test(zoneNrFL)){//extended list is always a field of type 1
        return 0;
    }else{
        switch(fzType){
        case "megafield":
            return 4;
        break;
        case "windmill":
            return 3;
        break;
        case "sawmill":case "carpentry":case "forest":
            return 1;
        break;
        default:
            return 0;
        }
    }
}
function getZoneType(zoneNr){
    try{
        if(extendedListReg.test(zoneNr)){ //extended is always a field of type 1
            return 1;
        }else{
            return unsafeData.zones.getBuilding(zoneNr);
        }
    }catch(err){GM_logError("getZoneType","","",err);}
}
function getBuildingTyp(zoneNr){
    try{
    var zoneType=getZoneType(zoneNr);
    if(unsafeData.BUILDINGTYPE[zoneType]===undefined){
        return zoneType;
    }else{
        return unsafeData.BUILDINGTYPE[zoneType];
    }
    }catch(err){ GM_logError("getBuildingTyp","zoneNr="+zoneNr,"",err); }
}
function getZoneNameCorrected(zoneNrFL){
    if(extendedListReg.test(zoneNrFL)){//extended is always a field
        return zoneNrFL;
    }else if(isNaN(zoneNrFL)){//all zones not fields
        return zoneNrFL.match(/[^A-z]*([A-z]*)[^A-z]*/)[1];
    }else{
        return zoneNrFL;
    }
}
function getOpenZoneNrF(){
    var zoneNr=null;
    if($("gardenmaincontainer").style.display=="block"){
        zoneNr=parseInt($("gardenmaincontainer").getAttribute("zoneNr"),10);
    }else if($("innermaincontainer").style.display=="block"){
        zoneNr=parseInt($("innermaincontainer").getAttribute("zoneNr"),10);
    }
    return zoneNr;
}
function getZoneName(recursionCount,zoneNrS,zoneNrL,queueNum,showPaired,showLocation,showBonus,showName){
try{
    // showPaired: Amount of digits for displaying
    if(recursionCount>10){throw("TOO MUCH RECURSION")}
    GM_logInfo("getZoneName","recursionCount="+recursionCount+" zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL,"","Begin",1);
    if(showName===undefined){ showName=true; }
    zoneNrS=zoneNrS.toString();
    var zoneNrF=zoneNrS.replace(/\.\d+$/,"");
    var zones=getZonesFromList(zoneNrL);
    var txt="", txtLength=0, txtNew;
    if((extendedList=extendedListReg.exec(zoneNrL))!=null){
        txt=getText("automat_titleGeneral").replace(" ","&nbsp;")+"&nbsp;"+extendedList[1];
        // TODO ?
        // if(zones.length==1){
        //     txt +="&nbsp;("+ getZoneName(recursionCount+1,zones[0],zoneNrL,null,false,false,showBonus,showName) + ")";
        // }
    }else if(showPaired&&("megafield"!=zoneNrS)&&(zones.length > 1 || zoneNrS!=zoneNrL)){
        // if(showName) txt +=unsafeWindow.buildinginfos[0][unsafeData.zones.getBuilding(zoneNrF)][10].replace(" ","&nbsp;")+"&nbsp;";
        if(showName){
            txt +=(isNaN(zoneNrF)?getText(getZoneType(zoneNrF)):unsafeWindow.buildinginfos[0][getZoneType(zoneNrF)][10].replace(" ","&nbsp;"))+"&nbsp;";
        }
        if(showLocation){
            txt+='<span style="font-weight:bold;color:#505050;">';
            for(var i=0;i<zones.length;i++){
                zones[i]=[zones[i].toString().replace(/\..*$/,""),zones[i]];
                if(i>0){
                    txt +="|";
                    txtLength+=1;
                }
                if(zones[i][0]==zoneNrF) txt+="</span>";
                if(zones[i][0]==zoneNrL) txt+="<u>";
                txtNew=getZoneName(recursionCount+1,zones[i][1],zoneNrL,null,false,true,false,(zones.length==1));
                if(txtLength+txtNew.length > showPaired){
                    txtNew="...";
                }
                    txt += txtNew;
                    txtLength+=txtNew.length;

                if(zones[i][0]==zoneNrL) txt+="</u>";
                if(zones[i][0]==zoneNrF) txt+='<span style="font-weight:bold;color:#505050;">';
                if("..."==txtNew){ break; }
            }
            txt+="</span>";
            if(settings.get("account","useQueueList") && queueNum!=null && queueNum>=0) txt+="&nbsp;{" + queueNum + "}";
            zones=null;lz=null;
        }
    }else{
        switch(getBuildingTyp(zoneNrF)){
            case 1:
                if(settings.get("account","useQueueList") && showLocation && queueNum!=null && queueNum>=0){ //  && showPaired
                    txt="&nbsp;{" + queueNum + "}";
                }
                if(showBonus){
                    var currBonus=unsafeData.zones.getBonus(zoneNrF);
                    var currBonusSpecial=unsafeData.zones.getBonusSpecial(zoneNrF);
                    txt='<div style="position:relative;display:inline-block;">';
                    if(currBonus>0){
                        txt+='<span>'+currBonus+'%</span>';
                    }
                    if(currBonusSpecial){
                        txt+='<span>,</span><span><div class="kp'+currBonusSpecial[0]+'" style="display:inline-block;"></div>'+(currBonus+currBonusSpecial[1])+'%</span>';
                    }
                    txt+='</div>';
                }
                break;
            case 2:
                if(showBonus){
                    if(unsafeData.zones.getBonus(zoneNrF)>0){
                        txt+=unsafeData.zones.getBonus(zoneNrF)+"%";
                    }
                    if(txt!="") txt+=",";
                    txt+="#"+unsafeData.zones.getAnimals(zoneNrF);
                }
                break;
            case 3:
                if(showBonus && unsafeData.zones.getBonus(zoneNrF)>0){
                    txt=unsafeData.zones.getBonus(zoneNrF)+"%";
                }
                break;

            case 6: //Fuelstation
                break;
            default:
                if(showBonus && unsafeData.zones.getBonus(zoneNrF)>0){
                    txt=unsafeData.zones.getBonus(zoneNrF)+"%";
                }
        }
        if(showLocation){
            txt=(zoneNrS.toString().match(/\./)?"["+zoneNrS.replace(/^.*\./,"")+"]":"")+(txt!=""?"&nbsp;("+txt+")":"");
            if(!isNaN(zoneNrF)){
                txt=Math.ceil(zoneNrF/6)+"."+getGarden(zoneNrF)+txt;
            }
        }
        if(showName){
            txt=(isNaN(zoneNrF)?getText(getZoneType(zoneNrF)):unsafeWindow.buildinginfos[0][getZoneType(zoneNrF)][10].replace(" ","&nbsp;"))+"&nbsp;"+txt;
        }
    }
    GM_logInfo("getZoneName","zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL,"zoneNrF="+zoneNrF,"End",1);
    return txt;
}catch(err){
    GM_logError("getZoneName","zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL,"zoneNrF="+zoneNrF,err);
    return "Error. See console.";
}
}

function drawAutomatIcon(name,zoneNrS,appendTo,style){
try {
    GM_logInfo("drawAutomatIcon","name="+name+" zoneNrS="+zoneNrS,"","Begin",1);
    if(!(automatIcons[name]&&automatIcons[name][1])){
        automatIcons[name]=[zoneNrS];
        switch(getBuildingTyp(zoneNrS)){
        case "windmill":
            automatIcons[name][1]=createElement("div",{"id":"divAutomatIcon_"+name,"class":"link divWindmillIcon","product":PRODSTOP,"zoneNrS":zoneNrS,"style":style},appendTo);
            createElement("div",{"class":"fmm"+PRODSTOP,"style":"position:relative;"},automatIcons[name][1]);
        break;
        case "forest":case "sawmill":case "carpentry":
            automatIcons[name][1]=createElement("div",{"id":"divAutomatIcon_"+name,"class":"link divForestryIcon","product":PRODSTOP,"zoneNrS":zoneNrS,"style":style},appendTo);
            createElement("div",{"class":"f_symbol"+PRODSTOP,"style":"position:relative;"},automatIcons[name][1]);
        break;
        case 4:
            automatIcons[name][1]=createElement("div",{"id":"divAutomatIcon_"+name,"class":"link divFoodworldIcon","product":PRODSTOP,"zoneNrS":zoneNrS,"style":style},appendTo);
        break;
        case 5:     // Pony is fine with standard PRODSTOP icon
        case 7:     //monster fruit culture
        case 11:    //map_stall
        case 13:    //SushiBar
        default:
            automatIcons[name][1]=createElement("div",{"id":"divAutomatIcon_"+name,"class":"link divZoneIcon v"+PRODSTOP,"product":PRODSTOP,"zoneNrS":zoneNrS,"style":style},appendTo);
        }
        automatIcons[name][1].addEventListener("click", function(event){
        try {
            event.stopPropagation();
            var zoneNrF=getFarmZone(this.id.replace("divAutomatIcon_","").replace("global_",""));
            var zoneNrS=this.getAttribute("zoneNrS");
            var zoneNrL=getZoneListId(zoneNrS);
            switch(getBuildingTyp(zoneNrS)){
            case 1:
                if(settings.get("account","useQueueList")){
                    redrawQueueBox(zoneNrS, zoneNrL, $("divQueueBoxInner"));
                }else{
                    drawQueueChooseItemBox(zoneNrS, zoneNrL, 0, $("divChooseBoxInner"));
                }
            break;
            case 2:
                drawStableChooseFeedBox(zoneNrS, zoneNrL,$("divChooseBoxInner"));
            break;
            case 3:
            case 13: //Sushibar
                if(settings.get("account","useQueueList")){
                    redrawQueueBox(zoneNrS, zoneNrL, $("divQueueBoxInner"));
                }else{
                    drawFactoryChooseItemBox(zoneNrS, zoneNrL,$("divChooseBoxInner"));
                }
            break;
            case 5: // Pony does not support Queues
                // if(settings.get("account","useQueueList")){
                //     redrawQueueBox(zoneNrS, zoneNrL, $("divQueueBoxInner"));
                // }else{
                    drawChooseItemBoxPony(zoneNrS, zoneNrL, 0, $("divChooseBoxInner"));
                // }
            break;
            case 4:
            case "windmill":
            case "forest":case "sawmill":case "carpentry":
            case "megafield":
                redrawQueueBox(zoneNrS, zoneNrL, $("divQueueBoxInner"));
            break;
            case 6: //Fuelstation
                drawFuelstationChooseItemBox(zoneNrS, zoneNrL,$("divChooseBoxInner"));
            break;
            case 7: //monster fruit culture
                drawMonsterfruitChooseItemBox(zoneNrS, zoneNrL,$("divChooseBoxInner"));
            break;
            case 11: //Obststand / map_stall1
                drawQueueMapStall1ItemBox(zoneNrS, zoneNrL, $("divChooseBoxInner"));
            break;
            default:
                throw("Building type '"+getBuildingTyp(zoneNrS)+"' unknown.");
            }
            zoneNrF=null;zoneNrS=null;zoneNrL=null;
        }catch(err){GM_logError("automatIcon.click","$('"+this.id+"') zoneNrF="+zoneNrF+" zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL,"",err);}
        },false);
        if (zoneNrS=="farmersmarket-3.1"||zoneNrS=="farmersmarket-3.2"||zoneNrS=="farmersmarket-3.3"){
            automatIcons[name][1].addEventListener("mouseover", function(event){
                var newnode = top.document.getElementById('megafruit_need_item'+1+'_tt').cloneNode(true);
                newnode.removeChild(newnode.lastElementChild);
                toolTip.show(event, newnode.innerHTML);
            },false);
        } else if(!(zoneNrS=="farmersmarket-4.5"||zoneNrS=="farmersmarket-4.6"||zoneNrS=="farmersmarket-4.7"||zoneNrS.match("map_stall1")||zoneNrS.match("map_stall2"))) {
            //toolTip von  farmersmarket-4 slot 5 bis 7 und map_stall/Obstand ausblenden
            automatIcons[name][1].addEventListener("mouseover", function(event){
                toolTip.show(event, toolTipProductSmall(this.getAttribute("zoneNrS"),this.getAttribute("zoneNrL"),0,this));
            },false);
        }
        updateQueueBox(zoneNrS);
    }else if(appendTo&&(!automatIcons[name][1].offsetParent)){
        // append again
        appendTo.appendChild(automatIcons[name][1]);
    }
    GM_logInfo("drawAutomatIcon","zoneNrS="+zoneNrS,"","End",1);
}catch(err){GM_logError("drawAutomatIcon","zoneNrS="+zoneNrS,"",err);}
}

function drawQueueBox(zoneNrS, zoneNrL, appendTo){
try{
    GM_logInfo("drawQueueBox","zoneNrS="+zoneNrS +" zoneNrL="+zoneNrL +" appendTo.id="+appendTo.id,"","Begin",1);
    if(zoneNrS===undefined){ return; }
    if(zoneNrL===undefined || zoneNrL==null){ zoneNrL=getZoneListId(zoneNrS); }
    var fzType=getBuildingTyp(zoneNrS);
    appendTo.innerHTML="";
    appendTo.style.display="none";
    appendTo.setAttribute("zoneNrS",zoneNrS);
    appendTo.setAttribute("zoneNrL",zoneNrL);

    createElement("div",{id:"divAutoMatTitle_"+zoneNrL,"class":"queueTitle"},appendTo, getZoneName(0,zoneNrS, zoneNrL, null, 50, true, true));
    createElement("div",{id:"divAutoMatEndTime"+zoneNrL,"class":"queueTime"},appendTo);
    createElement("div",{style:"clear:both;"},appendTo);
    createElement("div",{id:"divAutoMatButton"+zoneNrL, "class":"queueBoxerButton"},appendTo);

    // Repeat button
    if(OPTION_LIST_REPEAT && zoneSettings[zoneNrL]["repeat"]!=undefined){
        newelm=createElement("div",{id:"divAutoMatButtonRepeat"+zoneNrL,"class":"link queueButtonRepeat"},$("divAutoMatButton"+zoneNrL));
        newelm.addEventListener("mouseover", function(event){
            var zoneNrL=this.parentNode.parentNode.getAttribute("zoneNrL");
            toolTip.show(event, zoneSettings[zoneNrL]["repeat"]?getText("automat_repeat_on"):getText("automat_repeat_off"));
        },false);
        newelm.style.backgroundImage=(zoneSettings[zoneNrL]["repeat"])?"url("+IMAGES["repeat_on"]+")":"url("+IMAGES["repeat_off"]+")";
        newelm.addEventListener("click", function(){
            var zoneNrS=this.parentNode.parentNode.getAttribute("zoneNrS");
            var zoneNrL=this.parentNode.parentNode.getAttribute("zoneNrL");
            zoneSettings[zoneNrL]["repeat"]=!zoneSettings[zoneNrL]["repeat"];
            this.style.backgroundImage=(zoneSettings[zoneNrL]["repeat"])?"url("+IMAGES["repeat_on"]+")":"url("+IMAGES["repeat_off"]+")";
            if(!zoneSettings[zoneNrL]["repeat"]){ for(var i=0;i<zoneList[zoneNrL].length;i++) zoneList[zoneNrL][i][2]=0;} //reset when disabling
            updateQueueBox(zoneNrS, zoneNrL);
            toolTip.adjust(this);
        },false);
    }
    // Shuffle button
    newelm=createElement("div",{id:"divAutoMatButtonShuffle"+zoneNrL,"class":"link queueButtonShuffle"},$("divAutoMatButton"+zoneNrL));
    newelm.addEventListener("mouseover", function(event){
        var zoneNrL=this.parentNode.parentNode.getAttribute("zoneNrL");
        toolTip.show(event, zoneSettings[zoneNrL]["shuffle"]?getText("automat_shuffle_on"):getText("automat_shuffle_off"));
    },false);
    newelm.style.backgroundImage=(zoneSettings[zoneNrL]["shuffle"])?"url("+IMAGES["shuffle_on"]+")":"url("+IMAGES["shuffle_off"]+")";
    newelm.addEventListener("click",function(){
        var zoneNrS=this.parentNode.parentNode.getAttribute("zoneNrS");
        var zoneNrL=this.parentNode.parentNode.getAttribute("zoneNrL");
        zoneSettings[zoneNrL]["shuffle"]=!zoneSettings[zoneNrL]["shuffle"];
        this.style.backgroundImage=(zoneSettings[zoneNrL]["shuffle"])?"url("+IMAGES["shuffle_on"]+")":"url("+IMAGES["shuffle_off"]+")";
        updateQueueBox(zoneNrS, zoneNrL);
        toolTip.adjust(this);
    },false);
    // Rotate button
    newelm=createElement("div",{id:"divAutoMatButtonRotate"+zoneNrL,"class":"link queueButtonRotate"},$("divAutoMatButton"+zoneNrL));
    newelm.addEventListener("mouseover", function(event){ toolTip.show(event, getText("automat_rotate"));},false);
    newelm.style.backgroundImage="url("+IMAGES["rotate"]+")";
    newelm.addEventListener("click",function(){
        var zoneNrS=this.parentNode.parentNode.getAttribute("zoneNrS");
        var zoneNrL=this.parentNode.parentNode.getAttribute("zoneNrL");
        zoneList[zoneNrL].push(zoneList[zoneNrL].splice(0,1)[0]);
        updateQueueBox(zoneNrS, zoneNrL);
    },false);
    // add button.
    newelm=createElement("div",{id:"divAutoMatButtonAdd"+zoneNrL,"class":"link queueButtonAdd"},$("divAutoMatButton"+zoneNrL));
    newelm.addEventListener("mouseover", function(event){ toolTip.show(event, getText("automat_QueAddText"));},false);
    newelm.addEventListener("click",function(){
        var zoneNrS=this.parentNode.parentNode.getAttribute("zoneNrS");
        var zoneNrL=this.parentNode.parentNode.getAttribute("zoneNrL");
        var lRepeat=(!OPTION_LIST_REPEAT || zoneNrS=="windmill")?false:!settings.get("account","useQueueList")?false:zoneSettings[zoneNrL]["repeat"]===undefined?false:zoneSettings[zoneNrL]["repeat"];
        var lShuffle=!settings.get("account","useQueueList")?false:zoneSettings[zoneNrL]["shuffle"]===undefined?false:zoneSettings[zoneNrL]["shuffle"];
        var product=(zoneNrS=="windmill"?(lShuffle?zoneList[zoneNrL][zoneList[zoneNrL].length-1][0]:PRODSTOP):(lRepeat||lShuffle?zoneList[zoneNrL][zoneList[zoneNrL].length-1][0]:PRODSTOP));
        var queueNum=zoneList[zoneNrL].push(DEFAULT_ZONELIST_ITEM.clone())-1;
        zoneList[zoneNrL][queueNum][0]=product;
        reFillQueueBox(zoneNrS, zoneNrL, queueNum);
        click($("divAutoMatQueueItemBox"+zoneNrL+"Q"+queueNum+"Item"));
        product=null;
    },false);

    if(fzType=="windmill"){
        // Clear mill-list then add all button
        newelm=createElement("div",{id:"divAutoMatButtonAddAll"+zoneNrL,"class":"link queueButtonAddAll"},$("divAutoMatButton"+zoneNrL));
        createElement("img",{id:"divAutoMatButtonAddAll",style:"width:21px;height:15px;top:1px;left:1px;",src:IMAGES["reload_all"]},newelm);
        newelm.addEventListener("mouseover", function(event){ toolTip.show(event, getText("automat_MillClearAddAll"));},false);
        newelm.addEventListener("click",function(){
            var zoneNrS=this.parentNode.parentNode.getAttribute("zoneNrS");
            var zoneNrL=this.parentNode.parentNode.getAttribute("zoneNrL");
            zoneList[zoneNrL]=new Array();
            for(var iProd in autoMillStorage){
                if(!autoMillStorage.hasOwnProperty(iProd)){continue;}
                if(autoMillStorage[iProd][0]){
                    zoneList[zoneNrL].push([iProd,autoMillStorage[iProd][0],0]);
                }
            }
            if(zoneList[zoneNrL].length<=0) zoneList[zoneNrL]=DEFAULT_ZONELIST_MILL_ARRAY.clone();
            reFillQueueBox(zoneNrS, zoneNrL, 0);
        },false);
    }
    if(fzType=="sawmill"||fzType=="carpentry"||fzType=="forest"){
        //TODO add button for sawmill/carpentry/forest
        //TODO add button for needed in prodMinRack
    }
    if(!isNaN(zoneNrS)){
        // copy button
        newelm=createElement("div",{id:"divAutoMatButtonCopy"+zoneNrL,"class":"link queueButtonCopy"},$("divAutoMatButton"+zoneNrL));
        newelm.addEventListener("mouseover", function(event){ toolTip.show(event, getText("automat_QueCopyTextHeader"));},false);
        newelm.addEventListener("click",function(){
            var zoneNrL=this.parentNode.parentNode.getAttribute("zoneNrL");
            var appendTo=this.parentNode.parentNode.id;

            $("divQueueBoxInner").innerHTML="";
            $("divQueueBoxInner").style.display="none";
            $("divQueueBoxInner").setAttribute("zoneNrS","");
            $("divQueueBoxInner").setAttribute("zoneNrL",zoneNrL);
            $("divQueueBoxInner").setAttribute("reAppendTo",appendTo);

            createElement("div",{"class":"headline divQueueItemListHeader"},$("divQueueBoxInner"),getText("automat_QueCopyTextHeaderFrom"));
            createElement("div",{id:"farmZoneFrom","class":"divQueueItemListBox"},$("divQueueBoxInner"));
            drawQueueListSmall(zoneNrL, zoneNrL, $("farmZoneFrom"));

            createElement("div",{"class":"headline divQueueItemListHeader"},$("divQueueBoxInner"),getText("automat_QueCopyTextHeaderTo"));
            var selectDiv=createElement("select",{id:"copyZone","class":"divQueueItemListSelect"},$("divQueueBoxInner"));
            createElement("option",{value:"-"},selectDiv,"-");
            for(var lz in zoneList){
                if(!zoneList.hasOwnProperty(lz)){ continue; }
                if(((!extendedListReg.test(lz) && getBuildingTyp(lz)==1)||(extendedListReg.test(lz)))&& lz!=zoneNrL){
                    createElement("option",{value:lz},selectDiv,getZoneName(0,lz,lz,null,false,true,false));
                }
            }
            selectDiv.value="-";
            selectDiv.addEventListener("change", function(event){
                if(this.value!="-"){
                    drawQueueListSmall(this.value, this.value, $("farmZoneTo"));
                }else{
                    $("farmZoneTo").innerHTML="";
                }
            },false);
            selectDiv=null;

            createElement("div",{id:"farmZoneTo","class":"divQueueItemListBox"},$("divQueueBoxInner"));

            createElement("div",{style:"clear:both;"},$("divQueueBoxInner"));
            divfooter=createElement("div",{"class":"divQueueItemListFooter"},$("divQueueBoxInner"));

            var newdiv=createElement("div",{style:"position:absolute;top:0px;left:100px;","class":"link"},divfooter);
            createElement("img",{src:GFX + "button_ok.png"},newdiv);
            newdiv.addEventListener("click", function(event){
                var zoneNrL=this.parentNode.parentNode.getAttribute("zoneNrL");
                var toZone=$("copyZone").value;
                // GM_log("Copy "+ zoneNrL+ " to " + toZone);
                if(toZone!="-"){
                    zoneList[toZone]=zoneList[zoneNrL].clone();
                    zoneSettings[toZone]=zoneSettings[zoneNrL].clone();
                    GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList", implode(zoneList,"drawQueueBox/zoneList"));
                    GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneSettings",implode(zoneSettings,"drawQueueBox/zoneSettings"));
                }
                // reopen the correct queuelist. In general mode this can only be the general list.
                var reAppendTo=this.parentNode.parentNode.getAttribute("reappendto");
                toZone=(toZone=="-")?zoneNrL:toZone;
                if(reAppendTo.indexOf("tdAutoMatOverview")==0){ //NOTE overview has the zoneNrL addend to it.
                    reAppendTo="tdAutoMatOverview"+toZone;
                }
                if($(reAppendTo)){
                    redrawQueueBox(toZone, toZone, $(reAppendTo));
                }else{
                    click($("divQueueBoxClose"));
                }
            },false);
            newdiv.addEventListener("mouseover", function(event){
                this.src=GFX + "button_ok_over.png";
                toolTip.show(event,unsafeWindow.commitbox_text_yes);
            },false);
            newdiv.addEventListener("mouseout", function(event){
                this.src=GFX + "button_ok.png";
            },false);

            var newdiv=createElement("div",{style:"position:relative;top:0px;left:200px;","class":"link"},divfooter);
            createElement("img",{src:GFX + "button_no.png"},newdiv);
            newdiv.addEventListener("click", function(event){
                var zoneNrS=this.parentNode.parentNode.getAttribute("zoneNrS");
                var zoneNrL=this.parentNode.parentNode.getAttribute("zoneNrL");
                var reAppendTo=this.parentNode.parentNode.getAttribute("reappendto");
                if(reAppendTo=="divQueueBoxInner"){
                    redrawQueueBox(zoneNrS, zoneNrL, $(reAppendTo));
                }else if($("divQueueBox").style.display=="block"){
                    click($("divQueueBoxClose"));
                }
            },false);
            newdiv.addEventListener("mouseover", function(event){
                this.src=GFX + "button_no_over.png";
                toolTip.show(event,unsafeWindow.commitbox_text_no);
            },false);
            newdiv.addEventListener("mouseout", function(event){
                this.src=GFX + "button_no.png";
            },false);
            newdiv=null;
            //TODO this goes wrong needs appento==
            $("divQueueBoxInner").style.display="block";
            $("divQueueBox").style.display="block";
            $("divQueueBox").style.top=Math.round(255 - $("divQueueBox").offsetHeight/2)+"px";
        },false);
    }

    createElement("div",{id:"divAutoMatQueueBox"+zoneNrL,"class":"queueBoxerQueueBox"},appendTo);
    for(queueNum=0;queueNum<zoneList[zoneNrL].length; queueNum++){
        drawQueueItemBox(zoneNrS, zoneNrL, queueNum, $("divAutoMatQueueBox"+zoneNrL));
    }

    var newscrL=createElement("div",{id:"divAutoMatScrollLeft"+zoneNrL, "class":"link queueButtonScrollLeft"},settings.get("account","showQueueTime")?$("divAutoMatButton"+zoneNrL):appendTo);
    var newscrR=createElement("div",{id:"divAutoMatScrollRight"+zoneNrL, "class":"link queueButtonScrollRight"},settings.get("account","showQueueTime")?$("divAutoMatButton"+zoneNrL):appendTo);
    newscrL.addEventListener("click", function(){
        var zoneNrL=this.id.replace("divAutoMatScrollLeft","");
        // GM_log("click divAutoMatScrollLeft :" + zoneNrL);
        var scrlelm=$("divAutoMatQueueBox"+zoneNrL);
        if(scrlelm.scrollLeft > 0){
            scrlelm.scrollLeft=Math.max(0,scrlelm.scrollLeft-queueItemBoxWidth);
        }
        this.style.visibility=(scrlelm.scrollLeft>0?"visible":"hidden");
        $("divAutoMatScrollRight"+zoneNrL).style.visibility=((scrlelm.scrollLeft + scrlelm.clientWidth)<scrlelm.scrollWidth?"visible":"hidden");
        scrlelm=null;
    },false);
    newscrR.addEventListener("click", function(){
        var zoneNrL=this.id.replace("divAutoMatScrollRight","");
        // GM_log("click divAutoMatScrollRight :" + zoneNrL);
        var scrlelm=$("divAutoMatQueueBox"+zoneNrL);
        if((scrlelm.scrollLeft + scrlelm.clientWidth)<scrlelm.scrollWidth){
            scrlelm.scrollLeft=Math.min((scrlelm.scrollWidth-scrlelm.clientWidth),((scrlelm.scrollLeft+queueItemBoxWidth)-((scrlelm.scrollLeft+queueItemBoxWidth)%queueItemBoxWidth)));
        }
        $("divAutoMatScrollLeft"+zoneNrL).style.visibility=(scrlelm.scrollLeft>0?"visible":"hidden");
        this.style.visibility=((scrlelm.scrollLeft + scrlelm.clientWidth)<scrlelm.scrollWidth?"visible":"hidden");
        scrlelm=null;
    },false);
    createElement("div",{style:"clear:both;"},appendTo);

    updateQueueBox(zoneNrS, zoneNrL);

    appendTo.style.display="block";
    if(appendTo==$("divQueueBoxInner")){
        $("divQueueBox").style.display="block";
        $("divQueueBox").style.top=Math.round(255 - $("divQueueBox").offsetHeight/2)+"px";
    }
    var scrlelm=$("divAutoMatQueueBox"+zoneNrL);
    scrlelm.scrollLeft=0;
    $("divAutoMatScrollLeft"+zoneNrL).style.display=((scrlelm.scrollWidth > scrlelm.clientWidth)?"block":"none");
    $("divAutoMatScrollRight"+zoneNrL).style.display=((scrlelm.scrollWidth > scrlelm.clientWidth)?"block":"none");
    $("divAutoMatScrollLeft"+zoneNrL).style.visibility=(scrlelm.scrollLeft>0?"visible":"hidden");
    $("divAutoMatScrollRight"+zoneNrL).style.visibility=((scrlelm.scrollLeft + scrlelm.clientWidth)<scrlelm.scrollWidth?"visible":"hidden");

    GM_logInfo("drawQueueBox","zoneNrS="+zoneNrS +" zoneNrL="+zoneNrL +" appendTo.id="+appendTo.id,"","End",1);
    newlayer=null;newelm=null;newscrL=null;newscrR=null;scrlelm=null;appendTo=null;
}catch(err){GM_logError("drawQueueBox","zoneNrS="+zoneNrS +" zoneNrL="+zoneNrL +" appendTo.id="+appendTo.id,"",err);}
}
function drawQueueItemBox(zoneNrS, zoneNrL, queueNum, appendTo){
try{
    GM_logInfo("drawQueueItemBox","zoneNrS="+zoneNrS +" zoneNrL="+zoneNrL +" queueNum="+queueNum+" appendTo.id="+appendTo.id,"","Begin",1);
    if(zoneNrL===undefined || zoneNrL==null){ zoneNrL=getZoneListId(zoneNrS); }
    var fzType=getBuildingTyp(zoneNrS);
    // begin adding new box
    var newlayerId="divAutoMatQueueItemBox"+zoneNrL+"Q"+queueNum;
    var newlayer=createElement("span",{id:newlayerId,"class":"queueItemBox","style":"cursor:default;"},appendTo);
    newlayer.setAttribute("zoneNrS",zoneNrS);
    newlayer.setAttribute("zoneNrL",zoneNrL);
    newlayer.setAttribute("queueNum",queueNum);

    // UP Button
    var newelm=createElement("div",{id:newlayerId+"Up",alt:"up","class":"link queueItemButton queueItemUpButton"},newlayer);
    newelm.addEventListener("mouseover", function(event){ toolTip.show(event, getText("automat_QueUpButton"));},false);
    newelm.addEventListener("click", function(){
        var zoneNrS=this.parentNode.getAttribute("zoneNrS");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
        // GM_log("swap" + queueNum + " : " + queueNum-1);
        zoneList[zoneNrL].swap(queueNum, queueNum-1);
        // GM_log("Before scrollTop:" + $("divAutoPflanzeQueBox"+zoneNrL).scrollTop);
        $("divAutoMatQueueBox"+zoneNrL).scrollLeft=Math.max(0,Math.min($("divAutoMatQueueBox"+zoneNrL).scrollWidth,((queueNum+2)*queueItemBoxWidth)) - $("divAutoMatQueueBox"+zoneNrL).clientWidth);
        // GM_log("After scrollTop:" + $("divAutoPflanzeQueBox"+zoneNrL).scrollTop);
        updateQueueBox(zoneNrS, zoneNrL);
        zoneNr=null;zoneNrL=null;queueNum=null;
    },false);

    // Down Button
    newelm=createElement("div",{id:newlayerId+"Down",alt:"down","class":"link queueItemButton queueItemDownButton"},newlayer);
    newelm.addEventListener("mouseover", function(event){ toolTip.show(event, getText("automat_QueDownButton"));},false);
    newelm.addEventListener("click", function(){
        var zoneNrS=this.parentNode.getAttribute("zoneNrS");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
        // GM_log("swap" + queueNum + " : " + queueNum+1);
        zoneList[zoneNrL].swap(queueNum, queueNum+1);
        // GM_log("Before scrollTop:" + $("divAutoPflanzeQueBox"+zoneNrL).scrollTop);
        $("divAutoMatQueueBox"+zoneNrL).scrollLeft=Math.max(0,Math.min($("divAutoMatQueueBox"+zoneNrL).scrollWidth,((queueNum+2)*queueItemBoxWidth)) - $("divAutoMatQueueBox"+zoneNrL).clientWidth);
        // GM_log("After scrollTop:" + $("divAutoPflanzeQueBox"+zoneNrL).scrollTop);
        updateQueueBox(zoneNrS, zoneNrL);
        zoneNrS=null;zoneNrL=null;queueNum=null;
    },false);

    // Item
    if(fzType=="windmill"){
        newelm=createElement("div",{"id":newlayerId+"Item","class":"link windmillItemProduct"},newlayer);
        createElement("div",{"class":"fmm"+PRODSTOP,style:"position:relative;"},newelm);
    }else if(fzType=="sawmill"||fzType=="carpentry"||fzType=="forest"){
        newelm=createElement("div",{"id":newlayerId+"Item","class":"link forestryItemProduct"},newlayer);
        createElement("div",{"class":"f_symbol"+PRODSTOP,style:"position:relative;"},newelm);
    }else{
        newelm=createElement("div",{id:newlayerId+"Item","class":"link queueItemProduct v"+PRODSTOP},newlayer);
    }
    newelm.addEventListener("click", function(){
        var zoneNrS=this.parentNode.getAttribute("zoneNrS");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
        switch(getBuildingTyp(zoneNrS)){
        case "windmill":
            drawMillChooseItemBox(zoneNrS, zoneNrL, queueNum, $("divChooseBoxInner"));
        break;
        case "sawmill":case "carpentry":case "forest":
            drawForestryChooseItemBox(zoneNrS, zoneNrL, queueNum, $("divChooseBoxInner"));
        break;
        case 4:
            if(zoneNrS=="farmersmarket-4.5"||zoneNrS=="farmersmarket-4.6"||zoneNrS=="farmersmarket-4.7") {
                drawAnimalBreedingChooseItemBox(zoneNrS, zoneNrL, queueNum, $("divChooseBoxInner"));
            } else {
                drawFoodworldChooseItemBox(zoneNrS, zoneNrL, queueNum, $("divChooseBoxInner"));
            }
        break;
        case 5: // Pony
            drawChooseItemBoxPony(zoneNrS, zoneNrL, queueNum, $("divChooseBoxInner"));
        break;
        case "megafield":
            drawChooseItemBoxMegafield(zoneNrS, zoneNrL, queueNum, $("divChooseBoxInner"));
        break;
        default:
            drawQueueChooseItemBox(zoneNrS, zoneNrL, queueNum, $("divChooseBoxInner"));
        }
    },false);
    if(!(zoneNrS=="farmersmarket-4.5"||zoneNrS=="farmersmarket-4.6"||zoneNrS=="farmersmarket-4.7")) {
        //toolTip von  farmersmarket-4 slot 5 bis 7 ausblenden
        newelm.addEventListener("mouseover", function(event){
            var zoneNrS=this.parentNode.getAttribute("zoneNrS");
            var zoneNrL=this.parentNode.getAttribute("zoneNrL");
            var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
            toolTip.show(event, toolTipMain(zoneNrS, zoneNrL, queueNum, this.parentNode));
        },false);
    }

    // Minus Button
    newelm=createElement("div",{id:newlayerId+"M",alt:"-","class":"link queueItemButton queueItemMinButton"},newlayer);
    newelm.addEventListener("mouseover", function(event){ toolTip.show(event, getText("automat_QueMin"));},false);
    newelm.addEventListener("click", function(){
        // GM_log("Minus button id " + this.id.substring(0,this.id.length-1));
        var zoneNrS=this.parentNode.getAttribute("zoneNrS");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
        var inputID=this.id.substring(0,this.id.length-1)+"I1";
        var stepping=((getZoneType(zoneNrS)!="windmill")&&(zoneList[zoneNrL][queueNum][3]))?STEPPINGRACK:STEPPINGFIELD;
        $(inputID).value=parseFloat($(inputID).value.replace(regDelimThou,"").replace(regDelimDeci,".")) - stepping;
        change($(inputID));
    },false);

    // Plus Button
    newelm=createElement("div",{id:newlayerId+"P",alt:"+","class":"link queueItemButton queueItemPlusButton"},newlayer);
    newelm.addEventListener("mouseover", function(event){ toolTip.show(event, getText("automat_QuePlus"));},false);
    newelm.addEventListener("click", function(){
        // GM_log("Plus button id " + this.id.substring(0,this.id.length-1));
        var zoneNrS=this.parentNode.getAttribute("zoneNrS");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
        var inputID=this.id.substring(0,this.id.length-1)+"I1";
        var stepping=((getZoneType(zoneNrS)!="windmill")&&(zoneList[zoneNrL][queueNum][3]))?STEPPINGRACK:STEPPINGFIELD;
        $(inputID).value=parseFloat($(inputID).value.replace(regDelimThou,"").replace(regDelimDeci,".")) + stepping;
        change($(inputID));
    },false);

    // Behaviour Type Button
    newelm=createElement("div",{id:newlayerId+"B",alt:"Behaviour","class":"link queueItemButton queueItemBehaviourButton"},newlayer);
    newelm.style.backgroundImage=(zoneNrS!="windmill"&&zoneList[zoneNrL][queueNum][3])?"url("+IMAGES["functionR"]+")":"url("+IMAGES["functionF"]+")";
    newelm.addEventListener("mouseover", function(event){
        var zoneNrS=this.parentNode.getAttribute("zoneNrS");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
        toolTip.show(event, (zoneNrS!="windmill"&&zoneList[zoneNrL][queueNum][3])?getText("automat_QueBehaviourR"):getText("automat_QueBehaviourF"));
    },false);
    newelm.addEventListener("click", function(){
        var zoneNrS=this.parentNode.getAttribute("zoneNrS");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
        var inputValue=$(this.id.substring(0,this.id.length-1)+"I1");
        // GM_log("Behaviour button: zoneNrL:" + zoneNrL + " queueNum:" + queueNum);
        zoneList[zoneNrL][queueNum][3]=!zoneList[zoneNrL][queueNum][3];
        if(zoneNrS=="windmill"){
            this.style.backgroundImage="url("+IMAGES["functionF"]+")";
        }else{
            if(zoneList[zoneNrL][queueNum][3]){
                // rack Behaviour
                this.style.backgroundImage="url("+IMAGES["functionR"]+")";
                inputValue.value=(unsafeData.prodMinRack&&(unsafeData.prodMinRack[0][zoneList[zoneNrL][queueNum][0]]!=undefined))?unsafeData.prodMinRack[0][zoneList[zoneNrL][queueNum][0]]:(unsafeData.prodStock[0][zoneList[zoneNrL][queueNum][0]]?unsafeData.prodStock[0][zoneList[zoneNrL][queueNum][0]]:0)+((120/unsafeData.prodPlantSize[0])*inputValue.parentNode.getAttribute("itogo"));
                zoneList[zoneNrL][queueNum][2]=0;
            }else{
                // field Behaviour
                this.style.backgroundImage="url("+IMAGES["functionF"]+")";
                inputValue.value=inputValue.parentNode.getAttribute("iTogo");
                zoneList[zoneNrL][queueNum][2]=0;
            }
        }
        toolTip.adjust(this);
        change(inputValue); //this includes a updateQueueBox
        inputValue=null;
    },false);

    //Mode Button
    if(OPTION_ITEM_REPEAT){
        newelm=createElement("div",{id:newlayerId+"Mode",alt:"Mode","class":"link queueItemButton queueItemModeButton"},newlayer);
        newelm.style.backgroundImage=(getZoneType(zoneNrS)!=1 || zoneList[zoneNrL][queueNum][4])?"url("+IMAGES["mode_repeat"]+")":"url("+IMAGES["mode_1time"]+")";
        newelm.addEventListener("mouseover", function(event){
            var zoneNrS=this.parentNode.getAttribute("zoneNrS");
            var zoneNrL=this.parentNode.getAttribute("zoneNrL");
            var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
            toolTip.show(event, (getZoneType(zoneNrS)==1 && zoneList[zoneNrL][queueNum][4])?getText("automat_QueBehaviourR"):getText("automat_QueBehaviourF"));
        },false);
        newelm.addEventListener("click", function(){
            var zoneNrS=this.parentNode.getAttribute("zoneNrS");
            var zoneNrL=this.parentNode.getAttribute("zoneNrL");
            var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
            // GM_log("Behaviour button: zoneNrL:" + zoneNrL + " queueNum:" + queueNum);
            if(getZoneType(zoneNrS)!=1){
                zoneList[zoneNrL][queueNum][4]=true;
                this.style.backgroundImage="url("+IMAGES["mode_1time"]+")";
            }else{
                zoneList[zoneNrL][queueNum][4]=!zoneList[zoneNrL][queueNum][4];
                this.style.backgroundImage="url("+(zoneList[zoneNrL][queueNum][4]?IMAGES["mode_repeat"]:IMAGES["mode_1time"])+")"; // repeat mode
            }
            toolTip.adjust(this);
            updateQueueBox(zoneNrS, zoneNrL);
        },false);
        newelm=createElement("input",{id:newlayerId+"IListRepeat",value:((zoneList[zoneNrL][queueNum][5]===undefined)?REPEAT_NO_LIMIT:zoneList[zoneNrL][queueNum][5]),maxlength:"4",size:"3","class":"queueItemInput3 queueItemInputWidth2"},newlayer);
        newelm.addEventListener("change", function(){
        try{
            // GM_log("Input field change :" + this.value);
            if(/^-?(0|[1-9]\d*)$/.test(this.value)){
                if(this.value < 1) this.value=1;
                var zoneNrS=this.parentNode.getAttribute("zoneNrS");
                var zoneNrL=this.parentNode.getAttribute("zoneNrL");
                var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
                zoneList[zoneNrL][queueNum][5]=Math.max(1,Math.min(999, this.value));
                updateQueueBox(zoneNrS, zoneNrL);
            }else{
                this.value=(isNaN(parseInt(this.value,"")))?1:parseInt(this.value,"");
            }
        }catch(err){GM_logError("drawQueueItemBox InputRepeatField changed","","",err);}
        },false);
    }
    // Input Field
    newelm=createElement("input",{id:newlayerId+"I2",disabled:true,value:((zoneList[zoneNrL][queueNum][2]===undefined)?0:zoneList[zoneNrL][queueNum][2]),maxlength:"4",size:"3","class":"queueItemInput2 queueItemInputWidth2"},newlayer);
    newelm=createElement("input",{id:newlayerId+"I1",value:0,maxlength:(zoneNrS!="windmill"&&zoneList[zoneNrL][queueNum][3]?"6":"4"),size:"3","class":"queueItemInput1 queueItemInputWidth2"},newlayer);
    newelm.value=(zoneList[zoneNrL][queueNum][1]===undefined)?1:zoneList[zoneNrL][queueNum][1];
    newelm.addEventListener("change", function(){
    try{
        // GM_log("Input field change :" + this.value);
        if(/^-?(0|[1-9]\d*)$/.test(this.value)){
            if(this.value < 1) this.value=1;
            var zoneNrS=this.parentNode.getAttribute("zoneNrS");
            var zoneNrL=this.parentNode.getAttribute("zoneNrL");
            var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
            zoneList[zoneNrL][queueNum][1]=(zoneNrS!="windmill"&&zoneList[zoneNrL][queueNum][3])? this.value:Math.max(1,Math.min(9999, this.value));
            updateQueueBox(zoneNrS, zoneNrL);
        }else{
            this.value=(isNaN(parseInt(this.value,"")))?1:parseInt(this.value,"");
        }
    }catch(err){GM_logError("drawQueueItemBox InputField changed","","",err);}
    },false);

    // infinity sign
    createElement("div",{id:newlayerId+"T","class":"queueItemText queueItemTextInf"},newlayer);

    // add button.
    newelm=createElement("img",{id:newlayerId+"A","class":"link queueItemAddButton",src:GFX+"buildingupdatebutton_off.png"},newlayer);
    newelm.addEventListener("mouseover", function(event){ toolTip.show(event, getText("automat_QueAddAboveText"));},false);
    newelm.addEventListener("click",function(){
        var zoneNrS=this.parentNode.getAttribute("zoneNrS");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
        if(zoneNrS=="windmill"){
            zoneList[zoneNrL].splice(queueNum,0,DEFAULT_ZONELIST_MILL.clone());
        }else{
            zoneList[zoneNrL].splice(queueNum,0,DEFAULT_ZONELIST_ITEM.clone());
            zoneList[zoneNrL][queueNum][0]=zoneList[zoneNrL][queueNum+1][0];
        }
        reFillQueueBox(zoneNrS, zoneNrL, queueNum);
        click($("divAutoMatQueueItemBox"+zoneNrL+"Q"+queueNum+"Item"));
    },false);
    newelm.addEventListener("mouseover", function(event){
        this.setAttribute("src",GFX+"buildingupdatebutton_on.png");
        toolTip.show(event, getText("automat_QueAddAboveText"));
    },false);
    newelm.addEventListener("mouseout", function(event){
        this.setAttribute("src",GFX+"buildingupdatebutton_off.png");
    },false);

    // Delete Button
    newelm=createElement("img",{id:newlayerId+"D","class":"link queueItemDeleteButton",src:GFX+"button_cancel_off.png"},newlayer);
    newelm.addEventListener("mouseover", function(event){
        this.setAttribute("src",GFX+"button_cancel_on.png");
        toolTip.show(event, getText("automat_QueDeleteText"));
    },false);
    newelm.addEventListener("mouseout", function(event){
        this.setAttribute("src",GFX+"button_cancel_off.png");
    },false);
    newelm.addEventListener("click", function(){
        var zoneNrS=this.parentNode.getAttribute("zoneNrS");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
        var foundActive=false;
        zoneList[zoneNrL].splice(queueNum,1);
        for(var i=0;i<zoneList[zoneNrL].length;i++){
            if(zoneList[zoneNrL][i][1] > zoneList[zoneNrL][i][2]){
                foundActive=true;
                break;
            }
        }
        if(!foundActive){
            for(var i=0;i<zoneList[zoneNrL].length;i++){zoneList[zoneNrL][i][2]=0;}
        }
        if(zoneList[zoneNrL].length==queueNum){
            removeElement(this.parentNode);
            updateQueueBox(zoneNrS, zoneNrL);
        }else{
            reFillQueueBox(zoneNrS, zoneNrL, queueNum);
        }
    },false);

    // End Time
    createElement("div",{id:newlayerId+"ET","class":"queueItemTime",style:"height:"+queueItemBoxTimeHeight+"px;"},newlayer);
    newlayer=null;newelm=null;
    GM_logInfo("drawQueueItemBox","zoneNrS="+zoneNrS +" zoneNrL="+zoneNrL +" queueNum="+queueNum+" appendTo.id="+appendTo.id,"","End",1);
}catch(err){GM_logError("drawQueueItemBox","zoneNrS="+zoneNrS +" zoneNrL="+zoneNrL +" queueNum="+queueNum+" appendTo.id="+appendTo.id,"",err);}
}
function drawQueueListSmall(zoneNrF, zoneNrL, appendTo){
    if(zoneNrL===undefined || zoneNrL==null) zoneNrL=getZoneListId(zoneNrF);
    appendTo.style.display="none";
    appendTo.innerHTML="";
    appendTo.setAttribute("zoneNrF",zoneNrF);
    appendTo.setAttribute("zoneNrL",zoneNrL);
    var lRepeat=(!OPTION_LIST_REPEAT || zoneNrF=="windmill")?false:!settings.get("account","useQueueList")?false:zoneSettings[zoneNrL]["repeat"]===undefined?false:zoneSettings[zoneNrL]["repeat"];
    var lShuffle=!settings.get("account","useQueueList")?false:zoneSettings[zoneNrL]["shuffle"]===undefined?false:zoneSettings[zoneNrL]["shuffle"];
    var fzType=getBuildingTyp(zoneNrF);

    createElement("div",{id:"divQueueItemListTitle"+zoneNrL,"class":"divQueueItemListTitle"},appendTo, getZoneName(0,zoneNrF,zoneNrL, null, false, true, true));
    createElement("div",{"class":"divQueueItemListTitle2"},appendTo,((lRepeat && lShuffle)?getText("automat_QueRepeatShuffle"):(lShuffle?getText("automat_QueShuffle"):(lRepeat?getText("automat_QueRepeat"):""))));
    createElement("div",{style:"clear:both;"},appendTo);

    var newdiv=null;
    if(false && fzType==3){//OPTION this show the factory begin product..
        for(var k=0;k<BUILDING2FEED[unsafeData.zones.getBuilding(zoneNrF)].length;k++){
            newdiv=createElement("div",{id:"divQueueItemListList"+zoneNrL+"Q"+k+"Item","class":"divQueueItemListChooseItem v"+BUILDING2FEED[unsafeData.zones.getBuilding(zoneNrF)][k]},appendTo);
            createElement("div",{"class":"divQueueItemListNumber"},newdiv, FEEDBONUSTIME[BUILDING2FEED[unsafeData.zones.getBuilding(zoneNrF)][k]]);
        }
    }else{
        for(queueNum=0;queueNum<zoneList[zoneNrL].length; queueNum++){
            if(!settings.get("account","useQueueList") && queueNum>0 && getBuildingTyp(zoneNrL)==1) break;
            if(fzType=="windmill"){
                newdiv=createElement("div",{id:"divQueueItemListList"+zoneNrL+"Q"+queueNum+"Item","class":"divQueueItemListChooseItem"},appendTo);
                createElement("div",{"class":"fmm"+zoneList[zoneNrL][queueNum][0],style:"position:relative;"},newdiv);
            }else if(fzType=="sawmill"||fzType=="carpentry"||fzType=="forest"){
                newdiv=createElement("div",{id:"divQueueItemListList"+zoneNrL+"Q"+queueNum+"Item","class":"divQueueItemListChooseItem f_symbol"+zoneList[zoneNrL][queueNum][0]},appendTo);
            }else if (fzType==5) {
                newdiv=createElement("div",{id:"divQueueItemListList"+zoneNrL+"Q"+queueNum+"Item","class":"divQueueItemListChooseItem divZonePonyIcon pony_farmi"+zoneList[zoneNrL][queueNum][0]},appendTo);
            }else{
                newdiv=createElement("div",{id:"divQueueItemListList"+zoneNrL+"Q"+queueNum+"Item","class":"divQueueItemListChooseItem v"+zoneList[zoneNrL][queueNum][0]},appendTo);
            }
            if(fzType!=3 && zoneList[zoneNrL][queueNum][0]!=PRODSTOP){
                var iLastInf=((zoneList[zoneNrL].length-1)==queueNum) && !lRepeat && !lShuffle;
                var amount=""+Math.max(0,zoneList[zoneNrL][queueNum][1] - zoneList[zoneNrL][queueNum][2]);
                createElement("div",{"class":"divQueueItemListNumber"},newdiv,((!settings.get("account","useQueueList") && fzType==1)||lRepeat&&iLastInf)?"∞":amount);
            }
        }
    }
    newdiv=null;
    appendTo.style.display="block";
}
function drawQueueChooseItemBox(zoneNrS, zoneNrL, queueNum, appendTo){
try{
    // GM_log("Begin drawQueueChooseItemBox zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL+" queueNum="+queueNum+" appendTo.id="+appendTo.id);
    if(zoneNrL===undefined || zoneNrL==null){ zoneNrL=getZoneListId(zoneNrS); }
    if(queueNum===undefined){ queueNum=0; }
    var zoneNrF=zoneNrS.toString().replace(/\.\d+$/,"");
    appendTo.innerHTML="";
    appendTo.setAttribute("zoneNrS",zoneNrS);
    appendTo.setAttribute("zoneNrL",zoneNrL);
    appendTo.setAttribute("queueNum",queueNum);
    var fzZoneType=getZoneType(zoneNrS);
    createElement("div",{"id":"divChooseTitle"+zoneNrL,"class":"queueTitle"},appendTo, getZoneName(0,zoneNrS,zoneNrL, ($("divChooseBoxInner")==appendTo)?queueNum:null, 20, true, true));
    createElement("div",{"id":"divChooseEndTime"+zoneNrL,"class":"queueTime"},appendTo);
    createElement("div",{"style":"clear:both;"},appendTo);

    newdiv=createElement("div",{id:"divChooseItem"+zoneNrL+"Q"+queueNum + "I"+PRODSTOP,"class":"divChooseItem link v"+PRODSTOP,"product":PRODSTOP},appendTo);
    newdiv.addEventListener("click",function(){
        var zoneNrS=this.parentNode.getAttribute("zoneNrS");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
        zoneList[zoneNrL][queueNum]=DEFAULT_ZONELIST_ITEM.clone();
        toolTip.hide(this);
        if(this.parentNode==$("divChooseBoxInner")) click($("divChooseBoxClose"));
        updateQueueBox(zoneNrS, zoneNrL);
    },false);
    newdiv.addEventListener("mouseover", function(event){
        var zoneNrS=this.parentNode.getAttribute("zoneNrS");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
        toolTip.show(event, toolTipProductSmall(zoneNrS, zoneNrL, queueNum, this));
    },false);

    for(var iProd=0;iProd<unsafeData.prodName[0].length;iProd++){
        //if((unsafeData.prodTyp[0][iProd]=="v")&&!(unsafeData.prodBlock[0][iProd]&&unsafeData.prodBlock[0][iProd].match(/l/))){
        if((unsafeData.PRODUCT2BUILDING[0][iProd]==fzZoneType)&&!(unsafeData.prodBlock[0][iProd]&&unsafeData.prodBlock[0][iProd].match(/[uvlq]/))){
            //Farm 5 nur exotische Produkte
            if ((zoneNrS==25||zoneNrS==26||zoneNrS==27||zoneNrS==28||zoneNrS==29||zoneNrS==30) && getZoneType(zoneNrS)!=10){
                if ((unsafeData.prodTyp[0][iProd]!="ex")) {continue;}
            } else {
                if ((unsafeData.prodTyp[0][iProd]=="ex")) {continue;}
            }
            //farm 6 nur Bergkräuter
            if ((zoneNrS==31||zoneNrS==32||zoneNrS==33||zoneNrS==34||zoneNrS==35||zoneNrS==36)&& getZoneType(zoneNrS)!=10){
                if ((unsafeData.prodTyp[0][iProd]!="alpin")) {continue;}
            } else {
                if ((unsafeData.prodTyp[0][iProd]=="alpin")) {continue;}
            }
            //farm 8 nur Wasserpflanzen
            if ((zoneNrS==43||zoneNrS==44||zoneNrS==45||zoneNrS==46||zoneNrS==47||zoneNrS==48)&& getZoneType(zoneNrS)!=10){
                if ((unsafeData.prodTyp[0][iProd]!="water")) {continue;}
            } else {
                if ((unsafeData.prodTyp[0][iProd]=="water")) {continue;}
            }

            newdiv=createElement("div",{"id":"divChooseItem"+zoneNrL+"Q"+queueNum+"I"+iProd,"class":"divChooseItem link v"+iProd,"product":iProd},appendTo);

            if (zoneNrF==25||zoneNrF==26||zoneNrF==27||zoneNrF==28||zoneNrF==29||zoneNrF==30) {
                newdiv.style.opacity=(unsafeData.prodStock[5][iProd]&&unsafeData.prodStock[5][iProd]>0)?1:0.4;
            } else if (zoneNrF==31||zoneNrF==32||zoneNrF==33||zoneNrF==34||zoneNrF==35||zoneNrF==36) {
                newdiv.style.opacity=(unsafeData.prodStock[6][iProd]&&unsafeData.prodStock[6][iProd]>0)?1:0.4;
            } else if (zoneNrF==37||zoneNrF==38||zoneNrF==39||zoneNrF==40||zoneNrF==41||zoneNrF==42) {
                newdiv.style.opacity=(unsafeData.prodStock[7][iProd]&&unsafeData.prodStock[7][iProd]>0)?1:0.4;
            } else if (zoneNrF==43||zoneNrF==44||zoneNrF==45||zoneNrF==46||zoneNrF==47||zoneNrF==48) {
                newdiv.style.opacity=(unsafeData.prodStock[8][iProd]&&unsafeData.prodStock[8][iProd]>0)?1:0.4;
            } else if (zoneNrF==49||zoneNrF==50||zoneNrF==51||zoneNrF==52||zoneNrF==53||zoneNrF==54) {
                newdiv.style.opacity=(unsafeData.prodStock[9][iProd]&&unsafeData.prodStock[9][iProd]>0)?1:0.4;
            } else if (zoneNrF==55||zoneNrF==56||zoneNrF==57||zoneNrF==58||zoneNrF==59||zoneNrF==60) {
                newdiv.style.opacity=(unsafeData.prodStock[10][iProd]&&unsafeData.prodStock[10][iProd]>0)?1:0.4;
            } else {
                newdiv.style.opacity=(unsafeData.prodStock[0][iProd]&&unsafeData.prodStock[0][iProd]>0)?1:0.4;
            }

            newdiv.addEventListener("click",function(){
                var zoneNrS=this.parentNode.getAttribute("zoneNrS");
                var zoneNrL=this.parentNode.getAttribute("zoneNrL");
                var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
                var product=parseInt(this.getAttribute("product"),10);
                if(zoneList[zoneNrL][queueNum][0]!=product){
                    zoneList[zoneNrL][queueNum][0]=product;
                    zoneList[zoneNrL][queueNum][1]=(zoneNrS!="windmill"&&zoneList[zoneNrL][queueNum][3])?((unsafeData.prodMinRack&&(unsafeData.prodMinRack[0][product]!=undefined))?unsafeData.prodMinRack[0][product]:100):(zoneList[zoneNrL][queueNum][1]>=1?zoneList[zoneNrL][queueNum][1]:1);
                    zoneList[zoneNrL][queueNum][2]=0;
                }
                toolTip.hide(this);
                if(this.parentNode==$("divChooseBoxInner")) click($("divChooseBoxClose"));
                updateQueueBox(zoneNrS, zoneNrL);
            },false);
            newdiv.addEventListener("mouseover", function(event){
                var zoneNrS=this.parentNode.getAttribute("zoneNrS");
                var zoneNrL=this.parentNode.getAttribute("zoneNrL");
                var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
                toolTip.show(event, toolTipProductSmall(zoneNrS, zoneNrL, queueNum, this));
            },false);
        }
    }

    if(appendTo==$("divChooseBoxInner")){
        $("divChooseBox").style.display="block";
        $("divChooseBox").style.top=Math.round(255 - $("divChooseBox").offsetHeight/2)+"px";
    }
    newdiv=null;appendTo=null;
    updateQueueBox(zoneNrS, zoneNrL);
    // GM_log("End drawQueueChooseItemBox :" + zoneNrL);
}catch(err){GM_logError("drawQueueChooseItemBox ","","",err);}
}
function drawFactoryChooseItemBox(zoneNrS, zoneNrL, appendTo){
try{
    // GM_log("Begin drawFactoryChooseItemBox :" + zoneNrS+":"+zoneNrL);
    var zoneNrF=zoneNrS.toString().replace(/\.\d+$/,"");
    if(zoneNrL===undefined || zoneNrL==null){ zoneNrL=getZoneListId(zoneNrS); }
    appendTo.innerHTML="";
    appendTo.setAttribute("zoneNrF",zoneNrF);
    appendTo.setAttribute("zoneNrS",zoneNrS);
    appendTo.setAttribute("zoneNrL",zoneNrL);
    appendTo.setAttribute("queueNum",0);
    createElement("div",{"id":"divChooseTitle"+zoneNrL,"class":"queueTitle"},appendTo, getZoneName(0,zoneNrS,zoneNrL,null,20,true,true,true));
    createElement("div",{"id":"divChooseEndTime"+zoneNrL,"class":"queueTime"},appendTo);
    createElement("div",{"style":"clear:both;"},appendTo);
    newdiv=createElement("div",{"class":"divChooseItem link v"+PRODSTOP,"id":"divChooseItem"+zoneNrL+"Q0I"+PRODSTOP},appendTo);
    if(zoneList[zoneNrL][0][0]==PRODSTOP){ newdiv.style.border="2px solid black"; }
    newdiv.addEventListener("click",function(){
        var zoneNrF=this.parentNode.getAttribute("zoneNrF");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        zoneList[zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY.clone();
        if(this.parentNode==$("divChooseBoxInner")){ click($("divChooseBoxClose")); }
        updateQueueBox(zoneNrF, zoneNrL);
    },false);
    newdiv.addEventListener("mouseover", function(event){
        var zoneNrF=this.parentNode.getAttribute("zoneNrF");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        toolTip.show(event, toolTipProductSmall(zoneNrF, zoneNrL, 0, this));
    },false);
    for(var v in unsafeData.BUILDING_INPUT[getZoneType(zoneNrS)]){
        if(!unsafeData.BUILDING_INPUT[getZoneType(zoneNrS)].hasOwnProperty(v)){ continue; }
        if(unsafeData.prodBlock[0][v]){ continue; }
        newdiv=createElement("div",{"class":"divChooseItem link v"+v,"id":"divChooseItem"+zoneNrL+"Q0I"+v},appendTo);
        if(zoneList[zoneNrL][0][0]==v){ newdiv.style.border="2px solid black"; }
        newdiv.addEventListener("click",function(){
            var zoneNrF=this.parentNode.getAttribute("zoneNrF");
            var zoneNrL=this.parentNode.getAttribute("zoneNrL");
            zoneList[zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY.clone();
            zoneList[zoneNrL][0][0]=parseInt(/Q0I(.*)$/.exec(this.id)[1],10);
            if(this.parentNode==$("divChooseBoxInner")){ click($("divChooseBoxClose")); }
            updateQueueBox(zoneNrF, zoneNrL);
        },false);
        newdiv.addEventListener("mouseover", function(event){
            var zoneNrS=this.parentNode.getAttribute("zoneNrS");
            var zoneNrL=this.parentNode.getAttribute("zoneNrL");
            toolTip.show(event, toolTipProductSmall(zoneNrS, zoneNrL, 0, this));
        },false);
    }
    if(appendTo==$("divChooseBoxInner")){
        $("divChooseBox").style.display="block";
        $("divChooseBox").style.top=Math.round(255 - $("divChooseBox").offsetHeight/2)+"px";
    }
    updateQueueBox(zoneNrF, zoneNrL);
    zoneFeedCurr=null;zoneProdCurr=null;
    newdiv=null;appendTo=null;
    // GM_log("End drawFactoryChooseItemBox :" + zoneNrL);
}catch(err){GM_logError("drawFactoryChooseItemBox ","","",err);}
}

function drawFuelstationChooseItemBox(zoneNrS, zoneNrL, appendTo){
    try{
        // GM_log("Begin drawFuelstationChooseItemBox :" + zoneNrS+":"+zoneNrL);
        var zoneNrF=zoneNrS.toString().replace(/\.\d+$/,"");
        if(zoneNrL===undefined || zoneNrL==null){ zoneNrL=getZoneListId(zoneNrS); }
        appendTo.innerHTML="";
        appendTo.setAttribute("zoneNrF",zoneNrF);
        appendTo.setAttribute("zoneNrS",zoneNrS);
        appendTo.setAttribute("zoneNrL",zoneNrL);
        appendTo.setAttribute("queueNum",0);
        createElement("div",{"id":"divChooseTitle"+zoneNrL,"class":"queueTitle"},appendTo, getZoneName(0,zoneNrS,zoneNrL,null,20,true,true,true));
        createElement("div",{"id":"divChooseEndTime"+zoneNrL,"class":"queueTime"},appendTo);
        createElement("div",{"style":"clear:both;"},appendTo);
        newdiv=createElement("div",{"class":"divChooseItem link v"+PRODSTOP,"id":"divChooseItem"+zoneNrL+"Q0I"+PRODSTOP},appendTo);
        if(zoneList[zoneNrL][0][0]==PRODSTOP){ newdiv.style.border="2px solid black"; }
        newdiv.addEventListener("click",function(){
            var zoneNrF=this.parentNode.getAttribute("zoneNrF");
            var zoneNrL=this.parentNode.getAttribute("zoneNrL");
            zoneList[zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY.clone();
            if(this.parentNode==$("divChooseBoxInner")){ click($("divChooseBoxClose")); }
            updateQueueBox(zoneNrF, zoneNrL);
        },false);
        newdiv.addEventListener("mouseover", function(event){
            var zoneNrF=this.parentNode.getAttribute("zoneNrF");
            var zoneNrL=this.parentNode.getAttribute("zoneNrL");
            toolTip.show(event, toolTipProductSmall(zoneNrF, zoneNrL, 0, this));
        },false);

        var zoneNrF_h=zoneNrS.split(".");
        var farmNR=Math.floor((zoneNrF_h[0]-1)/6)+1;
        var data=unsafeWindow.farms_data.farms[farmNR][unsafeData.zones.getLocation(zoneNrF_h[0]).zoneNr];
        var level=Math.min(data.data.data.slots[zoneNrF_h[1]].level,unsafeData.FUELSTATION_INPUT.length);
        for(var i in zoneToList){ //Für Zone-Pairing: Ermittlung kleinster gemeinsamer Level
            if(!zoneToList.hasOwnProperty(i)){ continue; }
            if (zoneToList[i]==zoneNrL){
                var zoneNrL_h=i.split(".");
                level=Math.min(level,data.data.data.slots[zoneNrL_h[1]].level);
            }
        }

        for (var l=0;l<level;l++) {
            for(var v=0;v<unsafeData.FUELSTATION_INPUT[l].length;v++){
                if(unsafeData.prodBlock[0][unsafeData.FUELSTATION_INPUT[l][v][0]]){ continue; }
                newdiv=createElement("div",{"class":"divChooseItem link v"+unsafeData.FUELSTATION_INPUT[l][v][0],"id":"divChooseItem"+zoneNrL+"Q0I"+unsafeData.FUELSTATION_INPUT[l][v][0]},appendTo);
                if(zoneList[zoneNrL][0][0]==unsafeData.FUELSTATION_INPUT[l][v][0]){ newdiv.style.border="2px solid black"; }
                newdiv.addEventListener("click",function(){
                    var zoneNrF=this.parentNode.getAttribute("zoneNrF");
                    var zoneNrL=this.parentNode.getAttribute("zoneNrL");
                    zoneList[zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY.clone();
                    zoneList[zoneNrL][0][0]=parseInt(/Q0I(.*)$/.exec(this.id)[1],10);
                    if(this.parentNode==$("divChooseBoxInner")){ click($("divChooseBoxClose")); }
                    updateQueueBox(zoneNrF, zoneNrL);
                },false);
                newdiv.addEventListener("mouseover", function(event){
                    var zoneNrS=this.parentNode.getAttribute("zoneNrS");
                    var zoneNrL=this.parentNode.getAttribute("zoneNrL");
                    toolTip.show(event, toolTipProductSmall(zoneNrS, zoneNrL, 0, this));
                },false);
            }
        }
        if(appendTo==$("divChooseBoxInner")){
            $("divChooseBox").style.display="block";
            $("divChooseBox").style.top=Math.round(255 - $("divChooseBox").offsetHeight/2)+"px";
        }
        updateQueueBox(zoneNrF, zoneNrL);
        zoneFeedCurr=null;zoneProdCurr=null;
        newdiv=null;appendTo=null;
    }catch(err){
        GM_logError("drawFuelstationChooseItemBox","zoneNrS="+zoneNrS+" zoneNrF="+zoneNrF,"",err);
    }
}

//monster fruit culture
function drawMonsterfruitChooseItemBox(zoneNrS, zoneNrL, appendTo){
    try{
        // GM_log("Begin drawMonsterfruitChooseItemBox :" + zoneNrS+":"+zoneNrL);
        var zoneNrF=zoneNrS.toString().replace(/\.\d+$/,"");
        if(zoneNrL===undefined || zoneNrL==null){ zoneNrL=getZoneListId(zoneNrS); }
        appendTo.innerHTML="";
        appendTo.setAttribute("zoneNrF",zoneNrF);
        appendTo.setAttribute("zoneNrS",zoneNrS);
        appendTo.setAttribute("zoneNrL",zoneNrL);
        createElement("div",{"id":"divChooseTitle"+zoneNrL,"class":"queueTitle"},appendTo, getZoneName(0,zoneNrS,zoneNrL,null,20,true,true,true));
        createElement("div",{"id":"divChooseEndTime"+zoneNrL,"class":"queueTime"},appendTo);
        createElement("div",{"style":"clear:both;"},appendTo);
        newdiv=createElement("div",{"class":"divChooseItem link v"+PRODSTOP,"id":"divChooseItem"+zoneNrL+"Q0I"+PRODSTOP},appendTo);
        if(zoneList[zoneNrL][0][0]==PRODSTOP){ newdiv.style.border="2px solid black"; }
        newdiv.addEventListener("click",function(){
            var zoneNrF=this.parentNode.getAttribute("zoneNrF");
            var zoneNrL=this.parentNode.getAttribute("zoneNrL");
            zoneList[zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY.clone();
            if(this.parentNode==$("divChooseBoxInner")){ click($("divChooseBoxClose")); }
            updateQueueBox(zoneNrF, zoneNrL);
        },false);
        newdiv.addEventListener("mouseover", function(event){
            var zoneNrF=this.parentNode.getAttribute("zoneNrF");
            var zoneNrL=this.parentNode.getAttribute("zoneNrL");
            toolTip.show(event, toolTipProductSmall(zoneNrF, zoneNrL, 0, this));
        },false);

        var item = unsafeWindow.farmersmarket_data.megafruit;
        var zoneNrF_h=zoneNrS.split("."); //zoneNrF_h[0]=Zone, zoneNrF_h[1]=Slot

        for (var i=0;i<item.objects[Object.keys(item.objects)[zoneNrF_h[1]-1]].length;i++){
//if (    (item.objects[Object.keys(item.objects)[zoneNrF_h[1]-1]][i].level<=item.level+30)) {
            if (   !(item.objects[Object.keys(item.objects)[zoneNrF_h[1]-1]][i].hasOwnProperty("buyable"))
                && (item.objects[Object.keys(item.objects)[zoneNrF_h[1]-1]][i].level<=item.level)) {
                    var newdiv1=createElement("div",{"style":"float:left;width:30px; height:30px;padding-right:10px;"},appendTo);
                    newdiv=createElement("div",{"class":"divChooseItem divZoneMonsterFruitCultureIcon link megafruit_need_item megafruit_need_item"+item.objects[Object.keys(item.objects)[zoneNrF_h[1]-1]][i].oid,"id":"megafruit_need_item"+item.objects[Object.keys(item.objects)[zoneNrF_h[1]-1]][i].oid+"divChooseItem"+zoneNrL+"Q0I"+item.objects[Object.keys(item.objects)[zoneNrF_h[1]-1]][i].oid},newdiv1);
                    if(zoneList[zoneNrL][0][0]==parseInt(item.objects[Object.keys(item.objects)[zoneNrF_h[1]-1]][i].oid)){ newdiv.style.border="4px solid black"; }
                    newdiv.addEventListener("click",function(){
                        var zoneNrF=this.parentNode.parentNode.getAttribute("zoneNrF");
                        var zoneNrL=this.parentNode.parentNode.getAttribute("zoneNrL");
                        zoneList[zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY.clone();
                        zoneList[zoneNrL][0][0]=parseInt(/Q0I(.*)$/.exec(this.id)[1],10);
                        if(this.parentNode.parentNode==$("divChooseBoxInner")){ click($("divChooseBoxClose")); }
                        updateQueueBox(zoneNrF, zoneNrL);
                    },false);
                    newdiv.addEventListener("mouseover", function(event){
                        var newnode = top.document.getElementById('megafruit_need_item'+parseInt(/Q0I(.*)$/.exec(this.id)[1],10)+'_tt').cloneNode(true);
                        newnode.removeChild(newnode.lastElementChild);
                        toolTip.show(event, newnode.innerHTML);
                    },false);
            }
        }
        if(appendTo==$("divChooseBoxInner")){
            $("divChooseBox").style.display="block";
            $("divChooseBox").style.top=Math.round(255 - $("divChooseBox").offsetHeight/2)+"px";
        }
        updateQueueBox(zoneNrF, zoneNrL);
        zoneFeedCurr=null;zoneProdCurr=null;
        newdiv=null;appendTo=null;
    }catch(err){
        GM_logError("drawMonsterfruitChooseItemBox","zoneNrS="+zoneNrS+" zoneNrF="+zoneNrF,"",err);
    }
}

function drawStableChooseFeedBox(zoneNrF, zoneNrL, appendTo){
try{
    // GM_log("Begin drawStableChooseFeedBox zoneNrF:" + zoneNrF + " zoneNrL:"+zoneNrL);
    if(zoneNrL===undefined || zoneNrL==null) zoneNrL=getZoneListId(zoneNrF);
    var level=parseInt($("levelnum").innerHTML,10);

    // catch bad data
    // should be zoneList[zoneNrL]=[[feed1,amount1,0,false],[feed2,amount2,0,false]]
    // or if deactivated [[PRODSTOP,amount1,0],[PRODSTOP,amount2,0]]
    if(zoneList[zoneNrL].length!=2){
        zoneList[zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY2.clone();
    }else{
        if(zoneList[zoneNrL][0][0]==PRODSTOP){ zoneList[zoneNrL][0]=DEFAULT_ZONELIST_ITEM.clone(); }
        if(zoneList[zoneNrL][1][0]==PRODSTOP){ zoneList[zoneNrL][1]=DEFAULT_ZONELIST_ITEM.clone(); }
    }

    var feedSort=[,];
    var feedAmount=[0,0];
    var feedMax=[0,0];
    var feedTime=[,];
    // the time needed if full fed
    var growTime=30 * unsafeData.prodGrowTime[0][unsafeData.BUILDING2PRODUCT[unsafeData.zones.getBuilding(zoneNrF)][0]] * getFarmZoneBonus(zoneNrF, null);
    if(unsafeWindow.premium==0 && level>9){ growTime -=1; } // small hack. non-premiums cant feed completely

    function calcStableChooseFeedBox(index,val){
        var noTime=false;
        // GM_log("calcStableChooseFeedBox "+index+":"+val);
        feedAmount[index]=val;
        var cand=appendTo.getElementsByClassName("divChooseFeed");
        cand[index].getElementsByClassName("divChooseFeedAmountSpan")[0].innerHTML=feedAmount[index];
        cand=null;
        if(feedAmount[0]+feedAmount[1]==0){
            // no feed
            zoneList[zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY2;
        }else{
            // feed
            var calcTime=feedAmount[index]*feedTime[index];
            index=(index+1)%2;
            if(feedSort[index]){
                if(feedAmount[index]>0){
                    if(feedAmount[(index+1)%2]>0){ calcTime++; } // a bit time is lost when 2 feeds are used
                    var help=calcTime+feedAmount[index]*feedTime[index];
                    while((feedAmount[index]>0) && (help>growTime)){
                        feedAmount[index]--;
                        help=calcTime+feedAmount[index]*feedTime[index];
                    }
                    calcTime=help-1;
                }
            }
            if(feedAmount[0]>feedAmount[1]){
                zoneList[zoneNrL]=[[feedSort[0],feedAmount[0],0,false],[feedSort[1],feedAmount[1],0,false]];
            }else{
                zoneList[zoneNrL]=[[feedSort[1],feedAmount[1],0,false],[feedSort[0],feedAmount[0],0,false]];
            }
        }

        GM_setValue2(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList", implode(zoneList,"calcStableChooseFeedBox/zoneList"));
        updateQueueBox(zoneNrF, zoneNrL);
    }

    appendTo.innerHTML="";
    appendTo.setAttribute("zoneNrF",zoneNrF);
    appendTo.setAttribute("zoneNrL",zoneNrL);
    appendTo.setAttribute("queueNum",0);

    createElement("div",{"id":"divChooseTitle"+zoneNrL,"class":"queueTitle"},appendTo, getZoneName(0,zoneNrF,zoneNrL,null,20,true,true,true));
    var newdiv=createElement("div",{"id":"divChooseEndTime"+zoneNrL,"class":"divChooseFeedTime"},appendTo);
    createElement("div",{"style":"clear:both;"},appendTo);
    var newdiv1,newspan;

    for(var k=0;k<BUILDING2FEED[getZoneType(zoneNrF)].length;k++){
        var iProd=BUILDING2FEED[getZoneType(zoneNrF)][k];
        var queueNum=(zoneList[zoneNrL][0][0]==iProd?0:1);

        newdiv=createElement("div",{"name":k,"queueNum":queueNum,"class":"divChooseFeed"},appendTo);
        newitem=createElement("div",{id:"divChooseItem"+zoneNrL+"Q"+queueNum+"I","class":"divChooseFeedIcon v"+iProd,"product":iProd},newdiv);
        newitem.addEventListener("mouseover", function(event){
            var zoneNrF=this.parentNode.parentNode.getAttribute("zoneNrF");
            var zoneNrL=this.parentNode.parentNode.getAttribute("zoneNrL");
            toolTip.show(event, toolTipProductSmall(zoneNrF, zoneNrL, this.parentNode.getAttribute("name"), this));
        },false);

        // if(unsafeWindow.produkt_level[iProd]<=level){
        if(!(unsafeData.prodBlock[0][iProd]&&unsafeData.prodBlock[0][iProd].match(/l/))){
            feedSort[k]=iProd;
            feedAmount[k]=zoneList[zoneNrL][queueNum][1];
            feedTime[k]=FEEDBONUSTIME[iProd]/unsafeData.zones.getAnimals(zoneNrF);
            feedMax[k]=Math.floor(growTime/feedTime[k],1);

            newdiv1=createElement("div",{"class":"link divChooseFeedAmount","id":"divChooseFeedAmount"+zoneNrL+"Q"+iProd+"I"},newdiv);
            var help=((($("divChooseBoxInner")==$("divChooseEndTime"+zoneNrL).parentNode)?243:243)/feedMax[k])-1; //TODO
            for(var v=1;v<=Math.max(1,feedMax[k]);v++){
                newval=createElement("div",{style:"width:"+help+"px;"+(v==1?"border:none;":"")},newdiv1);
                newval.setAttribute("value",v);
                newval.addEventListener("mouseover", function(event){ toolTip.show(event, this.getAttribute("value"));},false);
            }
            newdiv1.addEventListener("click",function(event){
                var help=parseInt(event.target.getAttribute("value"),10);
                if(!isNaN(help)){ calcStableChooseFeedBox(parseInt(this.parentNode.getAttribute("name"),10),help); }
            },false);

            newdiv1=createElement("div",{style:"float:left;margin-top:2px;margin-left:5px;color:black;font-weight:bold;"},newdiv);
            createElement("span",{"class":"divChooseFeedAmountSpan","id":"divChooseFeedAmountSpan"+zoneNrL+"Q"+iProd+"I"},newdiv1,zoneList[zoneNrL][0][1]);
            createElement("span",{style:"margin-right:5px;"},newdiv1,"&nbsp;"+unsafeData.prodName[0][iProd]);

            newdiv1=createElement("div",{style:"float:right;margin-top:2px;color:black;font-weight:bold;"},newdiv);
            newspan=createElement("span",{"class":"divChooseFeedButton link"},newdiv1,feedMax[k]);
            newspan.addEventListener("click",function(event){
                var help=parseInt(this.parentNode.parentNode.getAttribute("name"),10);
                calcStableChooseFeedBox(help,feedMax[help]);
            },false);
            newspan=createElement("span",{"class":"divChooseFeedButton link"},newdiv1,"+");
            newspan.addEventListener("click",function(event){
                var help=parseInt(this.parentNode.parentNode.getAttribute("name"),10);
                calcStableChooseFeedBox(help,Math.min(feedMax[help],feedAmount[help]+1));
            },false);
            newspan=createElement("span",{"class":"divChooseFeedButton link"},newdiv1,"-");
            newspan.addEventListener("click",function(event){
                var help=parseInt(this.parentNode.parentNode.getAttribute("name"),10);
                calcStableChooseFeedBox(help,Math.max(0,feedAmount[help]-1));
            },false);
            newspan=createElement("span",{"class":"divChooseFeedButton link"},newdiv1,"0");
            newspan.addEventListener("click",function(event){
                var help=parseInt(this.parentNode.parentNode.getAttribute("name"),10);
                calcStableChooseFeedBox(help,0);
            },false);
        }
    }
    if(appendTo==$("divChooseBoxInner")){
        $("divChooseBox").style.display="block";
        $("divChooseBox").style.top=Math.round(255 - $("divChooseBox").offsetHeight/2)+"px";
    }
    // updateQueueBox(zoneNrF, zoneNrL);
    calcStableChooseFeedBox(0,feedAmount[0]);
    newdiv=null;newdiv1=null;newspan=null;newitem=null;newval=null;
    // GM_log("End drawStableChooseFeedBox :" + zoneNrF);
}catch(err){GM_logError("drawStableChooseFeedBox ","","",err);}
}
function drawMillChooseItemBox(zoneNrF, zoneNrL, queueNum, appendTo){
try {
    // GM_log("Begin drawMillChooseItemBox :" + queueNum);
    if(zoneNrL===undefined || zoneNrL==null) zoneNrL=getZoneListId(zoneNrF);
    if(queueNum===undefined) queueNum=0;
    appendTo.innerHTML="";
    appendTo.setAttribute("zoneNrF",zoneNrF);
    appendTo.setAttribute("zoneNrL",zoneNrL);
    appendTo.setAttribute("queueNum",queueNum);

    createElement("div",{"id":"divChooseTitle"+zoneNrL,"class":"queueTitle"},appendTo, getZoneName(0,zoneNrF,zoneNrL, ($("divChooseBoxInner")==appendTo)?queueNum:null), false, true ,true);
    createElement("div",{"id":"divChooseEndTime"+zoneNrL,"class":"queueTime"},appendTo);
    createElement("div",{"style":"clear:both;"},appendTo);

    newdiv=createElement("div",{id:"divChooseItem"+zoneNrL+"Q"+queueNum + "I"+PRODSTOP,"class":"divMillChooseItem link","product":PRODSTOP},appendTo);
    newdiv.addEventListener("click",function(){
        var zoneNrF=this.parentNode.getAttribute("zoneNrF");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
        // GM_log("Click" + zoneNrF + " : " + queueNum + " : " + 0);
        zoneList[zoneNrL][queueNum]=DEFAULT_ZONELIST_MILL.clone();
        toolTip.hide(this);
        if(this.parentNode==$("divChooseBoxInner")) click($("divChooseBoxClose"));
        updateQueueBox(zoneNrF, zoneNrL);
    },false);
    newdiv.addEventListener("mouseover", function(event){ toolTip.show(event, getText("automat_QueDontWork"));},false);
    newdiv.style.backgroundColor=(zoneList[zoneNrL][0][0]==PRODSTOP)? "black":"";
    createElement("div",{"class":"fm"+PRODSTOP,style:"position:relative;"},newdiv);
    createElement("div",{"class":"divMillChooseItemNumber"},newdiv,"∞");

    for(var iProd in autoMillStorage){
        if(!autoMillStorage.hasOwnProperty(iProd)){continue;}
        if((autoMillStorage[iProd][0]-autoMillStorage[iProd][1]) > 0){
            newdiv=createElement("div",{id:"divChooseItem"+zoneNrL+"Q"+queueNum+"I"+iProd,"class":"divMillChooseItem link","product":iProd},appendTo);
            newdiv.addEventListener("click",function(){
                var zoneNrF=this.parentNode.getAttribute("zoneNrF");
                var zoneNrL=this.parentNode.getAttribute("zoneNrL");
                var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
                var recipe=parseInt(this.getAttribute("product"),10);
                // GM_log("Click" + zoneNrF + " : " + queueNum + " : " + recipe);
                if(zoneList[zoneNrL][queueNum][0]!=recipe) zoneList[zoneNrL][queueNum]=[recipe,1,0,0,[]];
                toolTip.hide(this);
                if(this.parentNode==$("divChooseBoxInner")) click($("divChooseBoxClose"));
                updateQueueBox(zoneNrF, zoneNrL);
            },false);
            newdiv.addEventListener("mouseover", function(event){
                toolTip.show(event, unsafeWindow.showFormulaInfos(parseInt(this.childNodes[0].getAttribute("class").replace("fm",""),10)));
            },false);
            newdiv.style.backgroundColor=(zoneList[zoneNrL][queueNum][0]==iProd)? "black":"";
            createElement("div",{"class":"fm"+iProd,style:"position:absolute;"},newdiv);
            createElement("div",{"class":"divMillChooseItemNumber"},newdiv,(autoMillStorage[iProd][0]-autoMillStorage[iProd][1]));
        }
    }
    if(appendTo==$("divChooseBoxInner")){
        $("divChooseBox").style.display="block";
        $("divChooseBox").style.top=Math.round(255 - $("divChooseBox").offsetHeight/2)+"px";
    }
    updateQueueBox(zoneNrF,zoneNrL);
    newdiv=null;appendTo=null;
    // GM_log("End drawMillChooseItemBox :" + queueNum);
}catch(err){GM_logError("drawMillChooseItemBox ","","",err);}
}
function drawForestryChooseItemBox(zoneNrF, zoneNrL, queueNum, appendTo){
try{
    // GM_log("Begin drawForestryChooseItemBox zoneNrF:"+zoneNrF+" zoneNrL:" + zoneNrL);
    var fzType=getBuildingTyp(zoneNrF);
    var zoneStockTyp = (fzType=="forest"?"f1":(fzType=="sawmill"?"f3":(fzType=="carpentry"?"f4":null)));
    // GM_log("drawForestryChooseItemBox zoneStockTyp:"+zoneStockTyp);
    if(zoneNrL===undefined || zoneNrL==null) zoneNrL=getZoneListId(zoneNrF);
    if(queueNum===undefined) queueNum=0;
    var level=parseInt($("levelnum").innerHTML,10);
    appendTo.innerHTML="";
    appendTo.setAttribute("zoneNrF",zoneNrF);
    appendTo.setAttribute("zoneNrL",zoneNrL);
    appendTo.setAttribute("queueNum",queueNum);
    createElement("div",{"id":"divChooseTitle"+zoneNrL,"class":"queueTitle"},appendTo, getZoneName(0,zoneNrF,zoneNrL, ($("divChooseBoxInner")==appendTo)?queueNum:null, 20, true, true));
    createElement("div",{"id":"divChooseEndTime"+zoneNrL,"class":"queueTime"},appendTo);
    createElement("div",{"style":"clear:both;"},appendTo);

    newdiv=createElement("div",{id:"divChooseItem"+zoneNrL+"Q"+queueNum + "I"+PRODSTOP,"class":"divChooseItem link f_symbol"+PRODSTOP,"product":PRODSTOP},appendTo);
    newdiv.addEventListener("click",function(){
        var zoneNrF =this.parentNode.getAttribute("zoneNrF");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
        zoneList[zoneNrL][queueNum]=DEFAULT_ZONELIST_ITEM.clone();
        toolTip.hide(this);
        if(this.parentNode==$("divChooseBoxInner")) click($("divChooseBoxClose"));
        updateQueueBox(zoneNrF, zoneNrL);
    },false);
    newdiv.addEventListener("mouseover", function(event){
        var zoneNrF=this.parentNode.getAttribute("zoneNrF");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
        toolTip.show(event, toolTipProductSmall(zoneNrF, zoneNrL, queueNum, this));
    },false);

    // GM_log("drawForestryChooseItemBox prodName:"+implode(unsafeData.prodName[1],"GMprodName[1]"));
    for(var iProd in unsafeData.prodName[1]){
        if(!unsafeData.prodName[1].hasOwnProperty(iProd)){continue;}
        if(unsafeData.prodTyp[1][iProd]!=zoneStockTyp){continue;}
        var help,opacity=false;
        // GM_log("drawForestryChooseItemBox iProd:"+iProd+" prodTyp:"+unsafeData.prodTyp[1][iProd]+" prodBlock:"+unsafeData.prodBlock[1][iProd]);
        if(!(unsafeData.prodBlock[1][iProd]&&unsafeData.prodBlock[1][iProd].match(/q/))){
            newdiv=createElement("div",{"id":"divChooseItem"+zoneNrL+"Q"+queueNum+"I"+iProd,"class":"divChooseItem link f_symbol"+iProd,"product":iProd},appendTo);
            opacity=false;help=null;
            for(var i in unsafeData.prodRequire[1][iProd]){
                if(!unsafeData.prodRequire[1][iProd].hasOwnProperty(i)){continue;}
                help=unsafeData.prodRequire[1][iProd][i];
                //GM_log("drawForestryChooseItemBox prodStock["+help[0]+"]["+help[1]+"]:"+unsafeData.prodStock[help[0]][help[1]]+" > "+help[2]);
                opacity=opacity&&(unsafeData.prodStock[help[0]][help[1]]>help[2]);
            }
            newdiv.style.opacity=(opacity)?0.4:1;
            newdiv.addEventListener("click",function(){
                var zoneNrF=this.parentNode.getAttribute("zoneNrF");
                var zoneNrL=this.parentNode.getAttribute("zoneNrL");
                var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
                var product=parseInt(this.getAttribute("product"),10);
                if(zoneList[zoneNrL][queueNum][0]!=product){
                    zoneList[zoneNrL][queueNum][0]=product;
                    zoneList[zoneNrL][queueNum][1]=(zoneNrF!="windmill"&&zoneList[zoneNrL][queueNum][3])?((unsafeData.prodMinRack&&(unsafeData.prodMinRack[0][product]!=undefined))?unsafeData.prodMinRack[0][product]:100):(zoneList[zoneNrL][queueNum][1]>=1?zoneList[zoneNrL][queueNum][1]:1);
                    zoneList[zoneNrL][queueNum][2]=0;
                }
                toolTip.hide(this);
                if(this.parentNode==$("divChooseBoxInner")) click($("divChooseBoxClose"));
                updateQueueBox(zoneNrF, zoneNrL);
            },false);
            newdiv.addEventListener("mouseover", function(event){
                var zoneNrF=this.parentNode.getAttribute("zoneNrF");
                var zoneNrL=this.parentNode.getAttribute("zoneNrL");
                var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
                toolTip.show(event, toolTipProductSmall(zoneNrF, zoneNrL, queueNum, this));
            },false);
        }
    }
    if(appendTo==$("divChooseBoxInner")){
        $("divChooseBox").style.display="block";
        $("divChooseBox").style.top=Math.round(255 - $("divChooseBox").offsetHeight/2)+"px";
    }
    newdiv=null;appendTo=null;
    updateQueueBox(zoneNrF, zoneNrL);
    // GM_log("End drawForestryChooseItemBox zoneNrF:"+zoneNrF+" zoneNrL:" + zoneNrL);
}catch(err){GM_logError("drawForestryChooseItemBox","iProd:"+iProd,"",err);}
}

function drawFoodworldChooseItemBox(zoneNrS, zoneNrL, queueNum, appendTo){
    try{
    //  GM_log("Begin drawFoodworldChooseItemBox zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL+" queueNum="+queueNum+" appendTo.id="+appendTo.id);
        if(zoneNrL===undefined || zoneNrL==null){ zoneNrL=getZoneListId(zoneNrS); }
        if(queueNum===undefined){ queueNum=0; }
        appendTo.innerHTML="";
        appendTo.setAttribute("zoneNrS",zoneNrS);
        appendTo.setAttribute("zoneNrL",zoneNrL);
        appendTo.setAttribute("queueNum",queueNum);
        var fzZoneType=getZoneType(zoneNrS);
        createElement("div",{"id":"divChooseTitle"+zoneNrL,"class":"queueTitle"},appendTo, getZoneName(0,zoneNrS,zoneNrL, ($("divChooseBoxInner")==appendTo)?queueNum:null, 20, true, true));
        createElement("div",{"id":"divChooseEndTime"+zoneNrL,"class":"queueTime"},appendTo);
        createElement("div",{"style":"clear:both;"},appendTo);

        newdiv=createElement("div",{id:"divChooseItem"+zoneNrL+"Q"+queueNum + "I"+PRODSTOP,"class":"divChooseItem link v"+PRODSTOP,"product":PRODSTOP},appendTo);
        newdiv.addEventListener("click",function(){
            var zoneNrS=this.parentNode.getAttribute("zoneNrS");
            var zoneNrL=this.parentNode.getAttribute("zoneNrL");
            var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
            zoneList[zoneNrL][queueNum]=DEFAULT_ZONELIST_ITEM.clone();
            toolTip.hide(this);
            if(this.parentNode==$("divChooseBoxInner")) click($("divChooseBoxClose"));
            updateQueueBox(zoneNrS, zoneNrL);
        },false);
        newdiv.addEventListener("mouseover", function(event){
            var zoneNrS=this.parentNode.getAttribute("zoneNrS");
            var zoneNrL=this.parentNode.getAttribute("zoneNrL");
            var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
            toolTip.show(event, toolTipProductSmall(zoneNrS, zoneNrL, queueNum, this));
        },false);

        for(var iProd=0;iProd<unsafeData.prodName[0].length;iProd++){
            if(fzZoneType==unsafeData.PRODUCT2BUILDING[0][iProd]){ // display only appropriate products for current building
            if(!unsafeData.prodBlock[0][iProd].match(/[uvlq]/)){
                newdiv=createElement("div",{"id":"divChooseItem"+zoneNrL+"Q"+queueNum+"I"+iProd,"class":"divChooseItem link v"+iProd,"product":iProd},appendTo);
                // TODO: Opacity von 0.4 ist ok, wenn Ertragsprodukt=benötiges Produkt.
                //       Aber bei bspw. Fabriken oder Tinkturen macht das keinen Sinn!
                //       Hier sollten vllt. die benötigten Produkte gecheckt werden

                //Patch 12072016
                var inStock = false;
                if (unsafeData.prodTyp[0][iProd].match(/fw/)){
                    for(var i=0;i<unsafeData.prodRequire[0][iProd].length;i++){
                        input=unsafeData.prodRequire[0][iProd][i][1];
                        if (unsafeData.prodStock[0][input]&&unsafeData.prodStock[0][input]>=unsafeData.prodRequire[0][iProd][i][2]) {
                            inStock = true;
                        }
                        else {
                            inStock = false;
                            break;
                        }
                    }
                }

                if(inStock){
                    newdiv.style.opacity=1;
                }else{
                    newdiv.style.opacity=(unsafeData.prodStock[0][iProd]&&unsafeData.prodStock[0][iProd]>0)?1:0.4;
                }

                /*Coins Sign*/
                if(unsafeData.prodRequire[0][iProd]){
                    for(var i in unsafeData.prodRequire[0][iProd]){
                        if(!unsafeData.prodRequire[0][iProd].hasOwnProperty(i)){continue;}
                        if (unsafeData.prodRequire[0][iProd][i][1] == 0) {
                            createElement("img",{src:GFX+"/menu/coins.gif","style":"position: relative; top: -8px; left: -8px; height: 16px; width: 16px;"},newdiv);
                        }
                    }
                }

                newdiv.addEventListener("click",function(){
                    var zoneNrS=this.parentNode.getAttribute("zoneNrS");
                    var zoneNrL=this.parentNode.getAttribute("zoneNrL");
                    var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
                    var product=parseInt(this.getAttribute("product"),10);
                    if(zoneList[zoneNrL][queueNum][0]!=product){
                        zoneList[zoneNrL][queueNum][0]=product;
                        zoneList[zoneNrL][queueNum][1]=(zoneNrS!="windmill"&&zoneList[zoneNrL][queueNum][3])?((unsafeData.prodMinRack&&(unsafeData.prodMinRack[0][product]!=undefined))?unsafeData.prodMinRack[0][product]:100):(zoneList[zoneNrL][queueNum][1]>=1?zoneList[zoneNrL][queueNum][1]:1);
                        zoneList[zoneNrL][queueNum][2]=0;
                    }
                    toolTip.hide(this);
                    if(this.parentNode==$("divChooseBoxInner")) click($("divChooseBoxClose"));
                    updateQueueBox(zoneNrS, zoneNrL);
                },false);
                newdiv.addEventListener("mouseover", function(event){
                    var zoneNrS=this.parentNode.getAttribute("zoneNrS");
                    var zoneNrL=this.parentNode.getAttribute("zoneNrL");
                    var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
                    toolTip.show(event, toolTipProductSmall(zoneNrS, zoneNrL, queueNum, this));
                },false);
            }
            }
        }
        if(appendTo==$("divChooseBoxInner")){
            $("divChooseBox").style.display="block";
            $("divChooseBox").style.top=Math.round(255 - $("divChooseBox").offsetHeight/2)+"px";
        }
        newdiv=null;appendTo=null;
        updateQueueBox(zoneNrS, zoneNrL);

        // GM_log("End drawFoodworldChooseItemBox :" + zoneNrL);
    }catch(err){GM_logError("drawFoodworldChooseItemBox ","","",err);}
}

function drawAnimalBreedingChooseItemBox(zoneNrS, zoneNrL, queueNum, appendTo){
    try{
    //  GM_log("Begin drawAnimalBreedingChooseItemBox zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL+" queueNum="+queueNum+" appendTo.id="+appendTo.id);
        if(zoneNrL===undefined || zoneNrL==null){ zoneNrL=getZoneListId(zoneNrS); }
        if(queueNum===undefined){ queueNum=0; }
        appendTo.innerHTML="";
        appendTo.setAttribute("zoneNrS",zoneNrS);
        appendTo.setAttribute("zoneNrL",zoneNrL);
        appendTo.setAttribute("queueNum",queueNum);
        var fzZoneType=getZoneType(zoneNrS);
        createElement("div",{"id":"divChooseTitle"+zoneNrL,"class":"queueTitle"},appendTo, getZoneName(0,zoneNrS,zoneNrL, ($("divChooseBoxInner")==appendTo)?queueNum:null, 20, true, true));
        createElement("div",{"id":"divChooseEndTime"+zoneNrL,"class":"queueTime"},appendTo);
        createElement("div",{"style":"clear:both;"},appendTo);

        newdiv=createElement("div",{id:"divChooseItem"+zoneNrL+"Q"+queueNum + "I"+PRODSTOP,"class":"divChooseItem link v"+PRODSTOP,"product":PRODSTOP},appendTo);
        newdiv.addEventListener("click",function(){
            var zoneNrS=this.parentNode.getAttribute("zoneNrS");
            var zoneNrL=this.parentNode.getAttribute("zoneNrL");
            var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
            zoneList[zoneNrL][queueNum]=DEFAULT_ZONELIST_ITEM.clone();
            toolTip.hide(this);
            if(this.parentNode==$("divChooseBoxInner")) click($("divChooseBoxClose"));
            updateQueueBox(zoneNrS, zoneNrL);
        },false);

        newdiv.addEventListener("mouseover", function(event){
            var zoneNrS=this.parentNode.getAttribute("zoneNrS");
            var zoneNrL=this.parentNode.getAttribute("zoneNrL");
            var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
            toolTip.show(event, toolTipProductSmall(zoneNrS, zoneNrL, queueNum, this));
        },false);

        for(var iProd=600;iProd<unsafeData.prodName[0].length;iProd++){
            if(fzZoneType==unsafeData.PRODUCT2BUILDING[0][iProd]){ // display only appropriate products for current building
            if(!unsafeData.prodBlock[0][iProd].match(/[uvlq]/)){
                if ((zoneNrS=="farmersmarket-4.5"&&(iProd<600||iProd>609))||(zoneNrS=="farmersmarket-4.6"&&(iProd<630||iProd>639))||(zoneNrS=="farmersmarket-4.7"&&(iProd<660||iProd>669))) {
                    //nur gültige Produkte für die Slots anzeigen
                    continue;
                }

                newdiv=createElement("div",{"id":"divChooseItem"+zoneNrL+"Q"+queueNum+"I"+iProd,"class":"divChooseItem link v"+iProd,"product":iProd},appendTo);

                newdiv.style.opacity=(unsafeData.prodStock[0][iProd]&&unsafeData.prodStock[0][iProd]>0)?1:0.4;
                newdiv.addEventListener("click",function(){
                    var zoneNrS=this.parentNode.getAttribute("zoneNrS");
                    var zoneNrL=this.parentNode.getAttribute("zoneNrL");
                    var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
                    var product=parseInt(this.getAttribute("product"),10);
                    if(zoneList[zoneNrL][queueNum][0]!=product){
                        zoneList[zoneNrL][queueNum][0]=product;
                        zoneList[zoneNrL][queueNum][1]=(zoneNrS!="windmill"&&zoneList[zoneNrL][queueNum][3])?((unsafeData.prodMinRack&&(unsafeData.prodMinRack[0][product]!=undefined))?unsafeData.prodMinRack[0][product]:100):(zoneList[zoneNrL][queueNum][1]>=1?zoneList[zoneNrL][queueNum][1]:1);
                        zoneList[zoneNrL][queueNum][2]=0;
                    }
                    /*toolTip.hide(this);*/
                    if(this.parentNode==$("divChooseBoxInner")) click($("divChooseBoxClose"));
                    updateQueueBox(zoneNrS, zoneNrL);
                },false);

            }
            }
        }
        if(appendTo==$("divChooseBoxInner")){
            $("divChooseBox").style.display="block";
            $("divChooseBox").style.top=Math.round(255 - $("divChooseBox").offsetHeight/2)+"px";
        }
        newdiv=null;appendTo=null;
        updateQueueBox(zoneNrS, zoneNrL);

        // GM_log("End drawAnimalBreedingChooseItemBox :" + zoneNrL);
    }catch(err){GM_logError("drawAnimalBreedingChooseItemBox ","","",err);}
}

function drawChooseItemBoxPony(zoneNrS, zoneNrL, queueNum, appendTo){
try{
    var zoneNrF=zoneNrS.toString().replace(/\.\d+$/,"");
    if(zoneNrL===undefined || zoneNrL==null){ zoneNrL=getZoneListId(zoneNrS); }
    if(queueNum===undefined){ queueNum=0; }
    appendTo.innerHTML="";
    appendTo.setAttribute("zoneNrS",zoneNrS);
    appendTo.setAttribute("zoneNrF",zoneNrF);
    appendTo.setAttribute("zoneNrL",zoneNrL);
    appendTo.setAttribute("queueNum",queueNum);
    var fzZoneType=getZoneType(zoneNrS); // 18
    createElement("div",{"id":"divChooseTitle"+zoneNrL,"class":"queueTitle"},appendTo, getZoneName(0,zoneNrS,zoneNrL, ($("divChooseBoxInner")==appendTo)?queueNum:null, 20, true, true));
    createElement("div",{"id":"divChooseEndTime"+zoneNrL,"class":"queueTime"},appendTo);
    createElement("div",{"style":"clear:both;"},appendTo);
    newdiv=createElement("div",{"class":"divChooseItem link v"+PRODSTOP,"id":"divChooseItem"+zoneNrL+"Q0I"+PRODSTOP},appendTo);
    if(zoneList[zoneNrL][0][0]==PRODSTOP){ newdiv.style.border="2px solid black"; }
    newdiv.addEventListener("click",function(){
        var zoneNrF=this.parentNode.getAttribute("zoneNrF");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        var help = zoneList[zoneToList[zoneNrL]][0][1];
        zoneList[zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY.clone();
        zoneList[zoneToList[zoneNrL]][0][1] = help;
        if(this.parentNode==$("divChooseBoxInner")){ click($("divChooseBoxClose")); }
        updateQueueBox(zoneNrF, zoneNrL);
    },false);
    newdiv.addEventListener("mouseover", function(event){
        var zoneNrF=this.parentNode.getAttribute("zoneNrF");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        toolTip.show(event, toolTipProductSmall(zoneNrF, zoneNrL, 0, this));
    },false);

    for(var i=2; i<=8; i=i*2){
        newdiv=createElement("div",{
            "class":"divChooseItem divZonePonyIcon link pony_farmi"+i,
            "id":"divChooseItem"+zoneNrL+"Q0I"+i
        },appendTo);
        if(zoneList[zoneNrL][0][0]==i){ newdiv.style.border="2px solid black"; }
        newdiv.addEventListener("click",function(){
            var zoneNrF=this.parentNode.getAttribute("zoneNrF");
            var zoneNrL=this.parentNode.getAttribute("zoneNrL");
            var help = zoneList[zoneToList[zoneNrL]][0][1];
            zoneList[zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY.clone();
            zoneList[zoneToList[zoneNrL]][0][1] = help;
            zoneList[zoneNrL][0][0]=parseInt(/Q0I(.*)$/.exec(this.id)[1],10);
            if (this.parentNode==$("divChooseBoxInner")) {
                click($("divChooseBoxClose"));
            }
            updateQueueBox(zoneNrF, zoneNrL);
            raiseEvent("ponyFarmiSelect");
        },false);
        // TODO: Integrate Tooltip
        // newdiv.addEventListener("mouseover", function(event){
        //     var zoneNrS=this.parentNode.getAttribute("zoneNrS");
        //     var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        //     toolTip.show(event, toolTipProductSmall(zoneNrS, zoneNrL, 0, this));
        // },false);
    }
    if(appendTo==$("divChooseBoxInner")){
        $("divChooseBox").style.display="block";
        $("divChooseBox").style.top=Math.round(255 - $("divChooseBox").offsetHeight/2)+"px";
    }
    updateQueueBox(zoneNrF, zoneNrL);
    zoneFeedCurr=null;zoneProdCurr=null;
    newdiv=null;appendTo=null;
}catch(err){GM_logError("drawChooseItemBoxPony ","","",err);}
}

function drawChooseItemBoxMegafield(zoneNrS, zoneNrL, queueNum, appendTo){
try{
    // GM_log("Begin drawChooseItemBoxMegafield zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL+" queueNum="+queueNum+" appendTo.id="+appendTo.id);
    if(zoneNrL===undefined || zoneNrL==null){ zoneNrL=getZoneListId(zoneNrS); }
    if(queueNum===undefined){ queueNum=0; }
    appendTo.innerHTML="";
    appendTo.setAttribute("zoneNrS",zoneNrS);
    appendTo.setAttribute("zoneNrL",zoneNrL);
    appendTo.setAttribute("queueNum",queueNum);
    var fzZoneType=getZoneType(zoneNrS);
    createElement("div",{"id":"divChooseTitle"+zoneNrL,"class":"queueTitle"},appendTo, getZoneName(0,zoneNrS,zoneNrL, ($("divChooseBoxInner")==appendTo)?queueNum:null, 20, true, true));
    createElement("div",{"id":"divChooseEndTime"+zoneNrL,"class":"queueTime"},appendTo);
    createElement("div",{"style":"clear:both;"},appendTo);

    newdiv=createElement("div",{id:"divChooseItem"+zoneNrL+"Q"+queueNum + "I"+PRODSTOP,"class":"divChooseItem link v"+PRODSTOP,"product":PRODSTOP},appendTo);
    newdiv.addEventListener("click",function(){
        var zoneNrS=this.parentNode.getAttribute("zoneNrS");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
        zoneList[zoneNrL][queueNum]=DEFAULT_ZONELIST_ITEM.clone();
        toolTip.hide(this);
        if(this.parentNode==$("divChooseBoxInner")) click($("divChooseBoxClose"));
        updateQueueBox(zoneNrS, zoneNrL);
    },false);
    newdiv.addEventListener("mouseover", function(event){
        var zoneNrS=this.parentNode.getAttribute("zoneNrS");
        var zoneNrL=this.parentNode.getAttribute("zoneNrL");
        var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
        toolTip.show(event, toolTipProductSmall(zoneNrS, zoneNrL, queueNum, this));
    },false);
    var iProd;
    var products=unsafeWindow.megafield_data.job.products;
    for(var i=0;i<products.length;i++){
        if(products[i].harvest&&(products[i].have<products[i].need)){
            iProd=products[i].pid;
            newdiv=createElement("div",{"id":"divChooseItem"+zoneNrL+"Q"+queueNum+"I"+iProd,"class":"divChooseItem link v"+iProd,"product":iProd},appendTo);
            newdiv.style.opacity=(unsafeData.prodStock[0][iProd]&&unsafeData.prodStock[0][iProd]>products[i].amount)?1:0.4;
            newdiv.addEventListener("click",function(){
                var zoneNrS=this.parentNode.getAttribute("zoneNrS");
                var zoneNrL=this.parentNode.getAttribute("zoneNrL");
                var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
                var product=parseInt(this.getAttribute("product"),10);
                if(zoneList[zoneNrL][queueNum][0]!=product){
                    zoneList[zoneNrL][queueNum][0]=product;
                    zoneList[zoneNrL][queueNum][1]=(zoneList[zoneNrL][queueNum][1]>=1?zoneList[zoneNrL][queueNum][1]:1);
                    zoneList[zoneNrL][queueNum][2]=0;
                }
                toolTip.hide(this);
                if(this.parentNode==$("divChooseBoxInner")) click($("divChooseBoxClose"));
                updateQueueBox(zoneNrS, zoneNrL);
            },false);
            newdiv.addEventListener("mouseover", function(event){
                var zoneNrS=this.parentNode.getAttribute("zoneNrS");
                var zoneNrL=this.parentNode.getAttribute("zoneNrL");
                var queueNum=parseInt(this.parentNode.getAttribute("queueNum"),10);
                toolTip.show(event, toolTipProductSmall(zoneNrS, zoneNrL, queueNum, this));
            },false);
        }
    }
    if(appendTo==$("divChooseBoxInner")){
        $("divChooseBox").style.display="block";
        $("divChooseBox").style.top=Math.round(255 - $("divChooseBox").offsetHeight/2)+"px";
    }
    newdiv=null;appendTo=null;
    updateQueueBox(zoneNrS, zoneNrL);
    // GM_log("End drawChooseItemBoxMegafield :" + zoneNrL);
}catch(err){GM_logError("drawChooseItemBoxMegafield ","","",err);}
}

//MapStall1
function drawQueueMapStall1ItemBox(zoneNrS, zoneNrL, appendTo){
    try{
        // GM_log("Begin drawQueueMapStall1ItemBox zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL+" appendTo.id="+appendTo.id);
        if(zoneNrL===undefined || zoneNrL==null){ zoneNrL=getZoneListId(zoneNrS); }
        appendTo.innerHTML="";
        appendTo.setAttribute("zoneNrS",zoneNrS);
        appendTo.setAttribute("zoneNrL",zoneNrL);
        var fzZoneType=getZoneType(zoneNrS);
        var nr = parseInt(zoneNrS.match(/\d/),10);
        createElement("div",{"id":"divChooseTitle"+zoneNrL,"class":"queueTitle"},appendTo, getZoneName(0,zoneNrS,zoneNrL, null, 20, true, true));

        createElement("div",{"id":"divChooseEndTime"+zoneNrL,"class":"queueTime"},appendTo);
        createElement("div",{"style":"clear:both;"},appendTo);

        newdiv=createElement("div",{id:"divChooseItem"+zoneNrL+ "I"+PRODSTOP,"class":"divChooseItem link v"+PRODSTOP,"product":PRODSTOP},appendTo);
        newdiv.addEventListener("click",function(){
            var zoneNrS=this.parentNode.getAttribute("zoneNrS");
            var zoneNrL=this.parentNode.getAttribute("zoneNrL");
            var product=parseInt(this.getAttribute("product"),10);
            zoneList[zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY.clone();
            zoneList[zoneNrL][0][0]=product;
            //toolTip.hide(this);
            if(this.parentNode==$("divChooseBoxInner")) click($("divChooseBoxClose"));
            updateQueueBox(zoneNrS, zoneNrL);
        },false);
        /*
        newdiv.addEventListener("mouseover", function(event){
            var zoneNrS=this.parentNode.getAttribute("zoneNrS");
            var zoneNrL=this.parentNode.getAttribute("zoneNrL");
            toolTip.show(event, toolTipProductSmall(zoneNrS, zoneNrL, 0, this));
        },false);
        */
        for(i=0;i<unsafeWindow.stall.data.products.length;i++){
            var iProd = unsafeWindow.stall.data.products[i];
            //if(!in_array(this.data.products[i],h)){this.fillProduct=this.data.products[i];break}
        //for(var iProd=0;iProd<unsafeData.prodName[0].length;iProd++){
        //    if(!(unsafeData.prodBlock[0][iProd]&&unsafeData.prodBlock[0][iProd].match(/[uvlq]/))){
                /*var fruitsShopProdTyp = ["v", "ex"];
                if (fruitsShopProdTyp.indexOf(unsafeData.prodTyp[0][iProd])==-1){continue;}
*/
                newdiv=createElement("div",{"id":"divChooseItem"+zoneNrL+"I"+iProd,"class":"divChooseItem link v"+iProd,"product":iProd},appendTo);
                if(unsafeWindow.in_array(iProd,unsafeWindow.stall.data.data[nr].wishlist.products)){
                    createElement("img",{src:GFX+"star.png","style":"position: relative; top: -10px; left: -10px; height: 22px; width: 22px;"},newdiv);

                    //createElement("img",{src:GFX+"points.gif",style:"float:left;display:block;margin:0px 2px 0px 1px;width:12px;"},newdiv);

                    //url(http://mff.wavecdn.de/mff/star.png);
                    //<div class="marker"></div
/*
                    var frame=createElement("div", {
                        "style":"position:absolute;top:47px;left:25%;padding-left: 4px;background: url('http://mff.wavecdn.de/mff/megafruit_time_bar.png') 100% 20px / 200%;border: 1px solid black;border-radius: 5px;"
                    },div,getText("veterinaryRoleAutostart")+": ");*/
                }
                if(zoneList[zoneNrL][0][0]==iProd){ newdiv.style.border="2px solid black"; }

                newdiv.addEventListener("click",function(){
                    var zoneNrS=this.parentNode.getAttribute("zoneNrS");
                    var zoneNrL=this.parentNode.getAttribute("zoneNrL");
                    var product=parseInt(this.getAttribute("product"),10);
                    zoneList[zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY.clone();
                    zoneList[zoneNrL][0][0]=product;
                    //toolTip.hide(this);
                    if(this.parentNode==$("divChooseBoxInner")) click($("divChooseBoxClose"));
                    updateQueueBox(zoneNrS, zoneNrL);
                },false);
                /*
                newdiv.addEventListener("mouseover", function(event){
                    var zoneNrS=this.parentNode.getAttribute("zoneNrS");
                    var zoneNrL=this.parentNode.getAttribute("zoneNrL");
                    toolTip.show(event, toolTipProductSmall(zoneNrS, zoneNrL, 0, this));
                },false);*/
        //    }
        }

        if(appendTo==$("divChooseBoxInner")){
            $("divChooseBox").style.display="block";
            $("divChooseBox").style.top=Math.round(255 - $("divChooseBox").offsetHeight/2)+"px";
        }
        newdiv=null;appendTo=null;
        updateQueueBox(zoneNrS, zoneNrL);
    }catch(err){GM_logError("drawQueueMapStall1ItemBox ","","",err);}
}


function updateQueueBox(zoneNrS,zoneNrL){
try{
    GM_logInfo("updateQueueBox","zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL,"","Begin",1);
    if(zoneNrS===undefined){ return; }
    var err_trace="init";
    if(zoneNrL===undefined || zoneNrL==null){ zoneNrL=getZoneListId(zoneNrS); }
    var fzType=getBuildingTyp(zoneNrS);
    var fzZoneType=getZoneType(zoneNrS);
    var fzForestry=(fzType=="forest"||fzType=="sawmill"||fzType=="carpentry");
    var fzMegafield=(fzType=="megafield");
    var fzWindmill=(fzType=="windmill");
    var iType=getZoneStockType(zoneNrS);
    var noTime=false;
    var level=parseInt($("levelnum").innerHTML,10);
    var zones=getZonesFromList(zoneNrL);
    var lShowTime=(zones.length>0);
    var zoneTimes=getZoneTimes(zoneNrL);
    // GM_log("updateQueueBox zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL+" zonetimes="+implode(zoneTimes,"updateQueueBox/zoneTimes"));
    var help,prod;
    if(fzWindmill){ reCalculateWindmill(); }
    // automat icons
    err_trace="automat icons";
    for(var i in automatIcons){
        if(!automatIcons.hasOwnProperty(i)){continue;}
        if((zoneNrL==getZoneListId(automatIcons[i][0]))&&automatIcons[i][1]&&automatIcons[i][1].parentNode){
        // isVisibleZone() ?
        // global_ ?
        // automat icons
            switch(fzType){
            case "windmill":
                automatIcons[i][1].childNodes[0].setAttribute("class","fmm"+zoneList[zoneNrL][0][0]);
            break;
            case "forest":case "sawmill":case "carpentry":
                automatIcons[i][1].childNodes[0].setAttribute("class","f_symbol"+zoneList[zoneNrL][0][0]);
            break;
            case 1: // Field
            case 3: // Factory
            case 4: // Foodworld
            case 13: //SushiBar
            case "megafield": // Megafield
                automatIcons[i][1].setAttribute("class","link divZoneIcon v"+zoneList[zoneNrL][0][0]);
            break;
            case 5:
                if (zoneList[zoneNrL][0][0] == PRODSTOP) {
                    automatIcons[i][1].setAttribute("class","link divZoneIcon v"+zoneList[zoneNrL][0][0]);
                } else {
                    automatIcons[i][1].setAttribute("class","link divZonePonyIcon divZoneIcon pony_farmi"+zoneList[zoneNrL][0][0]);
                }
            break;
            case 2: // Stable
                //catch wrong feed
                var futter1=BUILDING2FEED[fzZoneType][0];
                var futter2=BUILDING2FEED[fzZoneType][1];
                for(var queueNum=0;queueNum<zoneList[zoneNrL].length;queueNum++){
                    if((zoneList[zoneNrL][queueNum][0]!=futter1)&&(zoneList[zoneNrL][queueNum][0]!=futter2)&&(zoneList[zoneNrL][queueNum][0]!=PRODSTOP)){
                        zoneList[zoneNrL][queueNum]=DEFAULT_ZONELIST_ITEM.clone();
                        queueNum--;
                    }
                }
                queueNum=null;
                automatIcons[i][1].setAttribute("class","link divZoneIcon v"+zoneList[zoneNrL][0][0]);
            break;
            case 6: //Fuelstation
                automatIcons[i][1].setAttribute("class","link divZoneIcon v"+zoneList[zoneNrL][0][0]);
            break;
            case 7: //monster fruit culture
                if (zoneList[zoneNrL][0][0] == PRODSTOP) {
                    automatIcons[i][1].setAttribute("class","link divZoneIcon v"+zoneList[zoneNrL][0][0]);
                } else {
                    automatIcons[i][1].setAttribute("class","link divZoneAutoMonsterFruitCultureIcon divZoneIcon megafruit_need_item megafruit_need_item"+zoneList[zoneNrL][0][0]);
                }
            break;
            case 11: //map_stall1 / Obststand
                if(unsafeWindow.in_array(zoneList[zoneNrL][0][0],unsafeWindow.stall.data.data[parseInt(zoneNrS.match(/\d/),10)].wishlist.products)){
                    if (!automatIcons[i][1].childNodes[0]){
                    createElement("img",{"class":"marker", src:GFX+"star.png","style":"position: relative; top: -10px; left: -10px; height: 22px; width: 22px;"},automatIcons[i][1]);
                    }
                } else {
                    if (automatIcons[i][1].childNodes[0]){
                        automatIcons[i][1].removeChild(automatIcons[i][1].childNodes[0]);
                    }
                }
                automatIcons[i][1].setAttribute("class","link divZoneIcon v"+zoneList[zoneNrL][0][0]);
            break;
            }
            automatIcons[i][1].setAttribute("product",zoneList[zoneNrL][0][0]);
            automatIcons[i][1].setAttribute("zoneBeginTime",implode(zoneTimes,"updateQueueBox/zoneTimes"));
            automatIcons[i][1].style.display="block";
        }
    }
    //queue list
    // var debugStr="";
    err_trace="queue list";
    if($("divAutoMatQueueBox"+zoneNrL)){
        // GM_log("updateQueueBox Box :" + zoneNrL);
        var divAutoMatQueueItemBox, divAutoMatQueueItemBoxId;
        var totalInQue=0;
        var foundStop=false;
        var lRepeat=(!OPTION_LIST_REPEAT || zoneSettings[zoneNrL]["repeat"]===undefined)?false:zoneSettings[zoneNrL]["repeat"];
        var lShuffle=zoneSettings[zoneNrL]["shuffle"]===undefined?false:zoneSettings[zoneNrL]["shuffle"];
        var newRackAmount=new Array(); //array with all cultured products until that moment.
        var newProdStock=unsafeData.prodStock.clone();
        if(!newProdStock[iType]){ newProdStock[iType]={}; }
        var fRepeat=OPTION_LIST_REPEAT?lRepeat:false; //foundRepeat
        var tBegin=0,tEnd=0,tBeginPrev;
        var totalCrop=unsafeData.zones.getTotalCrop();
        var aGrowing={};
        var aGrowingTotal=(totalCrop[iType]?totalCrop[iType]:{});
        loop:for(queueNum=0;queueNum<zoneList[zoneNrL].length;queueNum++){
            // GM_log("updateQueueBox Box :" + zoneNrS + ":"+queueNum + " | " + zoneList[zoneNrL].length);
            var iRepeat=(OPTION_ITEM_REPEAT && !fzWindmill && !fzMegafield)?zoneList[zoneNrL][queueNum][4]:false;
            fRepeat=fRepeat||(OPTION_ITEM_REPEAT?iRepeat:false);
            var iLastInf=(!fzWindmill && !fzMegafield)?(((zoneList[zoneNrL].length-1)==queueNum) && !fRepeat && !lShuffle):false;
            var iRackMode=!iLastInf && zoneList[zoneNrL][queueNum][3];
            var iProd=parseInt(zoneList[zoneNrL][queueNum][0],10);
            var iStop=(iProd==PRODSTOP);
            var iDone=iRackMode?0:parseInt(zoneList[zoneNrL][queueNum][2],10);
            var iTot=parseInt(zoneList[zoneNrL][queueNum][1],10);
            var iTogo=iRackMode?0:(iLastInf?(11*(zones.length)):iTot-iDone);
            var iTogoAmount=0,iTogoScore=0;
            var iRequireMissing=false;
            var iRequireCoin = false;
            var fz;
            if(!newProdStock[iType][iProd]){ newProdStock[iType][iProd]=0; }
            divAutoMatQueueItemBoxId="divAutoMatQueueItemBox"+zoneNrL+"Q"+queueNum;
            divAutoMatQueueItemBox=$(divAutoMatQueueItemBoxId);

            if(settings.get("account","showQueueTime")){
                var beginTime=new Object();
                var timeArray=new Object();
                var timesArray=new Object();
                var iTogoArray=new Object();
                var aMissing=new Object();
                var endTime=zoneTimes[getLowestTimeFarmZone(zoneTimes)];
                var currFeldPositions=0;
                if(fzWindmill){
                    beginTime[zoneNrS]=zoneTimes[zoneNrS];
                    timeArray[zoneNrS]=calcProductionTime(iProd, zoneNrS);
                    if(!timesArray[zoneNrS]) timesArray[zoneNrS]=new Array();
                    iTogoArray[zoneNrS]=0;
                    for(var k=0;k<iTogo;k++){
                        zoneTimes[zoneNrS] +=timeArray[zoneNrS];
                        if(timesArray[zoneNrS].length<=10){ timesArray[zoneNrS].push(zoneTimes[zoneNrS]); }
                        iTogoArray[zoneNrS]++;
                    }
                    endTime=zoneTimes[zoneNrS];
                } else if((iTot<=0)||iStop){ //don't do any thing just give the begin info.
                    for(fz in zoneTimes){
                        if(!zoneTimes.hasOwnProperty(fz)){ continue; }
                        if(isNaN(iTogoArray[fz])) iTogoArray[fz]=0;
                        iTogoArray[fz]++;
                        if(!beginTime[fz]) beginTime[fz]=zoneTimes[fz];
                        if(!timeArray[fz]) timeArray[fz]=calcProductionTime(iProd, getZoneNameCorrected(fz));
                    }
                }else if(iRackMode){
                    while((newRackAmount[iProd]+iTogoAmount) < iTot){
                        var fz=getLowestTimeFarmZone(zoneTimes);
                        var cfz=getZoneNameCorrected(fz);
                        if(!beginTime[fz]) beginTime[fz]=zoneTimes[fz];
                        if(!timeArray[fz]) timeArray[fz]=calcProductionTime(iProd, cfz);
                        if(isNaN(iTogoArray[fz])) iTogoArray[fz]=0;
                        iTogoArray[fz]++;
                        currFeldPositions=calcProductPositions(iProd,cfz);
                        zoneTimes[fz] +=timeArray[fz]+(unsafeWindow.premium==1?0:(settings.get("country","pause")[1]/1000)*currFeldPositions);
                        if(!timesArray[fz]){
                            timesArray[fz]=new Array();
                            iTogoAmount +=currFeldPositions; //this is the amount that is planted on a field. that last field returns them.
                        }
                        if(timesArray[fz].length<=10) timesArray[fz][timesArray[fz].length]=zoneTimes[fz];
                        iTogoAmount +=calcProductAmount(iProd, cfz, currFeldPositions, zoneTimes[fz], true);
                        iTogoScore +=calcProductScore(iProd, cfz, currFeldPositions, zoneTimes[fz]);
                        iTogo++;
                        if(endTime < zoneTimes[fz]) endTime=zoneTimes[fz];
                    }
                }else{
                    for(var k=0;k<iTogo;k++){
                        fz=getLowestTimeFarmZone(zoneTimes);
                        var bt=getBuildingTyp(fz);
                        tBeginPrev=tBegin;
                        tBegin=zoneTimes[fz];
                        totalCrop=unsafeData.zones.getTotalCrop(tBeginPrev+1,tBegin);
                        for(var sType in totalCrop){
                            if(!totalCrop.hasOwnProperty(sType)){ continue; }
                            if(!newProdStock[sType]){ newProdStock[sType]={}; }
                            for(var sProd in totalCrop[sType]){
                                if(!totalCrop[sType].hasOwnProperty(sProd)){ continue; }
                                if(!newProdStock[sType][sProd]){ newProdStock[sType][sProd]=0; }
                                newProdStock[sType][sProd]+=totalCrop[sType][sProd];
                                if(sType==iType){
                                    aGrowingTotal[sProd]-=totalCrop[sType][sProd];
                                }
                            }
                        }
                        // Needed resources for production
                        if(unsafeData.prodRequire[iType]&&unsafeData.prodRequire[iType][iProd]){
                            for(var i in unsafeData.prodRequire[iType][iProd]){
                                if(!unsafeData.prodRequire[iType][iProd].hasOwnProperty(i)){continue;}
                                sType=unsafeData.prodRequire[iType][iProd][i][0];
                                sProd=unsafeData.prodRequire[iType][iProd][i][1];
                                if(!newProdStock[sType]){ newProdStock[sType]={}; }
                                if(!newProdStock[sType][sProd]){ newProdStock[sType][sProd]=0; }
                                newProdStock[sType][sProd]-=unsafeData.prodRequire[iType][iProd][i][2];
                                if(sProd==0) { //Procuct require coins
                                    iRequireCoin=true;
                                }
                                /* noch nicht fertig
                                if(!unsafeData.prodRequire[iType][iProd].hasOwnProperty(i)){continue;}
                                sType=unsafeData.prodRequire[iType][iProd][i][0];
                                var zoneNrF=zoneNrS.split(".");
                                var farmNR=Math.floor((zoneNrF[0]-1)/6)+1;
                                sType = (farmNR<=4)?sType:(farmNR==5)?5:(farmNR==6)?6:(farmNR==7)?7:8;
                                sProd=unsafeData.prodRequire[iType][iProd][i][1];
                                if(!newProdStock[sType]){ newProdStock[sType]={}; }
                                if(!newProdStock[sType][sProd]){ newProdStock[sType][sProd]=0; }
                                newProdStock[sType][sProd]-=unsafeData.prodRequire[iType][iProd][i][2];
                                if(sProd==0) { //Procuct require coins
                                    iRequireCoin=true;
                                }
                                */
                                if(newProdStock[sType][sProd]<0){
                                    iRequireMissing=true;
                                    if(!aMissing[sType]){ aMissing[sType]={}; }
                                    aMissing[sType][sProd]=-newProdStock[sType][sProd];
                                }
                            }
                        }
                        // Previous production of queue at this zone
                        if(aGrowing[fz]){
                            if(!newProdStock[iType][aGrowing[fz][0]]){ newProdStock[iType][aGrowing[fz][0]]=0; }
                            newProdStock[iType][aGrowing[fz][0]]+=aGrowing[fz][1];
                            aGrowingTotal[aGrowing[fz][0]]-=aGrowing[fz][1];
                        }
                        //this is the amount that is planted on a field. that last field returns them.
                        if(!timesArray[fz]){
                            timesArray[fz]=new Array();
                            if(!fzForestry){ //TODO should be done with the prodrequire == prodYield check..
                                // iTogoAmount += currFeldPositions;
                            }
                        }
                        if(timesArray[fz].length<=10) timesArray[fz][timesArray[fz].length]=zoneTimes[fz];
                        if(!beginTime[fz]){ beginTime[fz]=tBegin; }
                        currFeldPositions=calcProductPositions(iProd,fz);
                        if(!timeArray[fz]){ timeArray[fz]=calcProductionTime(iProd, fz); }
                        tEnd=tBegin+timeArray[fz]+((unsafeWindow.premium==1)?0:(settings.get("country","pause")[0]/1000)*currFeldPositions);
                        zoneTimes[fz]=tEnd;
                        var iAmount=calcProductAmount(iProd, fz, currFeldPositions, zoneTimes[fz], false);
                        iTogoAmount +=iAmount;
                        aGrowing[fz]=[iProd,iAmount];
                        if(!aGrowingTotal[iProd]){ aGrowingTotal[iProd]=0; }
                        aGrowingTotal[iProd]+=iAmount;
                        iTogoScore +=calcProductScore(iProd, fz, currFeldPositions, zoneTimes[fz]);
                        if(endTime < zoneTimes[fz]) endTime=zoneTimes[fz];
                        if(isNaN(iTogoArray[fz])){ iTogoArray[fz]=0; }
                        iTogoArray[fz]++;
                        if((!iLastInf)&&unsafeData.prodStockMax[iType]&&unsafeData.prodStockMax[iType][iProd]){
                            // Delete queue item if maximum stock capacity is reached
                            if((0==k)&&(unsafeData.prodStockMax[iType][iProd]<newProdStock[iType][iProd]+aGrowingTotal[iProd])){
                                GM_logInfo("updateQueueBox","zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL,"queueNum="+queueNum,getText("automat_maximumStockCapacityReached")+" "+getText("automat_queueItemDeleted"));
                                zoneList[zoneNrL].splice(queueNum,1);
                                queueNum--;
                                var div=$("divAutoMatQueueItemBox"+zoneNrL+"Q"+zoneList[zoneNrL].length);
                                if(div){
                                    removeElement(div);
                                    div=null;
                                }
                                continue loop;
                            }
                            // Abort queue if maximum stock capacity is reached
                            if((k+1<iTogo)&&(unsafeData.prodStockMax[iType][iProd]<=newProdStock[iType][iProd]+aGrowingTotal[iProd])){
                                GM_logInfo("updateQueueBox","zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL,"queueNum="+queueNum,getText("automat_maximumStockCapacityReached")+" "+getText("automat_queueItemAmountDecreased"));
                                iTogo=k+1;
                                iTot=iTogo+iDone;
                                zoneList[zoneNrL][queueNum][1]=iTot;
                            }
                        }
                        /*
                        debugStr+= "\n"
                                +"  queueNum=" +JSON.stringify(queueNum)
                                +", k=" +JSON.stringify(k)
                                +", fz="+JSON.stringify(fz)
                                +", bt="+JSON.stringify(bt)
                                +", beginTime[fz]="+getDateStr(beginTime[fz])+" "+getDaytimeStr(beginTime[fz],false,true)
                                +", timeArray[fz]="+JSON.stringify(timeArray[fz])
                                +", iTogoArray[fz]="+JSON.stringify(iTogoArray[fz])
                                +", zoneTimes[fz]="+getDateStr(zoneTimes[fz])+" "+getDaytimeStr(zoneTimes[fz],false,true)
                                +", currFeldPositions="+JSON.stringify(currFeldPositions)
                                +", tBeginPrev="+getDateStr(tBeginPrev)+" "+getDaytimeStr(tBeginPrev,false,true)
                                +", tBegin="+getDateStr(tBegin)+" "+getDaytimeStr(tBegin,false,true)
                                +", tEnd="+getDateStr(tEnd)+" "+getDaytimeStr(tEnd,false,true)
                                +", totalCrop["+iType+"]="+JSON.stringify(totalCrop[iType])
                                +", newProdStock["+iType+"]["+iProd+"]="+implode(newProdStock[iType][iProd],"-")
                                +", prodStockMax["+iType+"]["+iProd+"]="+implode(unsafeData.prodStockMax[iType][iProd],"-")
                                +", aGrowingTotal="+JSON.stringify(aGrowingTotal)
                                +", aGrowing="+JSON.stringify(aGrowing)
                                ;
                        */
                    }
                }
                divAutoMatQueueItemBox.setAttribute("timeArray",implode(timeArray,"updateQueueBox/timeArray"));
                divAutoMatQueueItemBox.setAttribute("iTogoArray",implode(iTogoArray.sortObj(),"updateQueueBox/iTogoArray"));
                divAutoMatQueueItemBox.setAttribute("timesArray",implode(timesArray.sortObj(),"updateQueueBox/timesArray"));
                divAutoMatQueueItemBox.setAttribute("zoneBeginTime",implode(beginTime.sortObj(),"updateQueueBox/beginTime"));
                divAutoMatQueueItemBox.setAttribute("zoneEndTime",implode(zoneTimes,"updateQueueBox/zoneTimes"));
                divAutoMatQueueItemBox.setAttribute("aMissing",implode(aMissing,"updateQueueBox/aMissing"));
                timeArray=null;beginTime=null;timesArray=null;iTogoArray=null;
            }else{
                iTogoAmount=iTogo*calcProductAmount(iProd, zoneNrS);
                iTogoScore=iTogo*calcProductScore(iProd, zoneNrS);
                for(var i in unsafeData.prodRequire[iType][iProd]){
                    if(!unsafeData.prodRequire[iType][iProd].hasOwnProperty(i)){continue;}
                    sType=unsafeData.prodRequire[iType][iProd][i][0];
                    sProd=unsafeData.prodRequire[iType][iProd][i][1];
                    if(sProd==0) { //Procuct require coins
                        iRequireCoin=true;
                    }
                    if(iTot*unsafeData.prodRequire[iType][iProd][i][2]>unsafeData.prodStock[sType][sProd]){
                        iRequireMissing=true;
                        break;
                    }
                }
                if(!newRackAmount[iProd] && !fzWindmill && !fzMegafield){ newRackAmount[iProd]=calcInGameProductAmount(iProd,zoneNrS,null,true); }
            }
            if(!(zoneNrS=="farmersmarket-4.5"||zoneNrS=="farmersmarket-4.6"||zoneNrS=="farmersmarket-4.7")) {
                //Hinweis aud fehlende Produkte oder Coins-Produkte in der Queue von farmersmarket-4 slot 5 bis 7 ausblenden
                divAutoMatQueueItemBox.style.backgroundColor=(foundStop?"red":(iRequireMissing?"yellow":(iRequireCoin?"orange":"transparent")));
            }
            if(iStop){ foundStop=true; }

            if(!fzWindmill && !fzMegafield && !iStop){
                newRackAmount[iProd] +=iTogoAmount;
                divAutoMatQueueItemBox.setAttribute("iTogo",iTogo);
                divAutoMatQueueItemBox.setAttribute("iTogoAmount",iTogoAmount);
                divAutoMatQueueItemBox.setAttribute("iTogoScore",iTogoScore);
            }
            divAutoMatQueueItemBox.setAttribute("totalInQue",totalInQue);
            divAutoMatQueueItemBox.setAttribute("foundStop",foundStop);
            totalInQue +=iTogo;

            // GM_log("updateQueueBox Box :" + zoneNrL + ":"+queueNum + " | 4");
            $(divAutoMatQueueItemBoxId+"Item").style.opacity=(iTogo<=0 && !iStop)? 0.4:1;
            $(divAutoMatQueueItemBoxId+"Item").setAttribute("product",iProd);
            if(fzWindmill){
                $(divAutoMatQueueItemBoxId+"Item").childNodes[0].className="fmm"+iProd;
            }else if(fzForestry){
                $(divAutoMatQueueItemBoxId+"Item").childNodes[0].className="f_symbol"+iProd;
            }else{
                $(divAutoMatQueueItemBoxId+"Item").className="link queueItemProduct v"+iProd;
            }
            // GM_log("updateQueueBox Box :" + zoneNrL + ":"+queueNum + " | 5");
            $("divAutoMatQueueBox"+zoneNrL).style.width=($("divAutoMatQueueBox"+zoneNrL).parentNode==$("divQueueBoxInner"))?"348px":"530px";
            $("divAutoMatQueueBox"+zoneNrL).style.height=row7+2+((settings.get("account","showQueueTime") && lShowTime)?queueItemBoxTimeHeight:0)+"px";
            $("divAutoMatButton"+zoneNrL).style.height=row7+2+((settings.get("account","showQueueTime") && lShowTime)?queueItemBoxTimeHeight:0)+"px";

            $(divAutoMatQueueItemBoxId+"I1").className=(iRackMode)?"queueItemInput1 queueItemInputWidth1":"queueItemInput1 queueItemInputWidth2";
            $(divAutoMatQueueItemBoxId+"I1").value=(iTot===undefined)?1:iTot; //TODO remove setting val here
            $(divAutoMatQueueItemBoxId+"I1").style.display=(iLastInf || iStop)?"none":"block";
            $(divAutoMatQueueItemBoxId+"I1").maxLength=(iRackMode)?"6":"4";

            $(divAutoMatQueueItemBoxId+"I2").value=(iDone===undefined)?0:iDone; //TODO remove setting val here
            $(divAutoMatQueueItemBoxId+"I2").style.opacity=(iTogo<=0)?0.4:1;
            $(divAutoMatQueueItemBoxId+"I2").style.display=(!iRackMode && (iRepeat || lRepeat) && !iStop)?"block":"none";
            if(OPTION_ITEM_REPEAT){
                $(divAutoMatQueueItemBoxId+"Mode").style.display=(!iRackMode && !iStop)?"block":"none";
                $(divAutoMatQueueItemBoxId+"Mode").style.backgroundImage="url("+(zoneList[zoneNrL][queueNum][4]?IMAGES["mode_repeat"]:IMAGES["mode_1time"])+")";

                $(divAutoMatQueueItemBoxId+"IListRepeat").style.display=(!iRackMode && (iRepeat || lRepeat) && !iStop)?"block":"none";
                $(divAutoMatQueueItemBoxId+"IListRepeat").value=(zoneList[zoneNrL][queueNum][5]===undefined)?REPEAT_NO_LIMIT:zoneList[zoneNrL][queueNum][5];
            }
            $(divAutoMatQueueItemBoxId+"M").style.opacity=iTogo<=0?0.4:1;
            $(divAutoMatQueueItemBoxId+"M").style.display=(iLastInf || iStop || iTot<=1) ?"none":"block";
            if(iLastInf||iStop){
                $(divAutoMatQueueItemBoxId+"P").style.display="none";
            }else if(fzWindmill){
                $(divAutoMatQueueItemBoxId+"P").style.display=(autoMillStorage[iProd][1]<autoMillStorage[iProd][0])?"block":"none";
            }else if(unsafeData.prodStockMax[iType]&&unsafeData.prodStockMax[iType][iProd]){
                $(divAutoMatQueueItemBoxId+"P").style.display=(newProdStock[iType][iProd]+aGrowingTotal[iProd]<unsafeData.prodStockMax[iType][iProd])?"block":"none";
            }else{
                $(divAutoMatQueueItemBoxId+"P").style.display="block";
            }

            $(divAutoMatQueueItemBoxId+"ET").innerHTML=(settings.get("account","showQueueTime") && lShowTime)?iLastInf?"∞":(getDateText(endTime,0) + "<br/>" + getDaytimeStr(endTime,true)):null;
            $(divAutoMatQueueItemBoxId+"ET").style.color=noTime? "#DD0000":"black";
            $(divAutoMatQueueItemBoxId+"ET").style.display=(iTogo<=0 || foundStop || !settings.get("account","showQueueTime") || !lShowTime)?"none":"block";

            $(divAutoMatQueueItemBoxId+"T").innerHTML=(iStop)?_TEXTE_STOP:"∞";
            $(divAutoMatQueueItemBoxId+"T").setAttribute("class",(iStop?"queueItemText queueItemTextStop":"queueItemText queueItemTextInf"));
            $(divAutoMatQueueItemBoxId+"T").style.display=(iLastInf || iStop)?"block":"none";

            $(divAutoMatQueueItemBoxId+"Up").style.display=(queueNum==0) ?"none":"block";
            $(divAutoMatQueueItemBoxId+"Down").style.display=((zoneList[zoneNrL].length-1)==queueNum) ?"none":"block";

            $(divAutoMatQueueItemBoxId+"A").style.top=((iRackMode))?row4+"px":"";
            $(divAutoMatQueueItemBoxId+"D").style.left=(iRackMode)?col3+"px":"";
            $(divAutoMatQueueItemBoxId+"D").style.display=(zoneList[zoneNrL].length > 1) ?"block":"none";
            $(divAutoMatQueueItemBoxId+"B").style.display=(!fzWindmill && !fzMegafield && !iLastInf && !iStop)?"block":"none";
            $(divAutoMatQueueItemBoxId+"B").style.backgroundImage="url("+(iRackMode?IMAGES["functionR"]:IMAGES["functionF"])+")";
            // GM_log("updateQueueBox Box :" + zoneNrL + ":"+queueNum + " END");
        }
        // GM_log("updateQueueBox Box :" + zoneNrL + ":"+queueNum + " AFTER");

        $("divAutoMatEndTime"+zoneNrL).style.display=(settings.get("account","showQueueTime"))?"block":"none";
        if(settings.get("account","showQueueTime")){
            $("divAutoMatEndTime"+zoneNrL).innerHTML=(!fzWindmill && !fzMegafield && !fRepeat && !lShuffle && !foundStop)? getText("automat_inftext"):(getText("automat_QueTimeReady") + (lShowTime?(((!foundStop && (lRepeat || iRepeat || noTime))?" ~ ":" ") + getDateText(endTime,0) + "&nbsp;"+ getDaytimeStr(endTime,true)):" ~ ")); // why +- (\u00B1)?
            $("divAutoMatEndTime"+zoneNrL).style.color=(noTime?"#DD0000":((foundStop || fRepeat)?"#0000DD":"#000000"));
        }
        divAutoMatQueueItemBox=null;
        totalCrop=null;aGrowingTotal=null;
    }
    zoneTimes=null;
    //ChooseBox part
    err_trace="ChooseBox";
    var divChooseEndTimeCurr = $("divChooseEndTime"+zoneNrL)
    if(divChooseEndTimeCurr){
        var zoneTimes=getZoneTimes(zoneNrL);
        // GM_log("updateQueueBox chooseBox zoneNrS:" + zoneNrS + " zoneNrL:" + zoneNrL + " queueNum:" + queueNum );
        var queueNum=divChooseEndTimeCurr.parentNode.getAttribute("queueNum");
        var foundStop=false;
        for(var i=0;i<=queueNum;i++){
            if(foundStop=zoneList[zoneNrL][i][0]==PRODSTOP) break;
        }
        // GM_log("updateQueueBox chooseBox foundStop:" + foundStop + " lShowTime:"+lShowTime);
        switch(fzType){
        case 1:case 4: case 13: case "megafield":{ // fields, foodworld, megafield
            // GM_log("updateQueueBox chooseBox fields 1:" + zoneNrS);
            if(settings.get("account","showQueueTime")){
                if($("divAutoMatQueueItemBox"+zoneNrL+"Q"+queueNum) && lShowTime){
                    var zoneBeginTime=explode($("divAutoMatQueueItemBox"+zoneNrL+"Q"+queueNum).getAttribute("zoneBeginTime"),"updateQueueBox/chooseBox/zoneBeginTime",{});
                }else{
                    var zoneBeginTime=zoneTimes;
                }
                var fz=getLowestTimeFarmZone(zoneBeginTime);
                var productTime=calcProductionTime(zoneList[zoneNrL][queueNum][0],fz);
                divChooseEndTimeCurr.style.display=lShowTime?"block":"none";
                divChooseEndTimeCurr.parentNode.setAttribute("zoneBeginTime",implode(zoneBeginTime,"updateQueueBox/chooseBox/zoneBeginTime"));
                divChooseEndTimeCurr.style.color=noTime? "#DD0000":"black";
                divChooseEndTimeCurr.innerHTML=(foundStop? getText("automat_QueDontWork"):(($("divChooseBoxInner")==divChooseEndTimeCurr.parentNode)?getText("automat_QueTimeFirstReady"):getText("automat_QueTimeReady")) + " " + getDateText(zoneBeginTime[fz]+productTime,0) + "&nbsp;"+ getDaytimeStr(zoneBeginTime[fz]+productTime,true));
            }
            // GM_log("updateQueueBox chooseBox fields 2:" + zoneNrS);
            help=$("divChooseBoxInner").querySelectorAll(".link");
            for(var i=help.length-1;i>=0;i--){
                prod=parseInt(help[i].getAttribute("product"),10);
                help[i].style.border=(zoneList[zoneNrL][queueNum][0]==prod?"2px solid black":"");
            }
            zoneBeginTime=null;fz=null;productTime=null;help=null;
        break;}
        case 2:{ // stable
            if(settings.get("account","showQueueTime")){
                divChooseEndTimeCurr.parentNode.setAttribute("zoneBeginTime",implode(zoneTimes,"updateQueueBox/chooseBox/zoneTimes"));
                divChooseEndTimeCurr.style.display=lShowTime?"block":"none";
                //for(var queueNum=0;queueNum<zoneList[zoneNrL].length;queueNum++){
                for(var k=0;k<BUILDING2FEED[fzZoneType].length;k++){
                    var iProd=BUILDING2FEED[fzZoneType][k];
                    var queueNum=(zoneList[zoneNrL][0][0]==iProd?0:1);
                    if(!(unsafeData.prodBlock[0][iProd]&&unsafeData.prodBlock[0][iProd].match(/l/))){
                        $("divChooseFeedAmountSpan"+zoneNrL+"Q"+iProd+"I").innerHTML=zoneList[zoneNrL][queueNum][1];
                        var cand2=$("divChooseFeedAmount"+zoneNrL+"Q"+iProd+"I").getElementsByTagName("div");
                        for(var v=0;v<cand2.length;v++){
                            cand2[v].style.backgroundColor=(parseInt(cand2[v].getAttribute("value"),10)<=zoneList[zoneNrL][queueNum][1]?"blue":"");
                        }
                        cand2=null;
                    }
                    iProd=null;
                }
                if(lShowTime){
                    var iProd=unsafeData.BUILDING2PRODUCT[fzZoneType][0];
                    var duration=calcProductionTime(iProd,zoneNrS);
                    var endTime=zoneTimes[zoneNrS] + duration;
                    divChooseEndTimeCurr.style.color=noTime? "#DD0000":"black";
                    if(zoneList[zoneNrL][0][1]==PRODSTOP && zoneList[zoneNrL][1][1]==PRODSTOP){
                        divChooseEndTimeCurr.innerHTML=getText("automat_QueDontWork");
                    }else{
                        // divChooseEndTimeCurr.innerHTML=getText("automat_QueTimeReady") + " " + getDateText(endTime,0) + "&nbsp;"+ getDaytimeStr(endTime,true);
                        divChooseEndTimeCurr.innerHTML=getTimeStr(duration,true)+"&nbsp;"+getText("shortHours") + "&nbsp;" + getDateText(endTime,0) + "&nbsp;"+ getDaytimeStr(endTime,true);
                    }
                }
            }
        break;}
        case 3:{ // factory
            $("divChooseItem"+zoneNrL+"Q"+queueNum+"I"+PRODSTOP).style.border=((zoneList[zoneNrL][queueNum][0]==PRODSTOP)?"2px solid black":"");
            for(var v in unsafeData.BUILDING_INPUT[fzZoneType]){
                if(!unsafeData.BUILDING_INPUT[fzZoneType].hasOwnProperty(v)){ continue; }
                if(unsafeData.prodBlock[0][v]){ continue; }
                $("divChooseItem"+zoneNrL+"Q"+queueNum+"I"+v).style.border=((zoneList[zoneNrL][queueNum][0]==v)?"2px solid black":"");
            }
            if(settings.get("account","showQueueTime")){
                divChooseEndTimeCurr.parentNode.setAttribute("zoneBeginTime",implode(zoneTimes,"updateQueueBox/chooseBox/zoneTimes"));
                divChooseEndTimeCurr.style.display=lShowTime?"block":"none";
                if(lShowTime){
                    var fz=getLowestTimeFarmZone(zoneTimes);
                    var endTime=zoneTimes[fz] + calcProductionTime(zoneList[zoneNrL][queueNum][0],fz);
                    divChooseEndTimeCurr.style.color=noTime? "#DD0000":"black";
                    divChooseEndTimeCurr.innerHTML=(foundStop?getText("automat_QueDontWork"):(($("divChooseBoxInner")==divChooseEndTimeCurr.parentNode)?getText("automat_QueTimeFirstReady"):getText("automat_QueTimeReady")) + " " + getDateText(endTime,0) + "&nbsp;"+ getDaytimeStr(endTime,true));
                    fz=null;endTime=null;
                }
            }
            zoneFeedCurr=null;zoneProdCurr=null;
        break;}
        case 5: { // Pony - No queue mode support
        break;}
        case 6:{ // Fuelstation
            $("divChooseItem"+zoneNrL+"Q"+queueNum+"I"+PRODSTOP).style.border=((zoneList[zoneNrL][queueNum][0]==PRODSTOP)?"2px solid black":"");
            if(settings.get("account","showQueueTime"))  {
                divChooseEndTimeCurr.parentNode.setAttribute("zoneBeginTime",implode(zoneTimes,"updateQueueBox/chooseBox/zoneTimes"));
                divChooseEndTimeCurr.style.display=lShowTime?"block":"none";
                if(lShowTime){
                    var fz=getLowestTimeFarmZone(zoneTimes);
                    var endTime=zoneTimes[fz] + calcProductionTime(zoneList[zoneNrL][queueNum][0],fz);
                    divChooseEndTimeCurr.style.color=noTime? "#DD0000":"black";
                    divChooseEndTimeCurr.innerHTML=(foundStop?getText("automat_QueDontWork"):(($("divChooseBoxInner")==divChooseEndTimeCurr.parentNode)?getText("automat_QueTimeFirstReady"):getText("automat_QueTimeReady")) + " " + getDateText(endTime,0) + "&nbsp;"+ getDaytimeStr(endTime,true));
                    fz=null;endTime=null;
                }
            }
            zoneFeedCurr=null;zoneProdCurr=null;
        break;}
        case 7: { // monster fruit culture  - No queue mode support
        break;}
        case 11: { // map_stall1 / Obststand  - No queue mode support
        break;}
        case "windmill":{ // (fzWindmill)
            if(settings.get("account","showQueueTime")){
                divChooseEndTimeCurr.parentNode.setAttribute("zoneBeginTime",implode(zoneTimes,"updateQueueBox/chooseBox/zoneBeginTimes"));
                divChooseEndTimeCurr.style.display=lShowTime?"block":"none";
                if(lShowTime){
                    var endTime=zoneTimes[zoneNrS] + calcProductionTime(zoneList[zoneNrL][queueNum][0],zoneNrS);
                    divChooseEndTimeCurr.style.color=noTime? "#DD0000":"black";
                    divChooseEndTimeCurr.innerHTML=(foundStop? getText("automat_QueDontWork"):(($("divChooseBoxInner")==divChooseEndTimeCurr.parentNode)?getText("automat_QueTimeFirstReady"):getText("automat_QueTimeReady")) + " " + getDateText(endTime,0) + "&nbsp;"+ getDaytimeStr(endTime,true));
                }
            }
            $("divChooseItem"+zoneNrL+"Q"+queueNum+"I"+PRODSTOP).style.border=(zoneList[zoneNrL][queueNum][0]==PRODSTOP?"2px solid black":"");
            for(var iProd=0;iProd<autoMillStorage.length;iProd++){
                if(!autoMillStorage.hasOwnProperty(iProd)){continue;}
                if((autoMillStorage[iProd][0]-autoMillStorage[iProd][1])>0){
                    $("divChooseItem"+zoneNrL+"Q"+queueNum+"I"+iProd).style.border=(zoneList[zoneNrL][queueNum][0]==iProd)?"2px solid black":"";
                }
            }
            iProd=null;endTime=null;
        break;}
        case "forest":case "sawmill":case "carpentry":{ // (fzForestry)
            // GM_log("updateQueueBox chooseBox forestry :" + zoneNrS);
            if(settings.get("account","showQueueTime")){
                if($("divAutoMatQueueItemBox"+zoneNrL+"Q"+queueNum) && lShowTime){
                var zoneBeginTime=explode($("divAutoMatQueueItemBox"+zoneNrL+"Q"+queueNum).getAttribute("zoneBeginTime"),"updateQueueBox/chooseBox/zoneBeginTime",{});
                }else{
                    var zoneBeginTime=zoneTimes;
                }
                var fz=getLowestTimeFarmZone(zoneBeginTime);
                var productTime=calcProductionTime(zoneList[zoneNrL][queueNum][0],fz);
                // GM_log("updateQueueBox chooseBox fields 1:" + zoneNrS + " queueNum:" + queueNum + " fz:" + fz + " productTime:" + productTime + " zoneTimes:" + implode(zoneBeginTime,"") + " uhr:" + zoneBeginTime[fz]+ ":" + typeof productTime);
                divChooseEndTimeCurr.style.display=lShowTime?"block":"none";
                divChooseEndTimeCurr.parentNode.setAttribute("zoneBeginTime",implode(zoneBeginTime,"updateQueueBox/chooseBox/zoneBeginTime"));
                divChooseEndTimeCurr.style.color=noTime? "#DD0000":"black";
                divChooseEndTimeCurr.innerHTML=(foundStop? getText("automat_QueDontWork"):(($("divChooseBoxInner")==divChooseEndTimeCurr.parentNode)?getText("automat_QueTimeFirstReady"):getText("automat_QueTimeReady")) + " " + getDateText(zoneBeginTime[fz]+productTime,0) + "&nbsp;"+ getDaytimeStr(zoneBeginTime[fz]+productTime,true));
            }
            // GM_log("updateQueueBox chooseBox fields 2:" + zoneNrS);
            $("divChooseItem"+zoneNrL+"Q"+queueNum+"I"+PRODSTOP).style.border=(zoneList[zoneNrL][queueNum][0]==PRODSTOP?"2px solid black":"");
            for(var iProd=0;iProd<unsafeData.prodName[1].length;iProd++){
                if((unsafeData.prodTyp[1][iProd]=="v")&&!(unsafeData.prodBlock[1][iProd]&&unsafeData.prodBlock[1][iProd].match(/l/))){
                    $("divChooseItem"+zoneNrL+"Q"+queueNum+"I"+iProd).style.border=(zoneList[zoneNrL][queueNum][0]==iProd?"2px solid black":"");
                }
            }
            zoneBeginTime=null;fz=null;productTime=null;
        break;}
        }
        queueNum=null;zoneTimes=null;
    }
    divChooseEndTimeCurr=null;
    GM_logInfo("updateQueueBox","zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL,"","End",1);
    GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneSettings",implode(zoneSettings,"updateQueueBox/zoneSettings"));
    GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList", implode(zoneList,"updateQueueBox/zoneList"));
    checkReadyZone();
}catch(err){GM_logError("updateQueueBox","zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL,"err_trace="+err_trace,err);}
}
function redrawQueueBox(zoneNrS, zoneNrL, appendTo){
    GM_logInfo("redrawQueueBox","zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL+" appendTo.id=" + appendTo.id,"","Begin",1);
    if(zoneNrL===undefined || zoneNrL==null) zoneNrL=getZoneListId(zoneNrS);
    if($("divChooseBox").style.display=="block") click($("divChooseBoxClose"));
    if($("divQueueBox").style.display=="block") click($("divQueueBoxClose"));
    drawQueueBox(zoneNrS, zoneNrL, appendTo);
    GM_logInfo("redrawQueueBox","zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL+" appendTo.id=" + appendTo.id,"","End",1);
}
function reFillQueueBox(zoneNrF, zoneNrL, scrollToQueue){
    GM_logInfo("reFillQueueBox","zoneNrF="+zoneNrF+" zoneNrL="+zoneNrL+" scrollToQueue="+scrollToQueue,"","Begin",1);
    if(zoneNrL===undefined || zoneNrL==null) zoneNrL=getZoneListId(zoneNrF);
    // GM_log("Begin2 reFillQueueBox zoneNrF:"+ zoneNrF+" zoneNrL:"+ zoneNrL+" scrollToQueue:" + scrollToQueue);
    if($("divAutoMatQueueBox"+zoneNrL)){
        $("divAutoMatQueueBox"+zoneNrL).innerHTML="";
        $("divAutoMatQueueBox"+zoneNrL).style.visibility="hidden";
        for(queueNum=0;queueNum<zoneList[zoneNrL].length; queueNum++){
            drawQueueItemBox(zoneNrF, zoneNrL, queueNum, $("divAutoMatQueueBox"+zoneNrL));
        }
        updateQueueBox(zoneNrF, zoneNrL);
        $("divAutoMatQueueBox"+zoneNrL).style.visibility="visible";

        var scrlelm=$("divAutoMatQueueBox"+zoneNrL);
        if(scrollToQueue===undefined || scrollToQueue==null){
            scrlelm.scrollLeft=0;
        }else{
            scrlelm.scrollLeft=Math.max(0,Math.min(scrlelm.scrollWidth,((scrollToQueue+2)*queueItemBoxWidth)) - scrlelm.clientWidth);
        }
        $("divAutoMatScrollLeft"+zoneNrL).style.display=((scrlelm.scrollWidth > scrlelm.clientWidth)?"block":"none");
        $("divAutoMatScrollRight"+zoneNrL).style.display=((scrlelm.scrollWidth > scrlelm.clientWidth)?"block":"none");
        $("divAutoMatScrollLeft"+zoneNrL).style.visibility=(scrlelm.scrollLeft>0?"visible":"hidden");
        $("divAutoMatScrollRight"+zoneNrL).style.visibility=((scrlelm.scrollLeft + scrlelm.clientWidth)<scrlelm.scrollWidth?"visible":"hidden");
        scrlelm=null;
    }else if($("divAutomatIcon_"+zoneNrF)){
        updateQueueBox(zoneNrF, zoneNrL);
    }else{
        GM_logWarning("reFillQueueBox","zoneNrF="+zoneNrF+" zoneNrL="+zoneNrL+" scrollToQueue="+scrollToQueue,"","QueueBox not found");
    }
    GM_logInfo("reFillQueueBox","zoneNrF="+zoneNrF+" zoneNrL="+zoneNrL+" scrollToQueue="+scrollToQueue,"","End",1);
}

function toolTipProductSmall(zoneNrS, zoneNrL, queueNum, parent){
try{
    var zoneNrF=zoneNrS.toString().replace(/\.\d+$/,"");
    if(zoneNrL===undefined || zoneNrL==null){ zoneNrL=getZoneListId(zoneNrS); }
    var fzType=getBuildingTyp(zoneNrF);
    var isIcon=(parent.id.search("divAutomatIcon_")!=-1);
    var isTimeLine=(parent.parentNode.id.indexOf("lineZone")==0);
    var lZonesAmount=getZonesFromList(zoneNrL).length;
    var lShowTime=(lZonesAmount > 0);
    var fzPony= (fzType == 5);
    var fzWindmill=(fzType=="windmill");
    var fzForestry=(fzType=="sawmill"||fzType=="carpentry"||fzType=="forest");
    var fzPowerUp=(fzType=="powerup");//TODO powerup
    var iType=(fzWindmill ? 3 : (fzForestry ? 1 : (fzPony ? 5 : 0)));
    var noTime=false;
    var slot=(zoneNrS.toString().match(/\.(\d+)$/)?parseInt(/\.(\d+)$/.exec(zoneNrS)[1],10):null);
    // GM_log("toolTipProductSmall 0 zoneNrF:" + zoneNrF + " zoneNrL:" + zoneNrL + " queueNum:" + queueNum + " isIcon:" + isIcon +" fzType:"+ fzType + " zoneTyp:"+getZoneType(zoneNrF)+ " parent:"+parent.innerHTML);
    if(isIcon){
        if(fzType==2){
            var iProd=(zoneList[zoneNrL][0][0]==PRODSTOP?PRODSTOP:unsafeData.BUILDING2PRODUCT[getZoneType(zoneNrF)][0]);
        // }else if(fzType==3){
        //  var iProd=(zoneList[zoneNrL][0][0]==PRODSTOP?PRODSTOP:zoneList[zoneNrL][0][0]);
        }else if (fzType==6) { //Fuelstation
            var iProd=(zoneList[zoneNrL][0][0]==PRODSTOP?PRODSTOP:unsafeData.BUILDING2PRODUCT[getZoneType(zoneNrF)][0]);
        } else {
            var iProd=zoneList[zoneNrL][0][0];
        }
        if(settings.get("account","showQueueTime")) var zoneBeginTime=explode(parent.getAttribute("zoneBeginTime"),"toopTipProductSmall/[0]/zoneBeginTime",{});
    }else if(isTimeLine){
        var iProd=parseInt(parent.getAttribute("iProd"),10); //unsafeData.BUILDING2PRODUCT[getZoneType(zoneNrF)];
        if(settings.get("account","showQueueTime")){
            var zoneBeginTime=new Array();
            zoneBeginTime[zoneNrF]=parseFloat(parent.getAttribute("zoneBeginTime"));
        }
    }else if(fzType==2){ // stable
        var iProd=unsafeData.BUILDING2PRODUCT[getZoneType(zoneNrL)][0];  // zoneNrF?
        //parseInt(parent.getAttribute("class").replace("divChooseFeedIcon v",""),10);
        if(settings.get("account","showQueueTime")) var zoneBeginTime=explode(parent.parentNode.parentNode.getAttribute("zoneBeginTime"),"zoneBeginTimeStable");
    // }else if(fzType==3){ // factory
    //  var iProd=parseInt(parent.getAttribute("class").replace("divChooseItem link v",""),10);
    //  if(settings.get("account","showQueueTime")) var zoneBeginTime=explode(parent.parentNode.getAttribute("zoneBeginTime"),"zoneBeginTimeFactory");
    }else if(fzWindmill){
        var iProd=parseInt(parent.firstElementChild.getAttribute("class").replace("fmm",""),10); //TODO getAttribute("product")
        if(settings.get("account","showQueueTime")) var zoneBeginTime=explode(parent.parentNode.getAttribute("zoneBeginTime"),"toopTipProductSmall/[2]/zoneBeginTime",{});
    }else if(fzForestry){
        var iProd=parseInt(parent.getAttribute("class").replace("divChooseItem link f_symbol",""),10);
        if(settings.get("account","showQueueTime")) var zoneBeginTime=explode(parent.parentNode.getAttribute("zoneBeginTime"),"toopTipProductSmall/[5]/zoneBeginTime",{});
    }else if(fzPowerUp){//parseInt(parent.getAttribute("class").replace("divChooseItem link r",""),10)>0){
        var iProd=parseInt(parent.getAttribute("class").replace("divChooseItem link r",""),10);
        if(settings.get("account","showQueueTime")) var zoneBeginTime=explode(parent.parentNode.getAttribute("zoneBeginTime"),"toopTipProductSmall/[3]/zoneBeginTime",{});
    }else if(fzPony) {
          if(settings.get("account","showQueueTime")) {
              var zoneBeginTime=explode(parent.parentNode.getAttribute("zoneBeginTime"),"toopTipProductSmall/[4]/zoneBeginTime",{});
          }
          var iProd=parent.classList.contains("v-1") ? PRODSTOP : 159; // Pferdefutter
    }else if(fzType==6){
        var iProd=(zoneList[zoneNrL][0][0]==PRODSTOP?PRODSTOP:unsafeData.BUILDING2PRODUCT[getZoneType(zoneNrF)][0]);
        if(settings.get("account","showQueueTime")) var zoneBeginTime=explode(parent.parentNode.getAttribute("zoneBeginTime"),"toopTipProductSmall/[2]/zoneBeginTime",{});
    }else{ // Field, Factory
        var iProd=parseInt(parent.getAttribute("class").replace("divChooseItem link v",""),10);
        if(settings.get("account","showQueueTime")) var zoneBeginTime=explode(parent.parentNode.getAttribute("zoneBeginTime"),"toopTipProductSmall/[4]/zoneBeginTime",{});
    }

    var iStop=(iProd==PRODSTOP);
    var foundStop=false;
    for(var i=0;i<queueNum;i++){
        if(foundStop=zoneList[zoneNrL][i][0]==PRODSTOP) break;
    }
    if(settings.get("account","showQueueTime") && !isTimeLine && lShowTime && !isIcon){
        //this is to find the first field that is ready.
        var fz=getLowestTimeFarmZone(zoneBeginTime);
    }else{
        var fz=zoneNrS;
    }
    var productTime;
    if(!iStop){productTime=calcProductionTime(iProd,fz);}
    var content=createElement("div");
    var newrow,newdiv,newspan;
    // GM_log("toolTipProductSmall fz:"+fz);
    //TODO text "Recipe"
    createElement("div",{"class":"queueTitle"},content, fzPowerUp?"Recipe":getZoneName(0,zoneNrS,zoneNrL,(fzType!=1||isIcon)?null:queueNum,20,true,!isIcon||lZonesAmount==1,true));
    // createElement("div",{style:"font-weight:bold;"},content,iStop?getText("automat_stop").toTitleCase():(fzWindmill?unsafeWindow.formulas[0][iProd][2]:(fzPowerUp?unsafeWindow.poweruprack[iProd][2]:unsafeData.prodName[iType][iProd])));
    createElement("div",{style:"margin:2px 0px 2px 0px;width:100%;height:0px;border-bottom:1px solid black;"},content);
    // GM_log("toolTipProductSmall 1 zoneNrF:" + zoneNrF + " zoneNrL:" + zoneNrL + " queueNum: " + queueNum + " zoneBeginTime:"+implode(zoneBeginTime,"")) ;

    if(fzPowerUp){
        //TODO add tooltip for recipes
    }else{
        if(iStop){
            createElement("div",{style:""},content,getText("automat_stop").toTitleCase());
        }else{
            if((fzType!=2)|| isIcon || isTimeLine ){
                if (zoneNrF=="farmersmarket-8" && slot>4) {
                    newrow=createElement("div",{style:"display:table-row;width:100%;"},content);

                    //createElement("div",{"class":"tableTd1"},newrow, getText("automat_cowfeeding"));
                    createElement("div",{"class":"tableTd1"},newrow, "Kuhfütterung:");
                    newdiv=createElement("div",{"class":"tableTd2"},newrow);
                    produktPic(iType,iProd,newdiv);
                    createElement("span",{},newdiv, "1x &nbsp;" + unsafeData.prodName[iType][iProd]);

                    var cowbonus=["startspeed","stamina","finalsprint","athletic","luck"];

                    for(var a=0;a<cowbonus.length;a++){
                        if(unsafeWindow.cowracing.data.config.products[iProd]["xp_"+cowbonus[a]]) {
                            var x_shift = a>=3?-25*(a+1):-25*a; //CowAttribute_Symbols_50x43_mini.png with Battery Symbol
                            newrow=createElement("div",{style:"display:table-row;width:100%;"},content);
                            newdiv=createElement("div",{"style":"display:inline-block;position:relative;margin-right:3px;border:none;vertical-align:sub;width: 25px; height: 22px;background:url('"+GFX+"cowracing/CowAttribute_Symbols_50x43_mini.png') "+ x_shift +"px 0;transform:scale(0.8);"},newrow);
                            //newdiv=createElement("div",{"class":"tableTd1"},newdiv, unsafeWindow.t_cowracing_attributs[cowbonus[a]]+":");
                            createElement("span",{},newrow, unsafeWindow.t_cowracing_attributs[cowbonus[a]]+":");
                            newdiv=createElement("div",{"class":"tableTd2"},newrow);
                            //createElement("div",{"style":"display:inline-block;position:relative;margin-right:3px;border:none;vertical-align:bottom;width: 25px; height: 22px;background:url('"+GFX+"cowracing/CowAttribute_Symbols_50x43_mini.png') -25px 0;transform:scale(0.8);"},newdiv);
                            createElement("span",{},newdiv, "+"+unsafeWindow.cowracing.data.config.products[iProd]["xp_"+cowbonus[a]]);
                        }
                    }
                } else {
                    newrow=createElement("div",{style:"display:table-row;width:100%;"},content);
                    createElement("div",{"class":"tableTd1"},newrow, getText("automat_QueGives"));
                    newdiv=createElement("div",{"class":"tableTd2"},newrow);
                    if (!fzPony) {
                        produktPic(iType,iProd,newdiv);
                        createElement("span",{},newdiv, calcProductAmount(iProd, zoneNrL)+"&nbsp;" + unsafeData.prodName[iType][iProd]);
                    }
                    newdiv=createElement("div",{style:"display:table-row;width:100%;"},content);
                    createElement("div",{"class":"tableTd1"},newdiv,"");
                    pointsFormat(calcProductScore(iProd, zoneNrL),"span",createElement("div",{"class":"tableTd2"},newdiv));
                    createElement("div",{"class":"tableSeperater"},content);createElement("div",{"class":"tableSeperater"},content);
                    newrow=createElement("div",{style:"display:table-row;width:100%;"},content);
                    createElement("div",{"class":"tableTd1"},newrow,getText("automat_QueTimeThis"));
                    createElement("div",{"class":"tableTd2"},newrow, getTimeStr(productTime,true) + "&nbsp;" + getText("shortHours"));
                }
            }
            // GM_log("End toolTipProductSmall 2 : " + zoneNrF + " : " + queueNum);
            if(fzType==2 && (isIcon || isTimeLine)){
                createElement("div",{"class":"tableSepBorder"},createElement("div",{"class":"tableSeperater"},content));
                createElement("div",{"class":"tableSepBorder"},createElement("div",{"class":"tableSeperater"},content));
                newrow=createElement("div",{style:"display:table-row;width:100%;"},content);
                createElement("div",{"class":"tableTd1"},newrow, getText("automat_QueUses"));
                newdiv=createElement("div",{"class":"tableTd2"},newrow);
                produktPic(iType,zoneList[zoneNrL][0][0],newdiv);
                createElement("span",{},newdiv,zoneList[zoneNrL][0][1] + "&nbsp;" + unsafeData.prodName[iType][zoneList[zoneNrL][0][0]]);

                if(zoneList[zoneNrL][1][1]>0){
                    newrow=createElement("div",{style:"display:table-row;width:100%;"},content);
                    createElement("div",{"class":"tableTd1"},newrow,"");
                    newdiv=createElement("div",{"class":"tableTd2"},newrow);
                    produktPic(iType,zoneList[zoneNrL][1][0],newdiv);
                    createElement("span",{},newdiv, zoneList[zoneNrL][1][1] + "&nbsp;" + unsafeData.prodName[iType][zoneList[zoneNrL][1][0]]);
                }
            }else if(fzType==3){
                createElement("div",{"class":"tableSepBorder"},createElement("div",{"class":"tableSeperater"},content));
                createElement("div",{"class":"tableSepBorder"},createElement("div",{"class":"tableSeperater"},content));
                for(var i=0;i<unsafeData.BUILDING_INPUT[getZoneType(zoneNrL)][iProd][0].length;i++){
                    newrow=createElement("div",{style:"display:table-row;width:100%;"},content);
                    createElement("div",{"class":"tableTd1"},newrow,i==0?getText("automat_QueUses"):"");
                    newdiv=createElement("div",{"class":"tableTd2"},newrow);
                    produktPic(iType,unsafeData.BUILDING_INPUT[getZoneType(zoneNrL)][iProd][0][i][0],newdiv);
                    createElement("span",{},newdiv, numberFormat(unsafeData.BUILDING_INPUT[getZoneType(zoneNrL)][iProd][0][i][1]) + "&nbsp;" + unsafeData.prodName[0][unsafeData.BUILDING_INPUT[getZoneType(zoneNrL)][iProd][0][i][0]]);
                }
            } else if(fzType==6){ //Fuelstation
                newrow=createElement("div",{style:"display:table-row;width:100%;"},content);
                createElement("div",{"class":"tableTd1"},newrow, "tette");
            } else if(fzForestry){
                createElement("div",{"class":"tableSepBorder"},createElement("div",{"class":"tableSeperater"},content));
                createElement("div",{"class":"tableSepBorder"},createElement("div",{"class":"tableSeperater"},content));
                for(var i in unsafeData.prodRequire[iType][iProd]){
                    if(!unsafeData.prodRequire[iType][iProd].hasOwnProperty(i)){continue;}
                    help=unsafeData.prodRequire[iType][iProd][i];
                    newrow=createElement("div",{style:"display:table-row;width:100%;"},content);
                    createElement("div",{"class":"tableTd1"},newrow,i==0?getText("automat_QueUses"):"");
                    newdiv=createElement("div",{"class":"tableTd2"},newrow);
                    produktPic(help[0],help[1],newdiv);
                    createElement("span",{},newdiv, numberFormat(help[2]) + "&nbsp;" + unsafeData.prodName[help[0]][help[1]]);
                }
            } else if(fzType==4){ //Picknick, flower, tincture
                if (zoneNrF=="farmersmarket-8" && slot>4) {

                } else {
                    createElement("div",{"class":"tableSepBorder"},createElement("div",{"class":"tableSeperater"},content));
                    createElement("div",{"class":"tableSepBorder"},createElement("div",{"class":"tableSeperater"},content));
                    for(var i in unsafeData.prodRequire[0][iProd]){
                        if(!unsafeData.prodRequire[0][iProd].hasOwnProperty(i)){continue;}
                        help=unsafeData.prodRequire[0][iProd][i];
                        newrow=createElement("div",{style:"display:table-row;width:100%;"},content);
                        createElement("div",{"class":"tableTd1"},newrow,i==0?getText("automat_QueUses"):"");
                        newdiv=createElement("div",{"class":"tableTd2"},newrow);
                        if (help[0]<0)  {
                            createElement("div",{style:"display:table-cell;padding-left:18px;text-align:right;"},newdiv,moneyFormat(help[1]));
                        } else {
                            produktPic(help[0],help[1],newdiv);
                            createElement("span",{},newdiv, numberFormat(help[2]) + "&nbsp;" + unsafeData.prodName[help[0]][help[1]]);
                        }
                    }
                    if (zoneNrF=="farmersmarket-9") {
                        if (unsafeWindow.fishing.data.config.products[iProd].needs.items) {
                            for (var x in unsafeWindow.fishing.data.config.products[iProd].needs.items) {
                                newrow=createElement("div",{style:"display:table-row;width:100%;"},content);
                                createElement("div",{"class":"tableTd1"},newrow,i==0?getText("automat_QueUses"):"");
                                newdiv=createElement("div",{"class":"tableTd2"},newrow);
                                createElement("div",{"class":"trove fishing_trove" + x + " float","style":"width: 15px;height: 15px;background-size: 100%;"},newdiv);
                                createElement("span",{},newdiv, numberFormat(unsafeWindow.fishing.data.config.products[iProd].needs.items[x]) + "&nbsp;" +unsafeWindow.fishing.data.config.trove[x].name);
                            }
                        }
                    }
                }
            }
        }
        if(fzType==2){
            if(isIcon || isTimeLine){ createElement("div",{"class":"tableSeperater"},content);createElement("div",{"class":"tableSeperater"},content);}
            newrow=createElement("div",{style:"display:table-row;width:100%;"},content);
            createElement("div",{"class":"tableTd1"},newrow, getText("automat_QueFutter"));
            newdiv=createElement("div",{"class":"tableTd2"},newrow);
            produktPic(iType,BUILDING2FEED[unsafeData.zones.getBuilding(zoneNrF)][0],newdiv);
            createElement("span",{},newdiv, getTimeStr(FEEDBONUSTIME[BUILDING2FEED[unsafeData.zones.getBuilding(zoneNrF)][0]]/unsafeData.zones.getAnimals(zoneNrF)) + "&nbsp;" + unsafeData.prodName[0][BUILDING2FEED[unsafeData.zones.getBuilding(zoneNrF)][0]]);

            newrow=createElement("div",{style:"display:table-row;width:100%;"},content);
            createElement("div",{"class":"tableTd1"},newrow, "");
            newdiv=createElement("div",{"class":"tableTd2"},newrow);
            produktPic(0,BUILDING2FEED[unsafeData.zones.getBuilding(zoneNrF)][1],newdiv);
            createElement("span",{},newdiv, getTimeStr(FEEDBONUSTIME[BUILDING2FEED[unsafeData.zones.getBuilding(zoneNrF)][1]]/unsafeData.zones.getAnimals(zoneNrF)) + "&nbsp;" + unsafeData.prodName[0][BUILDING2FEED[unsafeData.zones.getBuilding(zoneNrF)][1]]);
        }
        if(settings.get("account","showQueueTime") && !isTimeLine && lShowTime && (!iStop || foundStop)){
            if(lZonesAmount > 1 || fzType=="sawmill"){
                createElement("div",{style:"margin:2px 0px 2px 0px;width:100%;height:0px;border-bottom:1px solid black;"},content);
                createElement("div",{style:"display:block"},content,queueNum==0?getText("automat_QueTimeNextReady"):getText("automat_QueTimeFirstReady"));//getText("automat_usedFarmFieldsReadyAt"));
                createElement("div",{style:"margin:2px 0px 2px 0px;width:100%;height:1px;border-bottom:1px dashed black;"},content);

                var help=0;
                for(var fz in zoneBeginTime){
                    if(!zoneBeginTime.hasOwnProperty(fz)){ continue; }
                    newrow=createElement("div",{style:"display:table-row;white-space:nowrap;"+(fz!=zoneNrF&&isIcon?"color:#505050;":"")},content);
                    if(++help>10){
                        createElement("div",{"style":"display:table-cell;"},newrow,"...");
                        break;
                    }else{
                        createElement("div",{"style":"display:table-cell;"},newrow,getZoneName(0,fz,fz,null,false,true,true,false));
                        createElement("div",{"style":"display:table-cell;padding:0px 2px;"},newrow, "->");
                        createElement("div",{"style":"display:table-cell;padding:0px 3px;font-weight:bold;"},newrow, getDateText(Math.max(now,zoneBeginTime[fz])+calcProductionTime(iProd,fz),0).toLowerCase());
                        createElement("div",{"style":"display:table-cell;padding:0px 3px;"},newrow, getDaytimeStr(Math.max(now,zoneBeginTime[fz])+calcProductionTime(iProd,fz),true));
                    }
                }
            }else{
                createElement("div",{"class":"tableSepBorder"},createElement("div",{"class":"tableSeperater"},content));createElement("div",{"class":"tableSepBorder"},createElement("div",{"class":"tableSeperater"},content));
                if (zoneNrF=="farmersmarket-8" && slot>4) {
                    newrow=createElement("div",{style:"display:table-row;width:100%;"},content);
                    createElement("div",{"class":"tableTd1"},newrow,queueNum==0?"Nächste Fütterung":"Erste Fütterung");//getText("automat_usedFarmFieldsReadyAt"));
                    createElement("div",{"class":"tableTd2"},newrow, "<b>"+getDateText(Math.max(now,zoneBeginTime[fz])+unsafeWindow.cowracing.data.config.products[iProd].feeding_duration,0).toLowerCase()+"</b>&nbsp;"+getDaytimeStr(Math.max(now,zoneBeginTime[fz])+unsafeWindow.cowracing.data.config.products[iProd].feeding_duration,true));
                } else {
                    newrow=createElement("div",{style:"display:table-row;width:100%;"},content);
                    createElement("div",{"class":"tableTd1"},newrow,queueNum==0?getText("automat_QueTimeNextReady"):getText("automat_QueTimeFirstReady"));//getText("automat_usedFarmFieldsReadyAt"));
                    createElement("div",{"class":"tableTd2"},newrow, "<b>"+getDateText(Math.max(now,zoneBeginTime[fz])+productTime,0).toLowerCase()+"</b>&nbsp;"+getDaytimeStr(Math.max(now,zoneBeginTime[fz])+productTime,true));
                }
            }
        }
        if(iStop){
            createElement("div",{style:"margin:2px 0px 2px 0px;width:100%;height:0px;border-bottom:1px solid black;"},content);
            createElement("div",{style:""},content,fzWindmill?getText("automat_MillStop0"):(fzType==1?getText("automat_QueStop0"):getText("automat_QueDontWork")));
        }else if(foundStop){
            createElement("div",{style:"margin:2px 0px 2px 0px;width:100%;height:0px;border-bottom:1px solid black;"},content);
            createElement("div",{style:""},content,fzWindmill?getText("automat_MillStoped"):getText("automat_QueueStoped"));
        }else{
            createElement("div",{style:"margin:2px 0px 2px 0px;width:100%;height:0px;border-bottom:1px solid black;"},content);
            createElement("div",{style:""},content,fzWindmill?getText("automat_MillDoWork"):getText("automat_QueDoWork"));
        }
    }

    var thisTitle=content.innerHTML;
    content=null;fz=null;zoneBeginTime=null;newrow=null;newdiv=null;productTime=null;

    //%PRODNAME%=iProd name
    thisTitle=thisTitle.replace(/%PRODNAME%/gi, unsafeData.prodName[0][iProd]);

    // GM_log("End toolTipProductSmall : " + zoneNrF + " : " + queueNum);
    return thisTitle;
}catch(err){
    GM_logError("toolTipProductSmall","zoneNrF="+zoneNrF+" zoneNrL="+zoneNrL+" queueNum="+queueNum+" parent.id="+parent.id,"",err);
    return "Error. See console.";
}
}
function toolTipMain(zoneNrF, zoneNrL, queueNum, parent){
    var slot=(zoneNrL.toString().match(/\.(\d+)$/)?parseInt(/\.(\d+)$/.exec(zoneNrL)[1],10):null);
    if(zoneNrF=="windmill"){
        return toolTipRecipe(zoneNrF, zoneNrL, queueNum, parent);
    }else if(zoneNrF=="sawmill"||zoneNrF=="carpentry"||zoneNrF=="forest"){
        return toolTipProduct(zoneNrF, zoneNrL, queueNum, parent);
    }else if(zoneNrF.toString().replace(/\.\d+$/,"")=="farmersmarket-8" && slot>4) {
        return toolTipCowFeeding(zoneNrF, zoneNrL, queueNum, parent);
    } else {
        return toolTipProduct(zoneNrF, zoneNrL, queueNum, parent);
    }
}

function toolTipProduct(zoneNrF, zoneNrL, queueNum, parent){
try{
    if(zoneNrL===undefined || zoneNrL==null) zoneNrL=getZoneListId(zoneNrF);
    // GM_log("Begin toolTipProduct zoneNrF="+zoneNrF+" zoneNrL="+zoneNrL+" queueNum="+queueNum+" parent.id="+parent.id);
    var totalInQue=parseInt(parent.getAttribute("totalInQue"),10);
    var foundStop=parent.getAttribute("foundStop")=="true";
    var lRepeat=(!OPTION_LIST_REPEAT || zoneSettings[zoneNrL]["repeat"]===undefined)?false:zoneSettings[zoneNrL]["repeat"];
    var lShuffle=zoneSettings[zoneNrL]["shuffle"]===undefined?false:zoneSettings[zoneNrL]["shuffle"];
    var iRepeat=(!OPTION_ITEM_REPEAT)?false:zoneList[zoneNrL][queueNum][4];
    var iLastInf=((zoneList[zoneNrL].length-1)==queueNum) && !(lRepeat || iRepeat) && !lShuffle;
    var iRackMode=zoneNrL!="windmill" && zoneList[zoneNrL][queueNum][3];
    var iProd=parseInt(zoneList[zoneNrL][queueNum][0],10);
    var iTot=parseInt(zoneList[zoneNrL][queueNum][1],10);
    var iDone=iRackMode?0:parseInt(zoneList[zoneNrL][queueNum][2],10);
    var iStop=(iProd==PRODSTOP);
    var lShowTime=getZonesFromList(zoneNrL).length > 0;
    var fzType=getBuildingTyp(zoneNrF);
    var fzWindmill=(fzType=="windmill");
    var fzPowerUp=(fzType=="powerup");//TODO powerup
    var fzForestry=(fzType=="sawmill"||fzType=="carpentry"||fzType=="forest");
    var iType=(fzWindmill?2:(fzForestry?1:0));
    // GM_log("toolTipProductSmall fzType:"+fzType);

    if(settings.get("account","showQueueTime") && lShowTime){
        var iTogoArray=explode(parent.getAttribute("iTogoArray"),"toolTipProduct/iTogoArray",{});
        var timeArray=explode(parent.getAttribute("timeArray"),"toolTipProduct/timeArray",{});
        var timesArray=explode(parent.getAttribute("timesArray"),"toolTipProduct/timesArray",{});
        var aMissing=explode(parent.getAttribute("aMissing"),"toolTipProduct/aMissing",{});
        var zoneBeginTime=explode(parent.getAttribute("zoneBeginTime"),"toolTipProduct/zoneBeginTime",{});
        var zoneEndTime=explode(parent.getAttribute("zoneEndTime"),"toolTipProduct/zoneEndTime",{});
        var equalTimeArray=timeArray.allEqual();
    }
    var iTogo=parseInt(parent.getAttribute("iTogo"),10);
    var iTogoAmount=parseInt(parent.getAttribute("iTogoAmount"),10);
    var iTogoAmountNetto=parseInt(parent.getAttribute("iTogoAmount"),10)-(calcProductPositions(iProd, zoneNrF)*iTogo); // Subtract amount of units used for planting
    var iTogoScore=parseInt(parent.getAttribute("iTogoScore"),10);
    var iDoneAmount=calcProductAmount(iProd, zoneNrF, null, null, false)*iDone;
    var iDoneAmountNetto=calcProductAmount(iProd, zoneNrF, null, null, true)*iDone;
    var iDoneScore=calcProductScore(iProd, zoneNrF, null, null) * iDone;
    var isSelfConsumingType=(["v", "fl", "hr", "ex","alpin","water"].indexOf(unsafeData.prodTyp[0][iProd]) >= 0);

    var content=createElement("div");
    createElement("div",{"class":"queueTitle"},content,iRackMode?getText("automat_QueRackMode"):(((lRepeat || iRepeat) && lShuffle)?getText("automat_QueRepeatShuffle"):(lShuffle?getText("automat_QueShuffle"):((lRepeat || iRepeat)?getText("automat_QueRepeat"):(iTot<=1?getText("automat_QueFieldInRow1"):getText("automat_QueFieldInRowX"))))));
    createElement("div",{style:"font-weight:bold;"},content,(iStop)?getText("automat_stop").toTitleCase():(fzWindmill)?unsafeWindow.formulas[0][iProd][2]:(fzPowerUp)?unsafeWindow.poweruprack[iProd][2]:unsafeData.prodName[iType][iProd]);
    createElement("div",{style:"margin:4px 0px 4px 0px;width:100%;height:0px;border-bottom:1px solid black;"},content);

    if(iStop){
        createElement("div",{style:""},content,(totalInQue==0)?getText("automat_QueStop0"):(totalInQue==1)? getText("automat_QueStop1"):getText("automat_QueStopX"));
    }else{
        if((lRepeat || iRepeat || lShuffle || iRackMode) && iTogo<=0){//iTot<=iDone){
            var newspan=createElement("div",{style:"display:block"},content,((iRackMode && !(lRepeat || iRepeat) && !lShuffle)?getText("automat_QueRoundDoneR"):(iDone<=1?getText("automat_QueRoundDone1"):getText("automat_QueRoundDoneX"))));
        }else{ //normal
            var newspan=createElement("div",{style:"display:table-row;"},content);
            createElement("div",{style:"display:table-cell;padding-right:10px;"},newspan);
            createElement("div",{style:"display:table-cell;padding-right:10px;"},newspan,getText("yield"));
            if (isSelfConsumingType) {
                createElement("div",{style:"display:table-cell;padding-right:10px;"},newspan,getText("yield_netto"));
            }
            createElement("div",{style:"display:table-cell;padding-right:10px;"},newspan,getText("points"));
            createElement("div",{style:"display:table-cell;padding-right:10px;"},newspan,getText("automat_fields")); //TODO text -> "fields" much be "zone" for isNaN(zoneNrF)

            if(!extendedListReg.test(zoneNrL)){
                if(!iRackMode){ //TOTAL
                    var newspan=createElement("div",{style:"display:table-row;"},content);
                    createElement("div",{style:"display:table-cell;padding-right:10px;"},newspan,(lRepeat || iRepeat || lShuffle ?getText("automat_QueRoundMake"):getText("automat_QueFieldMake")));
                    createElement("div",{style:"display:table-cell;padding-right:10px;text-align:right;"},newspan, (equalTimeArray?"":" ~ ") + (iLastInf?"∞":numberFormat(iTogoAmount+iDoneAmount)+"×"));
                    if (isSelfConsumingType) {
                        createElement("div",{style:"display:table-cell;padding-right:10px;text-align:center;"},newspan, (equalTimeArray?"":" ~ ") + (iLastInf?"∞":numberFormat(iTogoAmountNetto+iDoneAmountNetto)+"×"));
                    }
                    createElement("div",{style:"display:table-cell;padding-right:10px;text-align:right;"},newspan, (equalTimeArray?"":" ~ ") + (iLastInf?"∞":numberFormat(iTogoScore+iDoneScore)));
                    createElement("div",{style:"display:table-cell;padding-right:10px;text-align:right;"},newspan, (iLastInf?"∞":numberFormat(iTot)));

                    if((lRepeat || iRepeat || lShuffle) && iDone>0){ //DONE
                        var newspan=createElement("div",{style:"display:table-row;"},content);
                        createElement("div",{style:"display:table-cell;padding-right:10px;"},newspan,getText("automat_QueRoundMade"));
                        createElement("div",{style:"display:table-cell;padding-right:10px;text-align:right;"},newspan, (equalTimeArray?"":" ~ ") + numberFormat(iDoneAmount)+"×");
                        if (isSelfConsumingType) {
                            createElement("div",{style:"display:table-cell;padding-right:10px;text-align:center;"},newspan, (equalTimeArray?"":" ~ ") + numberFormat(iDoneAmountNetto)+"×");
                        }
                        createElement("div",{style:"display:table-cell;padding-right:10px;text-align:right;"},newspan, (equalTimeArray?"":" ~ ") + numberFormat(iDoneScore));
                        createElement("div",{style:"display:table-cell;padding-right:10px;text-align:right;"},newspan, iDone);
                    }
                }
            }
            if(iTogo>0){ //TOGO
                var newspan=createElement("div",{style:"display:table-row;"},content);
                createElement("div",{style:"display:table-cell;padding-right:10px;"},newspan, (lRepeat || iRepeat || lShuffle ?getText("automat_QueRoundToGo"):getText("automat_QueFieldToGo")));
                createElement("div",{style:"display:table-cell;padding-right:10px;text-align:right;"},newspan, (settings.get("account","showQueueTime")?"":" ~ ") + (iLastInf?"∞":numberFormat(iTogoAmount)+"×"));
                if (isSelfConsumingType) {
                    createElement("div",{style:"display:table-cell;padding-right:10px;text-align:center;"},newspan, (settings.get("account","showQueueTime")?"":" ~ ") + (iLastInf?"∞":numberFormat(iTogoAmountNetto)+"×"));
                }
                createElement("div",{style:"display:table-cell;padding-right:10px;text-align:right;"},newspan, (settings.get("account","showQueueTime")?"":" ~ ") + (iLastInf?"∞":numberFormat(iTogoScore)));
                createElement("div",{style:"display:table-cell;padding-right:10px;text-align:right;"},newspan, (iLastInf?"∞":numberFormat(iTogo)));
            }
        }
        createElement("div",{style:"margin:4px 0px 4px 0px;width:100%;height:0px;border-bottom:1px solid black;"},content);
        // GM_log("toolTipProduct Title :" + zoneNrF + ": 1");

        if(foundStop){
            createElement("div",{"style":""},content,getText("automat_QueueStoped"));
        }else if(settings.get("account","showQueueTime") && lShowTime && (iTogo>0)){
            var newspan=createElement("div",{style:"display:table-row;"},content);
            createElement("div",{style:"display:table-cell;padding-right:10px;"},newspan,getText("automat_QueTimeThis"));
            //createElement("div",{style:"display:table-cell;"},newspan, getTimeStr(timeArray[zoneNrF],true) + "&nbsp;" + getText("shortHours"));
            createElement("div",{style:"display:table-cell;"},newspan, (equalTimeArray?"":" ~ ") + getTimeStr(timeArray.average(),true) + "&nbsp;" + getText("shortHours"));

            if((lRepeat || iRepeat || lShuffle)&& !iLastInf){
                var newspan=createElement("div",{style:"display:table-row;"},content);
                createElement("div",{style:"display:table-cell;padding-right:10px;"},newspan,getText("automat_QueTimeRound"));
                //createElement("div",{style:"display:table-cell;"},newspan, getTimeStr(timeArray[zoneNrF]*Math.max(iTogo+iDone,0),true) + "&nbsp;" + getText("shortHours"));
                createElement("div",{style:"display:table-cell;"},newspan, (equalTimeArray?"":" ~ ") + getTimeStr(timeArray.averageFieldTime(Math.max(iTogo+iDone,1)),true) + "&nbsp;" + getText("shortHours"));
            }
            //GM_log("toolTipProduct Title :" + zoneNrF + ": 2");
            if(iTogo>0){
                if(!iLastInf){
                    var beginTime=zoneBeginTime[getLowestTimeFarmZone(zoneBeginTime)];
                    var endTime=zoneEndTime[getHighestTimeFarmZone(zoneEndTime)];
                    var newspan=createElement("div",{style:"display:table-row;"},content);
                    createElement("div",{style:"display:table-cell;padding-right:10px;"},newspan,getText("automat_QueTimeToGo"));
                    createElement("div",{style:"display:table-cell;"},newspan, getTimeStr(endTime - beginTime,true) + "&nbsp;" + getText("shortHours"));
                    var newspan=createElement("div",{style:"display:table-row;"},content);
                    createElement("div",{style:"display:table-cell;padding-right:10px;"},newspan,getText("automat_QueTimeReady"));
                    createElement("div",{style:"display:table-cell;"},newspan, getDateText(endTime,0).toLowerCase() + " " + getDaytimeStr(endTime,true));
                    beginTime=null;endTime=null;
                }
                createElement("div",{style:"margin:4px 0px 4px 0px;width:100%;height:1px;border-bottom:1px solid black;"},content);
                var newspan=createElement("div",{style:"display:table-row;"},content);
                createElement("div",{style:"display:table-cell;padding-left:5px;"},newspan);
                createElement("div",{style:"display:table-cell;padding-left:5px;"},newspan,getText("automat_number"));
                createElement("div",{style:"display:table-cell;padding-left:5px;"},newspan,getText("total"));
                createElement("div",{style:"display:table-cell;padding-left:5px;"},newspan,getText("automat_lack"));
                createElement("div",{style:"display:table-cell;padding-left:5px;"},newspan,getText("product"));

                var help;
                for(var i in unsafeData.prodRequire[iType][iProd]){
                    if(!unsafeData.prodRequire[iType][iProd].hasOwnProperty(i)){continue;}
                    help=unsafeData.prodRequire[iType][iProd][i].clone();
                    var newspan=createElement("div",{style:"display:table-row;"},content);
                    if(help[0]<0){
                        createElement("div",{style:"display:table-cell;"},newspan);
                        createElement("div",{style:"display:table-cell;padding-left:8px;text-align:right;"},newspan, numberFormat(help[1]));
                        help[1]*=iTot;
                        createElement("div",{style:"display:table-cell;padding-left:8px;text-align:right;"},newspan, numberFormat(help[1]));
                        help[1]-=unsafeData.money;
                        createElement("div",{style:"display:table-cell;padding-left:8px;text-align:right;"},newspan, help[1]>0?numberFormat(help[1]):"");
                        createElement("div",{style:"display:table-cell;padding-left:8px;"},newspan,getText("gamecurrency"));
                    }else{
                        produktPic(help[0],help[1],newspan);
                        createElement("div",{style:"display:table-cell;padding-left:8px;text-align:right;"},newspan, numberFormat(help[2]));
                        help[2]*=iTot;
                        createElement("div",{style:"display:table-cell;padding-left:8px;text-align:right;"},newspan, numberFormat(help[2]));
                        help[2]=(aMissing[help[0]]?aMissing[help[0]][help[1]]:0);
                        createElement("div",{style:"display:table-cell;padding-left:8px;text-align:right;"},newspan, help[2]>0?numberFormat(help[2]):"");
                        createElement("div",{style:"display:table-cell;padding-left:8px;"},newspan,unsafeData.prodName[help[0]][help[1]]);
                    }
                }
                if (zoneNrF.toString().replace(/\.\d+$/,"")=="farmersmarket-9") {

                    if (unsafeWindow.fishing.data.config.products[iProd].needs.items) {
                        var newspan=createElement("div",{style:"display:table-row;"},content);
                        for (var x in unsafeWindow.fishing.data.config.products[iProd].needs.items) {
                            createElement("div",{"class":"trove fishing_trove" + x ,"style":"display:inline-block;position:relative; width: 15px;height: 15px;background-size: 100%;"},newspan);
                            createElement("div",{style:"display:table-cell;padding-left:8px;text-align:right;"},newspan, numberFormat(unsafeWindow.fishing.data.config.products[iProd].needs.items[x]));
                            createElement("div",{style:"display:table-cell;padding-left:8px;text-align:right;"},newspan, numberFormat(unsafeWindow.fishing.data.config.products[iProd].needs.items[x]*iTot));
                            createElement("div",{style:"display:table-cell;padding-left:8px;text-align:right;"},newspan, unsafeWindow.fishing.data.config.products[iProd].needs.items[x]*iTot > unsafeWindow.fishing.data.data.stock[x] ? unsafeWindow.fishing.data.data.stock[x] - unsafeWindow.fishing.data.config.products[iProd].needs.items[x]*iTot : "");
                            createElement("div",{style:"display:table-cell;padding-left:8px;"},newspan,unsafeWindow.fishing.data.config.trove[x].name);
                        }
                    }
                }

                createElement("div",{style:"margin:4px 0px 4px 0px;width:100%;height:1px;border-bottom:1px solid black;"},content);
                createElement("div",{style:"display:block"},content,getText("automat_usedFarmFieldsReadyAt"));
                createElement("div",{style:"margin:2px 0px 2px 0px;width:100%;height:1px;border-bottom:1px dashed black;"},content);

                var timesCount=0;
                for(var fz in timesArray){
                    if(!timesArray.hasOwnProperty(fz)){ continue; }
                    timesCount=Math.max(timesArray[fz].length,timesCount);
                }

                for(var fz in timesArray){
                    if(!timesArray.hasOwnProperty(fz)){ continue; }
                    // GM_log("toolTipProduct Title :" + zoneNrF + "/" + fz);
                    var newspan=createElement("div",{style:"display:table-row;white-space:nowrap;"},content);
                    if(lShowTime){
                        createElement("div",{style:"display:table-cell;"},newspan, getZoneName(0,fz,fz,null,false,true,true,false)); //Math.ceil(fz/6) + "." + getGarden(fz));
                        createElement("div",{style:"display:table-cell;padding:0px 2px;"},newspan, "->");
                        createElement("div",{style:"display:table-cell;text-align:right;"},newspan, iTogoArray[fz]);
                        createElement("div",{style:"display:table-cell;text-align:right;padding:0px 3px;"},newspan, "×");
                        createElement("div",{style:"display:table-cell;padding:0px 2px;"},newspan,getTimeStr(timeArray[fz],true) + "&nbsp;" + getText("shortHours"));
                        createElement("div",{style:"display:table-cell;padding:0px 2px;"},newspan, "->");
                    }
                    for(k=0;k < Math.min(10,timesCount-1);k++){
                        createElement("div",{style:"display:table-cell;padding:0px 3px;"},newspan, (k<(timesArray[fz].length-1))?(k==0&&queueNum>0?"<b>"+getDateText(timesArray[fz][k],0)+"</b>&nbsp;":"")+getDaytimeStr(timesArray[fz][k],true):"&nbsp;");
                    }
                    if(timesCount>=11) createElement("div",{style:"display:table-cell;padding:0px 2px;"},newspan, timesArray[fz].length>=11?"&nbsp;....&nbsp;":"");
                    if(!iLastInf){
                        createElement("div",{style:"display:table-cell;padding:0px 3px;"},newspan, "<b>"+getDateText(zoneEndTime[fz],0) + "</b>&nbsp;" + getDaytimeStr(zoneEndTime[fz],true));
                    }else{
                        createElement("div",{style:"display:table-cell;padding:0px 3px;"},newspan, "∞");
                    }
                }
                timesArray=null;fz=null;k=null;
            }
        }
    }

    var thisTitle=content.innerHTML;
    content=null;newspan=null;timeArray=null;zoneBeginTime=null;zoneEndTime=null;timesArray=null;

    //%PRODNAME%=product name, %FLDFROM%=field nr from, %FLDTO%=field nr until,
    thisTitle=thisTitle.replace(/%PRODNAME%/gi, unsafeData.prodName[iType][iProd]);
    thisTitle=thisTitle.replace(/%FLDFROM%/gi, totalInQue + (iProd==PRODSTOP?0:1));
    thisTitle=thisTitle.replace(/%FLDTO%/gi, iLastInf?"∞":(totalInQue+iTot));

    // GM_log("End toolTipProduct :" + zoneNrF + " : " + queueNum);
    return thisTitle;
}catch(err){
    GM_logError("toolTipProduct","","",err);
    return "Error. See console.";
}
}
function toolTipRecipe(zoneNrF, zoneNrL, queueNum, parent){
try{
    // GM_log("Begin toolTipRecipe :" + zoneNrF + " : " + queueNum);
    if(zoneNrL===undefined || zoneNrL==null) zoneNrL=getZoneListId(zoneNrF);
    var totalInQue=parseInt(parent.getAttribute("totalInQue"),10);
    var foundStop=parent.getAttribute("foundStop")=="true";
    var lRepeat=(!OPTION_LIST_REPEAT || zoneSettings[zoneNrL]["repeat"]===undefined)?false:zoneSettings[zoneNrL]["repeat"];
    var lShuffle=zoneSettings[zoneNrL]["shuffle"]===undefined?false:zoneSettings[zoneNrL]["shuffle"];
    var iProd=parseInt(zoneList[zoneNrL][queueNum][0],10);
    var iTot=parseInt(zoneList[zoneNrL][queueNum][1],10);
    var iDone=parseInt(zoneList[zoneNrL][queueNum][2],10);
    var iStop=(iProd==PRODSTOP);
    var lShowTime=getZonesFromList(zoneNrL).length > 0;

    if(settings.get("account","showQueueTime") && lShowTime){
        var timeArray=explode(parent.getAttribute("timeArray"),"toolTipRecipe/timeArray",false);
        var timesArray=explode(parent.getAttribute("timesArray"),"toolTipRecipe/timesArray",false);
        var zoneBeginTime=explode(parent.getAttribute("zoneBeginTime"),"toolTipRecipe/zoneBeginTime",false);
        var zoneEndTime=explode(parent.getAttribute("zoneEndTime"),"toolTipRecipe/zoneEndTime",false);
    }

    var content=createElement("div");
    createElement("div",{"class":"queueTitle"},content,(zoneSettings[zoneNrL]["shuffle"]?getText("automat_MillShuffle"):(iTot<=1?getText("automat_MillInRow1"):getText("automat_MillInRowX"))));
    createElement("div",{style:"font-weight:bold;"},content,(iStop?getText("automat_stop").toTitleCase():unsafeWindow.formulas[0][iProd][2]));
    createElement("div",{style:"margin:4px 0px 4px 0px;width:100%;height:0px;border-bottom:1px solid black;"},content);

    //item title info creation
    if(iStop){
        createElement("div",{style:""},content,(totalInQue==0)?getText("automat_MillStop0"):(totalInQue==1)? getText("automat_MillStop1"):getText("automat_MillStopX"));
    }else{
        if(unsafeWindow.formulas[0][iProd]){
            var info=unsafeWindow.formulas[0][iProd];

            if(settings.get("account","showQueueTime") && lShowTime){
                var newspan=createElement("div",{style:"display:table-row;"},content);
                createElement("div",{style:"display:table-cell;padding-right:10px;"},newspan,getText("automat_MillTimeThis"));
                createElement("div",{style:"display:table-cell;"},newspan,getTimeStr(timeArray["windmill"],true) + "&nbsp;" + getText("shortHours"));
                var newspan=createElement("div",{style:"display:table-row;"},content);
                createElement("div",{style:"display:table-cell;padding-right:10px;"},newspan,getText("automat_MillTimeTotal"));
                createElement("div",{style:"display:table-cell;"},newspan,getTimeStr(timeArray["windmill"]*Math.max(iTot,0),true) + "&nbsp;" + getText("shortHours"));
                if(!foundStop){
                    var beginTime=zoneBeginTime[getLowestTimeFarmZone(zoneBeginTime)]; //not used !?
                    var endTime=zoneEndTime[getHighestTimeFarmZone(zoneEndTime)]; //not used !?
                    var newspan=createElement("div",{style:"display:table-row;"},content);
                    createElement("div",{style:"display:table-cell;padding-right:10px;"},newspan,getText("automat_MillTimeReady"));
                    createElement("div",{style:"display:table-cell;"},newspan,getDateText(zoneEndTime[zoneNrF],0).toLowerCase() + " " + getDaytimeStr(zoneEndTime[zoneNrF],true));
                    createElement("div",{style:"margin:4px 0px 4px 0px;width:100%;height:1px;border-bottom:1px solid black;"},content);
                }
            }

            for( var bonus=0;bonus<info[5].length;bonus++){if(!!info[5][bonus]) break;}
            if(bonus!=undefined){
                var newspan=createElement("div");
                createElement("div",{"class":"kp"+info[5][bonus][0],style:"float:left;"},newspan);
                createElement("div",{style:"float:left; margin-left:5px; width:250px;"},newspan,getText("automat_MillPowerUpText_"+bonus));
                createElement("div",{style:"clear:both;"},newspan);

                newspan.innerHTML=newspan.innerHTML.replace("%PRODUCT%",unsafeData.prodName[0][info[5][bonus][0]]);
                newspan.innerHTML=newspan.innerHTML.replace("%AMOUNT%",info[5][bonus][1] * iTot);
                newspan.innerHTML=newspan.innerHTML.replace("%TIME%", getTimeStr(info[5][bonus][2])); //bonus=0
                newspan.innerHTML=newspan.innerHTML.replace("%CROP%",'+' + info[5][bonus][1]); //bonus=1
                newspan.innerHTML=newspan.innerHTML.replace("%POINTS%",'+' + info[5][bonus][1]); //bonus=2
                var newspan=createElement("div",{style:"margin:2px 0px 2px 0px;"},content, newspan.innerHTML);
            }
            var newspan=createElement("div",{style:"margin:2px 0px 2px 0px;"},content);
            createElement("img",{src:GFX+"points.gif",style:"float:left;display:block;margin:0px 2px 0px 1px;width:12px;"},newspan);
            createElement("div",{style:"float:left; margin-left:5px;"},newspan,numberFormat(info[8] * iTot) + " " + getText("points"));
            createElement("div",{style:"clear:both;"},newspan);
            createElement("div",{style:"margin:4px 0px 4px 0px;width:100%;height:1px;border-bottom:1px solid black;"},content);

            createElement("div","",content,getText("automat_MillIngredients"));
            createElement("div",{style:"margin:2px 0px 2px 0px;width:100%;height:1px;border-bottom:1px dotted black;"},content);

            var newspan=createElement("div",{style:"display:table-row;"},content);
            createElement("div",{style:"display:table-cell;padding-left:5px;"},newspan);
            createElement("div",{style:"display:table-cell;padding-left:5px;"},newspan,getText("automat_number"));
            createElement("div",{style:"display:table-cell;padding-left:5px;"},newspan,getText("total"));
            if(zoneList[zoneNrL][queueNum][3]<0){
                createElement("div",{style:"display:table-cell;padding-left:5px;"},newspan,getText("automat_lack"));
                //createElement("div",{style:"display:table-cell;padding-left:5px;"},newspan,getText("total") + "&nbsp;" + getText("automat_lack"));
            }
            createElement("div",{style:"display:table-cell;padding-left:5px;"},newspan,getText("product"));

            for(var j=0;j<info[3].length;j++){
                if(info[3][j]){
                    var newspan=createElement("div",{style:"display:table-row;"},content);
                    //image
                    createElement("div",{"class":"kp"+info[3][j][0], style:"float:left;"},newspan);
                    //reciep product number
                    createElement("div",{style:"display:table-cell;padding-left:8px;text-align:right;"},newspan, numberFormat(info[3][j][1]) + "×");
                    //reciep product number total autolist
                    createElement("div",{style:"display:table-cell;padding-left:8px;text-align:right;"},newspan, numberFormat(iTot * info[3][j][1]) + "×");
                    //reciep product number missing total autolist
                    if(zoneList[zoneNrL][queueNum][4][j]<0){
                        //createElement("div",{style:"display:table-cell;padding-left:8px;text-align:right;"},newspan, numberFormat(iTot * info[3][j][1]) + "×");
                        createElement("div",{style:"display:table-cell;padding-left:8px;text-align:right;"},newspan, numberFormat(Math.abs(zoneList[zoneNrL][queueNum][4][j])) + "×");
                    }else if(zoneList[zoneNrL][queueNum][3]<0){ //somewhere else there is a shortage: show empty td
                        //createElement("div",{style:"display:table-cell;padding-left:8px;"},newspan);
                        createElement("div",{style:"display:table-cell;padding-left:8px;"},newspan);
                    }
                    //name
                    createElement("div",{style:"display:table-cell;padding-left:8px;"},newspan,unsafeData.prodName[0][info[3][j][0]]);
                }
            }
            createElement("div",{style:"margin:4px 0px 4px 0px;width:100%;height:1px;border-bottom:1px solid black;"},content);

            var newspan=createElement("div",{style:"display:table-row;"},content);
            createElement("div",{style:"display:table-cell;padding-right:10px;"},newspan,getText("automat_MillRecipesBought"));
            createElement("div",{style:"display:table-cell;"},newspan,numberFormat(autoMillStorage[iProd][0]));
            var newspan=createElement("div",{style:"display:table-row;text-align:left;"},content);
            createElement("div",{style:"display:table-cell;padding-right:10px;"},newspan,getText("automat_MillRecipesUsed"));
            createElement("div",{style:"display:table-cell;"},newspan,numberFormat(autoMillStorage[iProd][1]));
            var newspan=createElement("div",{style:"display:table-row;text-align:left;"},content);
            createElement("div",{style:"display:table-cell;padding-right:10px;"},newspan,getText("automat_MillRecipesBake"));
            createElement("div",{style:"display:table-cell;"},newspan,numberFormat(autoMillStorage[iProd][2]));

            if(settings.get("account","showQueueTime") && !foundStop && lShowTime){
                createElement("div",{style:"margin:4px 0px 4px 0px;width:100%;height:1px;border-bottom:1px solid black;"},content);
                createElement("div",{style:"display:block"},content,getText("automat_usedFarmFieldsReadyAt"));
                createElement("div",{style:"margin:2px 0px 2px 0px;width:100%;height:1px;border-bottom:1px dashed black;"},content);

                var timesCount=0;
                for(var fz in timesArray){
                    if(!timesArray.hasOwnProperty(fz)){ continue; }
                    timesCount=Math.max(timesArray[fz].length,timesCount);
                }

                for(var fz in timesArray){
                    if(!timesArray.hasOwnProperty(fz)){ continue; }
                    // GM_log("updateQueueBox Title :" + gardenNr + "/" + fz);
                    var newspan=createElement("div",{style:"display:table-row;white-space:nowrap;"},content);
                    for(k=0;k < Math.min(10,timesCount-1);k++){
                        createElement("div",{style:"display:table-cell;padding:0px 3px;"},newspan, (k<(timesArray[fz].length-1))?(k==0?"<b>"+getDateText(timesArray[fz][k],0)+"</b>&nbsp;":"")+getDaytimeStr(timesArray[fz][k],true):"&nbsp;");
                    }
                    if(timesCount>=11) createElement("div",{style:"display:table-cell;padding:0px 2px;"},newspan, timesArray[fz].length>=11?"&nbsp;....&nbsp;":"");
                    createElement("div",{style:"display:table-cell;padding:0px 3px;"},newspan, "<b>"+getDateText(zoneEndTime[fz],0) + "</b>&nbsp;" + getDaytimeStr(zoneEndTime[fz],true));
                }
                timesArray=null;fz=null;k=null;
            }
            info=null;
        }
        if(foundStop){
            createElement("div",{style:"margin:4px 0px 4px 0px;width:100%;height:1px;border-bottom:1px solid black;"},content);
            createElement("div",{style:""},content,getText("automat_MillStoped"));
        }
    }
    var thisTitle=content.innerHTML;
    content=null;newspan=null;timeArray=null;zoneBeginTime=null;zoneEndTime=null;
    // GM_log("toolTipRecipe Box :"+queueNum + " | 2");
    thisTitle=thisTitle.replace(/%PRODNAME%/gi, (iProd==PRODSTOP?getText("automat_stop"):unsafeWindow.formulas[0][iProd][2]));
    thisTitle=thisTitle.replace(/%FLDFROM%/gi, totalInQue + (iProd==PRODSTOP?0:1));
    thisTitle=thisTitle.replace(/%FLDTO%/gi, totalInQue + iTot);

    // GM_log("End toolTipRecipe :" + zoneNrF + " : " + queueNum);
    return thisTitle;
}catch(err){
    GM_logError("toolTipRecipe ","","",err);
    return "Error. See console.";
}
}

function toolTipCowFeeding(zoneNrF, zoneNrL, queueNum, parent){
try{
    if(zoneNrL===undefined || zoneNrL==null) zoneNrL=getZoneListId(zoneNrF);
    var iProd=parseInt(zoneList[zoneNrL][queueNum][0],10);
    var iStop=(iProd==PRODSTOP);
    var content=createElement("div");

    if(iStop){
        createElement("div",{style:""},content,getText("automat_QueStop0"));
    }else{
        newrow=createElement("div",{style:"display:table-row;width:100%;"},content);
        //createElement("div",{"class":"tableTd1"},newrow, getText("automat_cowfeeding"));
        createElement("div",{"class":"tableTd1"},newrow, "Kuhfütterung:");
        newdiv=createElement("div",{"class":"tableTd2"},newrow);
        produktPic(0,iProd,newdiv);
        createElement("span",{},newdiv, "1x &nbsp;" + unsafeData.prodName[0][iProd]);
        var cowbonus=["startspeed","stamina","finalsprint","athletic","luck"];
        for(var a=0;a<cowbonus.length;a++){
            if(unsafeWindow.cowracing.data.config.products[iProd]["xp_"+cowbonus[a]]) {
                var x_shift = a>=3?-25*(a+1):-25*a; //CowAttribute_Symbols_50x43_mini.png with Battery Symbol
                newrow=createElement("div",{style:"display:table-row;width:100%;"},content);
                newdiv=createElement("div",{"style":"display:inline-block;position:relative;margin-right:3px;border:none;vertical-align:sub;width: 25px; height: 22px;background:url('"+GFX+"cowracing/CowAttribute_Symbols_50x43_mini.png') "+ x_shift +"px 0;transform:scale(0.8);"},newrow);
                createElement("span",{},newrow, unsafeWindow.t_cowracing_attributs[cowbonus[a]]+":");
                newdiv=createElement("div",{"class":"tableTd2"},newrow);
                createElement("span",{},newdiv, "+"+unsafeWindow.cowracing.data.config.products[iProd]["xp_"+cowbonus[a]]);
            }
        }
    }

    var thisTitle=content.innerHTML;
    content=null;newspan=null;timeArray=null;zoneBeginTime=null;zoneEndTime=null;timesArray=null;
    thisTitle=thisTitle.replace(/%PRODNAME%/gi, unsafeData.prodName[0][iProd]);
    return thisTitle;
}catch(err){
    GM_logError("toolTipCowFeeding","","",err);
    return "Error. See console.";
}
}




function setNextQueueItem(zoneNrS){
try{
    GM_logInfo("setNextQueueItem","zoneNrS="+zoneNrS,"","Setting next queue item");
    var zoneNrL=getZoneListId(zoneNrS);
    if(isNaN(zoneList[zoneNrL][0][1])){ zoneList[zoneNrL][0]=DEFAULT_ZONELIST_ITEM.clone(); }
    if(isNaN(zoneList[zoneNrL][0][2])){ zoneList[zoneNrL][0][2]=0; }
    if((settings.get("account","useQueueList")||isNaN(zoneNrS)) && (zoneList[zoneNrL][0][0]!=PRODSTOP) && (!zoneList[zoneNrL][0][3])){
        if((OPTION_LIST_REPEAT && (zoneSettings[zoneNrL]["repeat"]))||(OPTION_ITEM_REPEAT && (zoneList[zoneNrL][0][4]))){
            zoneList[zoneNrL][0][2]++;
        }else{
            zoneList[zoneNrL][0][1]--;
        }
    }
    reSortQueue(zoneNrS, true); //->reFillQueueBox
    GM_logInfo("setNextQueueItem","zoneNrS="+zoneNrS,"","End",1);
    return zoneList[zoneNrL][0];
}catch(err){
    GM_logError("setNextQueueItem","zoneNrS="+zoneNrS,"",err);
    return DEFAULT_ZONELIST_ITEM.clone();
}
}

function reSortQueue(zoneNrF, nextItemMode){
try{
    GM_logInfo("reSortQueue","zoneNrF="+zoneNrF,"","Resort queue items");
    var itemsRackDone=0,itemsRepeatDone=0,itemsStopsFound=0,iDoRack=false;
    var zoneNrL=getZoneListId(zoneNrF);
    if((settings.get("account","useQueueList")||isNaN(zoneNrF)) && (zoneList[zoneNrL][0][0]!=PRODSTOP) && (nextItemMode || (((zoneList[zoneNrL][0][3] && calcInGameProductAmount(zoneList[zoneNrL][0][0],zoneNrF,null,true) < zoneList[zoneNrL][0][1]) || (!zoneList[zoneNrL][0][3] && zoneList[zoneNrL][0][1]<=((OPTION_ITEM_REPEAT && zoneList[zoneNrL][0][4])||(OPTION_LIST_REPEAT&&zoneSettings[zoneNrL]["repeat"])?zoneList[zoneNrL][0][2]:0))) ))){
        // && (getBuildingTyp(zoneNrF)==1||isNaN(zoneNrF))
        // GM_log("auto plant volgende " + zoneList[zoneNrL][0][0]);
        for(i=0;i<zoneList[zoneNrL].length;i++){
            if(zoneList[zoneNrL][i][0]==PRODSTOP){
                itemsStopsFound++;
            }else if(zoneList[zoneNrL][i][3]){
                if(calcInGameProductAmount(zoneList[zoneNrL][i][0],zoneNrF,null,true) > zoneList[zoneNrL][i][1]){
                    itemsRackDone++;
                }
            // }else if((zoneList[zoneNrL][i][5]!=REPEAT_NO_LIMIT && zoneList[zoneNrL][i][5]<=(REPEAT_RESTART+(zoneList[zoneNrL][i][1]<=zoneList[zoneNrL][i][2]?1:0)) && OPTION_ITEM_REPEAT && zoneList[zoneNrL][i][4])||(OPTION_LIST_REPEAT && zoneSettings[zoneNrL]["repeat"]&& zoneList[zoneNrL][i][1]<=zoneList[zoneNrL][i][2])){
            // }else if((zoneList[zoneNrL][i][5]!=REPEAT_NO_LIMIT && zoneList[zoneNrL][i][5]<=(REPEAT_RESTART+(zoneList[zoneNrL][i][1]<=zoneList[zoneNrL][i][2]?1:0)) && OPTION_ITEM_REPEAT && zoneList[zoneNrL][i][4])||(((OPTION_LIST_REPEAT && zoneSettings[zoneNrL]["repeat"])||(zoneList[zoneNrL][i][5]==REPEAT_NO_LIMIT)) && zoneList[zoneNrL][i][1]<=zoneList[zoneNrL][i][2])){
            }else if((zoneList[zoneNrL][i][1]<=zoneList[zoneNrL][i][2] && OPTION_ITEM_REPEAT && zoneList[zoneNrL][i][4])||(OPTION_LIST_REPEAT && zoneSettings[zoneNrL]["repeat"] && zoneList[zoneNrL][i][1]<=zoneList[zoneNrL][i][2])){
                itemsRepeatDone++;
            }
        }
        // GM_log("reSortQueue itemsRackDone:"+itemsRackDone+" itemsRepeatDone:"+itemsRepeatDone+" itemsStopsFound:"+itemsStopsFound+" length:"+zoneList[zoneNrL].length);
        if(zoneList[zoneNrL].length==itemsRackDone){
            // GM_log("reSortQueue "+zoneNrF+":4");
            // GM_log("Added PRODSTOP zoneNrL:"+zoneNrL + " itemsRackDone:"+itemsRackDone+" : "+ typeof itemsRackDone);
            zoneList[zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
        }else if(zoneList[zoneNrL].length==1 && 1==itemsRepeatDone && zoneList[zoneNrL][0][5]<=REPEAT_RESTART && zoneList[zoneNrL][0][5]!=REPEAT_NO_LIMIT){
            zoneList[zoneNrL][0]=DEFAULT_ZONELIST_ITEM.clone();
        }else if(zoneSettings[zoneNrL]["shuffle"] && zoneList[zoneNrL].length==(itemsRepeatDone+itemsRackDone+itemsStopsFound)){
            for(queueNum=0;queueNum<zoneList[zoneNrL].length;queueNum++){
                if(OPTION_ITEM_REPEAT && zoneList[zoneNrL][0][4] && zoneList[zoneNrL][0][1]<=zoneList[zoneNrL][0][2] && zoneList[zoneNrL][0][5]!=REPEAT_NO_LIMIT){
                    zoneList[zoneNrL][0][5]--;
                }
                zoneList[zoneNrL][queueNum][2]=0;
            }
        }
        if(zoneList[zoneNrL][0][0]==PRODSTOP){
            reFillQueueBox(zoneNrF);
            return zoneList[zoneNrL][0][0];
        }
        do {
            //GM_log("Begin Do:" + zoneList[zoneNrL][0][0]);
            iDoRack=zoneList[zoneNrL][0][3] && calcInGameProductAmount(zoneList[zoneNrL][0][0],zoneNrF,null,true) < zoneList[zoneNrL][0][1];
            if((OPTION_ITEM_REPEAT && zoneList[zoneNrL][0][4])||(OPTION_LIST_REPEAT && zoneSettings[zoneNrL]["repeat"])){ //repeat
                if(zoneList[zoneNrL][0][3] && !iDoRack && !zoneSettings[zoneNrL]["shuffle"]){
                    zoneList[zoneNrL].push(zoneList[zoneNrL].splice(0,1)[0]);
                }else if(zoneList[zoneNrL][0][1]<=zoneList[zoneNrL][0][2]){
                    if(!zoneSettings[zoneNrL]["shuffle"]){
                        zoneList[zoneNrL][0][2]=0; //in a loop without shuffel there is no end of a list
                        // GM_log("reSortQueue "+zoneNrF + " queue:"+print_r(zoneList[zoneNrL][0],"",true));
                        if(zoneList[zoneNrL][0][5]!=REPEAT_NO_LIMIT && OPTION_ITEM_REPEAT && zoneList[zoneNrL][0][4]){//extra check should not be needed but incase i forgot a state.
                            zoneList[zoneNrL][0][5]--;
                        }
                    }
                    //GM_log("reSortQueue "+zoneNrF+" zoneList[zoneNrL][0][5]:"+zoneList[zoneNrL][0][5]+" REPEAT_RESTART:"+REPEAT_RESTART);
                    if(zoneList[zoneNrL][0][5]<=REPEAT_RESTART && zoneList[zoneNrL][0][5]!=REPEAT_NO_LIMIT){
                        if(zoneList[zoneNrL].length<=1){
                            //GM_log("reSortQueue "+zoneNrF +" length<=1");
                            zoneList[zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY.clone();
                        }else{
                            //GM_log("reSortQueue "+zoneNrF +" length>1");
                            zoneList[zoneNrL].splice(0,1);
                        }
                    }
                    if(zoneList[zoneNrL].length>1){
                        zoneList[zoneNrL].push(zoneList[zoneNrL].splice(0,1)[0]);
                    }
                }
            }else if(zoneList[zoneNrL][0][3]){
                if(!iDoRack){
                    if(zoneList[zoneNrL].length<=1){
                        zoneList[zoneNrL][0]=DEFAULT_ZONELIST_ITEM.clone(); // stop if no items to go.
                    }else{
                        zoneList[zoneNrL].splice(0,1);
                    }
                }
            }else if(zoneList[zoneNrL][0][1]<=0 && zoneList[zoneNrL].length<=1 && !zoneSettings[zoneNrL]["shuffle"]){
                zoneList[zoneNrL][0][1]=1; // reset to 1 only for displaying in repeat modus needed.
            }else if(zoneList[zoneNrL][0][1]<=0 && zoneList[zoneNrL].length<=1 && zoneSettings[zoneNrL]["shuffle"]){
                zoneList[zoneNrL][0]=DEFAULT_ZONELIST_ITEM.clone(); // stop if no items to go. //TODO do i realy have to stop. if no rackmode no repeat length=1 and shuffle or do i have to repeat as is !shuffle?
            }else if(zoneList[zoneNrL][0][1]<=0){
                zoneList[zoneNrL].splice(0,1);
            }

            if(zoneSettings[zoneNrL]["shuffle"]){
                zoneList[zoneNrL].shuffle();
            }
            //TODO do here remove PRODSTOP in shuffle or repeat mode list and not in RACK-mode
        }while (((zoneList[zoneNrL][0][3] && calcInGameProductAmount(zoneList[zoneNrL][0][0],zoneNrF,null,false)>=zoneList[zoneNrL][0][1])||(!zoneList[zoneNrL][0][3] && (zoneList[zoneNrL][0][1]<=(((OPTION_ITEM_REPEAT && zoneList[zoneNrL][0][4])||(OPTION_LIST_REPEAT && zoneSettings[zoneNrL]["repeat"]))?zoneList[zoneNrL][0][2]:0)))) && zoneList[zoneNrL].length>=1 && zoneList[zoneNrL][0][0]!=PRODSTOP);
        //GM_log("End Do:" + zoneList[zoneNrL][0][0]);
    }
    if(zoneList[zoneNrL].length<1){
        zoneList[zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY.clone();
    }
    itemsRackDone=null;itemsRepeatDone=null;itemsStopsFound=null;iDoRack=null;
    reFillQueueBox(zoneNrF);
    // GM_log("End reSortQueue :" + zoneNrF);
    return zoneList[zoneNrL][0][0];
}catch(err){
    GM_logError("reSortQueue ","","",err);
    return PRODSTOP;
}
}

function reSortWindmill(shuffle){
try{
    GM_logInfo("reSortWindmill","shuffle="+shuffle,"","Begin",1);
    var zoneNrF="windmill";
    var zoneNrS="windmill.1";
    var zoneNrL=getZoneListId(zoneNrS);
    do {
        if(shuffle){
            zoneList[zoneNrL].shuffle();
        }
        if(zoneList[zoneNrL][0][0]==PRODSTOP){
            break;
        }else if(autoMillStorage[zoneList[zoneNrL][0][0]]&&autoMillStorage[zoneList[zoneNrL][0][0]][2]<=0){
            var pCount=0;
            for(var rId=0;rId<zoneList[zoneNrL].length;rId++){
                pCount +=(zoneList[zoneNrL][0][0]==PRODSTOP?1:(autoMillStorage[zoneList[zoneNrL][rId][0]][2]<=0?1:0));
            }
            if(pCount==zoneList[zoneNrL].length){ //if none recipe can be milled which are bought due to product shortage
                zoneList[zoneNrL].unshift(DEFAULT_ZONELIST_MILL.clone()); //insert stop item at begin
            }else{
                zoneList[zoneNrL].push(zoneList[zoneNrL].splice(0,1)[0]); //add first item to the end of array
            }
        }else if(zoneList[zoneNrL].length==0 || zoneList[zoneNrL][0][1]<=0 && zoneList[zoneNrL].length<=1){
            zoneList[zoneNrL]=DEFAULT_ZONELIST_MILL_ARRAY.clone(); // stop if no items to go.
            break;
        }else if(zoneList[zoneNrL][0][1]<=0){
            zoneList[zoneNrL].splice(0,1); // delete first items
        }
    }while (zoneList[zoneNrL][0][1]<=0 || zoneList[zoneNrL].length==0 || (zoneList[zoneNrL][0][0]!=PRODSTOP && (!autoMillStorage[zoneList[zoneNrL][0][0]]||autoMillStorage[zoneList[zoneNrL][0][0]][2]<=0)));
}catch(err){GM_logError("reSortWindmill ","","",err);}
}
//[zoneNrF][QueNr][0]=product number, [1]=number to grow, [2]=number grown in loop modus, [3]=Behaviour (Field (default), Rack, Time(//TODO)), [4]=mode (1 time (default), repeat)
//[zoneNrF][mill][0]=product number, [1]=number to grow, [2]=number grown in loop modus, [3]=Min([4]), [4]=Array([X]=Max recipes for product X)
//autoMillStorage: {[rId][0]=number bought, [1]=total number in zoneList[getZoneListId("windmill")], [2]=max number of recipes on products global Math.min([3][pId]), [3][pId]=max number of recipes for this products per products
function reCalculateWindmill(){
try{
    GM_logInfo("reCalculateWindmill","","","Begin",1);
    var err_trace = "init";
    var zoneNrF="windmill";
    var zoneNrS="windmill.1"; // TODO: For all slots
    var zoneNrL=getZoneListId(zoneNrS);
    var autoMillUsedProducts=new Array();
    err_trace="1";
    for(var rId in autoMillStorage){
        if(!autoMillStorage.hasOwnProperty(rId)){continue;}
        if(autoMillStorage[rId][0]==0){
            delete autoMillStorage[rId];
        }else{
            autoMillStorage[rId][1]=0;
            autoMillStorage[rId][2]=NEVER; //max that can be baked.
        }
    }
    err_trace="2";
    for(var v=0;v<zoneList[zoneNrL].length;v++){
        var rId=zoneList[zoneNrL][v][0];
        zoneList[zoneNrL][v][2]=0;
        zoneList[zoneNrL][v][3]=NEVER;
        zoneList[zoneNrL][v][4]=new Array();
        if(rId!=PRODSTOP){ // don't do anything with STOP
            if(autoMillStorage[rId]){
                autoMillStorage[rId][1] +=parseInt(zoneList[zoneNrL][v][1],10); // hold total number of recipe counter

                if(autoMillStorage[rId][1] > autoMillStorage[rId][0]){ // change the zoneList[zoneNrL] amount to the max amount that is bought
                    zoneList[zoneNrL][v][1] -=(autoMillStorage[rId][1] - autoMillStorage[rId][0]);
                    autoMillStorage[rId][1]=autoMillStorage[rId][0];
                    if(zoneList[zoneNrL][v][1]<=0){
                        zoneList[zoneNrL].splice(v,1);
                        v--;
                        continue;
                    }
                }
                //give the lowest number of recipes that can be made with these products.
                for(var i=0;i<unsafeWindow.formulas[0][rId][3].length;i++){
                    var pId=unsafeWindow.formulas[0][rId][3][i][0]; //product number in formulas
                    var pNum=unsafeWindow.formulas[0][rId][3][i][1]; //amount in formulas
                    var rNum=(unsafeData.prodStock[0][pId])?parseInt(unsafeData.prodStock[0][pId],10):0;

                    if(!autoMillUsedProducts[pId]) autoMillUsedProducts[pId]=0;
                    // GM_log("Calculate: " + i + " : " + rNum + " : " + pNum);
                    var mx=rNum/pNum ; //(rNum - autoMillUsedProducts[pId])/pNum;
                    autoMillStorage[rId][2]=Math.min(autoMillStorage[rId][2],mx<0?Math.ceil(mx):Math.floor(mx));
                    autoMillUsedProducts[pId] +=(pNum * zoneList[zoneNrL][v][1]);
                    zoneList[zoneNrL][v][4][i]=rNum - autoMillUsedProducts[pId];
                    zoneList[zoneNrL][v][3]=Math.min(zoneList[zoneNrL][v][3],Math.floor(zoneList[zoneNrL][v][4][i]));
                }
            }else{ //if the rId is not bought
                zoneList[zoneNrL].splice(v,1);
                v--;
                break;
            }
        }
    }
    err_trace="prodMinRackAddon";
    unsafeWindow.prodMinRackAddon.removeAll(0,getText("automat_titleQueue")+"&nbsp;"+getText("windmill"));
    for(var v=0;v<autoMillUsedProducts.length;v++){
        if(autoMillUsedProducts[v]>0){
            // GM_log("prodMinRackAddon add windmill\n"+implode([0,v,getText("automat_titleQueue")+"&nbsp;"+getText("windmill"),autoMillUsedProducts[v]]));
            unsafeWindow.prodMinRackAddon.add(0,v,getText("automat_titleQueue")+"&nbsp;"+getText("windmill"),autoMillUsedProducts[v]);
        }
    }
    autoMillUsedProducts=null;
    err_trace="saving";
    GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_autoMillStorage",implode(autoMillStorage,"reCalculateWindmill/autoMillStorage"));
    GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList",implode(zoneList,"reCalculateWindmill/zoneList"));
    // GM_log("End reCalculateWindmill");
}catch(err){ GM_logError("reCalculateWindmill","","err_trace="+err_trace,err);}
}
function checkReadyZone(zoneNr){
try{
    GM_logInfo("checkReadyZone","zoneNr="+zoneNr,"readyZone="+implode(unsafeData.readyZone,"checkReadyZone/readyZone"),"Begin",1);
    var help,lz;
    if(!bot.isActive()){
        return false;
    }else if(zoneNr){
        lz = getZoneListId(zoneNr);
        if((help=unsafeData.readyZone[zoneNr])&&help[2]&&((help[1]=="w")||(help[1]=="r" && (zoneList[lz][0][0]!=PRODSTOP||!settings.get("account","disableCropFields")))||(help[1]=="e" && zoneList[lz][0][0]!=PRODSTOP))){
            if(zoneWaiting[zoneNr]){
                GM_logInfo("checkReadyZone","zoneNr="+zoneNr,"zoneWaiting="+getDateText(zoneWaiting[zoneNr])+" "+getDaytimeStr(zoneWaiting[zoneNr]),getText("automat_zoneXWaiting").replace(/%1%/,unsafeData.zones.getName(zoneNr)));
            } else {
                if(isNaN(zoneNr)){
                    if(settings.get("account","botUse"+getGarden(zoneNr).toTitleCase())){
                        botArbiter.add(getGarden(zoneNr));
                    }
                } else {
                    botArbiter.add("farm");
                }
            }
        }
    }else{
        for(var fz in unsafeData.readyZone){
            if(!unsafeData.readyZone.hasOwnProperty(fz)){ continue; }
            if((help=unsafeData.readyZone[fz])&&help[2]){
                lz = getZoneListId(fz);
                if (unsafeData.zones.isMultiSlot(fz)&&fz!="megafield"){
                    if (fz.match(/\.(\d+)$/)==null){ continue; }
                }
                if((help[1]=="w")||(help[1]=="r" && (zoneList[lz][0][0]!=PRODSTOP||!settings.get("account","disableCropFields")))||(help[1]=="e" && zoneList[lz][0][0]!=PRODSTOP)){
                    if(zoneWaiting[fz]){
                        GM_logInfo("checkReadyZone","zoneNr="+zoneNr,"fz="+fz+" zoneWaiting="+getDateText(zoneWaiting[fz])+" "+getDaytimeStr(zoneWaiting[fz]),getText("automat_zoneXWaiting").replace(/%1%/,unsafeData.zones.getName(fz)));
                    } else {
                        if(isNaN(fz)){
                            if(settings.get("account","botUse"+getGarden(fz).toTitleCase())){
                                if (fz=="farmersmarket-9.5"||fz=="farmersmarket-9.6"||fz=="farmersmarket-9.7"||fz=="farmersmarket-9.8") {
                                    if ((zoneList[fz][0][0]==PRODSTOP || zoneList[fz][1][0]==PRODSTOP || zoneList[fz][2][0]==PRODSTOP) || (!settings.get("account","botUseFishing"))){
                                    } else {
                                        botArbiter.add(getGarden(fz));
                                    }
                                } else if (fz=="megafield" && zoneList[lz][0][0]==PRODSTOP) {
                                        botArbiter.add(getGarden(fz));
                                } else {
                                    if (zoneList[lz][0][0]!=PRODSTOP || ((fz=="farmersmarket-5.5"||fz=="farmersmarket-5.6"||fz=="farmersmarket-5.7") && settings.get("account","botUseVetTreatment")))
                                        botArbiter.add(getGarden(fz));
                                }
                                /*
                                if(   (fz=="farmersmarket-9.5"||fz=="farmersmarket-9.6"||fz=="farmersmarket-9.7"||fz=="farmersmarket-9.8" ||
                                  zoneList[fz][0][0]==PRODSTOP || zoneList[fz][1][0]==PRODSTOP || zoneList[fz][2][0]==PRODSTOP )
                                  && !(settings.get("account","botUseFishing"))
                                 ) {

                                } else {
                                    botArbiter.add(getGarden(fz));
                                }*/
                            }
                        } else {
                            botArbiter.add("farm");
                        }
                    }
                }
            }
        }
    }
    GM_logInfo("checkReadyZone","zoneNr="+zoneNr,"return="+false,"End",1);
    return false;
}catch(err){ GM_logError("checkReadyZone","zoneNr="+zoneNr,"readyZone="+implode(unsafeData.readyZone,"checkReadyZone/readyZone"),err);}
}
function getReadyZone(location){
    GM_logInfo("getReadyZone","location="+location,"readyZone="+implode(unsafeData.readyZone,"getReadyZone/readyZone"),"Begin",1);
    var help,zoneNrS,zoneNrL;
    if(!bot.isActive()){
        return null;
    }else{
        for(var zoneNrS in unsafeData.readyZone){
            if(!unsafeData.readyZone.hasOwnProperty(zoneNrS)){ continue; }
            if((help=unsafeData.readyZone[zoneNrS])&&help[2]&&((location===undefined)||(location==help[0]))){
                zoneNrL = getZoneListId(zoneNrS);
                if (unsafeData.zones.isMultiSlot(zoneNrS)&&zoneNrS!="megafield"){
                    if (zoneNrS.lastIndexOf(".") == -1) { continue; }
                }
                if((help[1]=="w")||(help[1]=="r" && (zoneList[zoneNrL][0][0]!=PRODSTOP||!settings.get("account","disableCropFields")))||(help[1]=="e" && zoneList[zoneNrL][0][0]!=PRODSTOP)){
                    if(zoneWaiting[zoneNrS]){
                        GM_logInfo("getReadyZone","location="+location,"zoneNrS="+zoneNrS+" zoneWaiting="+getDateText(zoneWaiting[zoneNrS])+" "+getDaytimeStr(zoneWaiting[zoneNrS]),getText("automat_zoneXWaiting").replace(/%1%/,unsafeData.zones.getName(zoneNrS)));
                    } else if((!isNaN(zoneNrS))||settings.get("account","botUse"+getGarden(zoneNrS).toTitleCase())){
                        return zoneNrS;
                    }
                }
            }
        }
    }
    GM_logInfo("getReadyZone","location="+location,"return="+null,"End",1);
    return null;
}
// Bot-functions handling fields,stables and factories
/*
function autoZone(){
    try{
        if(DEVMODE_FUNCTION){GM_log("Begin autoZone readyZone:"+implode(unsafeData.readyZone,"autoZone/readyZone"));}
        if(DEVMODE){ logBubble.add("autoZone"); }
        // busy=true;
        if(!busy){ GM_log("BUSY NOT SET: autoZone");  return false;}
        var farmNr=(unsafeWindow.forestry_quicknavi?"f1":((unsafeWindow.cities&&unsafeWindow.city)?("c"+unsafeWindow.city):(parseInt(unsafeWindow.farm,10)-1)));
        var zoneNrF=null;
        zoneNrF=getReadyZone(farmNr);
        if(DEVMODE){GM_log("autoZone 1 farmNr:"+farmNr+" zoneNrF:"+zoneNrF);}
        if(zoneNrF==null){
            zoneNrF=getReadyZone();
            if(DEVMODE){GM_log("autoZone 2 zoneNrF:"+zoneNrF);}
            if(zoneNrF==null){ // nothing to work (all fields waiting !?)
                if(DEVMODE){GM_log("autoZone farmNr:"+farmNr+" zoneNrF:"+zoneNrF);}
                autoZoneFinish();
            }else{
                handled.zoneBuildingTyp=getBuildingTyp(zoneNrF);
                GM_log("autoZone handled.zoneBuildingTyp:"+handled.zoneBuildingTyp);
                switch(handled.zoneBuildingTyp){
                    case 1:case 2:case 3:
                        document.addEventListener("gameFarmOpened",function(){
                            document.removeEventListener("gameFarmOpened",arguments.callee,false);
                            logBubble.add("Arrived in farm");
                            autoZone();
                        },false);
                        window.setTimeout(function(){
                            logBubble.add("Change to farm "+(parseInt(unsafeData.readyZone[zoneNrF][0],10)+1));
                            click($("farmlinks").getElementsByClassName("link")[unsafeData.readyZone[zoneNrF][0]]);
                        },settings.getPause(true));
                        break;
                    case "windmill":
                        document.addEventListener("gameCity2",function(){
                            document.removeEventListener("gameCity2",arguments.callee,false);
                            logBubble.add("Arrived in city 2");
                            autoZone();
                        },false);
                        window.setTimeout(function(){
                            logBubble.add("Change to city 2");
                            click($top("citylineitem2"));
                        },settings.getPause(true));
                        break;
                    case "forest":
                    case "sawmill":
                    case "carpentry":
                        document.addEventListener("gameOpenForestry",function(){
                            document.removeEventListener("gameOpenForestry",arguments.callee,false);
                            logBubble.add("Arrived in forestry");
                            autoZone();
                        },false);
                        window.setTimeout(function(){
                            logBubble.add("Change to forestry");
                            click($top("speedlink_forestry"));
                        },settings.getPause(true));
                        break;
                }
            }
        }else{
            handled.zoneNr=getGarden(zoneNrF);
            handled.zoneNrF=zoneNrF;
            handled.zoneNrL=getZoneListId(zoneNrF);
            handled.zoneBuildingTyp=getBuildingTyp(zoneNrF);
            unsafeWindow.jsTimeStamp=unsafeWindow.Zeit.Client - unsafeWindow.Zeit.Verschiebung;

            if(!unsafeData.readyZone[handled.zoneNrS][2]){
                // close wrong zone
                var OpenZoneNrF=getOpenZoneNrF();
                if(OpenZoneNrF!=handled.zoneNrF){
                    if($("gardenmaincontainer").style.display=="block"){ click($("gardencancel").getElementsByClassName("link")[0]); }
                    if($("innermaincontainer").style.display=="block"){ click($("cancelscreen").getElementsByClassName("link")[0]); }
                }

                if(unsafeData.readyZone[handled.zoneNrS][1]=="e" && zoneList[handled.zoneNrL][0][0]==PRODSTOP){
                    if(handled.zoneNrF=="windmill"||handled.zoneNrF=="sawmill"||handled.zoneNrF=="carpentry"||handled.zoneNrF=="forest"){
                        autoZoneFinish();
                    }else if(unsafeWindow.forestry_unlock!=undefined){
                        autoZoneFinish($("button_cancel"+handled.zoneNrF));
                    }else if(handled.zoneBuildingTyp>1){
                        autoZoneFinish($("cancelscreen").getElementsByClassName("link")[0]);
                    }else{
                        autoZoneFinish($("gardencancel").getElementsByClassName("link")[0]);
                    }
                }else if(OpenZoneNrF!=handled.zoneNrF){
                    if(DEVMODE) GM_log("click zone: " + farmNr + "." + handled.zoneNr + " readyZone=" +implode(unsafeData.readyZone,"autoZone/readyZone"));
                    switch(handled.zoneBuildingTyp){
                        case 1:
                            document.addEventListener("gameFieldOpened",function(){//gameFieldModified
                                document.removeEventListener("gameFieldOpened",arguments.callee,false);//gameFieldModified
                                autoZoneHandle();
                            },false);
                            click($("zone"+handled.zoneNr).firstElementChild.firstElementChild);
                        break;
                        case 2:
                            document.addEventListener("gameOpenStable",function(){
                                document.removeEventListener("gameOpenStable",arguments.callee,false);
                                autoZoneHandle();
                            },false);
                            click($("zone"+handled.zoneNr).firstElementChild.firstElementChild);
                        break;
                        case 3:
                            document.addEventListener("gameOpenFactory",function(){
                                document.removeEventListener("gameOpenFactory",arguments.callee,false);
                                autoZoneHandle();
                            },false);
                            click($("zone"+handled.zoneNr).firstElementChild.firstElementChild);
                            break;
                        default://sawmill/carpentry/forest/windmill => not need to open an extra zone inside the farm/forestry/city
                            autoZoneHandle();
                            break;
                    }
                    if(DEVMODE){GM_log("autoZone click zone:"+handled.zoneNr+" readyZone:"+implode(unsafeData.readyZone,"autoZone/readyZone"));}
                    logBubble.add("Open zone "+handled.zoneNr);
                }else{
                    logBubble.add("Zone "+handled.zoneNr+" is opened");
                    autoZoneHandle();
                }
            }
        }
        if(DEVMODE_FUNCTION){ GM_log("End autoZone handled.zoneNr:"+handled.zoneNr);}
    }catch(err){GM_logError("boterror ","","",err);autoZoneFinish();} //busy=false;
}
*/
function autoZoneHandle(runId){
/*
DE-1: ERROR autoZoneHandle case 2* handled.zoneNrF=18
readyZone:{}
TypeError: can't convert undefined to object

DE-1: ERROR autoZoneHandle case 2* handled.zoneNrF=14
readyZone:{"15":{"0":2,"1":"r","2":true},"18":{"0":2,"1":"r","2":true}}
TypeError: can't convert undefined to object
*/
    GM_logInfo("autoZoneHandle","runId="+runId,"","Begin",1);
    bot.setAction("autoZoneHandle");
    window.setTimeout(function(){
        switch(handled.zoneBuildingTyp){ // As defined in Berater's "const BUILDINGTYPE"
            case 1:
                //-- GM_log("autoZoneHandle run nextFkt case:1");
                try{
                    if(!unsafeData.zones.getProduction(handled.zoneNrF)[3]){
                        GM_logInfo("autoZoneHandle","runId="+runId,"handled="+implode(handled,"autoZoneHandle/handled"),"Field-Data not ready");
                        window.setTimeout(autoZoneHandle,settings.getPause());
                    }else{
                        autoZoneCrop();
                        window.setTimeout(function(runId){
                        return function(){
                            if(unsafeData.readyZone[handled.zoneNrS]&&(unsafeData.readyZone[handled.zoneNrS][1]=="w")){
                                unsafeData.readyZone[handled.zoneNrS][2]=false;
                                autoFarmWater(runId,1,false,true); // just water
                            }else if(zoneList[handled.zoneNrL][0][0]==PRODSTOP){
                                autoZoneFinish(runId,$("gardencancel"));
                            }else{
                                reSortQueue(handled.zoneNrF, false);
                                var productWeather=0;
                                if(settings.get("account","botUseWeather") && (handled.farmNr==5||handled.farmNr==6||handled.farmNr==8)){
                                    for (var x=0; x<unsafeWindow.farms_data.weather.today.set.length;x++) {
                                        if ((unsafeData.prodTyp[0][unsafeWindow.farms_data.weather.today.set[x]]=="ex" && handled.farmNr==5)
                                            || (unsafeData.prodTyp[0][unsafeWindow.farms_data.weather.today.set[x]]=="alpin" && handled.farmNr==6)
                                            || (unsafeData.prodTyp[0][unsafeWindow.farms_data.weather.today.set[x]]=="water" && handled.farmNr==8)
                                         ) {
                                            if(unsafeData.BUILDING_SIZE["1"]/unsafeData.prodPlantSize[0][unsafeWindow.farms_data.weather.today.set[x]] < unsafeData.prodStock[handled.farmNr][unsafeWindow.farms_data.weather.today.set[x]] ) {
                                                productWeather = unsafeWindow.farms_data.weather.today.set[x];
                                            }
                                        }
                                    }
                                }
                                if (productWeather==0){
                                    autoFarmPlantInit(runId,zoneList[handled.zoneNrL][0][0]); // init planting
                                } else {
                                    autoFarmPlantInit(runId,productWeather); // init planting
                                }
                            }
                        }
                        }(runId),settings.getPause());
                    }
                }catch(err){GM_logError("autoZoneHandle (case 1)","","handled.zoneNrF="+handled.zoneNrF+" readyZone="+implode(unsafeData.readyZone,"autoZoneHandle/readyZone"),err);}
                break;
            case 2:
                //-- GM_log("autoZoneHandle run nextFkt case:2");
                // try{
                //  autoZoneCrop();
                // }catch(err){GM_logError("autoZoneHandle (case 2)","","handled.zoneNrF="+handled.zoneNrF+" readyZone="+implode(unsafeData.readyZone,"autoZoneHandle/readyZone"),err);}
                window.setTimeout(function(runId){
                try{
                    bot.setAction("autoZoneHandle(2,cases)");
                    if(!unsafeData.readyZone[handled.zoneNrS]){
                        bot.setAction("autoZoneHandle(2,autoZoneFinish)");
                        autoZoneFinish(runId,$("building_inner").querySelector(".big_close"));
                    }else{
                        bot.setAction("autoZoneHandle(2,autoFarmStable)");
                        unsafeData.readyZone[handled.zoneNrS][2]=false;
                        autoFarmStable(runId,1,false,true,zoneList[handled.zoneNrL][0][0],0,zoneList[handled.zoneNrL][0][1]);
                    }
                }catch(err){GM_logError("autoZoneHandle (case 2*)","","handled.zoneNrF="+handled.zoneNrF+" readyZone:"+implode(unsafeData.readyZone,"autoZoneHandle/readyZone"),err);}
                },settings.getPause(),runId);
                break;
            case 3:
                //-- GM_log("autoZoneHandle run nextFkt case:3");
                try{
                    autoZoneCrop();
                    window.setTimeout(function(runId){
                        if(zoneList[handled.zoneNrL][0][0]==PRODSTOP){
                            autoZoneFinish(runId,$("cancelscreen").getElementsByClassName("link")[0]);
                        }else{
                            if (unsafeData.readyZone[handled.zoneNrS] === undefined) {
                                autoZoneFinish(runId,$("cancelscreen").getElementsByClassName("link")[0]);
                            } else {
                                unsafeData.readyZone[handled.zoneNrS][2]=false;
                                autoFarmFactory(runId,1);
                            }
                        }
                    },settings.getPause(),runId);
                }catch(err){GM_logError("autoZoneHandle (case 3)","","handled.zoneNrF="+handled.zoneNrF+" readyZone:"+implode(unsafeData.readyZone,"autoZoneHandle/readyZone"),err);}
                break;
            case 6: //Fuelstation
                break;
            case 5: // Pony
                break;
            /*
            case "windmill":
                autoWindmill();
                break;
            case "sawmill":
                reSortQueue(handled.zoneNrF, false);
                autoForestrySawmill();
                break;
            case "carpentry":
                reSortQueue(handled.zoneNrF, false);
                autoForestryCarpentry();
                break;
            case "forest":
                try{
                    if(!unsafeData.getProduction(handled.zoneNrF)[3]){
                        if(DEVMODE){ logBubble.add("Field-Data not ready"); }
                        window.setTimeout(autoZoneHandle,settings.getPause());
                    }else{
                        autoZoneCrop();
                        window.setTimeout(function(){
                            if(unsafeData.readyZone[handled.zoneNrS]&&(unsafeData.readyZone[handled.zoneNrS][1]=="w")){
                                unsafeData.readyZone[handled.zoneNrS][2]=false;
                                autoForestryWatering();
                            }else if(zoneList[handled.zoneNrL][0][0]==PRODSTOP){
                                autoZoneFinish();
                            }else{
                                reSortQueue(handled.zoneNrF, false);
                                autoForestryPlantInit(zoneList[handled.zoneNrL][0][0]); // init planting
                            }
                        },settings.getPause());
                    }
                }catch(err){GM_logError("autoZoneHandle (forest)","","handled.zoneNrF="+handled.zoneNrF+" readyZone:"+implode(unsafeData.readyZone,"autoZoneHandle/readyZone"),err);}
                break;
            */
        }
    },settings.getPause());
}
function autoZoneCrop(){
try{
    var zoneTyp;
    switch(unsafeData.gameLocation.get()[0]){
    case "farm":
        if($("gardenmaincontainer").style.display=="block"){ zoneTyp=1; }
        else if($("innermaincontainer").style.display=="block"){ zoneTyp=unsafeData.BUILDINGTYPE[unsafeWindow.locationinfo[6]]; }
    break;
    case "forestry": zoneTyp="forest";
    break;
    }
    GM_logInfo("autoZoneCrop","","zoneTyp="+zoneTyp,"Begin",1);
    switch (zoneTyp){
        case 1:
            var cropable=false;
            var NowServer=unsafeWindow.Zeit.Server;
            var emptycounter=0;
            for(var v=1;v<=120;v++){
                // GM_log(v);
                if(("v"==unsafeWindow.garten_kategorie[v]||"hr"==unsafeWindow.garten_kategorie[v]||"ex"==unsafeWindow.garten_kategorie[v]||"alpin"==unsafeWindow.garten_kategorie[v]||"water"==unsafeWindow.garten_kategorie[v]) && (unsafeWindow.garten_zeit[v]!="0") && (parseInt(unsafeWindow.garten_zeit[v],10)<NowServer)){
                    cropable=true;
                    break;
                }
            }
            GM_logInfo("autoZoneCrop","","zoneTyp="+zoneTyp+" cropable="+cropable,"Cropping",0);
            if(cropable){
                GM_logInfo("autoZoneCrop","","zoneTyp="+zoneTyp,"Cropping"); // TODO text
                unsafeData.zones.getProduction(handled.zoneNrF)[3]=false;
                click($("cropall"));
                return true;
            }else{
                return false;
            }
            break;
        case 2:
            if($("globalbox").style.display=="block"){
                // click($("globalbox_button1"));
                return true;
            }else{
                return false;
            }
            break;
        case 3:

             if ($("production_slot_info" + handled.farmNr + "_" + handled.zoneNr + "_1").innerHTML == "") {
                 // Cropped
                 return false;
             } else {
                 // Cropping
                 click($("production_slot" + handled.farmNr + "_" + handled.zoneNr + "_1"));
                 return true;
             }

         /*
            if($("globalbox").style.display=="block"){
                click($("globalbox_button1"));
                return true;
            }else{
                return false;
            }*/
            break;
        case "forest":
            try{
                var cropable=false,v;
                for(var i=0;i<unsafeWindow.forestry_area.length;i++){
                    v=unsafeWindow.forestry_area[i]['position'];
                    //GM_log("Cropping forestry_area["+i+"]['category']="+unsafeWindow.forestry_area[i]['category']+" forestry_area["+i+"]['block']="+unsafeWindow.forestry_area[i]['block']+" forestry_area_time["+v+"]="+unsafeWindow.forestry_area_time[v]);
                    if(unsafeWindow.forestry_area[i]['category']==1 && unsafeWindow.forestry_area[i]['block']==0 && unsafeWindow.forestry_area_time[v]!=undefined && unsafeWindow.forestry_area_time[v]<=0 && !unsafeData.zones.getProduction("forest")[2]<25){
                        if (parseInt(unsafeWindow.forestry_area[i]["productid"],10)<=5) { // TODO: use PRODUCT_MAP instead of hard-coding the offset
                            var prodoffset=20;
                        } else {
                            var prodoffset=19;
                        }
                        var prod=parseInt(prodoffset,10)+parseInt(unsafeWindow.forestry_area[i]["productid"],10);
                        if(unsafeData.prodStock[1][prod]+unsafeData.prodYield[1][prod]<=unsafeData.prodStockMax[1][prod]){
                            cropable=true;
                            break;
                        }
                    }
                }
                v=null;
            }catch(err){GM_logError("autoZoneCrop (forest cropping)","","i="+i+" v="+v,err);}

            if(cropable){
                GM_logInfo("autoZoneCrop","","zoneTyp="+zoneTyp,"Cropping"); // TODO text
                unsafeData.zones.getProduction("forest")[3]=false;
                click($("forestry_forest_button2"));
                return true;
            }else{
                return false;
            }
            break;
        default:
            return false;
    }
    // GM_log("End ernte do nothing");
} catch(err){GM_logError("autoZoneCrop ","","",err);return false;}
}
function autoZoneFinish(runId,closeButton){
    // closeButton is optional, a click is fired on it
    GM_logInfo("autoZoneFinish","runId="+runId+" closeButton="+closeButton+" closeButton.id="+(closeButton?closeButton.id:""),"handled.zoneNrF="+handled.zoneNrF+" readyZone="+implode(unsafeData.readyZone,"autoZoneFinish/readyZone"),"Begin",1);
    //if(DEVMODE){GM_log("autoZoneFinish arg caller:"+autoZoneFinish.caller.toString());}
    bot.setAction("autoZoneFinish: init");
    var help;
    if((help=unsafeData.zones.getProduction(handled.zoneNrF))&&(!help[3])){
        bot.setAction("autoZoneFinish: data not ready");
        window.setTimeout(autoZoneFinish,settings.getPause(),runId,closeButton);
    }else {
        if(bot.isActive()){
            bot.setAction("autoZoneFinish: close zone");
            if(closeButton){  // Close
                try{
                    click(closeButton);
                }catch(err){
                    GM_logError("autoZoneFinish (closeButton)","","",err);
                    autoZoneFinish(runId);
                }
            }else if(closeButton!=undefined){
                GM_logInfo("autoZoneFinish","runId="+runId+" closeButton="+closeButton+" closeButton.id="+(closeButton?closeButton.id:""),"","Closebutton not found",0);
            }
            bot.setAction("autoZoneFinish: reFillQueueBox");
            if(handled.zoneNrL){
                reFillQueueBox(handled.zoneNrF,handled.zoneNrL);
            }
            bot.end();
            // initiate working progress of next zone
            bot.setAction("autoZoneFinish: checkReadyZone");
            checkReadyZone();
        }else{
            bot.setAction("autoZoneFinish: bot.deactivate");
            bot.deactivate();
        }
    }
    GM_logInfo("autoZoneFinish","runId="+runId+" closeButton="+closeButton+" closeButton.id="+(closeButton?closeButton.id:""),"","End",1);
}

function autoFarm(runId){
    try{
        GM_logInfo("autoFarm","runId="+runId,"readyZone="+implode(unsafeData.readyZone,"autoFarm/readyZone"),"Begin",1);
        if(bot.checkRun("autoFarm",runId)){
            bot.setAction("autoFarm");
            var farmNr=(parseInt(unsafeWindow.farm,10)-1);
            var zoneNrS=getReadyZone(farmNr);
            GM_logInfo("autoFarm","runId="+runId,"farmNr="+farmNr+" zoneNrS="+zoneNrS,"",0);
            if(zoneNrS==null){
                bot.setAction("autoFarm: wrong farm");
                /*for(var i=0;i<parseInt(unsafeWindow.farmamount,10);i++){
                    if((zoneNrS==null)&&(i!=farmNr)){ zoneNrS=getReadyZone(i); }
                }*/
                for(var c=1;c<=unsafeData.ALL_ZONES["farm"].length/6;c++){
                    if(unsafeWindow.farms_data.blocked[c]){ continue; }
                    if((zoneNrS==null)&&(c-1!=farmNr)){
                        zoneNrS=getReadyZone(c-1); }
                }
                GM_logInfo("autoFarm","runId="+runId,"farmNr="+farmNr+" zoneNrS="+zoneNrS,"",0);
                if(zoneNrS==null){ // nothing to work (all fields waiting !?)
                    GM_logInfo("autoFarm","runId="+runId,"farmNr="+farmNr+" zoneNrS="+zoneNrS,"Nothing to work",0);
                    autoZoneFinish(runId);
                }else{
                    document.addEventListener("gameFarmOpened",function(runId){
                    return function(){
                        document.removeEventListener("gameFarmOpened",arguments.callee,false);
                        GM_logInfo("autoFarm","runId="+runId,"farmNr="+farmNr+" zoneNrS="+zoneNrS,getText("automat_arrivedInFarm"));
                        window.setTimeout(autoFarm,settings.getPause(),runId);
                    }
                    }(runId),false);
                    GM_logInfo("autoFarm","runId="+runId,"farmNr="+farmNr+" zoneNrS="+zoneNrS,getText("automat_changeToFarmX").replace(/%1%/,unsafeData.readyZone[zoneNrS][0]+1));
                    click($("speedlink_farm"+(unsafeData.readyZone[zoneNrS][0]+1)));
                }
            }else{
                bot.setAction("autoFarm: correct farm");
                handled.set(zoneNrS);
                try{ unsafeWindow.jsTimeStamp=unsafeWindow.Zeit.Client - unsafeWindow.Zeit.Verschiebung; }catch(err){}
                if(unsafeData.readyZone[handled.zoneNrS][2]){ // TODO else
                    bot.setAction("autoFarm: farm opened");
                    var OpenZoneNrF=getOpenZoneNrF();
                    if((unsafeData.readyZone[handled.zoneNrS][1]=="e")&&(zoneList[handled.zoneNrL][0][0]==PRODSTOP)){
                        autoZoneFinish(runId);
                    }else if(OpenZoneNrF!=handled.zoneNrF){
                        // close wrong zone
                        if($("gardenmaincontainer").style.display=="block"){
                            bot.setAction("autoFarm: farm opened, close gardenmaincontainer");
                            GM_logInfo("autoFarm","runId="+runId,"farmNr="+farmNr+" zoneNrS="+zoneNrS,getText("automat_closingFieldContainer"));
                            click($("gardencancel"));
                            window.setTimeout(autoFarm,settings.getPause(),runId);
                        }else if($("innermaincontainer").style.display=="block"){
                            bot.setAction("autoFarm: farm opened, close innermaincontainer");
                            GM_logInfo("autoFarm","runId="+runId,"farmNr="+farmNr+" zoneNrS="+zoneNrS,getText("automat_closingFactoryContainer"));
                            //var btn = $("cancelscreen").getElementsByClassName("link")[0];
                            var btn = $("innermaincontainer").querySelector('#cancelscreen');
                            if (!btn) { // Try this button, eg. on pony factory
                                btn = $("innercontent").getElementsByClassName("big_close")[0];
                            }
                            click(btn);
                            window.setTimeout(autoFarm,settings.getPause(),runId);
                        }else if($("building_inner").style.display=="block"){
                            bot.setAction("autoFarm: farm opened, close building_inner");
                            GM_logInfo("autoFarm","runId="+runId,"farmNr="+farmNr+" zoneNrS="+zoneNrS,getText("automat_closingStableContainer"));
                            click($("building_inner").querySelector(".big_close"));
                            window.setTimeout(autoFarm,settings.getPause(),runId);
                        }else{
                        // open zone
                            GM_logInfo("autoFarm","runId="+runId,"farmNr="+farmNr+" zoneNrS="+zoneNrS,getText("automat_openingZoneX").replace(/%1%/,unsafeData.zones.getName(handled.zoneNrS)));
                            switch(handled.zoneBuildingTyp){
                                case 1:
                                    document.addEventListener("gameFieldOpened",function(runId){
                                    return function(){
                                        document.removeEventListener("gameFieldOpened",arguments.callee,false);
                                        window.setTimeout(autoZoneHandle,settings.getPause(),runId);
                                    }
                                    }(runId),false);
                                    click($("farm"+handled.farmNr+"_pos"+handled.zoneNr+"_click"));
                                break;
                                case 2:
                                    document.addEventListener("gameOpenStable",function(runId){
                                    return function(){
                                        document.removeEventListener("gameOpenStable",arguments.callee,false);
                                        window.setTimeout(autoZoneHandle,settings.getPause(),runId);
                                    }
                                    }(runId),false);
                                    click($("farm"+handled.farmNr+"_pos"+handled.zoneNr+"_click"));
                                break;
                                case 3:{
                                    switch(getZoneType(handled.zoneNrF)){
                                    case 13: case 14: case 16: case 21:{
                                        document.addEventListener("gameOpenFactoryOilKnittingTea",function(runId){
                                        return function(){
                                            document.removeEventListener("gameOpenFactoryOilKnittingTea",arguments.callee,false);
                                            window.setTimeout(autoFarmFactoryOilKnittingTea,settings.getPause(),runId,1);
                                        }
                                        }(runId),false);
                                    break;}
                                    default:{
                                        document.addEventListener("gameOpenFactory",function(runId){
                                        return function(){
                                            document.removeEventListener("gameOpenFactory",arguments.callee,false);
                                            window.setTimeout(autoZoneHandle,settings.getPause(),runId);
                                        }
                                        }(runId),false);
                                    }
                                    }
                                    click($("farm"+handled.farmNr+"_pos"+handled.zoneNr+"_click"));
                                break;}
                                case 5: {
                                    document.addEventListener("gameOpenPony",function(runId){
                                        return function(){
                                            document.removeEventListener("gameOpenPony",arguments.callee,false);
                                            window.setTimeout(autoFarmPony,settings.getPause(),runId,1);
                                        }
                                    }(runId),false);
                                    click($("farm"+handled.farmNr+"_pos"+handled.zoneNr+"_click"));
                                    break;
                                }
                                case 6: { //Fuelstation
                                    document.addEventListener("gameOpenFuelstation",function(runId){
                                        return function(){
                                            document.removeEventListener("gameOpenFuelstation",arguments.callee,false);
                                            window.setTimeout(autoFarmFuelstation,settings.getPause(),runId,1);
                                        }
                                    }(runId),false);
                                    click($("farm"+handled.farmNr+"_pos"+handled.zoneNr+"_click"));
                                    break;
                                }
                                case 13: {
                                    document.addEventListener("gameOpenSushibar",function(runId){
                                        return function(){
                                            document.removeEventListener("gameOpenSushibar",arguments.callee,false);
                                            if (handled.slot>4) {
                                                window.setTimeout(autoFarmSushiBarFarmis,settings.getPause(),runId,1);
                                            } else {
                                                window.setTimeout(autoFarmSushiBar,settings.getPause(),runId,1);
                                            }
                                        }
                                    }(runId),false);
                                    click($("farm"+handled.farmNr+"_pos"+handled.zoneNr+"_click"));
                                    break;
                                }
                            }
                        }
                    }else{
                        GM_logInfo("autoFarm","runId="+runId,"farmNr="+farmNr+" zoneNrS="+zoneNrS,getText("automat_zoneXIsOpened").replace(/%1%/,unsafeData.zones.getName(handled.zoneNrS)));
                        autoZoneHandle(runId);
                    }
                }
            }
            GM_logInfo("autoFarm","","handled.zoneNr:"+handled.zoneNr,"End",1);
        }
    }catch(err){
        GM_logError("autoFarm","","",err);
        autoZoneFinish(runId);
    } //busy=false;
}
function autoFarmCrop(runId,v){
try{
    if(bot.checkRun("autoFarm",runId,true)){
        GM_logInfo("autoFarmCrop","runId="+runId+" v="+v,"","Begin",1);
        bot.setAction("autoFarmCrop "+v);
        var wait=false;
        if(unsafeWindow.mode!="1"){
            window.setTimeout(autoFarmCrop,settings.getPause(),runId,v);
            click($("ernten"));
        }else{
            if("v"==unsafeWindow.garten_kategorie[v]||"hr"==unsafeWindow.garten_kategorie[v]||"ex"==unsafeWindow.garten_kategorie[v]||"alpin"==unsafeWindow.garten_kategorie[v]||"water"==unsafeWindow.garten_kategorie[v]){
                var z=parseInt(unsafeWindow.garten_zeit[v],10);
                if((z>0)&&(unsafeWindow.garten_x[v]==1)&&(unsafeWindow.garten_y[v]==1)){ // first part plants
                    if(z<unsafeWindow.Zeit.Server){
                        wait=true;
                        unsafeData.zones.flagProduction(handled.zoneNrF);
                        click($("f"+v));
                    }
                }
            }
            if(v<120){
                window.setTimeout(autoFarmCrop,wait?settings.getPause(true):0,runId,v+1);
            }else{
                autoZoneFinish(runId);
            }
        }
    }
}catch(err){GM_logError("autoFarmCrop","runId="+runId,"",err);}
}
function autoFarmPlantInit(runId,rackitemNr){
try{
    GM_logInfo("autoFarmPlantInit","runId="+runId+" rackitemNr="+rackitemNr,"","Begin",1);
    var stockNr = (handled.farmNr<=4)?0:(handled.farmNr==5)?5:(handled.farmNr==6)?6:(handled.farmNr==7)?7:(handled.farmNr==8)?8:(handled.farmNr==9)?9:10;
    if(bot.checkRun("autoFarmPlantInit",runId)){
        bot.setAction("autoFarmPlantInit");
        GM_logInfo("autoFarmPlantInit","runId="+runId+" rackitemNr="+rackitemNr,"","Initializing planting ("+rackitemNr+")");
        if(unsafeWindow.racksort&&(unsafeWindow.racksort>7)){
            // non-plant-rack opened
            GM_logInfo("autoFarmPlantInit","runId="+runId+" rackitemNr="+rackitemNr,"","Switching rack to plants");
            document.addEventListener("gameUpdateRack",function(runId,rackitemNr){
                return function(){
                    document.removeEventListener("gameUpdateRack",arguments.callee,false);
                    window.setTimeout(autoFarmPlantInit,settings.getPause(),runId,rackitemNr);
                };
            }(runId,rackitemNr),false);
            click($("rackcat1"));
        }else if(!(unsafeData.prodStock[stockNr][rackitemNr]&&unsafeData.prodStock[stockNr][rackitemNr]>0)){
            // product is missing
            // this is correct set, even if rack is updating
            GM_logWarning("autoFarmPlantInit","runId="+runId+" rackitemNr="+rackitemNr,"","Plant is not in rack");
            autoFarmPlantDefault(runId);
        }else if(unsafeWindow.selected==rackitemNr){
            // calculate time of next cropping
            // here its not important if rack is updating
            var time=NEVER;
            var NowServer=unsafeWindow.Zeit.Server;
            for(var v=1;v<=120;v++){
                if("v"==unsafeWindow.garten_kategorie[v]||"hr"==unsafeWindow.garten_kategorie[v]||"ex"==unsafeWindow.garten_kategorie[v]||"alpin"==unsafeWindow.garten_kategorie[v]||"water"==unsafeWindow.garten_kategorie[v]){ // only plants
                    var z=parseInt(unsafeWindow.garten_zeit[v],10);
                    if(z>0){
                        time=Math.min(time,z-NowServer);
                    }
                }
            }
            time=Math.max(time,0);
            if(time<=settings.get("account","seedWaitForCrop")){
                zoneWaiting[handled.zoneNrF]=now+time;
                window.setTimeout(function(){ //TIMEOUT
                    for(var fz in zoneWaiting){
                        if(!zoneWaiting.hasOwnProperty(fz)){continue;}
                        if(zoneWaiting[fz]<=now){ delete zoneWaiting[fz]; }
                    }
                    checkReadyZone();
                },(1000*time)+settings.getPause());
                GM_logInfo("autoFarmPlantInit","runId="+runId+" rackitemNr="+rackitemNr,"","Waiting for crop in "+getTimeStr(time));
                autoZoneFinish(runId);
                return false;
            }
            // Correct plant selected
            if(calcEmptyProductPositions(rackitemNr,handled.zoneNrF)>0){
                if((unsafeWindow.premium==1) && (unsafeWindow.currentuserlevel>=unsafeWindow.autoplantlevel)){
                    autoFarmPlantPremium(runId,1);
                }else{
                    autoFarmPlant(runId,1,false,true);
                }
            }else{
                autoFarmPlantDefault(runId);
            }
        }else{
            GM_logInfo("autoFarmPlantInit","runId="+runId+" rackitemNr="+rackitemNr,"","Wrong plant selected");
            var nextRack=(unsafeWindow.racksort%unsafeWindow.userracks)+1;
            while(unsafeWindow.racklocks&&unsafeWindow.racklocks[nextRack]){
                nextRack=(nextRack%unsafeWindow.userracks)+1;
            }
            if($("rackitem"+rackitemNr)){
                if(unsafeWindow.updateRackBusy){
                    // Rack not loaded
                    GM_logWarning("autoFarmPlantInit","runId="+runId+" rackitemNr="+rackitemNr,"Rack not loaded");
                    document.addEventListener("gameUpdateRack",function(runId,rackitemNr){
                        return function(){
                            document.removeEventListener("gameUpdateRack",arguments.callee,false);
                            window.setTimeout(autoFarmPlantInit,settings.getPause(),runId,rackitemNr);
                        };
                    }(runId,rackitemNr),false);
                }else{
                    if($("rackitem"+rackitemNr).style.display!="none"){
                        GM_logInfo("autoFarmPlantInit","runId="+runId+" rackitemNr="+rackitemNr,"","Seed found");
                        click($("rackitem"+rackitemNr)); // rackitem found
                        window.setTimeout(autoFarmPlantInit,settings.get("country","pause")[0],runId,rackitemNr);
                    }else if(unsafeWindow.racksort!=nextRack){
                        // call next rack
                        document.addEventListener("gameUpdateRack",function(runId,rackitemNr){
                            return function(){
                                document.removeEventListener("gameUpdateRack",arguments.callee,false);
                                window.setTimeout(autoFarmPlantInit,settings.getPause(),runId,rackitemNr);
                            };
                        }(runId,rackitemNr),false);
                        GM_logInfo("autoFarmPlantInit","runId="+runId+" rackitemNr="+rackitemNr,"","Switching to next rack ("+nextRack+")");
                        click($("rackswitch"+nextRack));
                    }else{
                        // should not happen
                        GM_logWarning("autoFarmPlantInit","runId="+runId+" rackitemNr="+rackitemNr,"Invisible non-empty rackitem and only 1 rack");
                        autoFarmPlantDefault(runId);
                    }
                }
            }else if(unsafeWindow.racksort!=nextRack){
                // rackamount>0 but no rackitem
                // = 2nd, 3rd or 4th rack was not loaded yet
                document.addEventListener("gameUpdateRack",function(runId,rackitemNr){
                    return function(){
                        document.removeEventListener("gameUpdateRack",arguments.callee,false);
                        window.setTimeout(autoFarmPlantInit,settings.getPause(),runId,rackitemNr);
                    };
                }(runId,rackitemNr),false);
                GM_logInfo("autoFarmPlantInit","runId="+runId+" rackitemNr="+rackitemNr,"","Switching to next rack ("+nextRack+")(rackitem not found)");
                click($("rackswitch"+nextRack));
                // unsafeWindow.updateRack((1+parseInt(unsafeWindow._currRack,10))%unsafeWindow.userracks); // call next rack
            }else{// rackamount>0 but no rackitem and 1 rack
                // should not happen because thats "product is missing" (1.case)
                GM_logWarning("autoFarmPlantInit","runId="+runId+" rackitemNr="+rackitemNr,"No rackitem but rackamount and only 1 rack");
                autoFarmPlantDefault(runId);
            }
            nextRack=null;
        }
    }
}catch(err){GM_logError("autoFarmPlantInit","runId="+runId,"",err);}
}
function autoFarmPlantDefault(runId){
try{
    GM_logInfo("autoFarmPlantDefault","runId="+runId,"","Begin",1);
    var stockNr = (handled.farmNr<=4)?0:(handled.farmNr==5)?5:(handled.farmNr==6)?6:(handled.farmNr==7)?7:(handled.farmNr==8)?8:(handled.farmNr==9)?9:10;
    if(bot.checkRun("autoFarmPlantDefault",runId)){
        bot.setAction("autoFarmPlantDefault");
        GM_logInfo("autoFarmPlantDefault","runId="+runId,"","Searching other plant");
        if(unsafeWindow.updateRackBusy){
            // Rack not loaded
            GM_logWarning("autoFarmPlantDefault","runId="+runId,"","Rack not loaded");
            document.addEventListener("gameUpdateRack",function(runId){
                return function(){
                    document.removeEventListener("gameUpdateRack",arguments.callee,false);
                    window.setTimeout(autoFarmPlantDefault,settings.getPause(),runId);
                };
            }(runId),false);
        }else{
            var rackitemNr=null;
            // try emergency plants
            for(var v=0;v<emergencyPlants.length;v++){
                if(unsafeData.prodStock[stockNr][emergencyPlants[v]]&&unsafeData.prodStock[stockNr][emergencyPlants[v]]>0&&(calcEmptyProductPositions(emergencyPlants[v],handled.zoneNrF)>0)){
                    rackitemNr=emergencyPlants[v];
                    GM_logInfo("autoFarmPlantDefault","runId="+runId,"","Taking emergency plant "+rackitemNr);
                    autoFarmPlantInit(runId,rackitemNr);
                    return;
                }
            }
            if(rackitemNr==null){
                // first plant in loaded rack
                var cand=$("rackItems").getElementsByClassName("sack");
                for(var v=0;v<cand.length;v++){
                    if(cand[v].style.display=="none"){ continue; }
                    var prod=cand[v].id.replace("rackitem","");
                    if((1==unsafeData.PRODUCT2BUILDING[0][prod])&&(calcEmptyProductPositions(prod,handled.zoneNrF)>0)){
                        rackitemNr=prod;
                        break;
                    }
                }
                cand=null;
                if(rackitemNr!=null){
                    GM_logInfo("autoFarmPlantDefault","runId="+runId,"","Taking "+unsafeData.prodName[0][rackitemNr]);
                    autoFarmPlantInit(runId,rackitemNr);
                    return;
                }else if(unsafeWindow.userracks>1){
                    // does a plant exist in other rack?
                    var plants=false;
                    for(var v=0;v<unsafeData.prodTyp[0].length;v++){ // all
                        if((1==unsafeData.PRODUCT2BUILDING[0][v])&&(calcEmptyProductPositions(v,handled.zoneNrF)>0)&&unsafeData.prodStock[stockNr][v]&&unsafeData.prodStock[stockNr][v]>0){
                            plants=true;
                            break;
                        }
                    }
                    if(plants){
                        document.addEventListener("gameUpdateRack",function(runId){
                            return function(){
                                document.removeEventListener("gameUpdateRack",arguments.callee,false);
                                window.setTimeout(autoFarmPlantDefault,settings.getPause(),runId);
                            };
                        }(runId),false);
                        GM_logInfo("autoFarmPlantDefault","runId="+runId,"","Switching to next rack");
                        unsafeWindow.updateRack((1+parseInt(unsafeWindow._currRack,10))%unsafeWindow.userracks); // call next rack
                    }else{
                        GM_logWarning("autoFarmPlantDefault","runId="+runId,"","No plant in racks.<br>Would add stop.");
                        autoZoneFinish(runId,$("gardencancel"));
                    }
                }else{
                    GM_logWarning("autoFarmPlantDefault","runId="+runId,"","No plant in rack.<br>Would add stop.");
                    autoZoneFinish(runId,$("gardencancel"));
                }
            }
        }
    }
}catch(err){GM_logError("autoFarmPlantDefault","runId="+runId,"",err);}
}
function autoFarmPlant(runId,v,didPlant,isBot){
try{
    GM_logInfo("autoFarmPlant","runId="+runId+" v="+v+" didPlant="+didPlant+" isBot="+isBot,"","Begin",1);
    var stockNr = (handled.farmNr<=4)?0:(handled.farmNr==5)?5:(handled.farmNr==6)?6:(handled.farmNr==7)?7:(handled.farmNr==8)?8:(handled.farmNr==9)?9:10;
    if(bot.checkRun("autoFarmPlant",runId,!isBot)){
        bot.setAction("autoFarmPlant");
        if(v==1){
            GM_logInfo("autoFarmPlant","runId="+runId+" v="+v+" didPlant="+didPlant+" isBot="+isBot,"",getText("automat_planting"));
        }
        if(unsafeWindow.mode!="0"){ click($("anpflanzen")); }
        if(v<121){
            if((unsafeData.prodTyp[0][unsafeWindow.selected]=="v" || unsafeData.prodTyp[0][unsafeWindow.selected]=="hr" || unsafeData.prodTyp[0][unsafeWindow.selected]=="ex" ||unsafeData.prodTyp[0][unsafeWindow.selected]=="alpin" ||   unsafeData.prodTyp[0][unsafeWindow.selected]=="water")&&unsafeData.prodStock[stockNr][unsafeWindow.selected]&&unsafeData.prodStock[stockNr][unsafeWindow.selected]>0){
                bot.setAction("autoFarmPlant "+getText("automat_planting"));
                if(v%12==1){ linecount=0; }
                var frei=true;
                if(unsafeWindow.garten_kategorie[v] && (((unsafeWindow.garten_kategorie[v]!="v") && (unsafeWindow.garten_kategorie[v]!="hr") && (unsafeWindow.garten_kategorie[v]!="ex") && (unsafeWindow.garten_kategorie[v]!="alpin") && (unsafeWindow.garten_kategorie[v]!="water")) || unsafeWindow.garten_zeit[v]!="0")){ frei=false; }
                else{
                    if(unsafeWindow.global_x=="2"){
                        if(v%12==0){ frei=false; }
                        else{
                            w=v+1;
                            if(unsafeWindow.garten_kategorie[w] && (((unsafeWindow.garten_kategorie[w]!="v") && (unsafeWindow.garten_kategorie[w]!="hr") && (unsafeWindow.garten_kategorie[w]!="ex") && (unsafeWindow.garten_kategorie[w]!="alpin") && (unsafeWindow.garten_kategorie[w]!="water") ) || unsafeWindow.garten_zeit[w]!="0")){ frei=false; }
                            else{
                                if(unsafeWindow.global_y=="2"){
                                    if(v>108){ frei=false; }
                                    else{
                                        w=v+12;
                                        if(unsafeWindow.garten_kategorie[w] && (((unsafeWindow.garten_kategorie[w]!="v") && (unsafeWindow.garten_kategorie[w]!="hr") && (unsafeWindow.garten_kategorie[w]!="ex") && (unsafeWindow.garten_kategorie[w]!="alpin") && (unsafeWindow.garten_kategorie[w]!="water")) || unsafeWindow.garten_zeit[w]!="0")){ frei=false; }
                                        else{
                                            w=v+13;
                                            if(unsafeWindow.garten_kategorie[w] && (((unsafeWindow.garten_kategorie[w]!="v") && (unsafeWindow.garten_kategorie[w]!="hr") && (unsafeWindow.garten_kategorie[w]!="ex") && (unsafeWindow.garten_kategorie[w]!="alpin") && (unsafeWindow.garten_kategorie[w]!="water")) || unsafeWindow.garten_zeit[w]!="0")){ frei=false; }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if(frei){
                    unsafeData.zones.flagProduction(handled.zoneNrF);
                    click($("f"+v));
                    v+=parseInt(unsafeWindow.global_x,10);
                    linecount +=parseInt(unsafeWindow.global_x,10);
                    if(linecount>11){ v +=12*(parseInt(unsafeWindow.global_y,10)-1); }
                    window.setTimeout(autoFarmPlant,settings.getPause(true),runId,v,true,isBot);
                }else{
                    autoFarmPlant(runId,v+1,didPlant,isBot);
                }
            }else{
                GM_logInfo("autoFarmPlant","runId="+runId+" v="+v+" didPlant="+didPlant+" isBot="+isBot,"","Invalid plant");
                if(didPlant&&isBot){ setNextQueueItem(handled.zoneNrS); }
                autoFarmWater(runId,1,didPlant,isBot);
            }
        }else{
            GM_logInfo("autoFarmPlant","runId="+runId+" v="+v+" didPlant="+didPlant+" isBot="+isBot,"","All fields done");
            if(autoZoneCrop()){
                window.setTimeout(autoFarmPlant,settings.getPause(),runId,1,didPlant,isBot);
            }else{
                if(didPlant&&isBot){ setNextQueueItem(handled.zoneNrS); }
                window.setTimeout(autoFarmWater,settings.getPause(),runId,1,didPlant,isBot);
            }
        }
        GM_logInfo("autoFarmPlant","runId="+runId+" v="+v+" didPlant="+didPlant+" isBot="+isBot,"","End",1);
    }
}catch(err){GM_logError("autoFarmPlant","runId="+runId+" v="+v+" didPlant="+didPlant+" isBot="+isBot,"",err);}
}
function autoFarmPlantPremium(runId, step){
try{
    if(bot.checkRun("autoFarmPlantPremium",runId)){
        bot.setAction("autoFarmPlantPremium ("+step+")");
        var help,help2,action=null,listeningEvent=null;
        switch(step){
        case 1:{ // call automatic planting
            GM_logInfo("autoFarmPlantPremium","runId="+runId+" step="+step,"","(Premium) "+getText("automat_planting"));
            var leereFelder=0;
            for(var v=1;v<=120;v++){
                if("v"==unsafeWindow.garten_kategorie[v]||"hr"==unsafeWindow.garten_kategorie[v]||"ex"==unsafeWindow.garten_kategorie[v]||"alpin"==unsafeWindow.garten_kategorie[v]||"water"==unsafeWindow.garten_kategorie[v]){
                    if(!unsafeWindow.garten_prod[v]){ leereFelder++; }
                }else{
                    if((unsafeWindow.garten_kategorie[v]!="z") && (unsafeWindow.garten_kategorie[v]!="u")){ leereFelder++; }
                }
            }
            if(leereFelder>0){
                action=function(){ click($("autoplantbuttoninner")); }; // open automat
                listeningEvent="gameOpenGlobalBox";
            }else{
                autoFarmWater(runId,1,false,true);
            }
        break;}
        case 2:{ // commit automatic planting
            unsafeData.zones.flagProduction(handled.zoneNrF);
            setNextQueueItem(handled.zoneNrS);
            action=function(){ click($("globalbox_button1")); }
            listeningEvent="gameFieldPlanted";
        break;}
        case 3:{
            autoFarmWater(runId,1,true,true);
        break;}
        }
        if(listeningEvent){
            document.addEventListener(listeningEvent,function(listeningEvent,runId,step){
                return function(){
                    document.removeEventListener(listeningEvent,arguments.callee,false);
                    window.setTimeout(autoFarmPlantPremium,settings.getPause(),runId,step+1);
                };
            }(listeningEvent,runId,step),false);
        }
        if(action){ action(); }
        help=null;listeningEvent=null;action=null;
    }
 }catch(err){GM_logError("autoFarmPlantPremium","runId="+runId+" step="+step,"",err);}
}
function autoFarmWater(runId,v,didPlant,isBot){
try{
    if(bot.checkRun("autoFarmWater",runId,!isBot)){
        if(isBot&&!settings.get("account","autoWater")){ // bot shall not water (option)
            autoZoneFinish(runId,$("gardencancel"));
        }else{
            GM_logInfo("autoFarmWater","runId="+runId+" v="+v+" didPlant="+didPlant+" isBot="+isBot,"","Begin",1);
            bot.setAction("autoFarmWater "+v+": init");
            if(v==1){
                GM_logInfo("autoFarmWater","runId="+runId+" v="+v+" didPlant="+didPlant+" isBot="+isBot,"",getText("automat_watering"));
            }
            //between level 4 and 9 watering is free
            if(unsafeWindow.premium==1||(unsafeWindow.currentuserlevel>=4&&unsafeWindow.currentuserlevel<10)) {
                bot.setAction("autoFarmWater "+v+": premium");
                GM_logInfo("autoFarmWater","runId="+runId+" v="+v+" didPlant="+didPlant+" isBot="+isBot,"","Water all");
                unsafeData.zones.flagProduction(handled.zoneNrF);
                document.addEventListener("gameFieldWatered",function(runId,v,didPlant,isBot){
                    return function(){
                        document.removeEventListener("gameFieldWatered",arguments.callee,false);
                        window.setTimeout(autoZoneFinish,settings.getPause(),runId,isBot?$("gardencancel"):null);
                    };
                }(runId,v,didPlant,isBot),false);
                click($("waterall"));
            }else if(unsafeWindow.mode!="2"){
                click($("giessen"));
                window.setTimeout(autoFarmWater,settings.getPause(),runId,v,didPlant,isBot);
            }else{
                bot.setAction("autoFarmWater "+v+": non-premium");
                if(v<121){
                    if((unsafeWindow.garten_kategorie[v]=="v" || unsafeWindow.garten_kategorie[v]=="hr" || unsafeWindow.garten_kategorie[v]=="ex"|| unsafeWindow.garten_kategorie[v]=="alpin"||"water"==unsafeWindow.garten_kategorie[v]) && (unsafeWindow.garten_zeit[v]!="0") && (isNaN(parseInt(unsafeWindow.garten_wasser[v],10))||(parseInt(unsafeWindow.garten_wasser[v],10)+86400<unsafeWindow.Zeit.Server))){
                        bot.setAction("autoFarmWater "+v+": click ");
                        unsafeData.zones.flagProduction(handled.zoneNrF);
                        click($("f"+v));
                        window.setTimeout(autoFarmWater,settings.getPause(true),runId,v+parseInt(unsafeWindow.garten_max_x[v],10),didPlant,isBot);
                    }else{
                        bot.setAction("autoFarmWater "+v+": continue ");
                        autoFarmWater(runId,v+1,didPlant,isBot);
                    }
                }else{
                    bot.setAction("autoFarmWater "+v+": finish ");
                    if(autoZoneCrop()){
                        bot.setAction("autoFarmWater "+v+": finish, crop-able");
                        window.setTimeout(autoFarmPlant,settings.getPause(),runId,1,didPlant,isBot);
                    }else{
                        bot.setAction("autoFarmWater "+v+": finish, not crop-able");
                        click($("anpflanzen"));
                        window.setTimeout(autoZoneFinish,settings.getPause(),runId,isBot?$("gardencancel"):null);
                    }
                }
            }
            GM_logInfo("autoFarmWater","runId="+runId+" v="+v+" didPlant="+didPlant+" isBot="+isBot,"","End",1);
        }
    }
}catch(err){GM_logError("autoFarmWater","runId="+runId+" v="+v+" didPlant="+didPlant+" isBot="+isBot,"",err);}
}

//Funktion überprüft, ob die übergebene Produktionstätte ein Produkt produziert, welches für
//einen Clubauftrag benötigt wird.Zusätzlich wird überrüft, ob für Clubaufträge produziert werden soll und
//ob ein Clubauftrag gestartet ist.
function checkGuildJobProduct(zoneNrL) {
    try{
        var buildProducts = unsafeData.BUILDING2PRODUCT[getZoneType(zoneNrL)]; //produzierte Produkte
        if (settings.get("account","botUseGuildJop") && unsafeWindow.job_data && unsafeWindow.job_data.guild_job_data) {
            var job = unsafeWindow.job_data.currentjob; // aktueller Beruf
            var jobProducts = unsafeWindow.job_data.config.jobs[job].products; //Produkte die der Beruf herstellen kann
            for (var i=0;i<buildProducts.length;i++) {
                if (unsafeWindow.job_data.guild_job_data.data.products.hasOwnProperty(buildProducts[i]) &&
                    (jobProducts.indexOf(buildProducts[i])>=0)){
                    return true;
                }
            }
        }
        return false;
    }catch(err){GM_logError("productInGuildJop","","",err);}
}

function autoFarmStable(runId, step, didFeed, isBot, sorte, feedcounter, maxFeed) {
    try {
        // GM_log("autoFarmStable runId="+runId+" step="+step+" didFeed="+didFeed+" isBot="+isBot+" sorte="+sorte+" feedcounter="+feedcounter+" maxFeed="+maxFeed);
        if (bot.checkRun("autoFarmStable", runId, !isBot)) {
            var help, action = null,
                listeningEvent = null;
            var stockNr = (handled.farmNr<=4)?0:(handled.farmNr==5)?5:(handled.farmNr==6)?6:(handled.farmNr==7)?7:(handled.farmNr==8)?8:(handled.farmNr==9)?9:10;
            bot.setAction("autoFarmStable (" + step + ")");
            // Error displayed
            if ($("errorboxinner").style.display == "block") { step = 9; } // exit
            switch (step) {
                case 1:
                    { // init: Show "Feeding" bubble and probably jump to step 5
                        GM_logInfo("autoFarmStable", "runId=" + runId + " step=" + step + " didFeed=" + didFeed + " isBot=" + isBot + " sorte=" + sorte + " feedcounter=" + feedcounter + " maxFeed=" + maxFeed, "", "Feeding");
                        autoFarmStable(runId, isBot ? step + 1 : 5, didFeed, isBot, sorte, feedcounter, maxFeed);
                        break;
                    }
                case 2:
                    { // crop: If a/the globalbox is opened, confirm it
                        help = $("globalbox");
                        if (help && (help.style.display == "block")) {
                            action = function() { click($("globalbox_button1")); }
                            listeningEvent = "gameOpenStableCrop";
                        } else {
                            autoFarmStable(runId, step + 1, didFeed, isBot, sorte, feedcounter, maxFeed);
                        }
                        break;
                    }
                case 3:
                    { // check, if active
                        if (zoneList[handled.zoneNrL][0][0] == PRODSTOP) {
                            autoFarmStable(runId, 9, didFeed, isBot, sorte, feedcounter, maxFeed);
                        } else {
                            autoFarmStable(runId, step + 1, didFeed, isBot, sorte, feedcounter, maxFeed);
                        }
                        break;
                    }
                case 4:
                    { // check storage of feed
                        if (checkGuildJobProduct(handled.zoneNrL)) {
                            if (unsafeWindow.job_data.guild_job_data.stock[sorte] && unsafeWindow.job_data.guild_job_data.stock[sorte] > 0) {
                                autoFarmStable(runId, step + 1, didFeed, isBot, sorte, feedcounter, maxFeed);
                                // window.setTimeout(autoFarmStable, 3 * settings.getPause(true), runId, step + 1, didFeed, isBot, sorte, feedcounter, maxFeed);
                            } else {
                                GM_logWarning("autoFarmStable", "runId=" + runId + " step=" + step + " didFeed=" + didFeed + " isBot=" + isBot + " sorte=" + sorte + " feedcounter=" + feedcounter + " maxFeed=" + maxFeed, "", "No feed.<br>Stopping zone.");
                                zoneList[handled.zoneNrL][0][0] = PRODSTOP; // sleep zone
                                updateQueueBox(handled.zoneNrF);
                                autoFarmStable(runId, 10, didFeed, isBot, sorte, feedcounter, maxFeed); // exit
                            }
                        } else if (unsafeData.prodStock[stockNr][sorte] && unsafeData.prodStock[stockNr][sorte] > 0) {
                            // Some products of 'sorte' in stock
                            autoFarmStable(runId, step + 1, didFeed, isBot, sorte, feedcounter, maxFeed);
                        } else {
                            // No products of 'sorte' found
                            if (parseInt(unsafeWindow.racksort, 10) < unsafeWindow.userracks) {
                                step--;
                                action = function() {
                                    unsafeWindow.updateRack(parseInt(unsafeWindow.userracks, 10)); // switch to last rack
                                }
                                listeningEvent = "gameUpdateRack";
                            } else {
                                if (sorte == zoneList[handled.zoneNrL][0][0]) {
                                    autoFarmStable(runId, step, didFeed, isBot, zoneList[handled.zoneNrL][1][0], 0, zoneList[handled.zoneNrL][1][1]); // do other food
                                } else {
                                    if (unsafeData.readyZone[handled.zoneNrS]) {
                                        GM_logWarning("autoFarmStable", "runId=" + runId + " step=" + step + " didFeed=" + didFeed + " isBot=" + isBot + " sorte=" + sorte + " feedcounter=" + feedcounter + " maxFeed=" + maxFeed, "", "No feed.<br>Stopping zone.");
                                        zoneList[handled.zoneNrL][0][0] = PRODSTOP; // sleep zone
                                        updateQueueBox(handled.zoneNrF);
                                    }

                                    autoFarmStable(runId, 10, didFeed, isBot, sorte, feedcounter, maxFeed); // exit
                                }
                            }
                        }
                        break;
                    }
                case 5:
                    { // Feeding (Premium): start
                        if ((unsafeWindow.premium == 1) || (parseInt($("levelnum").innerHTML, 10) < 10)) { // check if premium feeding
                            var div = (checkGuildJobProduct(handled.zoneNrL)) ? $("feed_item" + sorte + "_guild").querySelector(".sack") : $("feed_item" + sorte + "_normal").querySelector(".sack");
                            if (div) {
                                action = function() { click(div); }
                                listeningEvent = "gameOpenBuildingInnerDialogBox";
                            } else {
                                // Wait, until div is ready
                                GM_logInfo("autoFarmStable", "runId=" + runId + " step=" + step + " didFeed=" + didFeed + " isBot=" + isBot + " sorte=" + sorte + " feedcounter=" + feedcounter + " maxFeed=" + maxFeed, "", "Waiting for dialog to be completely loaded");
                                window.setTimeout(autoFarmStable, 3 * settings.getPause(true), runId, step, didFeed, isBot, sorte, feedcounter, maxFeed);
                            }
                        } else {
                            autoFarmStable(runId, 8, didFeed, isBot, sorte, feedcounter, maxFeed); // go to non-premium feeding
                        }
                        break;
                    }
                case 6:
                    { // Feeding (Premium): amount
                        if (help = $("building_dialogbox_input")) {
                            maxFeed = (checkGuildJobProduct(handled.zoneNrL)) ? Math.min(unsafeWindow.job_data.guild_job_data.stock[sorte], maxFeed) : Math.min(unsafeData.prodStock[stockNr][sorte], maxFeed);
                            GM_logInfo("autoFarmStable", "runId=" + runId + " step=" + step + " didFeed=" + didFeed + " isBot=" + isBot + " sorte=" + sorte + " feedcounter=" + feedcounter + " maxFeed=" + maxFeed, "", getText("automat_feeding") + "<br>" + maxFeed + " " + unsafeData.prodName[0][sorte]);
                            help.value = maxFeed; // enter amount
                            keyup(help);
                            help = null;
                            autoFarmStable(runId, step + 1, didFeed, isBot, sorte, feedcounter, maxFeed);
                        } else {
                            window.setTimeout(autoFarmStable, 1000, runId, step, didFeed, isBot, sorte, feedcounter, maxFeed);
                        }
                        break;
                    }
                case 7:
                    { // Feeding (Premium): submit
                        feedcounter += maxFeed;
                        if (!checkGuildJobProduct(handled.zoneNrL)) {
                            unsafeData.prodStock[stockNr][sorte] -= maxFeed;
                        }
                        didFeed = true;
                        action = function() { click($("building_dialogbox_submit")); }
                        listeningEvent = "gameOpenStableFeed";
                        if (isBot && (sorte == zoneList[handled.zoneNrL][0][0]) && (zoneList[handled.zoneNrL][1]) && (zoneList[handled.zoneNrL][1][1] > 0)) {
                            step = 3; // Continue at step 3 + 1 (Check storage of feed)
                        } else {
                            step = 9; // Continue at step 9 + 1 (Exit)
                        }
                        break;
                    }
                case 8:
                    { // Feeding (Non-Premium)
                        feedcounter++;
                        if (!checkGuildJobProduct(handled.zoneNrL)) {
                            unsafeData.prodStock[0][sorte]--;
                        }
                        didFeed = true;
                        GM_logInfo("autoFarmStable", "runId=" + runId + " step=" + step + " didFeed=" + didFeed + " isBot=" + isBot + " sorte=" + sorte + " feedcounter=" + feedcounter + " maxFeed=" + maxFeed, "", getText("automat_feeding") + "<br>" + feedcounter + " " + unsafeData.prodName[0][sorte]);
                        var div = (checkGuildJobProduct(handled.zoneNrL)) ? $("feed_item" + sorte + "_guild").querySelector(".sack") : $("feed_item" + sorte + "_normal").querySelector(".sack");
                        if (div) {
                            click(div); // give feed
                            if (feedcounter >= maxFeed) {
                                if ((sorte == zoneList[handled.zoneNrL][0][0]) && (zoneList[handled.zoneNrL][1][1] > 0)) {
                                    window.setTimeout(autoFarmStable, 3 * settings.getPause(true), runId, 4, didFeed, isBot, zoneList[handled.zoneNrL][1][0], 0, zoneList[handled.zoneNrL][1][1]); // do other food
                                } else {
                                    window.setTimeout(autoFarmStable, 3 * settings.getPause(true), runId, 10, didFeed, isBot, sorte, feedcounter, maxFeed); // exit
                                }
                            } else {
                                window.setTimeout(autoFarmStable, settings.getPause(true), runId, step, true, isBot, sorte, feedcounter, maxFeed); // next feeding
                            }
                        } else {
                            window.setTimeout(autoFarmStable, 3 * settings.getPause(true), runId, 10, didFeed, isBot, sorte, feedcounter, maxFeed); // exit
                        }
                        break;
                    }
                case 9:
                    { // click errorbox if opened
                        if ($("errorboxinner").style.display == "block") {
                            click($("errorboxfooterinner").getElementsByClassName("link")[0]);
                            window.setTimeout(autoFarmStable, settings.getPause(), runId, step + 1, didFeed, isBot, sorte, feedcounter, maxFeed);
                        } else {
                            autoFarmStable(runId, step + 1, didFeed, isBot, sorte, feedcounter, maxFeed);
                        }
                        break;
                    }
                case 10:
                    { // exit
                        autoZoneFinish(runId, isBot ? $("building_inner").querySelector(".big_close") : null);
                        break;
                    }
            }
            if (listeningEvent) {
                document.addEventListener(listeningEvent, function(listeningEvent, runId, step, didFeed, isBot, sorte, feedcounter, maxFeed) {
                    return function() {
                        document.removeEventListener(listeningEvent, arguments.callee, false);
                        window.setTimeout(autoFarmStable, settings.getPause(), runId, step + 1, didFeed, isBot, sorte, feedcounter, maxFeed);
                    };
                }(listeningEvent, runId, step, didFeed, isBot, sorte, feedcounter, maxFeed), false);
            }
            if (action) { action(); }
            help = null;
            listeningEvent = null;
            action = null;
        }
    } catch (err) { GM_logError("autoFarmStable", "runId=" + runId + " step=" + step + " didFeed=" + didFeed + " isBot=" + isBot + " sorte=" + sorte + " feedcounter=" + feedcounter + " maxFeed=" + maxFeed, "", err); }
}
function autoFarmFactory(runId, step) {
    try {
        if (!step) { step = 1; }
        if (bot.checkRun("autoFarmFactory", runId)) {
            bot.setAction("autoFarmFactory (" + step + ")");
            var action = null, listeningEvent = null;
            switch (step) {
                case 1:
                    { // init and optinally crop
                        if ($("innermaincontainer").style.display == "block") {
                            GM_logInfo("autoFarmFactory", "runId=" + runId + " step=" + step, "", getText("automat_automatFactory"));
                            if ($("production_slot_cancel" + handled.farmNr + "_" + handled.zoneNr + "_1").style.display == "block") {
                                // Production not finished yet
                                autoFarmFactory(runId, 4); // exit
                            } else {
                                if ($("production_slot_info" + handled.farmNr + "_" + handled.zoneNr + "_1").innerHTML == "") {
                                    // Cropped
                                    autoFarmFactory(runId, step + 1);
                                } else {
                                    // Cropping
                                    action = function() { click($("production_slot" + handled.farmNr + "_" + handled.zoneNr + "_1")); }
                                    listeningEvent = "harvestproduction";
                                }
                            }
                        } else {
                            window.setTimeout(autoFarmFactory, settings.getPause(), runId, step);
                        }
                        break;
                    }
                case 2:
                    { // Click on empty slot
                        GM_logInfo("autoFarmFactory", "runId=" + runId + " step=" + step, "", getText("automat_automatFactory"));
                        //if($("infoblock"+unsafeWindow.locationinfo[6])){ // zone is running
                        if (unsafeData.zones.getBlock(handled.zoneNrS)) {
                            autoFarmFactory(runId, 4); // exit
                        } else {
                            if ($("production_slot_info2" + handled.farmNr + "_" + handled.zoneNr + "_1").innerHTML == "") {
                                window.setTimeout(autoFarmFactory, settings.getPause(), runId, step); // wait
                            } else {
                                var startProductionButton = $("production_slot" + handled.farmNr + "_" + handled.zoneNr + "_1");
                                var req=unsafeData.BUILDING_INPUT[getZoneType(handled.zoneNrS)][zoneList[handled.zoneNrL][0][0]][0];
                                var stockNr = (handled.farmNr<=4)?0:(handled.farmNr==5)?5:(handled.farmNr==6)?6:(handled.farmNr==7)?7:(handled.farmNr==8)?8:(handled.farmNr==9)?9:10;
                                for(var i=0;i<req.length;i++){
                                    if (checkGuildJobProduct(handled.zoneNrL)) {
                                        if (unsafeWindow.job_data.guild_job_data.stock[req[i][0]] && unsafeWindow.job_data.guild_job_data.stock[req[i][0]] < req[i][1]) {
                                            startProductionButton = false;
                                        }
                                    } else if(unsafeData.prodStock[stockNr][req[i][0]]<req[i][1]){
                                        startProductionButton = false;
                                    }
                                }
                                if (startProductionButton) {
                                    action = function() { click(startProductionButton); }
                                    listeningEvent = "gameOpenGlobalCommitBox";
                                } else {
                                    // not enough products
                                    GM_logInfo("autoFarmFactory","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Step 2 -> not enough products in stock");
                                    zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                                    updateQueueBox(handled.zoneNrS);
                                    autoFarmFactory(runId, 4); // exit
                                }
                            }
                        }
                        break;
                    }
                case 3:
                    { // Click on product to produce
                        if ($("globalbox").style.display == "block") {
                            var div;
                            var index = 1 + Object.keys(unsafeData.BUILDING_INPUT[getZoneType(handled.zoneNrS)]).indexOf(""+zoneList[handled.zoneNrL][0][0]);
                            if (checkGuildJobProduct(handled.zoneNrL)) {
                                //"factory.start('start',4,2,1, 1)"
                                div = $("globalbox").querySelector('div[onclick*="factory.start(\'start\','+handled.zoneNr+','+index+','+'1'+', '+'1'+')"]');
                            } else {
                                //factory.start('start',4,2,1)
                                div = $("globalbox").querySelector('div[onclick*="factory.start(\'start\','+handled.zoneNr+','+index+','+'1'+')"]');
                            }
                            action = function() { click(div); setNextQueueItem(handled.zoneNrS);}
                            listeningEvent = "gameStartFactory";
                        } else {
                            window.setTimeout(autoFarmFactory, settings.getPause(), runId, step); // wait
                        }
                        break;
                    }
                case 4:
                    { // exit
                        autoZoneFinish(runId, $("cancelscreen"));
                        break;
                    }
            }
            if (listeningEvent) {
                document.addEventListener(listeningEvent, function(listeningEvent, runId, step) {
                    return function() {
                        document.removeEventListener(listeningEvent, arguments.callee, false);
                        window.setTimeout(autoFarmFactory, settings.getPause(), runId, step + 1);
                    };
                }(listeningEvent, runId, step), false);
            }
            if (action) { action(); }
            listeningEvent = null;
            action = null;
        }
    } catch (err) { GM_logError("autoFarmFactory", "runId=" + runId + " step=" + step, "", err); }
}
function autoFarmPony(runId,step){
    try{
    if(!step){ step=1; }
    if(bot.checkRun("autoFarmPony",runId)){
        bot.setAction("autoFarmPony ("+step+")");
        var action=null,listeningEvent=null;
        switch(step){
        case 1:{ // init
            if(unsafeData.zones.getBlock(handled.zoneNrS)){
                zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                updateQueueBox(handled.zoneNrS);
                autoFarmPony(runId, 10); // Pony slot blocked => Exit
            }else{
                if(unsafeData.zones.getEndtime(handled.zoneNrS)==NEVER){ // Empty
                    GM_logInfo("autoFarmPony","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Pony is cropped");
                    autoFarmPony(runId, step+2); // Skip cropping => Feed
                }else if(unsafeData.zones.getEndtime(handled.zoneNrS)<=unsafeWindow.Zeit.Server){ // Cropable
                    GM_logInfo("autoFarmPony","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Pony must be cropped");
                    autoFarmPony(runId, step+1); // => Crop
                }else{ // Busy
                    GM_logInfo("autoFarmPony","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Pony" + handled.slot + " is busy");
                    autoFarmPony(runId, 10); // => Exit
                }
            }
        break;}
        case 2:{ // crop pony
            var div = $("pony"+ handled.slot + "_crop");
            if (div) {
                if (div.style.display == "block") {
                    GM_logInfo("autoFarmPony","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Crop Pony" + handled.slot);
                    listeningEvent="gamePonyCropped";
                    action=function(){
                        unsafeData.readyZone[handled.zoneNrS][2] = false;
                        click(div);
                        div = null;
                    };
                } else {
                    GM_logInfo("autoFarmPony","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"No need to crop Pony" + handled.slot + " (anymore)");
                    autoFarmPony(runId, step+1); // => Feed
                }
            } else {
                autoFarmPony(runId, 10); // Crop-button doesn't exit => Something is very wrong => Exit
            }
        break;}
        case 3: { // feed pony
            var div = $("pony" + handled.slot + "_feed");
            var stockNr = (handled.farmNr<=4)?0:(handled.farmNr==5)?5:(handled.farmNr==6)?6:(handled.farmNr==7)?7:(handled.farmNr==8)?8:(handled.farmNr==9)?9:10;
            if (!unsafeData.pony_data || !div || div.style.display != "block") { // Data not ready yet
                GM_logInfo("autoFarmPony","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Feed Pony" + handled.slot + " (Waiting)");
                window.setTimeout(autoFarmPony, settings.getPause(), runId, step); // => Wait some milliseconds
            } else if (unsafeData.pony_data["ponys"][handled.slot]["data"]["feed"] < 8 && unsafeData.prodStock[stockNr][159] > 0) {
                // Pony's food stock not full and pony food is in our stock available
                GM_logInfo("autoFarmPony","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Feed Pony" + handled.slot);
                listeningEvent="gamePonyFeedDialogOpened";
                action=function(){
                    click(div);
                };
            } else {
                GM_logInfo("autoFarmPony","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"No need to feed Pony" + handled.slot + " (anymore)");
                autoFarmPony(runId, step+2); // Jump to 'set farmi'
            }
            break;
        }
        case 4: { // confirm feeding dialog
            var div = $("globalbox");
            if (div.style.display == "block") { // Is dialog visible?
                listeningEvent="gamePonyFed";
                action=function(){
                    click(div.querySelector("button"));
                };
            } else { // Dialog not visible yet
                window.setTimeout(autoFarmPony, settings.getPause(), runId, step); // => Wait some milliseconds
            }
            break;
        }
        case 5:{ // select farmi
            if (zoneList[handled.zoneNrL][0][0] == PRODSTOP || !unsafeData.readyZone[handled.zoneNrS]) {
                // PRODSTOP or zone not ready anymore => exit
                GM_logInfo("autoFarmPony","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Pony production stop");
                autoFarmPony(runId, 10);
            } else if((unsafeData.readyZone[handled.zoneNrS][1]!="e")||!unsafeData.readyZone[handled.zoneNrS][2]|| !unsafeData.pony_data){ // Data not ready yet
                // Wait for response
                GM_logInfo("autoFarmPony","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Select Farmi for Pony" + handled.slot + " (Waiting)");
                window.setTimeout(autoFarmPony, settings.getPause(), runId, step); // => Wait some milliseconds
            } else {
                GM_logInfo("autoFarmPony","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Select Farmi");
                listeningEvent="gamePonyFarmiSelected";
                action=function(){
                    var i = 1;
                    for (var fId in unsafeData.pony_data["farmis"]) {
                        var f = unsafeData.pony_data["farmis"][fId]; // Get Farmi-Data
                        if (f["status"] == 1) { // Skip farmis on ponys
                            continue;
                        }

                        // Find correct farmi
                        if (f["type"] == zoneList[handled.zoneNrL][0][0]) {
                          // Check food of pony in 'handled.slot'
                            if (f["type"] <= unsafeData.pony_data["ponys"][handled.slot]["data"]["feed"]) {
                                click($("pony_farmi"+i));
                            } else {
                                // Not enough food => Insert PRODSTOP and exit
                                zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                                updateQueueBox(handled.zoneNrS);
                                GM_logInfo("autoFarmPony","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Not enough food");
                                autoFarmPony(runId, 10);
                            }
                            break;
                        } else {
                            i++; // This is not the farmi you're looking for
                        }
                    }
                };
            }
        break;}
        case 6:{ // select pony aka set farmi on pony
            if(typeof unsafeWindow.pony_sel_farmi === 'undefined' || unsafeWindow.pony_sel_farmi == null){ // Data not ready yet
                // Wait for response
                GM_logInfo("autoFarmPony","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Set Farmi on Pony" + handled.slot + " (Waiting)");
                window.setTimeout(autoFarmPony, settings.getPause(), runId, step);  // => Wait some milliseconds
            } else if (unsafeWindow.pony_sel_farmi) { // Is a farmi selected?
                GM_logInfo("autoFarmPony","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Select Pony" + handled.slot);
                listeningEvent="gamePonySetDialogOpened";
                action=function(){
                    click($("pony" + handled.slot));
                };
            } else {
                // No farmi selected => Exit
                GM_logInfo("autoFarmPony","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"No Farmi selected");
                autoFarmPony(runId, 10);
            }
        break;}
        case 7:{ // Confirm set farmi
            var div = $("globalbox_button1");
            if (div && div.style.display != "none") { // Is dialog visible?
                listeningEvent="gamePonyFarmiSet";
                action=function(){
                    click(div);
                    setNextQueueItem(handled.zoneNrS);
                };
            } else {
                // No dialog visible => Exit
                GM_logInfo("autoFarmPony","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"No dialog to confirm");
                autoFarmPony(runId, 10);
            }
        break;}
        case 8:{
            GM_logInfo("autoFarmPony","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Open SpeedUp Dialog" + handled.slot);
            var stockNr = (handled.farmNr<=4)?0:(handled.farmNr==5)?5:(handled.farmNr==6)?6:(handled.farmNr==7)?7:(handled.farmNr==8)?8:(handled.farmNr==9)?9:10;
            var div=$("pony"+handled.slot+"_speedup");
            if ((zoneList[handled.zoneNrS][0][1]>0)&&(unsafeData.prodStock[stockNr][160] > zoneList[handled.zoneNrS][0][1]>0)&&(div)) {
                listeningEvent="gamePonySetDialogSpeedup";
                action=function(){
                    click(div);
                }
            }
            else {
                autoFarmPony(runId, 10); // Exit
            }
            break;
        }
        case 9: { // confirm speedup dialog
            GM_logInfo("autoFarmPony","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Confirm SpeedUp Dialog" + handled.slot);
            var div = $("globalbox");
            if (div.style.display == "block") { // Is dialog visible?
                if (help = $("pony_speedup_amount")) {
                    help.value = zoneList[handled.zoneNrS][0][1]; // enter amount
                    keyup(help);
                    help = null;
                    listeningEvent="gamePonySpeedup";
                    action=function(){
                        click(div.querySelector("button"));
                    };
                }
            } else { // Dialog not visible yet
                window.setTimeout(autoFarmPony, settings.getPause(), runId, step); // => Wait some milliseconds
            }
            break;
        }
        case 10:{ // start other slot or exit
            var zoneNrS,zoneNrL,help,next=false;
            for(var slot=1;slot<=3;slot++){
                zoneNrS=handled.zoneNrF+"."+slot;
                if((help=unsafeData.readyZone[zoneNrS])&&help[2]){
                    zoneNrL=getZoneListId(zoneNrS);
                    if(((help[1]=="r")&&((zoneList[zoneNrL][0][0]!=PRODSTOP)||!settings.get("account","disableCropFields")))||((help[1]=="e")&&(zoneList[zoneNrL][0][0]!=PRODSTOP))){
                        next=true;
                        handled.set(zoneNrS);
                        break;
                    }
                }
            }
            if(next){
                autoFarmPony(runId, 1);
            }else{
                autoZoneFinish(runId, $("innercontent").getElementsByClassName("big_close")[0]);
            }
        break;}
        }
        if(listeningEvent){
            document.addEventListener(listeningEvent,function(listeningEvent,runId,step){
                return function(){
                    document.removeEventListener(listeningEvent,arguments.callee,false);
                    window.setTimeout(autoFarmPony,settings.getPause(),runId,step+1);
                };
            }(listeningEvent,runId,step),false);
        }
        if(action){ action(); }
        listeningEvent=null;action=null;
    }
    }catch(err){ GM_logError("autoFarmPony","runId="+runId+" step="+step,"",err); }
}

function autoFarmFactoryOilKnittingTea(runId,step){
    try{
    if(!step){ step=1; }
    if(bot.checkRun("autoFarmFactoryOilKnittingTea",runId)){
        bot.setAction("autoFarmFactoryOilKnittingTea ("+step+")");
        var action=null,listeningEvent=null;
        switch(step){
        case 1:{ // init
            // TODO check required products earlier (recalcQueue)
            if(unsafeData.zones.getBlock(handled.zoneNrS)){
                zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                updateQueueBox(handled.zoneNrS);
                autoFarmFactoryOilKnittingTea(runId,5);
            }else{
                if(zoneList[handled.zoneNrL][0][0]!=PRODSTOP){
                    var req=unsafeData.BUILDING_INPUT[getZoneType(handled.zoneNrS)][zoneList[handled.zoneNrL][0][0]][0];
                    var stockNr = (handled.farmNr<=4)?0:(handled.farmNr==5)?5:(handled.farmNr==6)?6:(handled.farmNr==7)?7:(handled.farmNr==8)?8:(handled.farmNr==9)?9:10;
                    for(var i=0;i<req.length;i++){
                        if (checkGuildJobProduct(handled.zoneNrL)) {
                            if (unsafeWindow.job_data.guild_job_data.stock[req[i][0]] && unsafeWindow.job_data.guild_job_data.stock[req[i][0]] < req[i][1]) {
                                zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                                updateQueueBox(handled.zoneNrS);
                            }
                        } else if(unsafeData.prodStock[stockNr][req[i][0]]<req[i][1]){
                            zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                            updateQueueBox(handled.zoneNrS);
                        }
                    }
                }
                if(unsafeData.zones.getEndtime(handled.zoneNrS)==NEVER){ // empty
                    window.setTimeout(autoFarmFactoryOilKnittingTea,settings.getPause(),runId,3);
                }else if(unsafeData.zones.getEndtime(handled.zoneNrS)<=unsafeWindow.Zeit.Server){ // cropable
                    window.setTimeout(autoFarmFactoryOilKnittingTea,settings.getPause(),runId,step+1);
                }else{ // busy
                    window.setTimeout(autoFarmFactoryOilKnittingTea,settings.getPause(),runId,5);
                }
            }
        break;}
        case 2:{ // crop
            var div=$("production_slot"+handled.farmNr+"_"+handled.zoneNr+"_"+handled.slot);
            if(div){
                listeningEvent="gameFactoryOilKnittingTeaCropped";
                action=function(){
                    unsafeData.readyZone[handled.zoneNrS][2]=false;
                    click(div);
                    div=null;
                };
            }else{
                autoFarmFactoryOilKnittingTea(runId,5);
            }
        break;}
        case 3:{ // open slot
            if(!unsafeData.readyZone[handled.zoneNrS]){
                autoFarmFactoryOilKnittingTea(runId,5);
            }else if((unsafeData.readyZone[handled.zoneNrS][1]!="e")||!unsafeData.readyZone[handled.zoneNrS][2]){
                // wait for response
                window.setTimeout(autoFarmFactoryOilKnittingTea,settings.getPause(),runId,step);
            } else if(zoneList[handled.zoneNrL][0][0]==PRODSTOP){
                autoFarmFactoryOilKnittingTea(runId,5);
            }else if(!$("production_slot"+handled.farmNr+"_"+handled.zoneNr+"_"+handled.slot).onclick.toString().match(/factory\.selection/)){
                GM_logWarning("autoFarmFactoryOilKnittingTea","runId="+runId+" step="+step,"","LOGIC ERROR: onclick="+$("production_slot"+handled.farmNr+"_"+handled.zoneNr+"_"+handled.slot).onclick);
                autoFarmFactoryOilKnittingTea(runId,5);
            }else{
                listeningEvent="gameOpenGlobalCommitBox";
                action=function(){
                    click($("production_slot"+handled.farmNr+"_"+handled.zoneNr+"_"+handled.slot));
                };
            }
        break;}
        case 4:{ // select production
            var div = $("globalbox");
            if (div && (div.style.display == "block")) {
                div = div.querySelectorAll(".tt" + zoneList[handled.zoneNrL][0][0]);
                if (checkGuildJobProduct(handled.zoneNrL)) {
                    div = div[1];
                } else {
                    div = div[0];
                }
                if (div) {
                    listeningEvent = "gameFactory_start_"+handled.farmNr+"_"+handled.zoneNr;
                    action = function() {
                        click(div.parentNode);
                        setNextQueueItem(handled.zoneNrS);
                        div = null;
                    };
                } else {
                    window.setTimeout(autoFarmFactoryOilKnittingTea, settings.getPause(), runId, step);
                }
            } else {
                window.setTimeout(autoFarmFactoryOilKnittingTea, settings.getPause(), runId, step);
            }
        break;}
        case 5:{ // start other slot or exit
            var zoneNrS, zoneNrL, help, next = false;
            for (var slot = 1; slot <= 3; slot++) {
                zoneNrS = handled.zoneNrF + "." + slot;
                if ((help = unsafeData.readyZone[zoneNrS]) && help[2]) {
                    zoneNrL = getZoneListId(zoneNrS);
                    if (((help[1] == "r") && ((zoneList[zoneNrL][0][0] != PRODSTOP) || !settings.get("account", "disableCropFields"))) || ((help[1] == "e") && (zoneList[zoneNrL][0][0] != PRODSTOP))) {
                        next = true;
                        handled.set(zoneNrS);
                        break;
                    }
                }
            }
            if (next) {
                autoFarmFactoryOilKnittingTea(runId, 1);
            } else {
                autoZoneFinish(runId, $("cancelscreen"));
            }
        break;}
        }
        if(listeningEvent){
            document.addEventListener(listeningEvent,function(listeningEvent,runId,step){
                return function(){
                    document.removeEventListener(listeningEvent,arguments.callee,false);
                    window.setTimeout(autoFarmFactoryOilKnittingTea,settings.getPause(),runId,step+1);
                };
            }(listeningEvent,runId,step),false);
        }
        if(action){ action(); }
        listeningEvent=null;action=null;
    }
    }catch(err){ GM_logError("autoFarmFactoryOilKnittingTea","runId="+runId+" step="+step,"",err); }
}

function autoFarmFuelstation(runId,step){
  try{
    if(!step){ step=1; }
        if(bot.checkRun("autoFarmFuelstation",runId)) {
        bot.setAction("autoFarmFuelstation ("+step+")");
        var action=null,listeningEvent=null;
        switch(step){
        case 1:{ // init
            GM_logInfo("autoFarmFuelstation","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Fuelstation_Init");
            if(unsafeData.zones.getBlock(handled.zoneNrS)){
                zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                updateQueueBox(handled.zoneNrS);
                autoFarmFuelstation(runId,7);
            }else{
                if(unsafeData.zones.getEndtime(handled.zoneNrS)==NEVER){ // empty
                    autoFarmFuelstation(runId,3);
                }else if(unsafeData.zones.getEndtime(handled.zoneNrS)<=unsafeWindow.Zeit.Server){ // cropable
                    autoFarmFuelstation(runId,step+1);
                }else{ // busy
                    autoFarmFuelstation(runId,7);
                }
            }
        break;}
        case 2:{ // Ernten
            GM_logInfo("autoFarmFuelstation","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Fuelstation_Ernten");
            if($("fuelstation_slot"+handled.slot+"_speedup").style.display=="none") {
                var div=$("fuelstation_slot"+handled.slot);
                if(div){
                    listeningEvent="gameFuelstationHarvest";
                    action=function(){
                        unsafeData.readyZone[handled.zoneNrS][2] = false;
                        click(div.children[3]);
                        div = null;
                    };
                }else{
                    autoFarmFuelstation(runId,7);
                }
            } else {
                //Zeiten sind nicht synchron
                autoFarmFuelstation(runId,8);
            }
        break;}
        case 3:{ // open slot
            GM_logInfo("autoFarmFuelstation","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Open_Slot"+handled.slot);
            if(unsafeData.readyZone[handled.zoneNrS]){
                if(unsafeData.readyZone[handled.zoneNrS][2]&&(unsafeData.readyZone[handled.zoneNrS][1]=="e")){
                    if(zoneList[handled.zoneNrL][0][0]==PRODSTOP){
                        autoFarmFuelstation(runId,7);
                    }else{
                        var div=$("fuelstation_slot"+handled.slot);
                        listeningEvent="gameFuelstationOpenDialogProdukt";
                        action=function(){
                            click(div.children[3]);
                            div = null;
                        };
                    }
                } else {
                    // wait for response
                    window.setTimeout(autoFarmFuelstation,settings.getPause(),runId,step);
                }
            }else{
                autoFarmFuelstation(runId,7);
            }
        break;}

        case 4:{ // Dialog Produkt wählen
            GM_logInfo("autoFarmFuelstation","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Produkt wählen");
            var div = $("globalbox");
            if(div&&(div.style.display=="block")){
                var children = $('fuelstation_product_select_inner').getElementsByClassName("fuelstation_product_select_item");
                for (var c in children) {
                    if (!children.hasOwnProperty(c)) { continue; }
                    var pId_parent=children[c].getElementsByClassName("fuelstation_product_select_item_img")[0].childNodes;
                    var pId = parseInt(pId_parent[1].className.replace("tt", ""),10);
                    if(pId==zoneList[handled.zoneNrL][0][0])    {
                        div=children[c];
                        listeningEvent="gameFuelstationOpenDialogPID";
                        action=function(){
                            click(div);
                            div = null;
                        };
                        break;
                    }
                }
            } else {
                window.setTimeout(autoFarmFuelstation,settings.getPause(),runId,step);
            }
        break;}

        case 5: { //Produkt einwerfen
            GM_logInfo("autoFarmFuelstation","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Produkt einwerfen");
            var input=$("fuelstation_product_select_input");

            var zoneNrF=handled.zoneNrS.split(".");
            var farmNR=Math.floor((zoneNrF[0]-1)/6)+1;
            var data=unsafeWindow.farms_data.farms[farmNR][unsafeData.zones.getLocation(zoneNrF[0]).zoneNr];
            var iLimit=data.data.constants.slot_level[data.data.data.slots[zoneNrF[1]].level].limit;
            var produktPoints=data.data.data.slots[zoneNrF[1]].products[zoneList[handled.zoneNrL][0][0]].points;
            var max = Math.ceil(iLimit/produktPoints);
            if(input){
                input.value=max;
                keyup(input);
                input=null;
                autoFarmFuelstation(runId,step+1);
            } else {
                window.setTimeout(autoFarmFuelstation,settings.getPause(),runId,step);
            }
        break;}

        case 6: { //Dialog beenden
            GM_logInfo("autoFarmFuelstation","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Produkt einwerfen");
            var buttonE=$("globalbox").querySelector('.button_new');
            listeningEvent="gameFuelstationEntry";
            action=function(){
                click(buttonE);
                div = null;
            };
        break;}

        case 7:{ // start other slot or exit
            GM_logInfo("autoFarmFuelstation","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"start other slot or exit");
            var zoneNrS,zoneNrL,help,next=false;
            for(var slot=1;slot<=4;slot++){
                zoneNrS=handled.zoneNrF+"."+slot;
                if((help=unsafeData.readyZone[zoneNrS])&&help[2]){
                  zoneNrL=getZoneListId(zoneNrS);
                  if(((help[1]=="r")&&((zoneList[zoneNrL][0][0]!=PRODSTOP)||!settings.get("account","disableCropFields")))||((help[1]=="e")&&(zoneList[zoneNrL][0][0]!=PRODSTOP)))  {
                    next=true;
                    handled.set(zoneNrS);
                    break;
                  }
                }
            }
            if(next){
                autoFarmFuelstation(runId,1);
            }else{
                autoZoneFinish(runId, $("innercontent").getElementsByClassName("big_close")[0]);
            }
        break;}
        case 8: {
            GM_logInfo("autoFarmFuelstation","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Seite neu laden");
            window.setTimeout(function(){ top.location.href=top.location.href },settings.getPause());
        }
    }
    if(listeningEvent){
        document.addEventListener(listeningEvent,function(listeningEvent,runId,step){
          return function(){
            document.removeEventListener(listeningEvent,arguments.callee,false);
            window.setTimeout(autoFarmFuelstation,settings.getPause(),runId,step+1);
          };
        }(listeningEvent,runId,step),false);
    }
    if(action){ action(); }
      listeningEvent=null;action=null;
    }
  }catch(err){ GM_logError("autoFarmFuelstation_error","runId="+runId+" step="+step,"",err); }
}

function autoMegafield(runId, step) {
  try {
    if (!step) { step = 1; }
    if (settings.get("account", "botUseMegafield") && bot.checkRun("autoMegafield", runId)) {
      bot.setAction("autoMegafield (" + step + ")");
      var action = null, listeningEvent = null;
      var help;
      switch (step) {
        case 1:
          { // init
            var zoneNrF = "megafield";
            handled.set(zoneNrF);
            if (!zoneWaiting[handled.zoneNrL] && // Befindet sich das Megafield nicht in der Liste der "behandle mich gerade nicht"-Zonen?
              (help = unsafeData.readyZone[handled.zoneNrL]) && // ["megafield", "r", true] => vorhanden => true
              help[2] && // siehe drüber => true
              ((("r" == help[1] || "e" == help[1]) && // siehe drüber => true
                  (PRODSTOP != zoneList[handled.zoneNrL][0][0] || !settings.get("account", "disableCropFields"))) || // Kein ProdStop ODER nicht-Ernten-Flag nicht gesetzt
                ("e" == help[1] && PRODSTOP != zoneList[handled.zoneNrL][0][0]))) { // Feld leer UND noch was anzupflanzen
              autoMegafield(runId, step + 1);
            } else {
              autoMegafield(runId, 9); // exit
            }
            break;
          }
        case 2:
          { // switch action: cropping or planting?
            if (("object" == typeof unsafeWindow.megafield_data.tour) && (!unsafeWindow.megafield_data.tour.remain)) { // Tour noch aktiv, aber in Vergangenheit zu Ende gegangen
              unsafeWindow.megafield_data.tour = 0; // Das Ding auf einen Integer setzen, was wohl löschen bedeutet
            }
            if (!unsafeWindow.megafield_data.tour && // Die Tour wurde (bspw. in den Zeilen drüber) auf 0 gesetzt und ist damit beendet
              (help = unsafeData.readyZone[handled.zoneNrL]) && // help=["megafield", "r", true] => vorhanden => true
              "r" == help[1] && // "r" für ready
              (PRODSTOP != zoneList[handled.zoneNrL][0][0] || !settings.get("account", "disableCropFields"))) { // Noch was anzubauen ODER nicht-Ernten-Flag nicht gesetzt
              // crop
              autoMegafield(runId, step + 1);
            } else if ((help = unsafeData.readyZone[handled.zoneNrL]) && // Wir haben wieder/immernoch einen Eintrag in readyZone
              help[2] && // Im Array steht an der Stelle ein true
              (("r" == help[1] && // Megafield ist ready UND [Noch was anzubauen ODER nicht-Ernten-Flag nicht gesetzt]
                  (PRODSTOP != zoneList[handled.zoneNrL][0][0] || !settings.get("account", "disableCropFields"))) || // siehe Kommentar drüber
                ("e" == help[1] && PRODSTOP != zoneList[handled.zoneNrL][0][0]))) { // Megafield ist empty und noch was anzubauen
              // plant
              autoMegafield(runId, 7); // plant
            } else {
              autoMegafield(runId, 9); // exit
            }
            break;
          }
        case 3:
          { // crop vehicle
            if (!unsafeData.gameLocation.check("megafield")) { // Falls wir uns nicht auf dem Megafield befinden => hinwechseln
              GM_logInfo("autoMegafield", "runId=" + runId + " step=" + step, "zoneNrF=" + handled.zoneNrF + " zoneNrL=" + handled.zoneNrL, getText("automat_automatMegafield") + ": " + getText("automat_changingToX").replace("%1%", getText("megafield")));
              step--;
              listeningEvent = "gameOpenMegafield";
              action = function() { click($("speedlink_megafield")); };
              break;
            }

            var area = unsafeWindow.megafield_data.area;
            var useBigHarvester = false;
            if (settings.get("account","megafieldBigVehicle") > 0) {
                outer: for (var y = 0; y < unsafeData.BUILDING_SIZE["megafield"][0] - 1; y++) {
                    for (var x = 1; x <= unsafeData.BUILDING_SIZE["megafield"][1] - 1; x++) {
                        var i = y * unsafeData.BUILDING_SIZE["megafield"][1] + x;
                        if (area[i] && area[i].remain <= 0 && area[i+1] && area[i+1].remain <= 0 &&
                            area[i+11] && area[i+11].remain <= 0 && area[i+12] && area[i+12].remain <= 0) {
                            useBigHarvester = true;
                            break outer;
                        }
                    }
                }
            }

            var v_id = useBigHarvester ? settings.get("account","megafieldBigVehicle") : settings.get("account","megafieldSmallVehicle");
            if (v_id == unsafeWindow.megafield_vehicle_id) { // Korrektes Fahrzeug selektiert

              if ((unsafeWindow.megafield_data.vehicles[v_id]) && (unsafeWindow.megafield_data.vehicles[v_id].durability > 0)) {
                // Das Fahrzeug ist noch nicht "aufgebraucht" => befinden uns im Zustand "vehicle selected"
                GM_logInfo("autoMegafield", "runId=" + runId + " step=" + step, "zoneNrF=" + handled.zoneNrF + " zoneNrL=" + handled.zoneNrL, getText("automat_automatMegafield") + ": " + getText("automat_vehicleXSelected").replace("%1%", unsafeWindow.megafield_vehicle_id));
                autoMegafield(runId, step + 2); // crop mode
              } else if (unsafeWindow.megafield_data.vehicles_unlock[unsafeWindow.megafield_vehicle_id]) { // Fahrzeug ist entsperrt => Kaufen
                // buy vehicle
                GM_logInfo("autoMegafield", "runId=" + runId + " step=" + step, "zoneNrF=" + handled.zoneNrF + " zoneNrL=" + handled.zoneNrL, getText("automat_automatMegafield") + ": " + getText("automat_vehicleXBuying").replace("%1%", unsafeWindow.megafield_vehicle_id));
                listeningEvent = "gameMegafieldDialogStarted";
                action = function() { click($("megafield_vehicle" + unsafeWindow.megafield_vehicle_id).querySelector(".lock_open")); };
              } else { // Fahrzeug nicht verfügbar... wie kann das überhaupt passieren? -Egal jetzt => Abbruch
                GM_logWarning("autoMegafield", "runId=" + runId + " step=" + step, "zoneNrF=" + handled.zoneNrF + " zoneNrL=" + handled.zoneNrL, getText("automat_automatMegafield") + ": " + getText("automat_vehicleXNotAvailable").replace("%1%", unsafeWindow.megafield_vehicle_id) + " " + getText("automat_stopAdding"));
                zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                updateQueueBox(handled.zoneNrS);
                autoMegafield(runId, 9); // exit
              }

            } else { // Kein/falsches Fahrzeug selektiert
              GM_logWarning("autoMegafield", "runId=" + runId + " step=" + step, "zoneNrF=" + handled.zoneNrF + " zoneNrL=" + handled.zoneNrL, getText("automat_automatMegafield") + ": Kein oder falsches Fahrzeug selektiert");
              action = function() { click($("megafield_vehicle" + v_id)); };
              if (unsafeWindow.megafield_data.vehicles[v_id] && unsafeWindow.megafield_data.vehicles[v_id].durability > 0) {
                listeningEvent = "gameMegafieldTourVehicleSet";
              } else {
                listeningEvent = "gameMegafieldDialogStarted";
              }
            }
            break;
          }
        case 4:
          {
            step = step - 2; // Step two back, because step is incremented by one, when event occurs. Effectly we jump back to 'crop vehicle'
            if (unsafeWindow.megafield_move_position == 2 && unsafeWindow.megafield_data.vehicles[unsafeWindow.megafield_vehicle_id] && unsafeWindow.megafield_data.vehicles[unsafeWindow.megafield_vehicle_id].durability > 0) {
                // After switching the vehicle, go back to megafield
                listeningEvent = "gameMegafieldMoved";
                action = function() { click($("megafield_carpool")); };
            } else {
                // 'buy crop vehicle' dialogue must be confirmed
                listeningEvent = "gameMegafieldVehicleBought";
                action = function() { click($("globalbox_button1")); };
            }
            break;
          }
        case 5:
          { // crop mode
            if (unsafeWindow.megafield_plant_pid > 0) { // Falls wir uns nicht im Ernte-Modus befinden, in diesen wechseln
              // click($("megafield_vehicle_select_slot"));
              // window.setTimeout(autoMegafield, settings.getPause(), runId, step + 1);
              listeningEvent = "gameMegafieldMoved";
              action = function() { click($("megafield_vehicle_select_slot")); };
            } else {
              autoMegafield(runId, step + 1); // crop
            }
            break;
          }
        case 6:
          { // crop
            var area = unsafeWindow.megafield_data.area; // Objekt mit Attributen 1-99 => [duration, pid, remain, time] also Wachstumsdauer, ProduktID, Restzeit, Endzeitpunkt
            var areaSize = unsafeData.BUILDING_SIZE["megafield"][0] * unsafeData.BUILDING_SIZE["megafield"][1]; // Rechteck 9*11 = 99
            // Generate route

            var i = 0;
            if (unsafeWindow.megafield_data.vehicle_slots[unsafeWindow.megafield_vehicle_id].size == 1) {
                // Crop vehicle with harvest size 1
                while (i <= areaSize) { // Solange nicht bis 99 gezählt wurde...
                  for (i = 1; i <= areaSize; i++) { // Zähle von 1 bis 99 bzw. erneut anfangen, wenn...
                    if (area[i] && (area[i].remain < 0) && // das i-te Feld existiert UND
                      $("megafield_tile_tour" + i).className == "megafield_area_tour_possible") { // wir dort die Tour anfangen/fortsetzen können
                        click($("megafield_tile" + i));
                        break;
                    }
                  }
                }
            } else {
                for (i = 1; i <= areaSize; i++) {
                    if (area[i] && (area[i].remain < 0) &&
                        $("megafield_tile_tour" + i).className == "megafield_area_tour_possible" &&
                        area[i+1] && (area[i+1].remain < 0) &&
                        area[i+11] && (area[i+11].remain < 0) &&
                        area[i+12] && (area[i+12].remain < 0) &&
                        (i % 11 != 0) && i < 88
                        ) {
                        click($("megafield_tile" + i));
                    }
                }
            }
            // Jetzt hamma unsere Tour zusammengeklickt

            // Commit
            if ($("megafield_vehicle_go" + unsafeWindow.megafield_vehicle_id).style.display == "block") { // Grüner Haken sichtbar
              GM_logInfo("autoMegafield", "runId=" + runId + " step=" + step, "zoneNrF=" + handled.zoneNrF + " zoneNrL=" + handled.zoneNrL, getText("automat_automatMegafield") + ": " + getText("automat_tourStarting"));
              listeningEvent = "gameMegafieldTourStarted";
              action = function() { click($("megafield_vehicle_go" + unsafeWindow.megafield_vehicle_id)); };
            } else {
              // TODO: Falls auch nichts mehr zu pflanzen ist: Warum sind wir hier?
              GM_logWarning("autoMegafield", "runId=" + runId + " step=" + step, "zoneNrF=" + handled.zoneNrF + " zoneNrL=" + handled.zoneNrL, getText("automat_automatMegafield") + ": " + getText("automat_nothingToCrop"));
              autoMegafield(runId, step + 1);
            }
            break;
          }
        case 7:
          { // Plant
            if ((zoneList[handled.zoneNrL][0][0] == PRODSTOP) || (!unsafeData.readyZone[handled.zoneNrS])) { // PRODSTOP ganz vorne ODER Megafield nicht (mehr) ready
              autoMegafield(runId, 9); // exit
            } else if (unsafeWindow.megafield_plant_pid && zoneList[handled.zoneNrL][0][0] == unsafeWindow.megafield_plant_pid) { // Ein Produkt ist angewählt UND passt das zum Produkt in der Queue??
              var div;
              if (unsafeWindow.premium == 1 && // Premium is active
                settings.get("account", "botUseMegafieldPremiumPlanting") && // Option is activated
                (div = $("megafield_products").querySelector('div[onclick*="dialogMegafield(\'autoplant\', 0, 0, 0, ' + zoneList[handled.zoneNrL][0][0] + ')"]'))) { // Div is visible
                // var div=$("megafield_products").querySelector('div[onclick*="dialogMegafield(\'autoplant\', 0, 0, 0, '+zoneList[handled.zoneNrL][0][0]+')"]');
                GM_logInfo("autoMegafield", "runId=" + runId + " step=" + step, "zoneNrF=" + handled.zoneNrF + " zoneNrL=" + handled.zoneNrL, getText("automat_automatMegafield") + ": " + getText("automat_openAutoplantDialog"));
                listeningEvent = "gameMegafieldDialogAutoplant";
                action = function() { click(div); };
              } else {
                var actionField = null;
                var area = unsafeWindow.megafield_data.area; // Komplette Area: Konkreter, nur Attribute mit bepflanzten Feldern
                var areaFree = unsafeWindow.megafield_data.area_free; // Freigeschaltete Area: Konkreter, wann wurde das Feld freigeschaltet
                var tour = unsafeWindow.megafield_data.tour; // Aktuell laufende Tour. Ist 0, wenn keine Tour läuft.
                var tourSteps = {};
                if (tour && tour.steps) { // Falls aktuell eine Route läuft, deren Schritte "sammeln"
                  for (var i = 0; i < tour.steps.length; i++) {
                    for (var j in tour.steps[i]) {
                      if (!tour.steps[i].hasOwnProperty(j)) {
                        continue; }
                      tourSteps[j] = i + 1;
                    }
                  }
                }
                var i = 0;
                loop:
                  for (var r = 1; r <= unsafeData.BUILDING_SIZE["megafield"][1]; r++) { // Über alle 11 Zeilen des Megafields iterieren
                    for (var c = 1; c <= unsafeData.BUILDING_SIZE["megafield"][0]; c++) { // Über alle 9 Spalten des Megafields iterieren
                      if (areaFree[++i] && (!area[i]) && (!tourSteps[i])) { // i erhöhen, i-tes Feld freigeschaltet UND nicht bepflanzt UND nicht am geerntet werden
                        actionField = [c, r, i]; // [Zeile, Spalte, FeldNummer] kann/muss bepflanzt werden
                        break loop;
                      }
                    }
                  }
                if (actionField) { // Wir ham n Feld, das bepflanzt werden muss
                  if (!unsafeData.gameLocation.check("megafield")) { // Sind wir wieder nicht mehr auf dem Megafield?!
                    // open megafield
                    GM_logInfo("autoMegafield", "runId=" + runId + " step=" + step, "zoneNrF=" + handled.zoneNrF + " zoneNrL=" + handled.zoneNrL, getText("automat_automatMegafield") + ": " + getText("automat_changingToX").replace("%1%", getText("megafield")));
                    step--;
                    listeningEvent = "gameOpenMegafield";
                    action = function() { click($("speedlink_megafield")); };
                  } else { // Leeres Feld bepflanzen
                    GM_logInfo("autoMegafield", "runId=" + runId + " step=" + step, "zoneNrF=" + handled.zoneNrF + " zoneNrL=" + handled.zoneNrL, getText("automat_automatMegafield") + ": " + getText("automat_plantingAtX").replace("%1%", String.fromCharCode(64 + actionField[0]) + actionField[1]));
                    unsafeData.readyZone[handled.zoneNrL][2] = false;
                    listeningEvent = "gameMegafieldPlanted";
                    action = function() { click($("megafield_tile" + actionField[2])); };
                  }
                } else {
                  // no free field to plant
                  GM_logInfo("autoMegafield", "runId=" + runId + " step=" + step, "zoneNrF=" + handled.zoneNrF + " zoneNrL=" + handled.zoneNrL, getText("automat_automatMegafield") + ": " + getText("automat_plantingNoFreeField"));
                  autoMegafield(runId, 9); // exit
                }
              }
            } else if (!unsafeData.gameLocation.check("megafield")) { // Befinden wir und noch auf dem Megafield? => zur Not: Hinwechseln!
              // open megafield
              GM_logInfo("autoMegafield", "runId=" + runId + " step=" + step, "zoneNrF=" + handled.zoneNrF + " zoneNrL=" + handled.zoneNrL, getText("automat_automatMegafield") + ": " + getText("automat_changingToX").replace("%1%", getText("megafield")));
              step--;
              listeningEvent = "gameOpenMegafield";
              action = function() { click($("speedlink_megafield")); };
            } else { // Produkt selektieren/wechseln
              GM_logInfo("autoMegafield", "runId=" + runId + " step=" + step, "zoneNrF=" + handled.zoneNrF + " zoneNrL=" + handled.zoneNrL, getText("automat_automatMegafield") + ": " + getText("automat_plantingSetX").replace("%1%", unsafeData.prodName[4][zoneList[handled.zoneNrL][0][0]]));
              click($("megafield_products").querySelector(".tt" + zoneList[handled.zoneNrL][0][0]));
              window.setTimeout(autoMegafield, settings.getPause(), runId, step);
            }
            break;
          }
        case 8:
          { // Plant Response
            if (unsafeWindow.premium == 1 && settings.get("account", "botUseMegafieldPremiumPlanting") && (div = $("globalbox_button1"))) {
              GM_logInfo("autoMegafield", "runId=" + runId + " step=" + step, "zoneNrF=" + handled.zoneNrF + " zoneNrL=" + handled.zoneNrL, getText("automat_automatMegafield") + ": " + getText("automat_confirmAutoplantDialog"));
              listeningEvent = "gameMegafieldAutoplanted";
              action = function() { click(div); };
            } else if (unsafeData.readyZone[handled.zoneNrS] && (!unsafeData.readyZone[handled.zoneNrS][2])) { // Megafield ist in der Liste der "ready zones", aber Wert ist "false" (wie oben bei leeres Feld bepflanzen gesetzt)
              GM_logInfo("autoMegafield", "runId=" + runId + " step=" + step, "zoneNrF=" + handled.zoneNrF + " zoneNrL=" + handled.zoneNrL, getText("automat_automatMegafield") + ": " + getText("automat_responseWaiting"));
              window.setTimeout(autoMegafield, settings.getPause(), runId, step); // => Warten und gleich nochmal versuchen
            } else {
              // Commented, because queue is now updated after new megafield data
              // setNextQueueItem(handled.zoneNrS); // Feld bepflanzt, fortfahren
              autoMegafield(runId, 2);
            }
            break;
          }
        case 9:
          { // Exit
            if (unsafeWindow.megafield_data.tour) { // Tour läuft noch
              help = Math.min(unsafeWindow.megafield_data.tour.remain, unsafeWindow.megafield_data.tour.step_duration);
              zoneWaiting[handled.zoneNrF] = now + help;
              window.setTimeout(function() {
                for (var fz in zoneWaiting) {
                  if (!zoneWaiting.hasOwnProperty(fz)) {
                    continue; }
                  if (zoneWaiting[fz] <= now) { delete zoneWaiting[fz]; } // Bereinige das zoneWaiting-Objekt um alle abgelaufenen Einträge
                }
                checkReadyZone();
              }, (1000 * help) + settings.getPause());
              GM_logInfo("autoMegafield", "runId=" + runId + " step=" + step, "zoneNrF=" + handled.zoneNrF + " zoneNrL=" + handled.zoneNrL, getText("automat_automatMegafield") + ": " + getText("automat_cropWaitingInX").replace("%1%", getTimeStr(help)));
            }
            autoZoneFinish(runId, $("speedlink_farm1")); // Verlasse den Güterhof -> Gehe zur Farm1
            break;
          }
      }
      if (listeningEvent) {
        document.addEventListener(listeningEvent, function(listeningEvent, runId, step) {
          return function() {
            document.removeEventListener(listeningEvent, arguments.callee, false);
            window.setTimeout(autoMegafield, settings.getPause(), runId, step + 1);
          };
        }(listeningEvent, runId, step), false);
      }
      if (action) { action(); }
      listeningEvent = null;
      action = null;
    }
  } catch (err) { GM_logError("autoMegafield", "runId=" + runId + " step=" + step, "", err); }
}

function autoFarmSushiBar(runId,step){
  try{
    if(!step){ step=1; }
        if(bot.checkRun("autoFarmSushiBar",runId)) {
        bot.setAction("autoFarmSushiBar ("+step+")");
        var action=null,listeningEvent=null;
        switch(step){
        case 1:{ // init
            GM_logInfo("autoFarmSushiBar","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"SushiBar_Init");
            if(unsafeData.zones.getBlock(handled.zoneNrS)){
                zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                updateQueueBox(handled.zoneNrS);
                autoFarmSushiBar(runId,7); //Exit
            }else{
                if(unsafeData.zones.getEndtime(handled.zoneNrS)==NEVER){ // empty
                    autoFarmSushiBar(runId,3);
                }else if(unsafeData.zones.getEndtime(handled.zoneNrS)<=unsafeWindow.Zeit.Server){ // harvestable
                    autoFarmSushiBar(runId,step+1);
                }else{ // busy
                    autoFarmSushiBar(runId,7);
                }
            }
        break;}
        case 2:{ // Ernten
            GM_logInfo("autoFarmSushiBar","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Sushibar_Harvest");
            if($("sushibar_productionslot"+handled.slot+"_speedup").style.display=="none") {
                var div=$("sushibar_productionslot"+handled.slot+"_click");
                if(div){
                    listeningEvent="gameSushibarHarvest";
                    action=function(){
                        unsafeData.readyZone[handled.zoneNrS][2] = false;
                        click(div);
                    };
                }else{
                    autoFarmSushiBar(runId,7);
                }
            } else {
                //Zeiten sind nicht synchron
                autoFarmSushiBar(runId,8);
            }
        break;}
        case 3:{ // open slot ans start production
            GM_logInfo("autoFarmSushiBar","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Open_Slot"+handled.slot + " and start");
            if(unsafeData.readyZone[handled.zoneNrS]){
                if(unsafeData.readyZone[handled.zoneNrS][2]&&(unsafeData.readyZone[handled.zoneNrS][1]=="e")){
                    if(zoneList[handled.zoneNrL][0][0]==PRODSTOP){
                        autoFarmSushiBar(runId,7);
                    }else{
                        var req=unsafeData.BUILDING_INPUT[getZoneType(handled.zoneNrS)][zoneList[handled.zoneNrL][0][0]][0];
                        var stockNr = (handled.farmNr<=4)?0:(handled.farmNr==5)?5:(handled.farmNr==6)?6:(handled.farmNr==7)?7:(handled.farmNr==8)?8:(handled.farmNr==9)?9:10;
                        var startProduction = true;
                        for(var i=0;i<req.length;i++){
                            if(unsafeData.prodStock[stockNr][req[i][0]]<req[i][1]){
                                startProduction = false;
                            }
                        }
                        if (startProduction) {
                            var div=$("sushibar_productionslot"+handled.slot+"_click");
                            listeningEvent="gameSushibarStartProduction";
                            action=function(){
                                unsafeWindow.sushibar.productionSlot = handled.slot;
                                unsafeWindow.sushibar.startProduction(zoneList[handled.zoneNrL][0][0]);
                                setNextQueueItem(handled.zoneNrS);
                            };
                        } else {
                            // not enough products
                            GM_logInfo("autoFarmFactory","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Step 2 -> not enough products in stock");
                            zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                            updateQueueBox(handled.zoneNrS);
                            autoFarmSushiBar(runId,7); // exit
                        }
                    }
                } else {
                    // wait for response
                    window.setTimeout(autoFarmSushiBar,settings.getPause(),runId,step);
                }
            }else{
                autoFarmSushiBar(runId,7);
            }
        break;}

        case 4:{ // xyz
            autoFarmSushiBar(runId,7);
            GM_logInfo("autoFarmSushiBar","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"xyz");

        break;}

        case 5: { //xyz
            GM_logInfo("autoFarmSushiBar","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"xyz");
        break;}

        case 6: { //xyz
            GM_logInfo("autoFarmSushiBar","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"xyz");
        break;}

        case 7:{ // start other slot or exit
            GM_logInfo("autoFarmSushiBar","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"start other slot or exit");
            var zoneNrS,zoneNrL,help,next=false;
            for(var slot=1;slot<=4;slot++){
                zoneNrS=handled.zoneNrF+"."+slot;
                if((help=unsafeData.readyZone[zoneNrS])&&help[2]){
                  zoneNrL=getZoneListId(zoneNrS);
                  if(((help[1]=="r")&&((zoneList[zoneNrL][0][0]!=PRODSTOP)||!settings.get("account","disableCropFields")))||((help[1]=="e")&&(zoneList[zoneNrL][0][0]!=PRODSTOP)))  {
                    next=true;
                    handled.set(zoneNrS);
                    break;
                  }
                }
            }
            if(next){
                autoFarmSushiBar(runId,1);
            }else{
                autoZoneFinish(runId,$("sushibar").querySelector(".mini_close"));
            }
        break;}
        case 8: {
            GM_logInfo("autoFarmSushiBar","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Seite neu laden");
            window.setTimeout(function(){ top.location.href=top.location.href },settings.getPause());
        }
    }
    if(listeningEvent){
        document.addEventListener(listeningEvent,function(listeningEvent,runId,step){
          return function(){
            document.removeEventListener(listeningEvent,arguments.callee,false);
            window.setTimeout(autoFarmSushiBar,settings.getPause(),runId,step+1);
          };
        }(listeningEvent,runId,step),false);
    }
    if(action){ action(); }
      listeningEvent=null;action=null;
    }
  }catch(err){ GM_logError("autoFarmSushiBar","runId="+runId+" step="+step,"",err); }
}

function syncDelay(milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
}

function autoFarmSushiBarFarmis(runId,step){
  try{
    if(!step){ step=1; }
        if(bot.checkRun("autoFarmSushiBarFarmis",runId)) {
        bot.setAction("autoFarmSushiBarFarmis ("+step+")");
        var action=null,listeningEvent=null;
        switch(step){
        case 1:{ // init
            GM_logInfo("autoFarmSushiBarFarmis","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"SushiBar_Init");

            if (unsafeWindow.sushibar.checkFarmiStatus(handled.slot-4) == 1) {
                //ready
                listeningEvent="gameSushibarFinishFarmi";
                action=function(){
                    unsafeWindow.sushibar.clickFarmi(handled.slot-4);
                };
                var nowServer=unsafeWindow.Zeit.Server;
                var test = nowServer + 45 - unsafeWindow.Zeit.Verschiebung;
                unsafeData.zones.setEndtime(handled.zoneNrS,test);

            } else  {
                autoFarmSushiBarFarmis(runId,3);
            }
        break;}
        case 2:{ // Close globalBox
            GM_logInfo("autoFarmSushiBarFarmis","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Open_Slot"+handled.slot + " Close GlobalBox ");
            if((help=$("globalbox")) && (help.style.display == "block")) {
                unsafeWindow.hideDiv('globalbox');
                unsafeWindow.hideDiv('globaltransp');
            }
            autoFarmSushiBarFarmis(runId,7);

        break;}
        case 3:{ // open slot ans start production
            GM_logInfo("autoFarmSushiBarFarmis","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Farmi "+handled.slot);

            var data = unsafeWindow.sushibar.data.farmis[handled.slot-4];
            var pid = 0;

            for (var n in data.data.need) {
                var a = data.data.need[n];
                if (!data.data.have || !data.data.have[n] || data.data.have[n] < a) {
                    for (var p in unsafeWindow.sushibar.data.config.products) {
                        if ( unsafeWindow.sushibar.data.config.products[p].category == n) {
                            if (unsafeData.prodStock[8][p]>=1) {
                                pid = p;
                                break;
                            }
                        }
                    }
                }
            }

            //var pos;
            data = unsafeWindow.sushibar.data.data.train;

            if (pid > 0) {
                for (var t in data) {
                    if (data[t].buy_time && !data[t].pid){
                        //alert(data[t].pos);
                        //data[t].pos = 5;

                        listeningEvent="gameSushibarSetTrainSlot";
                        action=function(){
                            unsafeWindow.sushibar.setTrainSlot(t, pid);
                        };
                        var nowServer=unsafeWindow.Zeit.Server;
                        var test = nowServer + 45 - unsafeWindow.Zeit.Verschiebung;
                        unsafeData.zones.setEndtime(handled.zoneNrS,test);
                        break;
                    }
                }
            }
        break;}
        case 4:{ // xyz

            //syncDelay(5000);
            //window.setTimeout(function(){
            autoFarmSushiBarFarmis(runId,7);
            //},10000);
            GM_logInfo("autoFarmSushiBarFarmis","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Waiting");
        break;}

        case 5: { //xyz
            GM_logInfo("autoFarmSushiBarFarmis","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"xyz");
        break;}

        case 6: { //xyz
            GM_logInfo("autoFarmSushiBarFarmis","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"xyz");
        break;}

        case 7:{ // start other slot or exit
            GM_logInfo("autoFarmSushiBarFarmis","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Start other slot or exit");
            var zoneNrS,zoneNrL,help,next=false;
            for(var slot=1;slot<=10;slot++){
                if ((slot+4)==handled.slot) {continue};
                zoneNrS=handled.zoneNrF+"."+(slot+4);
                if((help=unsafeData.readyZone[zoneNrS])&&help[2]){
                  zoneNrL=getZoneListId(zoneNrS);
                  if(((help[1]=="r")&&((zoneList[zoneNrL][0][0]!=PRODSTOP)||!settings.get("account","disableCropFields")))||((help[1]=="e")&&(zoneList[zoneNrL][0][0]!=PRODSTOP)))  {
                    next=true;
                    handled.set(zoneNrS);
                    break;
                  }
                }
            }
            if(next){
                autoFarmSushiBarFarmis(runId,1);
            }else{
                GM_logInfo("autoFarmSushiBarFarmis","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"exit");
                autoZoneFinish(runId,$("sushibar").querySelector(".mini_close"));
            }
        break;}
        case 8: {
            GM_logInfo("autoFarmSushiBarFarmis","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"Seite neu laden");
            window.setTimeout(function(){ top.location.href=top.location.href },settings.getPause());
        }
    }
    if(listeningEvent){
        document.addEventListener(listeningEvent,function(listeningEvent,runId,step){
          return function(){
            document.removeEventListener(listeningEvent,arguments.callee,false);
            window.setTimeout(autoFarmSushiBarFarmis,settings.getPause(),runId,step+1);
          };
        }(listeningEvent,runId,step),false);
    }
    if(action){ action(); }
      listeningEvent=null;action=null;
    }
  }catch(err){ GM_logError("autoFarmSushiBarFarmis","runId="+runId+" step="+step,"",err); }
}



function autoWindmill(runId,step){
try{
    if(!step){ step=1; }
    if(settings.get("account","botUseWindmill")&&bot.checkRun("autoWindmill",runId)){
        bot.setAction("autoWindmill ("+step+")");
        var action=null,listeningEvent=null;
        switch(step){
        case 1: // init and open city
            //handled.set("windmill.1");
            for(var slot=1;slot<=2;slot++){
                var zoneNrS="windmill."+slot;
                if((help=unsafeData.readyZone[zoneNrS])&&help[2]){
                    handled.set(zoneNrS);
                    break;
                }
            }
            if(handled.zoneNrL){
                reSortWindmill(false); // checks if recipe is possible
                if(zoneList[handled.zoneNrL].length==0){ zoneList[handled.zoneNrL]=DEFAULT_ZONELIST_MILL_ARRAY; }
                if(unsafeData.readyZone[handled.zoneNrS]&&(unsafeData.readyZone[handled.zoneNrS][1]=="e")&&(zoneList[handled.zoneNrL][0][0]==PRODSTOP)){
                    // Windmill is empty and no recipe to do
                    autoWindmill(runId,8); // exit
                }else{
                    listeningEvent="gameCity2";
                    action=function(){ click($top("speedlink_city2")); };
                }
            } else {
                zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                updateQueueBox(handled.zoneNrS);
                autoWindmill(runId,8); // exit
            }
        break;
        case 2: // open windmill
            // test if possible $("windmillproductiontime").style.display=="block"
            listeningEvent="gameOpenWindmill";
            action=function(){ click($("cityzone_2_1")); };
        break;
        case 3: // get powerup
            if(unsafeData.zones.getEndtime(handled.zoneNrS)<unsafeWindow.Zeit.Server){
                listeningEvent="gameWindmillCropped";
                action=function(){ click($("windmill_slot"+handled.slot)); };
            }else{
                autoWindmill(runId,step+1);
            }
        break;
        case 4: // open slot
            listeningEvent="gameWindmillDialogStart";
            action=function(){ click($("windmill_slot"+handled.slot)); };
        break;
        case 5: // click new recipe
            if(zoneList[handled.zoneNrL][0][0]!=PRODSTOP){
                var newdiv=$("windmill_formula_select_inner").querySelector(".fm"+zoneList[handled.zoneNrL][0][0]);
                if(newdiv){
                    listeningEvent="gameWindmillDialogCommit";
                    action=function(){
                        click(newdiv.parentNode);
                        newdiv=null;
                    };
                } else {
                    // TODO: why is the recipe not available?
                    autoWindmill(runId,8); // exit
                }
            } else {
                autoWindmill(runId,8); // exit
            }
        break;
        case 6: // confirm new recipe
            if($("windmill_paper").style.display=="block"){
                listeningEvent="gameWindmillStarted";
                action=function(){
                    unsafeData.readyZone[handled.zoneNrS][2]=false;
                    click($("windmill_paper_commit"));
                };
            } else {
                window.setTimeout(autoWindmill,settings.getPause(),runId,step);
            }
        break;
        case 7: // wait for response
            if(unsafeData.readyZone[handled.zoneNrS]){
                window.setTimeout(autoWindmill,settings.getPause(),runId,step);
            } else {
                botArbiter.clear("windmill");
                //if($("windmillproductiontime").style.display=="block"){
                // windmill started -> pop from queue
                if(isNaN(zoneList[handled.zoneNrL][0][1])){ zoneList[handled.zoneNrL][0][1]=1; }
                if(autoMillStorage[zoneList[handled.zoneNrL][0][0]]&&autoMillStorage[zoneList[handled.zoneNrL][0][0]][2]>0){
                    zoneList[handled.zoneNrL][0][1]--;
                    autoMillStorage[zoneList[handled.zoneNrL][0][0]][0]--;
                }
                if(zoneList[handled.zoneNrL][0][1]<=0 && zoneList[handled.zoneNrL].length<=1){ zoneList[handled.zoneNrL]=DEFAULT_ZONELIST_MILL_ARRAY.clone(); }
                // } else {
                //  // windmill not started -> stop queue
                //  zoneList[zoneNrL].unshift(DEFAULT_ZONELIST_MILL.clone()); //insert stop item at begin
                // }
                GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList",implode(zoneList,"autoWindmill/zoneList"),"autoWindmill/zoneList");
                reCalculateWindmill();
                reSortWindmill(zoneSettings[handled.zoneNrL]["shuffle"]);
                reFillQueueBox(handled.zoneNrF, handled.zoneNrL, 0);
                autoWindmill(runId,step+1);
            }
        break;
        case 8: // close windmill
            if($("windmillinner").style.display=="block"){
                click($("windmillinner").querySelector(".big_close"));
                window.setTimeout(autoWindmill,settings.getPause(),runId,step+1);
            } else {
                autoWindmill(runId,step+1);
            }
        case 9: //
            bot.end();
            botArbiter.check(); // -> calls activatePowerUp if needed
        break;
        }
        if(listeningEvent){
            document.addEventListener(listeningEvent,function(listeningEvent,runId,step){
                return function(){
                    document.removeEventListener(listeningEvent,arguments.callee,false);
                    window.setTimeout(autoWindmill,settings.getPause(),runId,step+1);
                };
            }(listeningEvent,runId,step),false);
        }
        if(action){ action(); }
        listeningEvent=null;action=null;
    }
}catch(err){ GM_logError("autoWindmill","runId="+runId+" step="+step,"",err); }
}
function checkPowerUp(mode){
try{
    var foundPowerUp=false;
    if(settings.get("account","powerUpActivate")){
        for(var v in unsafeWindow.poweruprack){ // find powerup
            if(!unsafeWindow.poweruprack.hasOwnProperty(v)){ continue; }
            if(unsafeWindow.poweruprack[v][5] && unsafeWindow.poweruprack[v][5][0] && unsafeWindow.poweruprack[v][5][0][1]){
                foundPowerUp=v;
                break;
            }
        }
    }
    return mode==0?(!!foundPowerUp):foundPowerUp;
}catch(err){
    GM_logError("checkPowerUp","mode="+mode,"",err);
    return null;
}
}
function autoActivatePowerUp(runId,step,foundPowerUp){
try{
    if(bot.checkRun("autoActivatePowerUp",runId)){
        if(!settings.get("account","powerUpActivate")){
            step=5;
        }else if(!step){
            step=1;
        }
        bot.setAction("autoActivatePowerUp ("+step+")");
        var help,action=null,listeningEvent=null;
        switch(step){
        case 1:{
            foundPowerUp=checkPowerUp();
            if(foundPowerUp==null){ // no power-up
                GM_logWarning("autoActivatePowerUp","runId="+runId+" step="+step,"","Power-up: Exiting, no powerup found");
                if($("powerupselector").style.display=="block"){ click($("powerupbar")); }
                autoActivatePowerUp(runId,5,foundPowerUp) // exit
            }else if(unsafeWindow.farm!=1){ //switch to farm
                listeningEvent="gameFarmOpened";
                action=function(){
                    GM_logInfo("autoActivatePowerUp","runId="+runId+" step="+step,"","Power-up: Goto Farm");
                    click($("speedlink_farm1"));
                };
            }else if(unsafeWindow.poweruprack[foundPowerUp]){
                autoActivatePowerUp(runId,step+1,foundPowerUp);
            }else{
                GM_logWarning("autoActivatePowerUp","runId="+runId+" step="+step,"","Power-up: Exiting, unknown combination");
                if($("powerupselector").style.display=="block"){ click($("powerupbar")); }
                autoActivatePowerUp(runId,5,foundPowerUp) // exit
            }
        break;}
        case 2:{ // open power-up container
            if($("powerupselector").style.display=="block"){
                autoActivatePowerUp(runId,step+1,foundPowerUp);
            }else{
                listeningEvent="gamePoweruprackUpdated";
                action=function(){
                    GM_logInfo("autoActivatePowerUp","runId="+runId+" step="+step,"","Power-up: Open container");
                    click($("powerupbar"));
                };
            }
        break;}
        case 3:{ // click power-up / scroll to power-up
            var help;
            if(help=$("powerup_rackitem"+unsafeWindow.poweruprack[foundPowerUp][0]+"_tt")){
                listeningEvent="gameOpenGlobalBox";
                action=function(){
                    GM_logInfo("autoActivatePowerUp","runId="+runId+" step="+step,"","Power-up: Click power-up");
                    click(help.parentNode);
                };
            }else if(help=$("powerselectorcontent")){
                help=parseInt(/activatePowerupCommit\((\d+)/.exec(help.firstElementChild.getAttribute("onclick"))[1],10);
                listeningEvent="gamePoweruprackUpdated";
                if(help<foundPowerUp){
                    action=function(){
                        GM_logInfo("autoActivatePowerUp","runId="+runId+" step="+step,"","Power-up: Scroll up");
                        click($("powerselectornaviup"));
                    };
                }else{
                    action=function(){
                        GM_logInfo("autoActivatePowerUp","runId="+runId+" step="+step,"","Power-up: Scroll down");
                        click($("powerselectordown"));
                    };
                }
            }else{
                autoActivatePowerUp(runId,5,foundPowerUp) // exit
            }
        break;}
        case 4:{ // confirm power-up
            listeningEvent="gamePoweruprackUpdated";
            action=function(){
                GM_logInfo("autoActivatePowerUp","runId="+runId+" step="+step,"","Power-up: Confirm power-up");
                click($("globalbox_button1"));
            };
        break;}
        case 5:{ // close container
            // botArbiter.add("activatePowerUp");
            if($("powerupselector").style.display=="block"){
                GM_logInfo("autoActivatePowerUp","runId="+runId+" step="+step,"","Power-up: Close container");
                autoZoneFinish(runId,$("powerselectorclose"));
            }else{
                autoZoneFinish(runId);
            }
        break;}
        }
        if(listeningEvent){
            document.addEventListener(listeningEvent,function(listeningEvent,runId,step,foundPowerUp){
                return function(){
                    document.removeEventListener(listeningEvent,arguments.callee,false);
                    window.setTimeout(autoActivatePowerUp,settings.getPause(),runId,step+1,foundPowerUp);
                };
            }(listeningEvent,runId,step,foundPowerUp),false);
        }
        if(action){ action(); }
        help=null;listeningEvent=null;action=null;
    }
}catch(err){ GM_logError("autoActivatePowerUp","runId="+runId+" step="+step,"",err); }
}
function autoForestry(runId){
try{
    if(!settings.get("account","botUseForestry")){
        GM_logInfo("autoForestry","runId="+runId,"","FORESTRY BOT OFF");
    }else if(bot.checkRun("autoForestry",runId)){
        bot.setAction("autoForestry");
        var zoneNrS=getReadyZone("forestry");
        if(zoneNrS==null){
            GM_logInfo("autoForestry","runId="+runId,"readyZone="+implode(unsafeData.readyZone,"autoForestry/readyZone"),"No ready zone");
            autoZoneFinish(runId);
        }else{
            handled.set(zoneNrS);
            try{ unsafeWindow.jsTimeStamp=unsafeWindow.Zeit.Client - unsafeWindow.Zeit.Verschiebung; }catch(err){}
            if(unsafeData.readyZone[handled.zoneNrS][2]){
                switch(handled.zoneBuildingTyp){
                    case "forest": autoForestryForest(runId,1,1,false,true); break;
                    case "sawmill":
                    case "carpentry": autoForestryBuilding(runId,1); break;
                }
            }else{
                GM_logInfo("autoForestry","runId="+runId,"handled="+implode(handled,"autoForestry/handled")+" readyZone[handled.zoneNrS]="+implode(unsafeData.readyZone[handled.zoneNrS],"autoForestry/readyZone"),"Data not ready");
                autoZoneFinish(runId); // TODO else
            }
        }
    }
    GM_logInfo("autoForestry","runId="+runId,"handled.zoneNr="+handled.zoneNr,"End",1);
}catch(err){
    GM_logError("autoForestry","runId="+runId,"",err);
    autoZoneFinish(runId);
} //busy=false;
}
function autoForestryForest(runId,step,field,didPlant,isBot){
try{
    // GM_log("autoForestryForest runId="+runId+" step="+step+" field="+field+" didPlant="+didPlant+" isBot="+isBot);
    if(settings.get("account","botUseForestry")&&bot.checkRun("autoForestryForest",runId,!isBot)){
        bot.setAction("autoForestryForest ("+step+")");
        var help,action=null,listeningEvent=null;
        switch(step){
        case 1:{ // init
            if(zoneList[handled.zoneNrL].length==0){ zoneList[handled.zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY.clone(); }
            if(unsafeData.prodTyp[1][zoneList[handled.zoneNrL][0][0]]!="f1"){ zoneList[handled.zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY.clone(); }
            // open forestry
            if((help=unsafeData.readyZone[handled.zoneNrL])&&help[2]&&(!zoneWaiting[handled.zoneNrL])&&((help[1]=="w")||((help[1]=="r")&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP||!settings.get("account","disableCropFields")))||((help[1]=="e")&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP)))){
                listeningEvent="gameOpenForestry";
                action=function(){ click($("speedlink_forestry")); };
            }else{
                autoForestryForest(runId,9,field,didPlant,isBot); // -> exit
            }
        break;}
        case 2:{ // set zoneWaiting
            var time=NEVER;
            var NowServer=unsafeWindow.Zeit.Server;
            for(var v=0;v<unsafeWindow.forestry_area_time.length;v++){ //use area_time because this holds only planted fields or if just emptied==0
                if(unsafeWindow.forestry_area_time[v]>0){
                    time=Math.min(time,unsafeWindow.forestry_area_time[v]);
                }
            }
            time=Math.max(time,0);
            if(time<=settings.get("account","seedWaitForCrop")){
                zoneWaiting[handled.zoneNrF]=now+time;
                window.setTimeout(function(){
                    for(var fz in zoneWaiting){
                        if(!zoneWaiting.hasOwnProperty(fz)){continue;}
                        if(zoneWaiting[fz]<=now){ delete zoneWaiting[fz]; }
                    }
                    checkReadyZone();
                },(1000*time)+settings.getPause());
                GM_logInfo("autoForestryForest","runId="+runId+" step="+step+" field="+field+" didPlant="+didPlant+" isBot="+isBot,"","Waiting for crop in "+getTimeStr(time)); // TODO text
                autoForestryForest(runId,9,field,didPlant,isBot); // -> exit
            }else{
                autoForestryForest(runId,step+1,field,didPlant,isBot);
            }
        break;}
        case 3:{ // cropping
            if((!isBot)||(zoneList[handled.zoneNrL][0][0]!=PRODSTOP)||(!settings.get("account","disableCropFields"))){
                GM_logInfo("autoForestryForest","runId="+runId+" step="+step+" field="+field+" didPlant="+didPlant+" isBot="+isBot,"","Forest automat<br>Cropping"); //TODO text
                if(!unsafeData.zones.getProduction(handled.zoneNrS)[3]){
                    // data not ready
                    window.setTimeout(autoForestryForest,settings.getPause(),runId,step,field,didPlant,isBot);
                }else if(unsafeWindow.premium==1){
                    if(unsafeData.zones.getEndtime(handled.zoneNrS)<unsafeWindow.Zeit.Server){
                        listeningEvent="gameOpenForestry";
                        action=function(){ click($top("forestry_forest_button2")); };
                    }else{
                        autoForestryForest(runId,step+1,field,didPlant,isBot);
                    }
                }else if(field<=25){
                    for(var i in unsafeWindow.forestry_area){ //if not in forestry_area the field is empty
                        if(!unsafeWindow.forestry_area.hasOwnProperty(i)){continue;}
                        if(parseInt(unsafeWindow.forestry_area[i]["position"],10)==field){
                            break;
                        }
                    }
                    if((unsafeWindow.forestry_area[i]["category"]==1)&&(unsafeWindow.forestry_area[i]["block"]=="0")&&(unsafeWindow.forestry_area[i]["ready"]==1)){
                        if (parseInt(unsafeWindow.forestry_area[i]["productid"],10)<=5) { // TODO: use PRODUCT_MAP instead of hard-coding the offset
                            var prodoffset=20;
                        } else {
                            var prodoffset=19;
                        }
                        var prod=parseInt(prodoffset,10)+parseInt(unsafeWindow.forestry_area[i]["productid"],10);
                        if(unsafeData.prodStock[1][prod]+unsafeData.prodYield[1][prod]<=unsafeData.prodStockMax[1][prod]){
                            unsafeData.prodStock[1][prod]+=unsafeData.prodYield[1][prod];
                            unsafeData.zones.flagProduction(handled.zoneNrS);
                            click($("forestry_pos"+field));
                            window.setTimeout(autoForestryForest,settings.getPause(true),runId,step,field+1,didPlant,isBot);
                        }else{
                            GM_logInfo("autoForestryForest","runId="+runId+" step="+step+" field="+field+" didPlant="+didPlant+" isBot="+isBot,"","Crop of tree "+field+" not possible due to stock capacity.");
                            autoForestryForest(runId,step,field+1,didPlant,isBot);
                        }
                    }else{
                        autoForestryForest(runId,step,field+1,didPlant,isBot);
                    }
                }else if(isBot){
                    autoForestryForest(runId,step+1,1,didPlant,isBot);
                }else{
                    autoForestryForest(runId,9,1,didPlant,isBot); // -> exit
                }
            }else{
                autoForestryForest(runId,step+1,1,didPlant,isBot);
            }
        break;}
        case 4:{ // select tree
            if(zoneList[handled.zoneNrL][0][0]==PRODSTOP){
                autoForestryForest(runId,8,1,didPlant,isBot); // -> water
            }else if((unsafeWindow.premium!=1)&&(zoneList[handled.zoneNrL][0][0]!=unsafeWindow.forestry_plant)){
                GM_logInfo("autoForestryForest","runId="+runId+" step="+step+" field="+field+" didPlant="+didPlant+" isBot="+isBot,"","Forest automat<br>Select tree"); //TODO text
                if(help=$("f_stock_item"+zoneList[handled.zoneNrL][0][0])){
                    click(help);
                    window.setTimeout(autoForestryForest,settings.getPause(true),runId,step,field,didPlant,isBot);
                }else{ // tree not available
                    GM_logInfo("autoForestryForest","runId="+runId+" step="+step+" field="+field+" didPlant="+didPlant+" isBot="+isBot,"","Tree not available"); //TODO text
                    zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone()); //add PRODSTOP to begin of list
                    updateQueueBox(handled.zoneNrS);
                    autoForestryForest(runId,8,1,didPlant,isBot); // -> water
                }
            }else{
                autoForestryForest(runId,step+1,1,didPlant,isBot);
            }

        break;}
        case 5:{ // planting
            if(field==1){
                GM_logInfo("autoForestryForest","runId="+runId+" step="+step+" field="+field+" didPlant="+didPlant+" isBot="+isBot,"","Forest automat<br>"+getText("automat_planting")); //TODO text
            }
            help=false;
            for(var i in unsafeWindow.forestry_area){ //if not in forestry_area the field is empty
                if(!unsafeWindow.forestry_area.hasOwnProperty(i)){continue;}
                if(parseInt(unsafeWindow.forestry_area[i]["position"],10)==field){
                    help=true;
                    break;
                }
            }
            if(help){
                autoForestryForest(runId,step,field+1,didPlant,isBot);
            }else if(field>25){
                autoForestryForest(runId,7,1,didPlant,isBot); // finish planting
            }else if(unsafeWindow.premium==1){
                click($("forestry_forest_button6"));
                window.setTimeout(autoForestryForest,settings.getPause(true),runId,step+1,field,didPlant,isBot);
            }else{
                unsafeData.zones.flagProduction(handled.zoneNrS);
                GM_logInfo("autoForestryForest","runId="+runId+" step="+step+" field="+field+" didPlant="+didPlant+" isBot="+isBot,"","click field:"+field); //TODO text
                click($("forestry_pos"+field));
                window.setTimeout(autoForestryForest,settings.getPause(true),runId,step,field+1,true,isBot);
            }
        break;}
        case 6:{ // premium planting: select tree and commit
            var help=$("forestry_autoplant_pid");
            if(help.value==zoneList[handled.zoneNrL][0][0]){
                unsafeData.zones.flagProduction(handled.zoneNrS);
                click($("globalbox_button1"));
                window.setTimeout(autoForestryForest,settings.getPause(true),runId,step+1,field,true,isBot);
            }else{
                help.value=zoneList[handled.zoneNrL][0][0];
                window.setTimeout(autoForestryForest,settings.getPause(),runId,step,field,didPlant,isBot);
            }
        break;}
        case 7:{ // finish planting
            if(unsafeData.zones.getProduction(handled.zoneNrS)[3]){
                // if(autoZoneCrop()){ ... go back }
                if(isBot&&didPlant){ setNextQueueItem(handled.zoneNrS); }
                autoForestryForest(runId,step+1,1,didPlant,isBot);
            }else{
                window.setTimeout(autoForestryForest,settings.getPause(),runId,step,field,didPlant,isBot);
            }
        break;}
        case 8:{ // watering
            if(unsafeData.zones.getBonus(handled.zoneNrF)>0){
                GM_logInfo("autoForestryForest","runId="+runId+" step="+step+" field="+field+" didPlant="+didPlant+" isBot="+isBot,"","Forest automat<br>"+getText("automat_watering")); //TODO text
                if(!unsafeData.zones.getProduction(handled.zoneNrS)[3]){
                    window.setTimeout(autoForestryForest,settings.getPause(),runId,step,field,didPlant,isBot);
                }else if(unsafeData.zones.getWatertime(handled.zoneNrS)<unsafeWindow.Zeit.Server){
                    unsafeData.zones.flagProduction(handled.zoneNrS);
                    listeningEvent="gameOpenForestry";
                    action=function(){ click($top("forestry_forest_button1")); };
                }else{
                    autoForestryForest(runId,step+1,field,didPlant,isBot);
                }
            }else{
                autoForestryForest(runId,step+1,field,didPlant,isBot);
            }
        break;}
        case 9:{ // exit
            autoZoneFinish(runId);
        break;}
        }
        if(listeningEvent){
            document.addEventListener(listeningEvent,function(listeningEvent,runId,step,field,didPlant,isBot){
                return function(){
                    document.removeEventListener(listeningEvent,arguments.callee,false);
                    window.setTimeout(autoForestryForest,settings.getPause(),runId,step+1,field,didPlant,isBot);
                };
            }(listeningEvent,runId,step,field,didPlant,isBot),false);
        }
        if(action){ action(); }
        help=null;listeningEvent=null;action=null;
    }
}catch(err){ GM_logError("autoForestryForest","runId="+runId+" step="+step+" field="+field+" didPlant="+didPlant+" isBot="+isBot,"",err); }
}
function autoForestryBuilding(runId,step){
try{
    // GM_log("autoForestryBuilding runId="+runId+" step="+step+" handled.zoneNrS="+handled.zoneNrS);
    if(settings.get("account","botUseForestry")&&bot.checkRun("autoForestryBuilding",runId)){
        bot.setAction("autoForestryBuilding ("+step+")");
        var help,action=null,listeningEvent=null;
        switch(step){
        case 1:{ // init and open forestry
            if(zoneList[handled.zoneNrL].length==0){ zoneList[handled.zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY.clone(); }
            if(handled.zoneNrF=="sawmill"){
                if(unsafeData.prodTyp[1][zoneList[handled.zoneNrL][0][0]]!="f3"){ zoneList[handled.zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY.clone(); }
            }else{
                if((unsafeData.prodTyp[1][zoneList[handled.zoneNrL][0][0]]!="f4")&&(unsafeData.prodTyp[1][zoneList[handled.zoneNrL][0][0]]!="f5")){ zoneList[handled.zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY.clone(); }
            }
            if((help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&(((help[1]=="r")&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP||!settings.get("account","disableCropFields")))||((help[1]=="e")&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP)))){
                if((help=$("forestry_container"))&&(help.style.display=="block")){
                    autoForestryBuilding(runId,step+1);
                }else{
                    action=function(){ click($("speedlink_forestry")); };
                    listeningEvent="gameOpenForestry";
                }
            }else{
                autoForestryBuilding(runId,8); // -> exit
            }
        break;}
        case 2:{ // check required products and open building
            help=true;
            if(zoneList[handled.zoneNrL][0][0]!=PRODSTOP){
                help=unsafeData.prodRequire[1][zoneList[handled.zoneNrL][0][0]];
                if(typeof help=="object"){
                    for(var i=0;i<help.length;i++){
                        if(unsafeData.prodStock[help[i][0]][help[i][1]]<help[i][2]){
                            zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                            updateQueueBox(handled.zoneNrS);
                            break;
                        }
                    }
                }
            }
            if((help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&(((help[1]=="r")&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP||!settings.get("account","disableCropFields")))||((help[1]=="e")&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP)))){
                if((help=$("forestry_building_inner"))&&(help.style.display=="block")&&(help.className==(handled.zoneNrF=="sawmill"?"forestry_building_inner_back1":"forestry_building_inner_back2"))){
                    autoForestryBuilding(runId,step+1);
                }else{
                    GM_logInfo("autoForestryBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Opening"); //TODO text
                    action=function(){ click($("forestry_building_click"+(handled.zoneNrF=="sawmill"?"1":"2"))); };
                    listeningEvent="game"+handled.zoneNrF.capitalize()+"Opened";
                }
            }else{
                autoForestryBuilding(runId,8); // -> exit
            }
        break;}
        case 3:{ // cropping
            if((help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&(help[1]=="r")&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP||!settings.get("account","disableCropFields"))){
                GM_logInfo("autoForestryBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Cropping"); //TODO text
                if(help=$("forestry_building_inner_slot_info"+handled.slot)){
                    action=function(){ click(help); };
                    listeningEvent="game"+handled.zoneNrF.capitalize()+"Cropped";
                }else{
                    autoForestryBuilding(runId,step+2);
                }
            }else{
                autoForestryBuilding(runId,step+2);
            }
        break;}
        case 4:{ // confirm
            autoForestryBuilding(runId,step+1);
        break;}
        case 5:{ // open slot
            if(zoneList[handled.zoneNrL][0][0]!=PRODSTOP){
                GM_logInfo("autoForestryBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Opening slot"); //TODO text
                action=function(){ click($("forestry_building_inner_slot_info"+handled.slot)); };
                listeningEvent="game"+handled.zoneNrF.capitalize()+"SlotOpened";
            }else{
                autoForestryBuilding(runId,8); //->exit
            }
        break;}
        case 6:{ // start production
            if((help=$("forestry_selectproduction_scrollcontent"))&&(help=help.querySelector(".f_symbol"+zoneList[handled.zoneNrL][0][0]))&&(help=help.parentNode.parentNode)&&(help.getAttribute("onclick")!="")){
                GM_logInfo("autoForestryBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Start production"); //TODO text
                action=function(){ click(help); };
                listeningEvent="gameOpenGlobalBox";
            }else{
                zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                updateQueueBox(handled.zoneNrS);
                autoForestryBuilding(runId,8); //->exit
            }
        break;}
        case 7:{ // confirm
            GM_logInfo("autoForestryBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Confirm start production"); //TODO text
            action=function(){
                click($("globalbox_button1"));
                setNextQueueItem(handled.zoneNrS);
            };
            listeningEvent="game"+handled.zoneNrF.capitalize()+"Started";
        break;}
        case 8:{ // other slots
            var zoneNrS,zoneNrL,help,next=false;
            for(var slot=1;slot<=3;slot++){
                zoneNrS=handled.zoneNrF+"."+slot;
                if((help=unsafeData.readyZone[zoneNrS])&&help[2]){
                    zoneNrL=getZoneListId(zoneNrS);
                    if(((help[1]=="r")&&((zoneList[zoneNrL][0][0]!=PRODSTOP)||!settings.get("account","disableCropFields")))||((help[1]=="e")&&(zoneList[zoneNrL][0][0]!=PRODSTOP))){
                        next=true;
                        handled.set(zoneNrS);
                        break;
                    }
                }
            }
            if(next){
                autoForestryBuilding(runId,2);
            }else{
                autoZoneFinish(runId,$("forestry_building_inner").querySelector(".big_close")); // exit
            }
        break;}
        }
        if(listeningEvent){
            document.addEventListener(listeningEvent,function(listeningEvent,runId,step){
                return function(){
                    document.removeEventListener(listeningEvent,arguments.callee,false);
                    window.setTimeout(autoForestryBuilding,settings.getPause(),runId,step+1);
                };
            }(listeningEvent,runId,step),false);
        }
        if(action){ action(); }
        help=null;listeningEvent=null;action=null;
    }
}catch(err){ GM_logError("autoForestryBuilding","runId="+runId+" step="+step,"",err); }
}

//22102016
function autobuyPetsParts(runId, step) {
try{
    if (bot.checkRun("autobuyPetsParts", runId)) {
        var help, action=null, listeningEvent=null;
        if (!step) { step=1; }
        bot.setAction("autobuyPetsParts (" + step + ")");
        switch (step) {
            case 1: { // go to farm 1
            if (unsafeWindow.farm == 1) {
                autobuyPetsParts(runId, step + 1);
            } else {
                listeningEvent="gameFarmOpened";
                action=function(){
                    GM_logInfo("autobuyPetsParts","runId="+runId+" step="+step,"","Goto Farm 1");
                    click($("speedlink_farm1"));
                };
            }
            break; }

        case 2: { // open pets parts
            var div=$("pets_parts");
            if(div&&div.querySelector(".buy")) {
                autobuyPetsParts(runId, step + 1);
            } else {
                action=function(){ click($("pets_parts_link")); }
                listeningEvent="gamegoToOpenPetsParts";
            }
            break; }
        case 3: { // open buy pets parts
            var div=$("pets_parts");
            if(div&&(div=div.querySelector(".buy"))) {
                action=function(){ click(div); }
                listeningEvent="gamegoToBuyPetsParts";
            } else {
                autobuyPetsParts(runId, 6);  //exit
            }
            break; }
        case 4: { // buy pets parts day offer
            var div=$("pets_parts_buy");
            if(div&&(div=div.querySelector(".pets_package1"))&&(div.querySelector(".buy").innerHTML.match("5000"))) {
                action=function(){ click(div.querySelector(".buy")); }
                listeningEvent="gamepartsBuyCommit";

            } else {
                autobuyPetsParts(runId, 6);  //exit
            }
            break; }
        case 5:{
            //click ok button
            var div=$("pets_parts_buy_packages");
            if(div&&(div.innerHTML.match("5000"))) {
                action=function(){ click($("globalbox_button1")); }
                listeningEvent="gamepartsBuyFire";
            } else {
                autobuyPetsParts(runId, 6);  //exit
            }
        break; }

        case 6: { // exit --- todo
            GM_logInfo("autobuyPetsParts","runId="+runId+" step="+step,"","buyPetsParts: Exiting");
            autoZoneFinish(runId, $("globalbox_close"));
            break;}
        }

        if (listeningEvent) {
            document.addEventListener(listeningEvent, function(listeningEvent, runId, step){
                return function() {
                    document.removeEventListener(listeningEvent, arguments.callee, false);
                    window.setTimeout(autobuyPetsParts, settings.getPause(), runId, step+1);
                };
            } (listeningEvent, runId, step), false);
        }
        if (action) { action(); }
        help=null; listeningEvent=null; action=null;
    }
}catch(err){ GM_logError("autobuyPetsParts","runId="+runId+" step="+step,"",err); }
}

function autoVehicles(runId, step, vehicle, garage) {
try{
    if (bot.checkRun("autoVehicles", runId)) {
        var help, action=null, listeningEvent=null;
        if (!step) { step=1; }
        bot.setAction("autoVehicles (" + step + ")");
        /*
                    console.log("=== START LESE farms_data.map ===");
                    console.log(print_r(unsafeWindow.farms_data.map, "", true, "\n"));
                    console.log("=== END LESE farms_data.map ===");
        */
        switch (step) {
        case 1: { // open map
            GM_logInfo("autoVehicles","runId="+runId+" step="+step,"","open map");
            if(help =$("mainmenue1")) {
                action=function(){ click(help); }
                listeningEvent="gamegoToMap";
            } else {
                autoVehicles(runId, 9);  //exit
            }
            break; }

        case 2: { // open garage
            GM_logInfo("autoVehicles","runId="+runId+" step="+step,"","open garage");
            //var garage;
            if(settings.get("account","garage1")>0) {
                if (isNaN(unsafeWindow.farms_data.map.vehicles[1][settings.get("account","garage1")].remain)){
                    garage=1;
                    vehicle=settings.get("account","garage1");
                }
            }
            if (settings.get("account","garage2")>0 && !garage) {
                if (isNaN(unsafeWindow.farms_data.map.vehicles[2][settings.get("account","garage2")].remain)){
                    garage=2;
                    vehicle=settings.get("account","garage2");
                }
            }

            if (settings.get("account","garage3")>0 && !garage) {
                if (isNaN(unsafeWindow.farms_data.map.vehicles[3][settings.get("account","garage3")].remain)){
                    garage=3;
                    vehicle=settings.get("account","garage3");
                }
            }

            if (settings.get("account","garage4")>0 && !garage) {
                if (isNaN(unsafeWindow.farms_data.map.vehicles[4][settings.get("account","garage4")].remain)){
                    garage=4;
                    vehicle=settings.get("account","garage4");
                }
            }

            if (settings.get("account","garage5")>0 && !garage) {
                if (isNaN(unsafeWindow.farms_data.map.vehicles[5][settings.get("account","garage5")].remain)){
                    garage=5;
                    vehicle=settings.get("account","garage5");
                }
            }

            if (settings.get("account","garage6")>0 && !garage) {
                if (isNaN(unsafeWindow.farms_data.map.vehicles[6][settings.get("account","garage6")].remain)){
                    garage=6;
                    vehicle=settings.get("account","garage6");
                }
            }

            if(vehicle && (help=$("map_vehicle_shop"+garage))) {
                action=function(){ click(help); }
                listeningEvent="gameMapVehicle"+garage;
            } else {
                autoVehicles(runId, 9);  //exit
            }
            break; }
        case 3: { // open slot vehicle or go step, if choose "out of service"
            GM_logInfo("autoVehicles","runId="+runId+" step="+step,"","open first slot vehicle");
            if (settings.get("account","garage"+garage+"ProductFrom"+unsafeWindow.farms_data.map.vehicles[garage][vehicle].current)==0) {
                //out of service => drive without products
                help =  $("map_vehiclesheet_inner").querySelector('div[onclick*="map_current_vehicle='+vehicle+'; mapDialog(\'send_vehicle\')"]');
                if (help) {
                    action=function(){ click(help); }
                    listeningEvent="gameSendVehicle";
                    step=7;
                }

            } else {
                var stockNr = (unsafeWindow.farms_data.map.vehicles[garage][vehicle].current==1)?0:unsafeWindow.farms_data.map.vehicles[garage][vehicle].current;
                var DeliveryQuantity = GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_DeliveryQuantityFarm"+eval("4 + garage"),1000)
                if(unsafeData.prodStock[stockNr][settings.get("account","garage"+garage+"ProductFrom"+unsafeWindow.farms_data.map.vehicles[garage][vehicle].current)]<=DeliveryQuantity){
                    //settings.set("account","garage"+garage+"ProductFrom"+unsafeWindow.farms_data.map.vehicles[garage][vehicle].current,0);
                    settings.set("account","garage"+garage,0);
                    autoVehicles(runId, 9);  //exit
                } else {
                    help =  $("map_vehiclesheet_inner").querySelector('div[onclick*="mapDialog(\'fillVehicleSlot\', '+vehicle+', '+1+')"]');
                    if (help) {
                        action=function(){ click(help); }
                        listeningEvent="gameFillVehicleSlot"+vehicle;
                    }
                }
            }
            break; }
        case 4: { // click category
            GM_logInfo("autoVehicles","runId="+runId+" step="+step,"","click category");
            var productId = settings.get("account","garage"+garage+"ProductFrom"+unsafeWindow.farms_data.map.vehicles[garage][vehicle].current);
            help = $("map_vehicle_fill_slot_category_"+unsafeData.prodTyp[0][productId]);
            if (help) {
                action=function(){ click(help); }
                listeningEvent="gameFillVehicleSlot"+vehicle;
            }
            break; }
        case 5:{
            GM_logInfo("autoVehicles","runId="+runId+" step="+step,"","click product");
            var productId = settings.get("account","garage"+garage+"ProductFrom"+unsafeWindow.farms_data.map.vehicles[garage][vehicle].current);
            help = $("globalbox_content").querySelector('div[onclick*="mapDialog(\'fillVehicleSlot_product\', '+vehicle+', '+productId+')"]');
            var helpRight=$("map_vehicle_fill_slot_arrow_right");

            if (help) {
                action=function(){ click(help); }
                listeningEvent="gameFillVehicleSlotProduct"+vehicle;
            } else if (helpRight.style.display == "block") {
                action=function(){ click(helpRight); }
                step--;
                listeningEvent="gameFillVehicleSlot"+vehicle;
            } else {
                //Product not find -> Exit and set vehicle to -------
                //settings.set("account","garage"+garage+"ProductFrom"+unsafeWindow.farms_data.map.vehicles[garage][vehicle].current,0);
                settings.set("account","garage"+garage,0);
                GM_logInfo("autoVehicles","runId="+runId+" step="+step,"","gotoExit");
            }
            break; }
        case 6:{
            GM_logInfo("autoVehicles","runId="+runId+" step="+step,"","load product");
            var input = $("map_vehicle_slot_fill_input");
            if (input) {
                input.value=unsafeWindow.farms_data.map.config.vehicles[vehicle].capacity;
                keyup(input);
                listeningEvent="gameMapVehicle"+garage;
                action=function(){
                    click($("globalbox").querySelector("button"));
                };
            }
            break; }
        case 7:{
            GM_logInfo("autoVehicles","runId="+runId+" step="+step,"","click send vehicle");
            var productId = settings.get("account","garage"+garage+"ProductFrom"+unsafeWindow.farms_data.map.vehicles[garage][vehicle].current);
            help =  $("map_vehiclesheet_inner").querySelector('div[onclick*="mapDialog(\'fillVehicleSlot_product\', '+vehicle+', '+productId+')"]');
            if (help) {
                help = help.parentNode.parentNode.parentNode.querySelector('div[onclick*="map_current_vehicle='+vehicle+'; mapDialog(\'send_vehicle\')"]');
                if (help) {
                  action=function(){ click(help); }
                  listeningEvent="gameSendVehicle";
                } else {
                  //not enough fuel
                  settings.set("account","garage"+garage,0);
                  autoVehicles(runId, 9);  //exit
                }
            }
            break; }
            /*
            "garage1":0,"garage1ProductFrom1":0,"garage1ProductFrom5":0,"garage2":0,
            "garage2ProductFrom1":0,"garage2ProductFrom6":0
            {"id":"157","type":"4","current":"1","route":"1","startdate":"0",
            "duration":"0","data":null,"count_tours":"880","count_products":"454508",
            "duration_original":900,"remain":null}

            var stockNr = (handled.farmNr<=4)?0:(handled.farmNr==5)?5:6;

            if(["v","ex","e","o","alpin"].indexOf(unsafeData.prodTyp[0][iProd]) >= 0){
            */
            //onclick="map_current_vehicle_slot=1; mapDialog('fillVehicleSlot_product', 4, 35)

        case 8: {
            GM_logInfo("autoVehicles","runId="+runId+" step="+step,"","send vehicle");
            if ($("globalbox").style.display == "block") {
                action=function(){ click($("globalbox_button1")); }
                listeningEvent="gameMapSendVehicle";
            }
            break;}
        case 9: { // exit --- todo
            //var div=$("globalbox").querySelector(".mini_close");

            if((help=$("globalbox")) && (help.style.display == "block")) {
                unsafeWindow.hideDiv('globalbox');
                unsafeWindow.hideDiv('globaltransp');
                autoVehicles(runId, 9);  //exit
            }else{
                /*var remain = unsafeWindow.farms_data.map.vehicles[garage][vehicle].remain + 120;
                zoneWaiting["garage"+garage] = remain + now;
                GM_logInfo("autoVehicles", "runId=" + runId + " step=" + step, "", "Check garage "+ garage+" in "+remain+"s");
                window.setTimeout(function() { //TIMEOUT
                    for (var fz in zoneWaiting) {
                        if (!zoneWaiting.hasOwnProperty(fz)) { continue; }
                        if (zoneWaiting[fz] <= now) { delete zoneWaiting[fz]; }
                    }
                    botArbiter.check();
                }, (1000 * remain));
                */
                GM_logInfo("autoVehicles","runId="+runId+" step="+step,"","goto farm 1");
                autoZoneFinish(runId, $("speedlink_farm1"));
            }
            break;}
        }

        if (listeningEvent) {
            document.addEventListener(listeningEvent, function(listeningEvent, runId, step){
                return function() {
                    document.removeEventListener(listeningEvent, arguments.callee, false);
                    window.setTimeout(autoVehicles, settings.getPause(), runId, step+1,vehicle,garage);
                };
            } (listeningEvent, runId, step), false);
        }
        if (action) { action(); }
        help=null; listeningEvent=null; action=null;
    }
}catch(err){ GM_logError("autoVehicles","runId="+runId+" step="+step,"",err); }
}

//autoMapStall
function autoMapStall(runId,step,nr){
try{
    if(bot.checkRun("autoMapStall",runId)){
        var help,action=null,listeningEvent=null;
        if(!step){ step=1; }
        if(!nr) {nr = parseInt(getReadyZone("map").match(/\d/),10);}
        bot.setAction("autoMapStall ("+step+")");
        switch(step){
        case 1:{ // go to map_stall
            GM_logInfo("autoMapStall","runId="+runId+" step="+step,"","Open Map_Stall"+nr);
            var zoneNrS=getReadyZone("map");
            handled.set(zoneNrS);

            listeningEvent="gameOpenMapStall"+nr;
            action=function(){
                GM_logInfo("autoMapStall","runId="+runId+" step="+step,"","Map_Stall"+nr);
                click($("map_stall_overview_link"+nr));
            };
        break;}
        case 2:{ //Next or clear $("map_stall1_slot1_amount")
            GM_logInfo("autoMapStall","runId="+runId+" step="+step,"","Clear or next step");
            if (zoneList[handled.zoneNrL][0][0]== unsafeWindow.stall.data.data[nr].slots[handled.slot].pid) {
                autoMapStall(runId,step+1,nr); //refill or new
            } else {
                //  help$("map_stall1_slot"+handled.slot).querySelector('div[onclick*="stall.clearSlotCommit(1, '+(handled.slot)+')');
               if(help=$("map_stall"+nr+"_slot"+handled.slot).getElementsByClassName("clicker")[0]) {
                   listeningEvent="gameMapStall1_ClearSlot";
                   action=function(){
                       unsafeWindow.stall.clearSlot(nr, handled.slot);
                   };
               }
            }
        break;}
        case 3:{ // Klick RefillSlot or FillSlot
            GM_logInfo("autoMapStall","runId="+runId+" step="+step,"","Klick RefillSlot or FillSlot");
            if(help=$("map_stall"+nr+"_slot"+handled.slot+"_amount")) {
                listeningEvent="gameMapStall1_refillSlotCommit";
                action=function(){
                    click(help);
                };
            } else if (help=$("map_stall"+nr+"_slot"+handled.slot).getElementsByClassName("clicker")[0]){
                listeningEvent="gameMapStall1_fillSlotCommit";
                action=function(){
                    click(help);
                };
            } else {
                autoMapStall(runId,5,nr); // exit
            }
        break;}
        case 4:{ // FillSlot
            GM_logInfo("autoMapStall","runId="+runId+" step="+step,"","Refill or fill");

            if ($("map_stall_fill_slot_commit").getElementsByClassName("dropdown")[0]) {
                unsafeWindow.stall.fillSlotCommitSetProduct(zoneList[handled.zoneNrL][0][0]);
            }
            //var div = $("globalbox_content").querySelector('button[onclick*="stall.fillSlot()"]');
            var div = $("globalbox_content").querySelector('button');
            if (div){
                listeningEvent="gameMapStall_fillSlotCommit";
                action=function(){ click(div); }

            } else {
                autoMapStall(runId,5,nr); // exit
            }
        break;}
        case 5:{
            GM_logInfo("autoMapStall","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"start other SLOT or exit");
            var zoneNrS,zoneNrL,help,next=false;
            if(unsafeData.zones.isMultiSlot(handled.zoneNrF)){
                for(var slot=1;slot<=unsafeData.BUILDING_SLOTS[getZoneType(handled.zoneNrF)];slot++){
                    zoneNrS=handled.zoneNrF+"."+slot;
                    if((help=unsafeData.readyZone[zoneNrS])&&help[2]){
                        zoneNrL=getZoneListId(zoneNrS);
                        if(((help[1]=="r")&&((zoneList[zoneNrL][0][0]!=PRODSTOP)||!settings.get("account","disableCropFields")))||((help[1]=="e")&&(zoneList[zoneNrL][0][0]!=PRODSTOP))){
                            next=true;
                            handled.set(zoneNrS);
                            break;
                        }
                    }
                }
            }

            if(next){
                autoMapStall(runId,1,nr);
            }else{
                //help=/-(\d)$/.exec(handled.zoneNrF)[1];
                var div=$("map_stall_inner").querySelector(".big_close");
                if (!div) {
                    var help2=$("map_stall_inner").querySelectorAll(".mini_close");
                    for (var i=0;i<help2.length;i++) {
                        if (help2[i].getAttribute("onclick")=="stall.close()"){
                            div = help2[i];
                            break;
                        }
                    }
                }
                if (!div) {
                    autoZoneFinish(runId);
                } else {
                    autoZoneFinish(runId,div);
                }
            }
        break;}
        }
        if(listeningEvent){
            document.addEventListener(listeningEvent,function(listeningEvent,runId,step,nr){
                return function(){
                    document.removeEventListener(listeningEvent,arguments.callee,false);
                    window.setTimeout(autoMapStall,settings.getPause(),runId,step+1,nr);
                };
            }(listeningEvent,runId,step,nr),false);
        }
        if(action){ action(); }
        help=null;listeningEvent=null;action=null;
    }
}catch(err){ GM_logError("autoMapStall","runId="+runId+" step="+step,"",err); }
}

function autoClothingDonation(runId, step) {
try{
    if (bot.checkRun("autoClothingDonation", runId)) {
        var help, action=null, listeningEvent=null;
        if (!step) { step=1; }
        bot.setAction("autoClothingDonation (" + step + ")");
        switch (step) {
            case 1: { // go to city 2
            if (unsafeWindow.city==2) {
                autoClothingDonation(runId, step + 1);
            } else {
                listeningEvent="gameCity2";
                action=function(){
                    GM_logInfo("autoClothingDonation","runId="+runId+" step="+step,"","Goto City 2");
                    click($("speedlink_city2"));
                };
            }
            break; }
        case 2: { // open clothing donation
            if ($("clothingdonation").style.display == "block") {
                autoClothingDonation(runId, step + 1);
            } else {
                listeningEvent = "gameClothingDonationResponse";
                action = function() {
                    GM_logInfo("autoClothingDonation","runId="+runId+" step="+step,"","Clothing Donation: Opening");
                    click($("clothingdonation_link"));
                };
            }
            break; }
        case 3: { // donate (if wise and products are available) or gamble (if possible and wise)
            GM_logInfo("autoClothingDonation","runId="+runId+" step="+step,"","Clothing Donation: Donating/Gambling");

            if (settings.get("account", "botUseClothingDonation") && unsafeData.latestClothingDonationLog["gambleInfo"][0]["gain"] > 0) {
                // We should donate, because flag is set and positive gain
                var allProdsAvailable = true; // Assume all clothing products are available
                for (var prod in unsafeData.latestClothingDonationLog["in"]) {
                    if (!unsafeData.latestClothingDonationLog["in"].hasOwnProperty(prod)) { continue; }
                    if (unsafeData.prodStock[0][prod] < unsafeData.latestClothingDonationLog["in"][prod]["amount"]) {
                        allProdsAvailable = false; // Set flag to false, when at least one product is missing
                        GM_logWarning("autoClothingDonation", "runId=" + runId + " step=" + step, "", "Clothing Donation: Missing " + unsafeData.prodName[0][prod]);
                    }
                }

                if ($("globalbox").style.display == "block") { // Globalbox is opened
                    autoClothingDonation(runId, step + 1);
                } else if (allProdsAvailable) {
                    listeningEvent = "gameOpenGlobalCommitBox";
                    action = function() {
                        GM_logInfo("autoClothingDonation", "runId=" + runId + " step=" + step, "", "Clothing Donation: Donating");
                        click($("clothingdonation_donatebutton"));
                    };
                } else {
                    // Not all products are available => wait and exit
                    zoneWaiting["clothingDonation"] = now + 90;
                    GM_logWarning("autoClothingDonation", "runId=" + runId + " step=" + step, "", "Clothing Donation: Retrying in 90s");
                    window.setTimeout(function() { //TIMEOUT
                        for (var fz in zoneWaiting) {
                            if (!zoneWaiting.hasOwnProperty(fz)) { continue; }
                            if (zoneWaiting[fz] <= now) { delete zoneWaiting[fz]; }
                        }
                        botArbiter.check();
                    }, (1000 * 90) + settings.getPause());

                    autoClothingDonation(runId, 5); // Can't donate right now => exit
                }
            } else if (settings.get("account","botUseClothingGamble") && unsafeWindow.clothingdonation_data.data.gambleremain < 1) {
                if ($("globalbox").style.display == "block") { // Globalbox is opened
                    autoClothingDonation(runId, step + 1);
                } else {
                    listeningEvent = "gameOpenGlobalCommitBox";
                    action = function() {
                        GM_logInfo("autoClothingDonation","runId="+runId+" step="+step,"","Clothing Donation: Gambling");
                        click($("clothingdonation_gamblebutton"));
                    };
                }
            } else {
                autoClothingDonation(runId, 5); // Do neither donate nor gamble => exit
            }
            break;}
        case 4: { // Close dialog
            GM_logInfo("autoClothingDonation","runId="+runId+" step="+step,"","Clothing Donation: Gambling End");
            if ($("globalbox").style.display == "none") { // Globalbox is closed
                autoClothingDonation(runId, step + 1);
            } else {
                listeningEvent = "gameClothingDonationResponse";
                action = function() {
                    GM_logInfo("autoClothingDonation","runId="+runId+" step="+step,"","Clothing Donation: Gambling End");
                    click($("globalbox_button1"));
                };
            }
            break;}
        case 5: { // exit
            GM_logInfo("autoClothingDonation","runId="+runId+" step="+step,"","Clothing Donation: Exiting");
            if ($("clothingdonation").style.display == "block") { // Clothing Donation dialog is opened
                autoZoneFinish(runId, $("clothingdonation").getElementsByClassName("mini_close")[0]);
            } else {
                autoZoneFinish(runId);
            }
            break;}
        }

        if (listeningEvent) {
            document.addEventListener(listeningEvent, function(listeningEvent, runId, step){
                return function() {
                    document.removeEventListener(listeningEvent, arguments.callee, false);
                    window.setTimeout(autoClothingDonation, settings.getPause(), runId, step+1);
                };
            } (listeningEvent, runId, step), false);
        }
        if (action) { action(); }
        help=null; listeningEvent=null; action=null;
    }
}catch(err){ GM_logError("autoClothingDonation","runId="+runId+" step="+step,"",err); }
}

function autoDonkey(runId, step) {
try{
    if (bot.checkRun("autoDonkey", runId)) {
        var help, action=null, listeningEvent=null;
        if (!step) { step=1; }
        bot.setAction("autoDonkey (" + step + ")");
        switch (step) {
            case 1: { // go to farm 1
            if (unsafeWindow.farm == 1) {
                autoDonkey(runId, step + 1);
            } else {
                listeningEvent="gameFarmOpened";
                action=function(){
                    GM_logInfo("autoDonkey","runId="+runId+" step="+step,"","Goto Farm 1");
                    click($("speedlink_farm1"));
                };
            }
            break; }
        case 2: { // open donkey
            if ($("globalbox").style.display == "block" || $("box_donkeydialog").style.display == "block") {
                autoDonkey(runId, step + 1);
            } else {
                listeningEvent = "gameDonkeyResponse";
                action = function() {
                    GM_logInfo("autoDonkey","runId="+runId+" step="+step,"","Donkey: Opening");
                    click($("farm_inner_waltraud"));
                };
            }
            break; }
        case 3: { // exit
            GM_logInfo("autoDonkey","runId="+runId+" step="+step,"","Donkey: Exiting");
            if ($("box_donkeydialog").style.display == "block") { // Donkey gain dailog
                autoZoneFinish(runId, $("box_donkeydialogsubmit").getElementsByTagName("button")[0]);
            } else if ($("globalbox").style.display == "block") { // Donkey already visited today
                autoZoneFinish(runId, $("globalbox_button1"));
            } else if ($("buybox_donkey").style.display == "block") { // Donkey not bought
                autoZoneFinish(runId, $("buybox_donkey").getElementsByClassName("close")[0]);
            } else {
                autoZoneFinish(runId);
            }
            break;}
        }

        if (listeningEvent) {
            document.addEventListener(listeningEvent, function(listeningEvent, runId, step){
                return function() {
                    document.removeEventListener(listeningEvent, arguments.callee, false);
                    window.setTimeout(autoDonkey, settings.getPause(), runId, step+1);
                };
            } (listeningEvent, runId, step), false);
        }
        if (action) { action(); }
        help=null; listeningEvent=null; action=null;
    }
}catch(err){ GM_logError("autoDonkey","runId="+runId+" step="+step,"",err); }
}
function autoLottery(runId,step){
try{
    if(bot.checkRun("autoLottery",runId)){
        var help,action=null,listeningEvent=null;
        if(!step){ step=1; }
        bot.setAction("autoLottery ("+step+")");
        switch(step){
        case 1:{ // go to city 2
            if(unsafeWindow.city==2){
                autoLottery(runId,step+1);
            }else{
                listeningEvent="gameCity2";
                action=function(){
                    GM_logInfo("autoLottery","runId="+runId+" step="+step,"","Goto City 2");
                    click($top("speedlink_city2"));
                };
            }
        break;}
        case 2:{ // open lottery
            if($("lotterycontainer").style.display=="block"){
                autoLottery(runId,step+1);
            }else{
                listeningEvent="gameLotteryOpen";
                action=function(){
                    GM_logInfo("autoLottery","runId="+runId+" step="+step,"","Lottery: Opening");
                    click($("cityzone_2_8"));
                };
            }
        break;}
        case 3:{ // battleDailyBonusDone lot: get lot
            if(($("lotterycontainer").style.display=="block") && ($("dailylotleft").style.display!="none")){
                listeningEvent="gameLotteryGotDailyLot";
                action=function(){
                    GM_logInfo("autoLottery","runId="+runId+" step="+step,"","Lottery: Getting daily lot");
                    click($("dailylot"));
                };
            }else{
                autoLottery(runId,6); // exit
            }
        break;}
        case 4:{ // Daily lot: got lot
            if($("currentlot").style.display=="block"){
                GM_logInfo("autoLottery","runId="+runId+" step="+step,"","Lottery: Got daily lot");
                var lotid=$("currentlot").style.backgroundImage.match(/lotback_(\d*).jpg/i)[1];
                //GM_log("lottery currentlot id:"+lotid + ":");
                if(settings.get("account","lotteryDailyLot") && (lotid==null?false:(!(unsafeData.lotteryCollectForPrize["total"]&&unsafeData.lotteryCollectForPrize["total"][lotid])?false:(unsafeData.lotteryCollectForPrize["total"][lotid]>=(unsafeWindow.lotrack[lotid]?unsafeWindow.lotrack[lotid]:0))))){
                    GM_logInfo("autoLottery","runId="+runId+" step="+step,"","Lottery: Saving lot");
                    click($("prizeslotkeeplot"));
                    window.setTimeout(autoLottery,settings.getPause(),runId,6); // exit
                }else{
                    listeningEvent="gameLotteryGotPrize";
                    action=function(){
                        GM_logInfo("autoLottery","runId="+runId+" step="+step,"","Lottery: Getting prizes");
                        click($("prizeslotgetprize"));
                    };
                    window.setTimeout(autoLottery,settings.getPause(),runId,step+2);
                }
            }
        break;}
        case 5:{ // Daily lot: got prize
            if($("globalbox").style.display=="block"){
                click($("globalbox_button1"));
                window.setTimeout(autoLottery,settings.getPause(),runId,step+1);
            }else{
                autoLottery(runId,step+1);
            }
        break;}
        case 6:{ // exit
            if($("lotterycontainer").style.display=="block"){
                GM_logInfo("autoLottery","runId="+runId+" step="+step,"","Lottery: Exiting");
                autoZoneFinish(runId,$("lotteryhead").getElementsByClassName("link")[0]);
            }else{
                autoZoneFinish(runId);
            }
        break;}
        }
        if(listeningEvent){
            document.addEventListener(listeningEvent,function(listeningEvent,runId,step){
                return function(){
                    document.removeEventListener(listeningEvent,arguments.callee,false);
                    window.setTimeout(autoLottery,settings.getPause(),runId,step+1);
                };
            }(listeningEvent,runId,step),false);
        }
        if(action){ action(); }
        help=null;listeningEvent=null;action=null;
    }
}catch(err){ GM_logError("autoLottery","runId="+runId+" step="+step,"",err); }
}

function autoFarmDog(runId,step){
try{
    if(bot.checkRun("autoFarmDog",runId)){
        var help,action=null,listeningEvent=null;
        if(!step){ step=1; }
        bot.setAction("autoFarmDog ("+step+")");
        switch(step){
            case 1: { // go to farm 1
            if (unsafeWindow.farm == 1) {
                autoFarmDog(runId, step + 1);
            } else {
                listeningEvent="gameFarmOpened";
                action=function(){
                    GM_logInfo("autoFarmDog","runId="+runId+" step="+step,"","Goto Farm 1");
                    click($("speedlink_farm1"));
                };
            }
            break; }

            case 2:{ // open farmdog
                GM_logInfo("autoFarmDog","runId="+runId+" step="+step,"","FarmDog: Opening");
                if(help=$("farm_dog") ) {
                    listeningEvent="gameOpenFarmDog";
                    action=function(){
                        click(help);
                    };
                }
            break;}
            case 3:{ // get farmdog donus
                GM_logInfo("autoFarmDog","runId="+runId+" step="+step,"","FarmDog: Opening");
                if(help=$("farm_dog_button_link") ) {
                    listeningEvent="gameGetFarmDog";
                    action=function(){
                        click(help);
                    };
                }
            break;}

            case 4:{ // exit
                GM_logInfo("autoFarmDog","runId="+runId+" step="+step,"","FarmDog: Exiting");
                if($("farm_dog_box").style.display=="block"){
                    autoZoneFinish(runId,$("farm_dog_box_close"));
                }else{
                    autoZoneFinish(runId);
                }
            break;}
        }
        if(listeningEvent){
            document.addEventListener(listeningEvent,function(listeningEvent,runId,step){
                return function(){
                    document.removeEventListener(listeningEvent,arguments.callee,false);
                    window.setTimeout(autoFarmDog,settings.getPause(),runId,step+1);
                };
            }(listeningEvent,runId,step),false);
        }
        if(action){ action(); }
        help=null;listeningEvent=null;action=null;
    }
}catch(err){ GM_logError("autoFarmDog","runId="+runId+" step="+step,"",err); }
}

function autoDailyLoginBonus(runId, step) {
try{
    if (bot.checkRun("autoDailyLoginBonus", runId)) {
        var help, action=null, listeningEvent=null;
        if (!step) { step=1; }
        bot.setAction("autoDailyLoginBonus (" + step + ")");
        switch (step) {
            case 1: { // go to farm 1
            if (unsafeWindow.farm == 1) {
                autoDailyLoginBonus(runId, step + 1);
            } else {
                listeningEvent="gameFarmOpened";
                action=function(){
                    GM_logInfo("autoDailyLoginBonus","runId="+runId+" step="+step,"","Goto Farm 1");
                    click($("speedlink_farm1"));
                };
            }
            break; }
        case 2: { // open DailyLoginBonus
            if($("loginbonus").style.display=="block"){
                autoDailyLoginBonus(runId, step + 1);
            } else {
                action=function(){ click($("loginbonus_symbol")); }
                listeningEvent="gamegoToOpenDailyLoginBonus";
            }
            break; }
        case 3: { // div $("loginbonus") is open
            if($("loginbonus_button").style.display=="block"){
                action=function(){
                    click($("loginbonus_button"));
                }
                listeningEvent="gameDailyLoginBonusgetReward";

            } else {
                autoDailyLoginBonus(runId, 5);  //exit
            }
            break; }
        case 4: { // todo Pflanze wählen
                autoDailyLoginBonus(runId, 5);  //exit
            break; }
        case 5: {
            GM_logInfo("autoDailyLoginBonus","runId="+runId+" step="+step,"","autoDailyLoginBonus: Exiting");
            var div=$("loginbonus").querySelector(".big_close");
            if (!div) {
                div=$("loginbonus").querySelector(".mini_close");
            }
            autoZoneFinish(runId,div);
            break;}
        }

        if (listeningEvent) {
            document.addEventListener(listeningEvent, function(listeningEvent, runId, step){
                return function() {
                    document.removeEventListener(listeningEvent, arguments.callee, false);
                    window.setTimeout(autoDailyLoginBonus, settings.getPause(), runId, step+1);
                };
            } (listeningEvent, runId, step), false);
        }
        if (action) { action(); }
        help=null; listeningEvent=null; action=null;
    }
}catch(err){ GM_logError("autoDailyLoginBonus","runId="+runId+" step="+step,"",err); }
}

function autoBattleDailyBonus(runId, step) {
try{
    if (bot.checkRun("autoBattleDailyBonus", runId)) {
        var help, action=null, listeningEvent=null;
        if (!step) { step=1; }
        bot.setAction("autoBattleDailyBonus (" + step + ")");
        switch (step) {
            case 1: { // go to farm 1
            if (unsafeWindow.farm == 1) {
                autoBattleDailyBonus(runId, step + 1);
            } else {
                listeningEvent="gameFarmOpened";
                action=function(){
                    GM_logInfo("autoBattleDailyBonus","runId="+runId+" step="+step,"","Goto Farm 1");
                    click($("speedlink_farm1"));
                };
            }
            break; }
        case 2: { // open DailyLoginBonus
            if($("battle").style.display=="block"){
                autoBattleDailyBonus(runId, step + 1);
            } else {
                action=function(){ click($("battle_link")); }
                listeningEvent="gamegoToBattle";
            }
            break; }
        case 3: {
            if($("battle").style.display=="block"){
                if((help=$("globalbox")) && (help.style.display == "block")) {
                    unsafeWindow.hideDiv('globalbox');
                    unsafeWindow.hideDiv('globaltransp');
                }
                autoBattleDailyBonus(runId, 5);  //exit
            } else {
                autoBattleDailyBonus(runId, 5);  //exit
            }

            break; }
        case 4: { //
                autoBattleDailyBonus(runId, 5);  //exit
            break; }
        case 5: {
            GM_logInfo("autoBattleDailyBonus","runId="+runId+" step="+step,"","autoBattleDailyBonus: Exiting");
            var div=$("battle").querySelector(".big_close");
            if (!div) {
                div=$("battle").querySelector(".mini_close");
            }
            autoZoneFinish(runId,div);
            break;}
        }

        if (listeningEvent) {
            document.addEventListener(listeningEvent, function(listeningEvent, runId, step){
                return function() {
                    document.removeEventListener(listeningEvent, arguments.callee, false);
                    window.setTimeout(autoBattleDailyBonus, settings.getPause(), runId, step+1);
                };
            } (listeningEvent, runId, step), false);
        }
        if (action) { action(); }
        help=null; listeningEvent=null; action=null;
    }
}catch(err){ GM_logError("autoBattleDailyBonus","runId="+runId+" step="+step,"",err); }
}

//olympiaRun 29122016
function autoOlympiaRun(runId, step) {
try{
    if (bot.checkRun("autoOlympiaRun", runId)) {
        var help, action=null, listeningEvent=null;
        if (!step) { step=1; }
        bot.setAction("autoOlympiaRun (" + step + ")");
        switch (step) {
            case 1: { // go to farm 1
            if (unsafeWindow.farm == 1) {
                autoOlympiaRun(runId, step + 1);
            } else {
                listeningEvent="gameFarmOpened";
                action=function(){
                    GM_logInfo("autoOlympiaRun","runId="+runId+" step="+step,"","Goto Farm 1");
                    click($("speedlink_farm1"));
                };
            }
            break; }
        case 2: { // open olympiaRun
            if($("olympia_box").style.display=="block"){
                autoOlympiaRun(runId, step + 1);
            } else {
                action=function(){ click($("olympia_link")); }
                listeningEvent="gamegoToOpenOlympiaRun";
            }
            break; }
        case 3: { // div $("olympia_box") is open
            if (unsafeWindow.olympia.data.hasOwnProperty('data')) {
                var olympiaData = unsafeWindow.olympia.data;
                if ((olympiaData.data.berries>=20)&&(olympiaData.energy<100)) {
                    action=function(){ click($("olympia_sheep_feed")); }
                    listeningEvent="gameOlympiaOpenDialog";
                } else {
                    isSchokolade = false;
                    autoOlympiaRun(runId, 5);  //exit
                }
            } else {
                isSchokolade = false;
                autoOlympiaRun(runId, 5);  //exit
            }
            break; }
        case 4: { // Schokolade einwerfen
            var div = $("globalbox_content").querySelector('div[onclick*="olympia.entry(10)"]');
            if (div){
                action=function(){ click(div); }
                listeningEvent="gameOlympiaEntry";
                step = 2; // => next step is step3
            } else {
                isSchokolade = false;
                autoOlympiaRun(runId, 5);  //exit
            }
            break; }
        case 5: { // exit --- todo
            GM_logInfo("autoOlympiaRun","runId="+runId+" step="+step,"","autoOlympiaRun: Exiting");
            var div=$("olympia_box").querySelector(".big_close");
            if (!div) {
                div=$("olympia_box").querySelector(".mini_close");
            }
            autoZoneFinish(runId,div);
            break;}
        }

        if (listeningEvent) {
            document.addEventListener(listeningEvent, function(listeningEvent, runId, step){
                return function() {
                    document.removeEventListener(listeningEvent, arguments.callee, false);
                    window.setTimeout(autoOlympiaRun, settings.getPause(), runId, step+1);
                };
            } (listeningEvent, runId, step), false);
        }
        if (action) { action(); }
        help=null; listeningEvent=null; action=null;
    }
}catch(err){ GM_logError("autoOlympiaRun","runId="+runId+" step="+step,"",err); }
}

//Siebenschläferrun
function autoSiebenSchlaeferRun(runId, step) {
try{
    if (bot.checkRun("autoSiebenSchlaeferRun", runId)) {
        var help, action=null, listeningEvent=null;
        if (!step) { step=1; }
        bot.setAction("autoSiebenSchlaeferRun (" + step + ")");
        switch (step) {
            case 1: { // go to farm 1
            if (unsafeWindow.farm == 1) {
                autoSiebenSchlaeferRun(runId, step + 1);
            } else {
                listeningEvent="gameFarmOpened";
                action=function(){
                    GM_logInfo("autoSiebenSchlaeferRun","runId="+runId+" step="+step,"","Goto Farm 1");
                    click($("speedlink_farm1"));
                };
            }
            break; }
        case 2: { // open Siebenschlaefer
            if($("loginevent").style.display=="block"){
                autoSiebenSchlaeferRun(runId, step + 1);
            } else {
                action=function(){ click($("loginevent_link")); }
                listeningEvent="gamegoToOpenSiebenSchlaeferRun";
            }
            break; }
        case 3: {
            if ($("loginevent_daily_button")){
                action=function(){ click($("loginevent_daily_button")); }
                listeningEvent="gamePressEventButton";
            } else {
                autoSiebenSchlaeferRun(runId, 5);  //exit
            }
            break;
        }
        case 4: {
            if((help=$("globalbox")) && (help.style.display == "block")){
                console.log("------- globalbox -------");
                div=help.querySelector(".mini_close");
                if(div){
                    click(div);
                    window.setTimeout(autoSiebenSchlaeferRun, settings.getPause(), runId, step+1);

                }
            }
            break;
        }

        case 5: { // exit --- todo
            GM_logInfo("autoSiebenSchlaeferRun","runId="+runId+" step="+step,"","autoSiebenSchlaeferRun: Exiting");
            var div=$("loginevent").querySelector(".big_close");
            if (!div) {
                div=$("loginevent").querySelector(".mini_close");
            }
            autoZoneFinish(runId,div);
            break;}
        }

        if (listeningEvent) {
            document.addEventListener(listeningEvent, function(listeningEvent, runId, step){
                return function() {
                    document.removeEventListener(listeningEvent, arguments.callee, false);
                    window.setTimeout(autoSiebenSchlaeferRun, settings.getPause(), runId, step+1);
                };
            } (listeningEvent, runId, step), false);
        }
        if (action) { action(); }
        help=null; listeningEvent=null; action=null;
    }
}catch(err){ GM_logError("autoSiebenSchlaeferRun","runId="+runId+" step="+step,"",err); }
}

//IceDelivery 2017 11072017
function autoIceDelivery(runId, step) {
try{
    if (bot.checkRun("autoIceDelivery", runId)) {
        var help, action=null, listeningEvent=null;
        if (!step) { step=1; }
        bot.setAction("autoIceDelivery (" + step + ")");
        switch (step) {
            case 1: { // go to farm 1
            if (unsafeWindow.farm == 1) {
                autoIceDelivery(runId, step + 1);
            } else {
                listeningEvent="gameFarmOpened";
                action=function(){
                    GM_logInfo("autoIceDelivery","runId="+runId+" step="+step,"","Goto Farm 1");
                    click($("speedlink_farm1"));
                };
            }
            break; }
        case 2: { // open Deliveryevent Window
            if($("deliveryevent")){
                autoIceDelivery(runId, step + 1);
            } else {
                action=function(){ click($("deliveryevent_link")); }
                listeningEvent="gamegoToOpenDeliveryevent";
            }
            break; }
        case 3: {
            var div = $("globalbox_content").querySelector('div[onclick*="deliveryevent.startTourCheckCommit(\'playground\')"]');
            if (div){
                action=function(){ click(div); }
                listeningEvent="gamePressSpotButton";
            } else {
                autoIceDelivery(runId, 5);  //exit
            }
            break;
        }
        case 4: { // Start Tour
            if((help=$("globalbox")) && (help.style.display == "block")){
                if(help=$("globalbox_button1")){
                    action=function(){ click(help); }
                    listeningEvent="gameDeliveryStart";
                }
            } else {
                autoIceDelivery(runId, 5);  //exit
            }
            break; }
        case 5: { // exit --- todo
            GM_logInfo("autoIceDelivery","runId="+runId+" step="+step,"","autoIceDelivery: Exiting");
            var div=$("globalbox").querySelector(".big_close");
            if (!div) {
                div=$("globalbox").querySelector(".mini_close");
            }
            autoZoneFinish(runId,div);
            break;}
        }

        if (listeningEvent) {
            document.addEventListener(listeningEvent, function(listeningEvent, runId, step){
                return function() {
                    document.removeEventListener(listeningEvent, arguments.callee, false);
                    window.setTimeout(autoIceDelivery, settings.getPause(), runId, step+1);
                };
            } (listeningEvent, runId, step), false);
        }
        if (action) { action(); }
        help=null; listeningEvent=null; action=null;
    }
}catch(err){ GM_logError("autoIceDelivery","runId="+runId+" step="+step,"",err); }
}

function autoXMasCalendar(runId, step) {
try{
    if (bot.checkRun("autoXMasCalendar", runId)) {
        var help, action=null, listeningEvent=null;
        if (!step) { step=1; }
        bot.setAction("autoXMasCalendar (" + step + ")");
        switch (step) {
            case 1: { // go to farm 1
            if (unsafeWindow.farm == 1) {
                autoXMasCalendar(runId, step + 1);
            } else {
                listeningEvent="gameFarmOpened";
                action=function(){
                    GM_logInfo("autoXMasCalendar","runId="+runId+" step="+step,"","Goto Farm 1");
                    click($("speedlink_farm1"));
                };
            }
            break; }
        case 2: { // open xMasCalendar
            if($("calendar_link").style.display=="block"){
                autoXMasCalendar(runId, step + 1);
            } else {
                action=function(){ click($("calendar_link")); }
                listeningEvent="gamegoToOpeXMasCalendar";
            }
            break; }
        case 3: { // div $("calendar") is open
            if($("calendar").style.display=="block"){
                action=function(){
                    help=$("calendar_fields").querySelector('div[onclick*="calendar.openFieldCommit('+unsafeWindow.calendar.data.day+')');
                    if(help){
                        click(help);
                    }
                }
                listeningEvent="xMasCalendarDone";

            } else {
                autoXMasCalendar(runId, 5);  //exit
            }
            break; }
        case 4: { //close globalbox
            if((help=$("globalbox")) && (help.style.display == "block")){
                console.log("------- globalbox -------");
                div=help.querySelector(".mini_close");
                if(div){
                    click(div);
                    window.setTimeout(autoXMasCalendar, settings.getPause(), runId, step+1);
                }
            }
            break; }
        case 5: {
            GM_logInfo("autoXMasCalendar","runId="+runId+" step="+step,"","autoXMasCalendar: Exiting");
            var div=$("calendar").querySelector(".big_close");
            if (!div) {
                div=$("calendar").querySelector(".mini_close");
            }
            autoZoneFinish(runId,div);
            break;}
        }

        if (listeningEvent) {
            document.addEventListener(listeningEvent, function(listeningEvent, runId, step){
                return function() {
                    document.removeEventListener(listeningEvent, arguments.callee, false);
                    window.setTimeout(autoXMasCalendar, settings.getPause(), runId, step+1);
                };
            } (listeningEvent, runId, step), false);
        }
        if (action) { action(); }
        help=null; listeningEvent=null; action=null;
    }
}catch(err){ GM_logError("autoXMasCalendar","runId="+runId+" step="+step,"",err); }
}

/* quest-bot needs review
function checkQuest(){
    if(DEVMODE_FUNCTION){GM_log("Begin checkQuest");}
    var doQuest=true;
    var questNr=parseInt(unsafeData.questData["farm"]["1"]["nr"],10);
    if(unsafeData.questData["farm"]["1"]["state"]==2){
        var iId,iType;
        for(var i=0;i<unsafeData.QUESTS["farm"]["1"][questNr][0].length;i++){
            iType=0;
            iId=unsafeData.QUESTS["farm"]["1"][questNr][0][i][0];
            //GM_log("checkQuest iId:"+iId+" doQuest:"+doQuest+" prodStock[0]["+iId+"]:"+unsafeData.prodStock[0][iId]+" GMprodMinRackInit[0]["+iId+"]:"+unsafeData.prodMinRackInit[0][iId]+" QUESTS["+questNr+"][0]["+i+"][1]:"+unsafeData.QUESTS["farm"]["1"][questNr][0][i][1]);
            doQuest=doQuest&&unsafeData.prodStock[iType][iId]&&(unsafeData.prodStock[iType][iId]>(unsafeData.prodMinRackInit[iType][iId]+unsafeData.QUESTS["farm"]["1"][questNr][0][i][1]));
            //doQuest=doQuest&&unsafeData.prodStock[iType][iId]&&(unsafeData.prodStock[iType][iId]>(unsafeData.prodMinRack[iType][iId]+(unsafeData.prodMinRackSettings["valMinRackQuest"]?0:unsafeData.QUESTS["farm"]["1"][questNr][0][i][1])));
            //GM_log("checkQuest iId:"+iId+" doQuest:"+doQuest);
            if(!doQuest) break;
        }
        iId=null;
    }
    if(DEVMODE_FUNCTION){GM_log("End checkQuest doQuest:"+doQuest);}
    return doQuest;
}
function autoActivateQuest(){

    if(DEVMODE_FUNCTION){GM_log("Begin autoActivateQuest"); }
    if(!busy){ GM_log("BUSY NOT SET: autoActivateQuest"); return false;}

    var questNr=unsafeData.questData["farm"]["1"]["nr"];
    logBubble.add("Looking for Quest:"+questNr);


    if(!checkQuest()){
        logBubble.add("Exiting to low number of product available",5,"red");



        window.setTimeout(autoZoneFinish,settings.getPause());
    }else if((unsafeData.questData["farm"]["1"]["state"]==0 || unsafeWindow.city==1) && $("errorboxcity").style.display=="block"){
        logBubble.add("Exiting no Quest found to accept or finish",5,"red");


        click($("errorboxfootercity").firstElementChild);
        window.setTimeout(autoZoneFinish,settings.getPause());
    }else if(unsafeWindow.city!=1){
        document.addEventListener("gameCity1",function(){
            document.removeEventListener("gameCity1",arguments.callee,false);
            logBubble.add("Arrived in city 1");
            window.setTimeout(autoActivateQuest,settings.getPause());


        },false);
        logBubble.add("Goto City 1");
        click($top("citylineitem1"));
    }else if(unsafeData.questData["farm"]["1"]["state"]>0 && unsafeWindow.city==1 && $("questboxcity").style.display!="block"){ //open quest box
        logBubble.add("Open Quest "+questNr);
        if(DEVMODE){ GM_log("Open Quest "+questNr); }
        unsafeWindow.fillQuestBox(questNr);
        window.setTimeout(autoActivateQuest,settings.getPause());
    }else if(valQuestActivate && valQuestActivateUntilNr>=questNr && unsafeWindow.city==1 && $("questboxcity").style.display=="block" && unsafeData.questData["farm"]["1"]["state"]==1){ //accept quest
        if(DEVMODE){ GM_log("Accept Quest "+questNr); }
        document.addEventListener("gameQuestAccepted",function(){//todo this does n't work
            document.removeEventListener("gameQuestAccepted",arguments.callee,false);
            logBubble.add("Accepted Quest "+questNr);
            autoZoneFinish();
        },false);
        click($("questboxfootercity").firstElementChild);
    }else if(valQuestSolving && valQuestSolvingUntilNr>=questNr && unsafeWindow.city==1 && $("questboxcity").style.display=="block" && unsafeData.questData["farm"]["1"]["state"]==2){ //finish quest
        if(DEVMODE){ GM_log("Finish Quest "+questNr); }
        document.addEventListener("gameQuestFinished",function(){ //todo this does n't work
            document.removeEventListener("gameQuestFinished",arguments.callee,false);
            logBubble.add("Finished Quest "+questNr);
            autoZoneFinish();
        },false);
        click($("questboxfootercity").firstElementChild);
    }else{
        logBubble.add("Exiting quest unknown combination",10,"red");
        autoZoneFinish();
    }
    if(DEVMODE_FUNCTION){GM_log("End autoActivateQuest");}
}
function checkLodgeQuest(){
    if(DEVMODE_FUNCTION){GM_log("Begin checkLodgeQuest");}
    //LQUESTS["campaign"]["nr"][[[type,id,amount]],waittime,points,[[type,tekst]]]
    var doQuest=false;
    var campaignNr="1";
    var lquestNr=unsafeData.questData["lodge"][campaignNr]["nr"];
    if(unsafeData.questData["lodge"][campaignNr]["time"]<=now){
        //if(DEVMODE_FUNCTION){GM_log("Mid checkLodgeQuest doQuest:"+doQuest+" time:"+(now-unsafeData.questData["lodge"][campaignNr]["time"]));}
        var iId,iType;
        for(var i=0;i<unsafeData.QUESTS["lodge"][campaignNr][lquestNr][0].length;i++){
            iType=unsafeData.QUESTS["lodge"][campaignNr][lquestNr][0][i][0];
            iId=unsafeData.QUESTS["lodge"][campaignNr][lquestNr][0][i][1];
            //GM_log("checkLodgeQuest iId:"+iId+" doQuest:"+doQuest+" prodStock["+iType+"]["+iId+"]:"+unsafeData.prodStock[iType][iId]+" GMprodMinRackInit["+iType+"]["+iId+"]:"+unsafeData.prodMinRackInit[iType][iId]+" LQUESTS["+campaignNr+"]["+lquestNr+"][0]["+i+"]:"+unsafeData.QUESTS["lodge"][campaignNr][lquestNr][0][i]);

            iAdd=unsafeData.QUESTS["lodge"][campaignNr][lquestNr][0][i][2]-((unsafeData.questData["lodge"][campaignNr][iId]&&unsafeData.questData["lodge"][campaignNr][iId]["type"]==iType)?unsafeData.questData["lodge"][campaignNr][iId]["sum"]:0); //unsafeData.questData["lodge"][campaignNr][fId]["type":0,"max":0,"sum":0]
            iAdd=Math.min(iAdd,(unsafeData.prodStock[iType][iId]-unsafeData.prodMinRackInit[iType][iId]));
            doQuest=doQuest||(unsafeData.prodStock[iType][iId]>0&&iAdd>0);

            GM_log("checkLodgeQuest iId:"+iId+" doQuest:"+doQuest+" iAdd:"+iAdd);
        }
        iId=null;iType=null;iAdd=null;
    }else{
        doQuest=false;
    }
    if(DEVMODE_FUNCTION){GM_log("End checkLodgeQuest doQuest:"+doQuest);}
    return doQuest;
}
function autoActivateLodgeQuest(didGive){
    if(DEVMODE_FUNCTION){GM_log("Begin autoActivateLodgeQuest");}
    //if(!busy){ GM_log("BUSY NOT SET: autoActivateQuest"); return false;}
    if(didGive===undefined){didGive=false;}

    var campaignNr="1";
    var lquestNr=unsafeData.questData["lodge"][campaignNr]["nr"];
    if(!didGive){
        logBubble.add("Looking for Campaign:"+campaignNr+" Lodge Quest:"+lquestNr);
    }

    if(unsafeData.questData["lodge"][campaignNr]["time"]>now){
        logBubble.add("Exiting you stil have to wait some more",5,"red");
        window.setTimeout(autoZoneFinish,settings.getPause(),$("forestry_questlist_close"));
    }else if(!checkLodgeQuest()){
        logBubble.add("Exiting to low number of product available",5,"red");
        window.setTimeout(autoZoneFinish,settings.getPause(),$("forestry_questlist_close"));
    }else if(unsafeWindow.city!=2){
        document.addEventListener("gameCity2",function(){
            document.removeEventListener("gameCity2",arguments.callee,false);
            logBubble.add("Arrived in city 2");
            window.setTimeout(autoActivateLodgeQuest,settings.getPause(),true);
        },false);
        logBubble.add("Goto City 2");
        click($top("citylineitem2"));
    }else if(unsafeWindow.city==2 && unsafeData.questData["lodge"][campaignNr]["time"]<=now && $("forestry_questlist_container").style.display!="block"){ //open quest box
        document.addEventListener("gameOpenCampaign",function(){
            document.removeEventListener("gameOpenCampaign",arguments.callee,false);
            logBubble.add("Opened Lodge Quest");
            window.setTimeout(autoActivateLodgeQuest,settings.getPause(),true);
        },false);
        click($("cityzone_2_9")); //unsafeWindow.initCampaigns();
    }else if(unsafeWindow.city==2 && unsafeData.questData["lodge"][campaignNr]["time"]<=now && $("forestry_questlist_container").style.display=="block"){ //quest box is open
        var iId,iType,iAdd;
        for(var i=0;i<unsafeData.QUESTS["lodge"][campaignNr][lquestNr][0].length;i++){
            iType=unsafeData.QUESTS["lodge"][campaignNr][lquestNr][0][i][0];
            iId=unsafeData.QUESTS["lodge"][campaignNr][lquestNr][0][i][1];
            iAdd=unsafeData.QUESTS["lodge"][campaignNr][lquestNr][0][i][2]-((unsafeData.questData["lodge"][campaignNr][iId]&&unsafeData.questData["lodge"][campaignNr][iId]["type"]==iType)?unsafeData.questData["lodge"][campaignNr][iId]["sum"]:0); //unsafeData.questData["lodge"][campaignNr][fId]["type":0,"max":0,"sum":0]
            iAdd=Math.min(iAdd,(unsafeData.prodStock[iType][iId]-unsafeData.prodMinRackInit[iType][iId]));
            if(unsafeData.prodStock[iType][iId]&&iAdd>0){
                //GM_log("Add in iStock:"+iStock+" iAdd:"+iAdd);
                logBubble.add("Add #"+iAdd+" of "+unsafeData.prodName[iType][iId]);
                $("globalcommitbox").addEventListener("DOMAttrModified",function(iAdd){
                    return function(){
                        logBubble.add("Add in #"+iAdd+" of "+unsafeData.prodName[iType][iId]);
                        $("globalcommitbox").removeEventListener("DOMAttrModified",arguments.callee,false);
                        $("forestry_questentry_value").value=iAdd;
                        click($("globalcommitboxfooter").firstElementChild);
                        document.addEventListener("gameOpenCampaign",function(){
                            document.removeEventListener("gameOpenCampaign",arguments.callee,false);
                            window.setTimeout(autoActivateLodgeQuest,settings.getPause(),true);
                        },false);
                    };
                }(iAdd),false);
                click($("forestry_quest_entry"+campaignNr+"_"+lquestNr+"_"+(iType+1)+"_"+iId));
                break;
            }
        }
        iId=null;iType=null;iAdd=null;
    }
    if(DEVMODE_FUNCTION){GM_log("End autoActivateLodgeQuest");}
}
*/
function autoFarmersmarket(runId){
try{
    if(!settings.get("account","botUseFarmersmarket")){
        GM_logInfo("autoFarmersmarket","runId="+runId,"","FARMERSMARKET BOT OFF");
        settings.get("account","botUseFishing")
    } else if((getReadyZone("farmersmarket").toString().replace(/\.\d+$/g, "")=="farmersmarket-3") && (!settings.get("account","botUseMegafruit"))){
        autoZoneFinish(runId);
        GM_logInfo("autoFarmersmarket","runId="+runId,"","Megafruit BOT OFF (Check the automat options)");
    }
    else if(bot.checkRun("autoFarmersmarket",runId)){
        bot.setAction("autoFarmersmarket");
        var zoneNrS=getReadyZone("farmersmarket");
        if(zoneNrS==null){
            GM_logInfo("autoFarmersmarket","runId="+runId,"readyZone="+implode(unsafeData.readyZone,"autoFarmersmarket/readyZone"),"No ready zone");
            autoZoneFinish(runId);
        }else{
            if (zoneNrS.lastIndexOf(".") == -1) {
                for (var i in unsafeData.readyZone) {
                    if (!unsafeData.readyZone.hasOwnProperty(i)) {continue;}
                    if (i.startsWith(zoneNrS) && i != zoneNrS ) {
                        zoneNrS=i;
                        break;
                    }
                }
            }
            handled.set(zoneNrS);
            try{ unsafeWindow.jsTimeStamp=unsafeWindow.Zeit.Client - unsafeWindow.Zeit.Verschiebung; }catch(err){}
            if (handled.zoneBuildingTyp==4 && handled.slot>4){
                if (handled.zoneNrF=="farmersmarket-4"&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP)) {
                    //todo
                    autoFarmersmarketAnimalBreeding(runId,1,1);
                } else if (handled.zoneNrF=="farmersmarket-5"){
                    autoFarmersmarketVetTreatment(runId,1);
                } else if (handled.zoneNrF=="farmersmarket-8"){
                    if (handled.slot<=19) {
                        autoFarmersmarketCowracingFeed(runId,1);
                    } else {
                        autoFarmersmarketCowracingRacing(runId,1,0);
                    }
                } else if (handled.zoneNrF=="farmersmarket-9"){
                    autoFarmersmarketFishing(runId,1);
                }
            } else if (handled.zoneNrF=="farmersmarket-6" && handled.zoneBuildingTyp==8) {
                autoFarmersmarketSpeedEating(runId,1);
            } else if (handled.zoneNrF=="farmersmarket-7" && handled.zoneBuildingTyp==9) {
                autoFarmersmarketButterfly(runId,1);
            } else {
                autoFarmersmarketBuilding(runId,1);
            }
        }
    }
    GM_logInfo("autoFarmersmarket","runId="+runId,"handled.zoneNrF="+handled.zoneNrF,"End",1);
}catch(err){
    GM_logError("autoFarmersmarket","runId="+runId,"",err);
    autoZoneFinish(runId);
}
}
var directionDown = true;
function autoFarmersmarketBuilding(runId, step, field){
try{
    //GM_log("autoFarmersmarketBuilding runId="+runId+" step="+step+" handled.zoneNrS="+handled.zoneNrS);
    if(settings.get("account","botUseFarmersmarket")&&bot.checkRun("autoFarmersmarketBuilding",runId)){
        bot.setAction("autoFarmersmarketBuilding ("+step+")");
        var help,help2,action=null,listeningEvent=null;
        switch(step){
        case 1:{ // check required products
            if((zoneList[handled.zoneNrL][0][0]!=PRODSTOP)&&(help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&((help[1]=="r")||(help[1]=="e"))){
                help=unsafeData.prodRequire[0][zoneList[handled.zoneNrL][0][0]]
                if(typeof help=="object"){
                    for(var i=0;i<help.length;i++){
                        if(help[i][0]<0){
                            if(unsafeData.money<help[i][1]){
                                zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                                updateQueueBox(handled.zoneNrS);
                                break;
                            }
                        }else{
                            if(unsafeData.prodStock[help[i][0]][help[i][1]]<help[i][2]){
                                zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                                updateQueueBox(handled.zoneNrS);
                                break;
                            }
                        }
                    }
                }
            }
            autoFarmersmarketBuilding(runId,step+1);
        break;}
        case 2:{ // open farmersmarket
            if((help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&(((help[1]=="r")&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP||!settings.get("account","disableCropFields")))||((help[1]=="e")&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP)))){
                if (handled.zoneNrF=="farmersmarket-8" || handled.zoneNrF=="farmersmarket-9" || handled.zoneNrF=="farmersmarket-11") {
                    if (parseInt(unsafeWindow.farm,10)==100) {
                            autoFarmersmarketBuilding(runId,step+1);
                    } else {
                        GM_logInfo("autoFarmersmarketCowracing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Goto Farmersmarket2");
                        action=function(){ click($("speedlink_farmersmarket2")); };
                        listeningEvent="gameFarmersmarketOpened";
                    }
                }
                else if(!unsafeData.gameLocation.check("farmersmarket")){
                        action=function(){ click($("speedlink_farmersmarket")); };
                    listeningEvent="gameFarmersmarketOpened";
                }else{
                    autoFarmersmarketBuilding(runId,step+1);
                }
            }else{
                autoFarmersmarketBuilding(runId,9); // -> exit
            }
        break;}
        case 3:{ // open farmersmarket building
            if((help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&(((help[1]=="r")&&((zoneList[handled.zoneNrL][0][0]!=PRODSTOP)||(!settings.get("account","disableCropFields"))))||((help[1]=="e")&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP)))){
                //GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Opening Step:"); //TODO text
                help=/-(\d+)$/.exec(handled.zoneNrF)[1]; // determine which building to work on
                if($("farmersmarket_pos"+help+"_inner").style.display != "block"){
                    action=function(){ click($("farmersmarket_pos"+help+"_click")); };
                    listeningEvent="gameFarmersmarketOpened"+help;
                // }else if("wrong building is opened"){
                //  GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"","autoFarmersmarketBuilding: This is not the right building. Bailing out.")
                //  autoFarmersmarketBuilding(runId,9); // finish (and start over)
                }else{
                    GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Opening Step:"); //TODO text
                    autoFarmersmarketBuilding(runId,step+1);
                }
            }else{
                autoFarmersmarketBuilding(runId,9); // -> exit
            }
        break;}
        case 4:{ // harvest
            help=unsafeData.readyZone[handled.zoneNrS];
            // zoneNrS = Welcher Slot ist ready; zoneNrL = Welche Queue gibt das nächste Item vor?
            if((unsafeData.readyZone[handled.zoneNrS][1]=="r")&&((zoneList[handled.zoneNrL][0][0]!=PRODSTOP)||(!settings.get("account","disableCropFields")))){
                //GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Cropping"); //TODO text
                switch(handled.zoneBuildingTyp){
                case 1:{
                    // TODO manual crop
                    if((help=$("flowerarea_buttons"))&&(help=help.querySelector(".flowerarea_modus_harvest_all"))&&(!help.querySelector(".bonusinfo"))){
                        GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Cropping"); //TODO text
                        action=function(){ click(help); };
                        listeningEvent="gameFarmersmarketCropped";
                    }else{
                        GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Cropping" + field);
                        if(unsafeWindow.farmersmarket_data.flower_area){
                            if(typeof field=="undefined") field=1;
                            for(var i=field;i<=unsafeData.BUILDING_SIZE["fl1"];i++){
                                if(typeof unsafeWindow.farmersmarket_data.flower_area[i]!="undefined"){
                                    if(unsafeWindow.farmersmarket_data.flower_area[i].remain<0) {
                                        unsafeWindow.flowerarea_modus="";
                                        action = function(){
                                            //unsafeWindow.flowerarea_modus="";
                                            help=$("flowerarea_tile"+i);
                                            mouseover(help);
                                            click(help);
                                            mouseout(help);
                                            window.setTimeout(autoFarmersmarketBuilding,settings.getPause(true),runId,step,i+1);
                                        }
                                        //window.setTimeout(autoFarmersmarketBuilding,settings.getPause(true),runId,step,i+1);
                                        break;
                                    }
                                }
                            }
                        }
                        if (action==null){
                            window.setTimeout(autoFarmersmarketBuilding,settings.getPause(true),runId,step+1);
                        }
                    }
                break;}
                case 4:{
                    //13102016
                    if(handled.zoneNrF=="farmersmarket-2" && (help=$("nursery_slot_item" + handled.slot))){
                        action=function(){ click(help); };
                        listeningEvent="gameFarmersmarketCropped";
                    } else if(handled.zoneNrF=="farmersmarket-4" && (help=$("pets_productionslot"+handled.slot+"_click"))){
                        action=function(){ click(help); };
                        listeningEvent="gameFarmersmarketCropped";
                    } else if(handled.zoneNrF=="farmersmarket-5" && (help=$("vet_production_slot_click" + handled.slot))){
                        action=function(){ click(help); };
                        listeningEvent="gameFarmersmarketCropped";
                    } else if(handled.zoneNrF=="farmersmarket-8" && (help=$("cowracing_productionslot" + handled.slot + "_click" ))){
                        action=function(){ click(help); };
                        listeningEvent="gameFarmersmarketCropped";
                    } else if(handled.zoneNrF=="farmersmarket-9" && (help=$("fishing_productionslot" + handled.slot + "_click" ))){
                        action=function(){ click(help); };
                        listeningEvent="gameFarmersmarketCropped";
                    } else if(handled.zoneNrF=="farmersmarket-11" && (help=$("scouts_productionslot" + handled.slot + "_click" ))){
                        action=function(){ click(help); };
                        listeningEvent="gameFarmersmarketCropped";
                    } else{
                        autoFarmersmarketBuilding(runId,9); // -> exit
                    }
                    break;}
                case 7:{
                    //monster fruit culture -> nothing to harvest
                    unsafeData.readyZone[handled.zoneNrS][1]="e";
                    autoFarmersmarketBuilding(runId,step+1);; // next step
                    break;}
                }
            }else{
                autoFarmersmarketBuilding(runId,step+1);
            }
        break;}
        case 5:{ // init production
            help=unsafeData.readyZone[handled.zoneNrS];
            if(zoneList[handled.zoneNrL][0][0]==PRODSTOP){
                GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"","No production selected."); //TODO text
                autoFarmersmarketBuilding(runId,9); // -> exit
            }else if(help[1]=="e"){
                switch(handled.zoneBuildingTyp){
                case 1:{ // select flower
                    // confirm cropping result
                    if((help=$("globalbox")) && (help.style.display == "block")){
                        if(help=$("globalbox_button1")){
                            click(help);
                        }
                    }
                    // select flower
                    GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"","Initializing planting ("+zoneList[handled.zoneNrL][0][0]+")"); //TODO text
                    if(unsafeWindow.racksort&&(unsafeWindow.racksort!=30)&&(unsafeWindow.racksort!=31)&&(unsafeWindow.racksort!=32)&&(unsafeWindow.racksort!=33)){
                        // non-flower-rack opened
                        GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"","Switching rack"); //TODO text
                        step--;
                        action=function(){ click($("rackcat30")); };
                        listeningEvent="gameUpdateRack";
                    }else if(!(unsafeData.prodStock[0][zoneList[handled.zoneNrL][0][0]]&&unsafeData.prodStock[0][zoneList[handled.zoneNrL][0][0]]>0)){
                        // product is missing
                        // this is correct set, even if rack is updating
                        GM_logWarning("autoFarmersmarketBuilding","runId="+runId+" step="+step,"","Flower is not in rack"); //TODO text
                        zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                        updateQueueBox(handled.zoneNrS);
                        autoFarmersmarketBuilding(runId,9); // -> exit
                    }else if(unsafeWindow.selected==zoneList[handled.zoneNrL][0][0]){
                        var time=NEVER;
                        var NowServer=unsafeWindow.Zeit.Server;
                        if(unsafeWindow.farmersmarket_data.flower_area){
                            for(var i=0;i<=unsafeData.BUILDING_SIZE["fl1"];i++){
                                if(typeof unsafeWindow.farmersmarket_data.flower_area[i]!="undefined"){
                                    if(unsafeWindow.farmersmarket_data.flower_area[i].remain>0) {
                                       time=Math.min(time,unsafeWindow.farmersmarket_data.flower_area[i].remain);
                                    }
                                }
                            }
                        }
                        time=Math.max(time,0);

                        if(time<=settings.get("account","seedWaitForCrop")){
                            GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"","Waiting for crop in "+getTimeStr(time));
                            zoneWaiting[handled.zoneNrF]=now+time;
                            window.setTimeout(function(){ //TIMEOUT
                                for(var fz in zoneWaiting){
                                    if(!zoneWaiting.hasOwnProperty(fz)){continue;}
                                    if(zoneWaiting[fz]<=now){ delete zoneWaiting[fz]; }
                                }
                                checkReadyZone();
                            },(1000*time)+settings.getPause());
                            autoFarmersmarketBuilding(runId,9); // -> exit
                        }else if(calcEmptyProductPositions(zoneList[handled.zoneNrL][0][0],handled.zoneNrF)>0){
                            autoFarmersmarketBuilding(runId,step+1,1);
                        }else{
                            autoFarmersmarketBuilding(runId,9); // -> exit
                        }
                    }else{
                        GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"","Wrong plant selected");
                        var nextRack=null;
                        var allRacks=[30,31,32,33];
                        for(var i=allRacks.length-1;i>-1;i--){
                            if($("rackswitch"+allRacks[i])){
                                if(allRacks[i]==unsafeWindow.racksort){
                                    nextRack=allRacks[(i+1)%allRacks.length];
                                    break;
                                }
                            }else{
                                allRacks.splice(i,1);
                            }
                        }
                        if(help=$("rackitem"+zoneList[handled.zoneNrL][0][0])){
                            if(unsafeWindow.updateRackBusy){
                                // Rack not loaded
                                GM_logWarning("autoFarmersmarketBuilding","runId="+runId+" step="+step,"","Rack not loaded");
                                step--;
                                listeningEvent="gameUpdateRack";
                            }else if(help.style.display!="none"){
                                GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"","Seed found");
                                click(help); // rackitem found
                                window.setTimeout(autoFarmersmarketBuilding,settings.getPause(),runId,step);
                            }else if(unsafeWindow.racksort!=nextRack){
                                // call next rack
                                GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"","Switching to next rack ("+nextRack+")");
                                step--;
                                action=function(){ click($("rackswitch"+nextRack)); };
                                listeningEvent="gameUpdateRack";
                            }else{
                                // should not happen
                                GM_logWarning("autoFarmersmarketBuilding","runId="+runId+" step="+step,"","Invisible non-empty rackitem and only 1 rack");
                                autoFarmersmarketBuilding(runId,9); // -> exit
                            }
                        }else if(unsafeWindow.racksort!=nextRack){
                            // rackamount>0 but no rackitem
                            // = 2nd, 3rd or 4th rack was not loaded yet
                            GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"","Switching to next rack ("+nextRack+")(rackitem not found)");
                            step--;
                            action=function(){ click($("rackswitch"+nextRack)); };
                            listeningEvent="gameUpdateRack";
                            // unsafeWindow.updateRack((1+parseInt(unsafeWindow._currRack,10))%unsafeWindow.userracks); // call next rack
                        }else{// rackamount>0 but no rackitem and 1 rack
                            // should not happen because thats "product is missing" (1.case)
                            GM_logWarning("autoFarmersmarketBuilding","runId="+runId+" step="+step,"","No rackitem but rackamount and only 1 rack");
                            autoFarmersmarketBuilding(runId,9); // -> exit
                        }
                    }
                break;}
                case 4:{ // open slot
                    var help2=null;
                    GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Opening slot"); //TODO text
                    if(handled.zoneNrF=="farmersmarket-2" && (help2=$("nursery_slot_item" + handled.slot))){
                        action=function(){ click(help2); };
                        listeningEvent="gameFarmersmarketSlotOpened";
                    } else if(handled.zoneNrF=="farmersmarket-4" && (help2=$("pets_productionslot"+handled.slot+"_click"))){
                        action=function(){ click(help2); };
                        listeningEvent="gameFarmersmarketSlotOpened";
                    } else if(handled.zoneNrF=="farmersmarket-5" && (help2=$("vet_production_slot_click" + handled.slot))){
                        action=function(){ click(help2); };
                        listeningEvent="gameFarmersmarketSlotOpened";
                    } else if(handled.zoneNrF=="farmersmarket-8" && (help2=$("cowracing_productionslot" + handled.slot + "_click" ))){
                        action=function(){ click(help2); };
                        listeningEvent="gameFarmersmarketSlotOpened";
                    }  else if(handled.zoneNrF=="farmersmarket-9" && (help2=$("fishing_productionslot" + handled.slot + "_click" ))){
                        action=function(){ click(help2); };
                        listeningEvent="gameFarmersmarketSlotOpened";
                    } else if(handled.zoneNrF=="farmersmarket-11" && (help2=$("scouts_productionslot" + handled.slot + "_click" ))){
                        action=function(){ click(help2); };
                        listeningEvent="gameFarmersmarketSlotOpened";
                    } else{
                        autoFarmersmarketBuilding(runId,9); // -> exit
                    }
                break;}
                case 7: { //monster fruit culture -> open item_bar
                    GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>showNeedsMegaFruit");
                    var key = Object.keys(unsafeWindow.farmersmarket_data.megafruit.objects)[handled.slot-1]; //keys = {water,light, fertilize}
                    var help = $("megafruit_need_"+key+"_img");
                    if (help){
                        action=function(){ click(help);};
                        listeningEvent="gameShowNeedsMegaFruit";
                    } else {
                        console.log("Step 5 -> Skipping to exit after 'showNeedsMegaFruit failed'");
                        console.log(help);
                        autoFarmersmarketBuilding(runId,9); // -> exit
                    }

                    break;}
                }
            }else{
                GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"","Zone not empty."); //TODO text
                autoFarmersmarketBuilding(runId,9); // -> exit
            }
        break;}
        case 6:{
            switch(handled.zoneBuildingTyp){
            case 1:{
                if((help=$("farmersmarket_pos1_inner"))&&(help=help.querySelector(".flowerarea_button_autoplant"))&&(!help.querySelector(".bonusinfo"))) {
                // premium planting
                    action=function(){ click(help); };
                    listeningEvent="gameFarmersmarketDialogStart";
                }else{
                    // non-premium planting
                    //  unsafeWindow.flowerarea_modus="plant";
                    GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>planting"); //TODO text
                    if(unsafeWindow.farmersmarket_data.flower_area){
                        for(var i=field;i<=unsafeData.BUILDING_SIZE["fl1"];i++){
                            if(!unsafeWindow.farmersmarket_data.flower_area[i]) {
                                action = function(){
                                    unsafeWindow.flowerarea_modus="plant";
                                    help=$("flowerarea_tile"+i);
                                    mouseover(help);
                                    click(help);
                                    mouseout(help);
                                }
                                window.setTimeout(autoFarmersmarketBuilding,settings.getPause(true),runId,step,i+1);
                                break;
                            }
                        }
                    }
                    else {
                        checkReadyZone();
                    }
                    if(action==null){
                        window.setTimeout(autoFarmersmarketBuilding,settings.getPause(true),runId,8,1);
                    }
                }
            break;}
            case 4:{ // click production item
                if((help=$("nursery_production_box")) && (help.style.display == "block") && handled.zoneNrF == "farmersmarket-2"){
                    if((help=help.querySelector('div[onclick*="dialogNursery(\'production_commit\', '+handled.slot+', '+zoneList[handled.zoneNrL][0][0]+')"]')) && (!help.className.match("nursery_production_select_item_block"))){
                        // link is visible, can be clicked on
                        action=function(){ click(help); };
                        listeningEvent="gameFarmersmarketDialogCommit";
                    }else if(help=$("nursery_production_navi").querySelector(".nursery_production_navi_next")){
                        action=function(){ click(help); };
                        step--;
                        listeningEvent="gameFarmersmarketSlotOpened";
                    }else{
                        autoFarmersmarketBuilding(runId,9); // -> exit
                    }
                } else if((help=$("pets_production_selection")) && (handled.zoneNrF == "farmersmarket-4")){
                    help2 = $("pets_production_selection_slot"+zoneList[handled.zoneNrL][0][0]);

                    var helpDown=$("pets_production_selection_navi_down");
                    var helpUp=$("pets_production_selection_navi_up");

                    if(help2) {
                        // link is visible, can be clicked on
                        action=function(){ click(help2); };
                        listeningEvent="gameProductionSelectionCommit";
                    }else if(helpDown || helpUp) {
                        // link not visible, we need to scroll
                        if (directionDown && (helpDown.style.display == "none")) { // Scroll-Down-Mode, but at bottom?
                            directionDown = false; // Switch to Scroll-Up-Mode
                        } else if (!directionDown && (helpUp.style.display == "none")) { // Scroll-Up-Mode, but at top?
                            directionDown = true; // Switch to Scroll-Down-Mode
                        }
                        action=function(){
                            if (directionDown) { // In Scroll-Down-Mode?
                                click(helpDown); // Scroll down
                            } else {
                                click(helpUp);   // Scroll up
                            }
                        };
                        step--;
                        listeningEvent="gameProductionSelectionNavi";
                    }else{
                        autoFarmersmarketBuilding(runId,9); // -> exit
                    }
                } else if ((help=$("cowracing_production_selection")) && (handled.zoneNrF == "farmersmarket-8")){
                    help2=help.querySelector('div[onclick*="cowracing.productionSelectionCommit('+zoneList[handled.zoneNrL][0][0]+')');

                    var helpDown=$("cowracing_production_selection_navi_down");
                    var helpUp=$("cowracing_production_selection_navi_up");
                    if(help2) {
                        // link is visible, can be clicked on
                        action=function(){ click(help2); };
                        listeningEvent="gameProductionSelectionCommit";
                    }else if(helpDown || helpUp) {
                        // link not visible, we need to scroll
                        if (directionDown && (helpDown.style.display == "none")) { // Scroll-Down-Mode, but at bottom?
                            directionDown = false; // Switch to Scroll-Up-Mode
                        } else if (!directionDown && (helpUp.style.display == "none")) { // Scroll-Up-Mode, but at top?
                            directionDown = true; // Switch to Scroll-Down-Mode
                        }
                        action=function(){
                            if (directionDown) { // In Scroll-Down-Mode?
                                click(helpDown); // Scroll down
                            } else {
                                click(helpUp);   // Scroll up
                            }
                        };
                        step--;
                        listeningEvent="gameProductionSelectionNavi";
                    }else{
                        autoFarmersmarketBuilding(runId,9); // -> exit
                    }
                } else if ((help=$("fishing_production_selection")) && (handled.zoneNrF == "farmersmarket-9")){
                    var altPr = zoneList[handled.zoneNrL][0][0];
                    if (settings.get("account","botUseFishingLookSp")) {
                        for (var fP in unsafeWindow.fishing.data.config.products) {
                            if (unsafeWindow.fishing.data.config.products[fP].coins || !unsafeWindow.fishing.data.config.products[fP].needs.items) {
                                continue;
                            }
                            if (unsafeWindow.fishing.data.config.products[fP].level && unsafeWindow.fishing.data.config.products[fP].level > unsafeWindow.fishing.data.data.level) {
                               continue;
                            }
                            if (unsafeWindow.fishing.data.config.products[fP].needs.products) {
                                for (var x in unsafeWindow.fishing.data.config.products[fP].needs.products) {
                                    var y = unsafeWindow.checkRackItem(x);
                                    if (unsafeWindow.fishing.data.config.products[fP].needs.products[x] > y) {
                                        continue;
                                    }
                                }
                            }
                            if (unsafeWindow.fishing.data.config.products[fP].needs.items) {
                                for (var x in unsafeWindow.fishing.data.config.products[fP].needs.items) {
                                    var y = 0;
                                    if (unsafeWindow.fishing.data.data.stock && unsafeWindow.fishing.data.data.stock[x]) {
                                        y = parseInt(unsafeWindow.fishing.data.data.stock[x])
                                    }
                                    if (unsafeWindow.fishing.data.config.products[fP].needs.items[x] > y) {
                                        continue;
                                    } else {
                                        altPr = fP;
                                    }
                                }
                            }
                        }
                    }
                    //alert("stop " + altPr + " prodName" + unsafeData.prodName[0][altPr]);
                    help2=help.querySelector('div[onclick*="fishing.productionSelectionCommit('+altPr+')');

                    var helpDown=$("fishing_production_selection_navi_down");
                    var helpUp=$("fishing_production_selection_navi_up");
                    if(help2) {
                        // link is visible, can be clicked on
                        action=function(){ click(help2); };
                        listeningEvent="gameProductionSelectionCommit";
                    }else if(helpDown || helpUp) {
                        // link not visible, we need to scroll
                        if (directionDown && (helpDown.style.display == "none")) { // Scroll-Down-Mode, but at bottom?
                            directionDown = false; // Switch to Scroll-Up-Mode
                        } else if (!directionDown && (helpUp.style.display == "none")) { // Scroll-Up-Mode, but at top?
                            directionDown = true; // Switch to Scroll-Down-Mode
                        }
                        action=function(){
                            if (directionDown) { // In Scroll-Down-Mode?
                                click(helpDown); // Scroll down
                            } else {
                                click(helpUp);   // Scroll up
                            }
                        };
                        step--;
                        listeningEvent="gameProductionSelectionNavi";
                    }else{
                        autoFarmersmarketBuilding(runId,9); // -> exit
                    }
                } else if ((help=$("scouts_production_selection")) && (handled.zoneNrF == "farmersmarket-11")){
                    help2=help.querySelector('div[onclick*="scouts.productionSelectionCommit('+zoneList[handled.zoneNrL][0][0]+')');

                    var helpDown=$("scouts_production_selection_navi_down");
                    var helpUp=$("scouts_production_selection_navi_up");
                    if(help2) {
                        // link is visible, can be clicked on
                        action=function(){ click(help2); };
                        listeningEvent="gameProductionSelectionCommit";
                    }else if(helpDown || helpUp) {
                        // link not visible, we need to scroll
                        if (directionDown && (helpDown.style.display == "none")) { // Scroll-Down-Mode, but at bottom?
                            directionDown = false; // Switch to Scroll-Up-Mode
                        } else if (!directionDown && (helpUp.style.display == "none")) { // Scroll-Up-Mode, but at top?
                            directionDown = true; // Switch to Scroll-Down-Mode
                        }
                        action=function(){
                            if (directionDown) { // In Scroll-Down-Mode?
                                click(helpDown); // Scroll down
                            } else {
                                click(helpUp);   // Scroll up
                            }
                        };
                        step--;
                        listeningEvent="gameProductionSelectionNavi";
                    }else{
                        autoFarmersmarketBuilding(runId,9); // -> exit
                    }
                } else if((help=$("vet_production_filter_icon").parentNode) && (help.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display == "block") && handled.zoneNrF == "farmersmarket-5"){
                    var help2=help.querySelector('div[onclick*="vetDialog(\'production_select_confirm\','+handled.slot+','+zoneList[handled.zoneNrL][0][0]+',undefined)"]');
                    if (!help2) {
                        help2=help.querySelector('div[onclick*="vetDialog(\'production_select_confirm\','+handled.slot+','+zoneList[handled.zoneNrL][0][0]+',1)"]');
                    }
                    var helpDown=help.querySelector(".vet_production_select_navi_down");
                    var helpUp=help.querySelector(".vet_production_select_navi_up");

                    if(help2 && (!help2.className.match("important"))) {
                        // link is visible, can be clicked on
                        action=function(){ click(help2); };
                        listeningEvent="gameFarmersmarketDialogCommit";
                    }else if(helpDown || helpUp) {
                        // link not visible, we need to scroll
                        if (directionDown && !helpDown) { // Scroll-Down-Mode, but at bottom?
                            directionDown = false; // Switch to Scroll-Up-Mode
                        } else if (!directionDown && !helpUp) { // Scroll-Up-Mode, but at top?
                            directionDown = true; // Switch to Scroll-Down-Mode
                        }
                        action=function(){
                            if (directionDown) { // In Scroll-Down-Mode?
                                click(helpDown); // Scroll down
                            } else {
                                click(helpUp);   // Scroll up
                            }
                        };
                        step--;
                        listeningEvent="gameFarmersmarketSlotOpened";
                    }else{
                        autoFarmersmarketBuilding(runId,9); // -> exit
                    }
                } else{
                    autoFarmersmarketBuilding(runId,9); // -> exit
                }
            break;}
            case 7: { //monster fruit culture -> select item
                GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>NeedsMegaFruit");
                var help = $("megafruit_need_item"+zoneList[handled.zoneNrL][0][0]);
                if (help){
                    action=function(){ click(help);};
                    listeningEvent="gameNeedMegaFruit";
                } else {
                    console.log("Step 6 -> Skipping to exit after 'NeedsMegaFruit failed'");
                    console.log(help);
                    autoFarmersmarketBuilding(runId,9); // -> exit
                }
                break;}
            }
        break;}
        case 7:{ // commit

            if((help=$("globalbox")) && (help.style.display == "block")){
                console.log("------- globalbox -------");
                help = $("globalbox_button1");
                if(help){
                    console.log("------- globalbox_button1 -------");
                    GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Start production"); //TODO text
                    action=function(){ click(help); };
                    if (handled.zoneBuildingTyp==7) {
                        //monster fruit culture -> buy
                        console.log("-------gameMegafruit_buyobject---------");
                        listeningEvent="gameMegafruit_buyobject";
                    } else {
                        listeningEvent="gameFarmersmarketStarted";
                    }
                    //listeningEvent="gameFarmersmarketStarted";
                    setNextQueueItem(handled.zoneNrS);
                } else {
                autoFarmersmarketBuilding(runId,9); // -> exit
                }
            } else {
                autoFarmersmarketBuilding(runId,9); // -> exit
            }
        break;}
        case 8:{
            switch(handled.zoneBuildingTyp){
            case 1:{
                if((help=$("farmersmarket_pos1_inner"))&&(help=help.querySelector(".flowerarea_modus_water_all"))&&(!help.querySelector(".bonusinfo"))){
                    // premium watering
                    action=function(){ click(help); };
                    listeningEvent="gameFarmersmarketWatered";
                }else{
                    // non-premium watering
                    GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Watering"); //TODO text
                    if(unsafeWindow.farmersmarket_data.flower_area){
                        for(var i=field;i<=unsafeData.BUILDING_SIZE["fl1"];i++){
                            if((unsafeWindow.farmersmarket_data.flower_area[i])&&(unsafeWindow.farmersmarket_data.flower_area[i].water_remain<0)){
                                action = function(){
                                    unsafeWindow.flowerarea_modus="water";
                                    help=$("flowerarea_tile"+i);
                                    mouseover(help);
                                    click(help);
                                    mouseout(help);
                                }
                                window.setTimeout(autoFarmersmarketBuilding,settings.getPause(true),runId,step,i+1);
                                break;
                            }
                        }
                    }
                    if(action==null){ autoFarmersmarketBuilding(runId,step+1); }
                }
            break;}
            case 4:{
                autoFarmersmarketBuilding(runId,9); // -> exit
                break;}
            case 7:{
                //monster fruit culture -> close summary
                //autoFarmersmarketBuilding(runId,9); // -> exit
                GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>close summary");
                if((help=$("globalbox")) && (help.style.display == "block")) {
                    unsafeWindow.hideDiv('globalbox');
                    unsafeWindow.hideDiv('globaltransp');
                    autoFarmersmarketBuilding(runId,9); // -> exit
                }else{
                    autoFarmersmarketBuilding(runId,9); // -> exit
                }
                break;}
            }
        break;}
        case 9:{
            var zoneNrS,zoneNrL,help,next=false, slots;
            if(unsafeData.zones.isMultiSlot(handled.zoneNrF)){
                slots = handled.zoneBuildingTyp==4 ? 4 : unsafeData.BUILDING_SLOTS[getZoneType(handled.zoneNrF)];
                for(var slot=1;slot<=slots;slot++){
                    zoneNrS=handled.zoneNrF+"."+slot;
                    if((help=unsafeData.readyZone[zoneNrS])&&help[2]){
                        zoneNrL=getZoneListId(zoneNrS);
                        if(((help[1]=="r")&&((zoneList[zoneNrL][0][0]!=PRODSTOP)||!settings.get("account","disableCropFields")))||((help[1]=="e")&&(zoneList[zoneNrL][0][0]!=PRODSTOP))){
                            next=true;
                            handled.set(zoneNrS);
                            break;
                        }
                    }
                }
            }
            if(next){
                autoFarmersmarketBuilding(runId,1);
            }else{
                help=/-(\d+)$/.exec(handled.zoneNrF)[1];
                var div=$("farmersmarket_pos"+help+"_inner").querySelector(".big_close");
                if (!div) {
                    div=$("farmersmarket_pos"+help+"_inner").querySelector(".mini_close");
                }
                autoZoneFinish(runId,div);
            }

        break;}
        }
        if(listeningEvent){
            document.addEventListener(listeningEvent,function(listeningEvent,runId,step){
                return function(){
                    document.removeEventListener(listeningEvent,arguments.callee,false);
                    window.setTimeout(autoFarmersmarketBuilding,settings.getPause(),runId,step+1);
                };
            }(listeningEvent,runId,step),false);
        }
        if(action){ action(); }
        help=null;listeningEvent=null;action=null;
    }
 }catch(err){ GM_logError("autoFarmersmarketBuilding","runId="+runId+" step="+step,"",err); }
}

//autoFarmersmarketVetTreatment
function autoFarmersmarketVetTreatment(runId, step){
try{
    GM_log("autoFarmersmarketVetTreatment runId="+runId+" step="+step+" handled.zoneNrS="+handled.zoneNrS);
    if(settings.get("account","botUseVetTreatment")&&bot.checkRun("autoFarmersmarketVetTreatment",runId)){
        bot.setAction("autoFarmersmarketVetTreatment ("+step+")");
        var help,help2,action=null,listeningEvent=null;
        switch(step){
        case 1:{ // check required products
            if((zoneList[handled.zoneNrL][0][0]!=PRODSTOP)&&(help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&((help[1]=="r")||(help[1]=="e"))){
                help=unsafeData.prodRequire[0][zoneList[handled.zoneNrL][0][0]]
                if(typeof help=="object"){
                    for(var i=0;i<help.length;i++){
                        if(help[i][0]<0){
                            if(unsafeData.money<help[i][1]){
                                zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                                updateQueueBox(handled.zoneNrS);
                                break;
                            }
                        }else{
                            if(unsafeData.prodStock[help[i][0]][help[i][1]]<help[i][2]){
                                zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                                updateQueueBox(handled.zoneNrS);
                                break;
                            }
                        }
                    }
                }
            }
            autoFarmersmarketVetTreatment(runId,step+1);
        break;}
        case 2:{ // open farmersmarket
            if( (help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&(help[1]=="r"||help[1]=="e")) {
                if(!unsafeData.gameLocation.check("farmersmarket")){
                    action=function(){ click($("speedlink_farmersmarket")); };
                    listeningEvent="gameFarmersmarketOpened";
                }else{
                    autoFarmersmarketVetTreatment(runId,step+1);
                }
            } else {
                autoFarmersmarketVetTreatment(runId,8); // -> exit
            }
        break;}
        case 3:{ // open farmersmarket building
            if( (help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&(help[1]=="r"||help[1]=="e")) {
                //GM_logInfo("autoFarmersmarketVetTreatment","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Opening Step:"); //TODO text
                help=/-(\d)$/.exec(handled.zoneNrF)[1]; // determine which building to work on
                if($("farmersmarket_pos"+help+"_inner").style.display != "block"){
                    action=function(){ click($("farmersmarket_pos"+help+"_click")); };
                    listeningEvent="gameFarmersmarketOpened"+help;
                }else{
                    GM_logInfo("autoFarmersmarketVetTreatment","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Opening Step:"); //TODO text
                    autoFarmersmarketVetTreatment(runId,step+1);
                }
            }else{
                autoFarmersmarketVetTreatment(runId,8); // -> exit
            }
        break;}
        case 4:{ // harvest
            help=unsafeData.readyZone[handled.zoneNrS];
            if( (help)&&help[2]&&help[1]=="r") {
                //GM_logInfo("autoFarmersmarketVetTreatment","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Cropping"); //TODO text
                switch(handled.zoneBuildingTyp){
                case 4:{
                    if(help=$("vet_animal_cashup" + (handled.slot-4))){
                        //Tier fertig
                        action=function(){ click(help);};
                        listeningEvent="gameVet_endtreatment";
                    }else{
                        autoFarmersmarketVetTreatment(runId,8); // -> exit
                    }
                break;}
                }
            }else{
                autoFarmersmarketVetTreatment(runId,step+1);
            }
        break;}
        case 5:{ // //das rechte zu behandelnde Tier auswählen
            help=unsafeData.readyZone[handled.zoneNrS];
            if(help[1]=="e"||help[1]=="r"){//??????? todo
                switch(handled.zoneBuildingTyp){
                case 4:{
                    if(!$("vet_animal_queue_animal_img"+(handled.slot-4))) {
                        var animalID = unsafeWindow.findTreatedAnimal();

                        if(typeof animalID=="string") {
                            var animal_right=$("vet_animal_queue"+animalID);
                            //var animal_right=$("vet_animal_queue").firstChild;
                            if (animal_right) {
                                action=function(){ click(animal_right);};
                                listeningEvent="gameVet_setslot";
                            } else {
                                autoFarmersmarketVetTreatment(runId,8); // -> exit
                            }
                        } else {
                            unsafeData.zones.setEndtime(handled.zoneNrS,animalID);
                            autoFarmersmarketVetTreatment(runId,8); // -> exit
                        }
                    }
                    else {
                        autoFarmersmarketVetTreatment(runId,step+1); // alle Slots belegt, Behandlung starten
                    }
                break;}
                }
            }else{
                GM_logInfo("autoFarmersmarketVetTreatment","runId="+runId+" step="+step,"","Zone not empty."); //TODO text
                autoFarmersmarketVetTreatment(runId,8); // -> exit
            }
        break;}

        case 6:{
            switch(handled.zoneBuildingTyp){
            case 4:{ // freien Slot anklicken
                var animal=$("vet_animal_slot"+(handled.slot-4));
                if (animal) {
                    action=function(){ click(animal);};
                    listeningEvent="gameShowVetMedicalRecord";
                }
                else {
                    autoFarmersmarketVetTreatment(runId,8); // -> exit
                }
            break;}
            }
        break;}

        case 7:{
            switch(handled.zoneBuildingTyp){
                case 4:{ // start production
                    var start=$("vet_animal_disease_start"+(handled.slot-4));
                    if (start) {
                        action=function(){ click(start);};
                        listeningEvent="gameVet_starttreatment";
                    } else {
                        autoFarmersmarketVetTreatment(runId,8); // -> exit
                    }
                break;}
            }
            break;}

        case 8:{
            GM_logInfo("autoFarmersmarketVetTreatment","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"start other slot or exit");
            var zoneNrS,zoneNrL,help,next=false;
            if(unsafeData.zones.isMultiSlot(handled.zoneNrF)){
                for(var slot=5;slot<=unsafeData.BUILDING_SLOTS[getZoneType(handled.zoneNrF)];slot++){
                    zoneNrS=handled.zoneNrF+"."+slot;
                    if((help=unsafeData.readyZone[zoneNrS])&&help[2]){
                        zoneNrL=getZoneListId(zoneNrS);
                        if(((help[1]=="r")&&((zoneList[zoneNrL][0][0]!=PRODSTOP)||!settings.get("account","disableCropFields")))||((help[1]=="e")&&(zoneList[zoneNrL][0][0]!=PRODSTOP))){
                            next=true;
                            handled.set(zoneNrS);
                            break;
                        }
                    }
                }
            }
            if(next){
                autoFarmersmarketVetTreatment(runId,1);
            }else{
                help=/-(\d)$/.exec(handled.zoneNrF)[1];
                var div=$("farmersmarket_pos"+help+"_inner").querySelector(".big_close");
                if (!div) {
                    var help2=$("farmersmarket_pos"+help+"_inner").querySelectorAll(".mini_close");
                    for (var i=0;i<help2.length;i++) {
                        if (help2[i].getAttribute("onclick")=="closeVet()"){
                            div = help2[i];
                            break;
                        }
                    }
                }
                autoZoneFinish(runId,div);
            }
        break;}
        }
        if(listeningEvent){
            document.addEventListener(listeningEvent,function(listeningEvent,runId,step){
                return function(){
                    document.removeEventListener(listeningEvent,arguments.callee,false);
                    window.setTimeout(autoFarmersmarketVetTreatment,settings.getPause(),runId,step+1);
                };
            }(listeningEvent,runId,step),false);
        }
        if(action){ action(); }
        help=null;listeningEvent=null;action=null;
    }
 }catch(err){ GM_logError("autoFarmersmarketVetTreatment","runId="+runId+" step="+step,"",err); }
}

//autoFarmersmarketAnimalBreeding
function autoFarmersmarketAnimalBreeding(runId, step, step4_6loop){
try{
    GM_log("autoFarmersmarketAnimalBreeding runId="+runId+" step="+step+" step4_6loop"+step4_6loop+" handled.zoneNrS="+handled.zoneNrS);
    //TODO Option
    var botUseAnimalBreeding = true;
    //if(settings.get("account","botUseVetTreatment")&&bot.checkRun("autoFarmersmarketAnimalBreeding",runId)){
    if(botUseAnimalBreeding&&bot.checkRun("autoFarmersmarketAnimalBreeding",runId)){
        bot.setAction("autoFarmersmarketAnimalBreeding ("+step+")");
        var help,help2,action=null,listeningEvent=null;
        switch(step){
        case 1:{ // open farmersmarket
            if((help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&(((help[1]=="r")&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP))||((help[1]=="e")&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP)))){
                if(!unsafeData.gameLocation.check("farmersmarket")){
                    action=function(){ click($("speedlink_farmersmarket")); };
                    listeningEvent="gameFarmersmarketOpened";
                }else{
                    autoFarmersmarketAnimalBreeding(runId,step+1,step4_6loop);
                }
            } else {
                autoFarmersmarketAnimalBreeding(runId,7,step4_6loop); // -> exit
            }

        break;}
        case 2:{ // open farmersmarket building
            if( (help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&(help[1]=="r"||help[1]=="e")) {
                //GM_logInfo("autoFarmersmarketAnimalBreeding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Opening Step:"); //TODO text
                help=/-(\d)$/.exec(handled.zoneNrF)[1]; // determine which building to work on
                if($("farmersmarket_pos"+help+"_inner").style.display != "block"){
                    action=function(){ click($("farmersmarket_pos"+help+"_click")); };
                    listeningEvent="gameFarmersmarketOpened"+help;
                }else{
                    GM_logInfo("autoFarmersmarketAnimalBreeding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Opening Step:"); //TODO text
                    autoFarmersmarketAnimalBreeding(runId,step+1,step4_6loop);
                }
            }else{
                autoFarmersmarketAnimalBreeding(runId,7,step4_6loop); // -> exit
            }
        break;}
        case 3:{ // open slot
            help = $("pets_pet_needs").children[handled.slot-5];
            if(help) {
                action=function(){ click(help);};
                listeningEvent="gameAnimalBreedingOpenSlot";
            } else {
                autoFarmersmarketAnimalBreeding(runId,7,step4_6loop); // -> exit
            }

        break;}
        case 4:{
            //open pets need slot
            //Schleife  step 4-6, bis Button "Einwerfen erscheint"
            var productStockAmount = unsafeData.prodStock[0][zoneList[handled.zoneNrL][0][0]];
            //gesetze Bedürfnisse ermitteln und von Regalmenge abziehen
            for (var i in unsafeWindow.pets.care_set) {
                if(!unsafeWindow.pets.care_set.hasOwnProperty(i)){ continue; }
                if (unsafeWindow.pets.care_set[i]==zoneList[handled.zoneNrL][0][0]) {
                    productStockAmount--;
                }
            }
            help = $("pets_need_slot");
            if (productStockAmount > 0){
                if((step4_6loop<=3)&&(help=help.querySelector('div[onclick*="pets.needSelection('+step4_6loop+')"]'))&&(!help.querySelector('.img'))
                    ) {
                    if(help) {
                        action=function(){ click(help);};
                        listeningEvent="gameAnimalBreedingNeedSelection";
                    }
                }else{
                    GM_logInfo("autoFarmersmarketAnimalBreeding","runId="+runId+" step="+step,"","Zone not empty."); //TODO text
                    autoFarmersmarketAnimalBreeding(runId,7,step4_6loop); // -> exit
                }
            } else {
                zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                updateQueueBox(handled.zoneNrS);
                autoFarmersmarketAnimalBreeding(runId,7,step4_6loop); // -> exit
            }
        break;}

        case 5:{ //Product select
            if((help=$("pets_need_slot_selection")) && (handled.zoneNrF == "farmersmarket-4")){
                help2=help.querySelector('div[onclick*="pets.needSelectionSet('+zoneList[handled.zoneNrL][0][0]+')"]');
                var helpDown=$("pets_need_selection_navi_down");
                var helpUp=$("pets_need_selection_navi_up");
                if(help2) {
                    // link is visible, can be clicked on
                    action=function(){ click(help2); setNextQueueItem(handled.zoneNrS);};
                    listeningEvent="gameAnimalBreedingneedSelectionSet";
                }else if(helpDown || helpUp) {
                    // link not visible, we need to scroll
                    if (directionDown && helpDown.style.display=="none") { // Scroll-Down-Mode, but at bottom?
                        directionDown = false; // Switch to Scroll-Up-Mode
                    } else if (!directionDown && helpUp.style.display=="none") { // Scroll-Up-Mode, but at top?
                        directionDown = true; // Switch to Scroll-Down-Mode
                    }
                    action=function(){
                        if (directionDown) { // In Scroll-Down-Mode?
                            click(helpDown); // Scroll down
                        } else {
                            click(helpUp);   // Scroll up
                        }
                    };
                    step--;
                    listeningEvent="gameNeedSelectionNavi";
                }else{
                    autoFarmersmarketAnimalBreeding(runId,7,step4_6loop); // -> exit
                }
            }
        break;}

        case 6:{
            if(help=$("pets_need_slot").querySelector(".button_new"))  {
              // button is visible, can be clicked on
              action=function(){
                  click(help);
              };
              listeningEvent="gameAnimalBreedCare";

            } else {
                // button isn't visible, product-slots not filled
                autoFarmersmarketAnimalBreeding(runId,4,step4_6loop+1);
            }
            break;}

        case 7:{
            GM_logInfo("autoFarmersmarketAnimalBreeding","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"start other slot or exit");
            var zoneNrS,zoneNrL,help,next=false;
            if(unsafeData.zones.isMultiSlot(handled.zoneNrF)){
                for(var slot=5;slot<=unsafeData.BUILDING_SLOTS[getZoneType(handled.zoneNrF)];slot++){
                    zoneNrS=handled.zoneNrF+"."+slot;
                    if((help=unsafeData.readyZone[zoneNrS])&&help[2]){
                        zoneNrL=getZoneListId(zoneNrS);
                        if(((help[1]=="r")&&((zoneList[zoneNrL][0][0]!=PRODSTOP)||!settings.get("account","disableCropFields")))||((help[1]=="e")&&(zoneList[zoneNrL][0][0]!=PRODSTOP))){
                            next=true;
                            handled.set(zoneNrS);
                            break;
                        }
                    }
                }
            }
            GM_logInfo("autoFarmersmarketAnimalBreeding","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"step7"+next+handled.zoneNrS);
            if(next){
                autoFarmersmarketAnimalBreeding(runId,1,1);
            }else{
                help=/-(\d)$/.exec(handled.zoneNrF)[1];
                var div=$("farmersmarket_pos"+help+"_inner").querySelector(".big_close");
                if (!div) {
                    var help2=$("farmersmarket_pos"+help+"_inner").querySelectorAll(".mini_close");
                    for (var i=0;i<help2.length;i++) {
                        if (help2[i].getAttribute("onclick")=="pets.close()"){
                            div = help2[i];
                            break;
                        }
                    }
                }
                autoZoneFinish(runId,div);
            }
        break;}
        }
        if(listeningEvent){
            document.addEventListener(listeningEvent,function(listeningEvent,runId,step){
                return function(){
                    document.removeEventListener(listeningEvent,arguments.callee,false);
                    window.setTimeout(autoFarmersmarketAnimalBreeding,settings.getPause(),runId,step+1,step4_6loop);
                };
            }(listeningEvent,runId,step),false);
        }
        if(action){ action(); }
        help=null;listeningEvent=null;action=null;
    }
 }catch(err){ GM_logError("autoFarmersmarketAnimalBreeding","runId="+runId+" step="+step,"",err); }
}

//autoFarmersmarketSpeedEating
function autoFarmersmarketSpeedEating(runId, step){
try{
    GM_log("autoFarmersmarketSpeedEating runId="+runId+" step="+step+" handled.zoneNrS="+handled.zoneNrS);
    if(settings.get("account","botUseSpeedEating")&&bot.checkRun("autoFarmersmarketSpeedEating",runId)){
        bot.setAction("autoFarmersmarketSpeedEating ("+step+")");
        var help,help2,action=null,listeningEvent=null;
        switch(step){
        case 1:{ // open farmersmarket
            if((help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&( (help[1]=="r")||(help[1]=="e"))) {
                if(!unsafeData.gameLocation.check("farmersmarket")){
                    GM_logInfo("autoFarmersmarketSpeedEating","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Goto Farmersmarket");
                    action=function(){ click($("speedlink_farmersmarket")); };
                    listeningEvent="gameFarmersmarketOpened";
                }else{
                    autoFarmersmarketSpeedEating(runId,step+1);
                }
            } else {
                autoFarmersmarketSpeedEating(runId,7); // -> exit
            }
        break;}
        case 2:{ // open farmersmarket building
            if( (help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&(help[1]=="r"||help[1]=="e")) {
                help=/-(\d)$/.exec(handled.zoneNrF)[1]; // determine which building to work on
                if($("farmersmarket_pos"+help+"_inner").style.display != "block"){
                    GM_logInfo("autoFarmersmarketSpeedEating","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Open SpeedEating ");
                    action=function(){ click($("farmersmarket_pos"+help+"_click")); };
                    listeningEvent="gameFarmersmarketOpened"+help;
                }else{
                    GM_logInfo("autoFarmersmarketSpeedEating","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" SpeedEating is open");
                    autoFarmersmarketSpeedEating(runId,step+1);
                }
            }else{
                autoFarmersmarketSpeedEating(runId,7); // -> exit
            }
        break;}
        case 3:{ // open slot
            GM_logInfo("autoFarmersmarketSpeedEating","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" look for viewer and click viewers");
            var item = unsafeWindow.farmersmarket_data.foodcontest;
            var help;
            for (var i = 1; i<=4&&!help;i++) {
                if(item.blocks[i].block) { continue; }
                for (var j in item.blocks[i].pin){
                    if(!item.blocks[i].pin.hasOwnProperty(j)){ continue; }
                    if(item.blocks[i].pin[j].remain<0) {
                        help="foodcontest_block_crowd"+i+"_pin_"+j;
                        break;
                    }
                }
            }
            if (help = $(help)) {
                step=step-1;
                action=function(){ click(help);};
                listeningEvent="gameSpeedEatingCacheClick";
            } else {
                autoFarmersmarketSpeedEating(runId,4); // feed fighter
            }
        break;}
        case 4:{ // feed fighter
            GM_logInfo("autoFarmersmarketSpeedEating","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" feed fighter");
            var help = $("foodcontest_stage_fighter_bubble");
            if (help&&help.style.display != "none"){
                step=2; //new bubbles
                action=function(){ click(help);};
                // feed fighter
                listeningEvent="gameSpeedEatingFeedFighter";
            } else {
                autoFarmersmarketSpeedEating(runId,5); // Mergin
            }
        break;}
        case 5:{ // Mergin
            GM_logInfo("autoFarmersmarketSpeedEating","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Merge Cache");
            var help = $("foodcontest_merch_bubble");
            if (help&&help.style.display != "none"){
                action=function(){ click(help);};
                listeningEvent="gameSpeedEatingOpenMergeCash";
            } else {
                autoFarmersmarketSpeedEating(runId,7); // -> exit
            }
        break;}
        case 6: { // Close GlobalBox sale overview
            GM_logInfo("autoFarmersmarketSpeedEating","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" close sale overview");
            if((help=$("globalbox")) && (help.style.display == "block")) {
                unsafeWindow.hideDiv('globalbox');
                unsafeWindow.hideDiv('globaltransp');
                autoFarmersmarketBuilding(runId,7); // -> exit
            }else{
                autoFarmersmarketBuilding(runId,7); // -> exit
            }
        break;}
        case 7:{
            GM_logInfo("autoFarmersmarketSpeedEating","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"start other slot or exit");
            var help=/-(\d)$/.exec(handled.zoneNrF)[1];
            var div=$("farmersmarket_pos"+help+"_inner").querySelector(".big_close");
            if (!div) {
                div=$("farmersmarket_pos"+help+"_inner").querySelector(".mini_close");
            }
            autoZoneFinish(runId,div);
        break;}
        }
        if(listeningEvent){
            document.addEventListener(listeningEvent,function(listeningEvent,runId,step){
                return function(){
                    document.removeEventListener(listeningEvent,arguments.callee,false);
                    window.setTimeout(autoFarmersmarketSpeedEating,settings.getPause(),runId,step+1);
                };
            }(listeningEvent,runId,step),false);
        }
        if(action){ action(); }
        help=null;listeningEvent=null;action=null;
    }
 }catch(err){ GM_logError("autoFarmersmarketSpeedEating","runId="+runId+" step="+step,"",err); }
}

//autoFarmersmarketButterfly
function autoFarmersmarketButterfly(runId, step){
try{
    GM_log("autoFarmersmarketButterfly runId="+runId+" step="+step+" handled.zoneNrS="+handled.zoneNrS);
    if(settings.get("account","botUseButterfly")&&bot.checkRun("autoFarmersmarketButterfly",runId)){
        bot.setAction("autoFarmersmarketButterfly ("+step+")");
        var help,help2,action=null,listeningEvent=null;
        switch(step){
        case 1:{ // open farmersmarket
            if((help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&( (help[1]=="r")||(help[1]=="e"))) {
                GM_logInfo("autoFarmersmarketButterfly","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Goto Farmersmarket");
                action=function(){ click($("speedlink_farmersmarket2")); };
                listeningEvent="gameFarmersmarketOpened";
            } else {
                autoFarmersmarketButterfly(runId,5); // -> exit
            }
        break;}
        case 2:{ // open farmersmarket building
            if( (help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&(help[1]=="r"||help[1]=="e")) {
                help=/-(\d)$/.exec(handled.zoneNrF)[1]; // determine which building to work on
                if($("farmersmarket_pos"+help+"_inner").style.display != "block"){
                    GM_logInfo("autoFarmersmarketButterfly","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Open Butterfly ");
                    action=function(){ click($("farmersmarket_pos"+help+"_click")); };
                    listeningEvent="gameFarmersmarketOpened"+help;
                }else{
                    GM_logInfo("autoFarmersmarketButterfly","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Butterfly is open");
                    autoFarmersmarketButterfly(runId,step+1);
                }
            }else{
                autoFarmersmarketButterfly(runId,5); // -> exit
            }
        break;}
        case 3:{ // open slot
            GM_logInfo("autoFarmersmarketButterfly","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" butterfly care commit");
            help = $("butterfly_slot"+handled.slot+"_button_care");
            if (help && help.style.display == "block") {
                action=function(){ click(help);};
                listeningEvent="gameButterflycareBreedCommit";
            } else {
                autoFarmersmarketButterfly(runId,5); // -> exit
            }
        break;}
        case 4: { // Butterfly care
            GM_logInfo("autoFarmersmarketButterfly","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" butterfly care");
            if((help=$("globalbox")) && (help.style.display == "block")) {
                action=function(){ click($("globalbox_button1")); }
                listeningEvent="gameButterflyCare";
            }else{
                autoFarmersmarketBuilding(runId,5); // -> exit
            }
        break;}
        case 5:{
            GM_logInfo("autoFarmersmarketButterfly","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"start other slot or exit");
            var zoneNrS,zoneNrL,help,next=false;
            if(unsafeData.zones.isMultiSlot(handled.zoneNrF)){
                for(var slot=1;slot<=unsafeData.BUILDING_SLOTS[getZoneType(handled.zoneNrF)];slot++){
                    zoneNrS=handled.zoneNrF+"."+slot;
                    if((help=unsafeData.readyZone[zoneNrS])&&help[2]){
                        zoneNrL=getZoneListId(zoneNrS);
                        if(((help[1]=="r")&&((zoneList[zoneNrL][0][0]!=PRODSTOP)||!settings.get("account","disableCropFields")))||((help[1]=="e")&&(zoneList[zoneNrL][0][0]!=PRODSTOP))){
                            next=true;
                            handled.set(zoneNrS);
                            break;
                        }
                    }
                }
            }
            if(next){
                autoFarmersmarketButterfly(runId,1,1);
            }else{
                help=/-(\d)$/.exec(handled.zoneNrF)[1];
                var div=$("farmersmarket_pos"+help+"_inner").querySelector(".big_close");
                if (!div) {
                    var help2=$("farmersmarket_pos"+help+"_inner").querySelectorAll(".mini_close");
                    for (var i=0;i<help2.length;i++) {
                        if (help2[i].getAttribute("onclick")=="butterfly.close()"){
                            div = help2[i];
                            break;
                        }
                    }
                }
                autoZoneFinish(runId,div);
            }
        break;}
        }

        if(listeningEvent){
            document.addEventListener(listeningEvent,function(listeningEvent,runId,step){
                return function(){
                    document.removeEventListener(listeningEvent,arguments.callee,false);
                    window.setTimeout(autoFarmersmarketButterfly,settings.getPause(),runId,step+1);
                };
            }(listeningEvent,runId,step),false);
        }
        if(action){ action(); }
        help=null;listeningEvent=null;action=null;
    }
 }catch(err){ GM_logError("autoFarmersmarketButterfly","runId="+runId+" step="+step,"",err); }
}

//autoFarmersmarketCowracingFeed
function autoFarmersmarketCowracingFeed(runId, step){
try{
    GM_log("autoFarmersmarketCowracingFeed runId="+runId+" step="+step+" handled.zoneNrS="+handled.zoneNrS);
    if(settings.get("account","botUseCowracingFeed")&&bot.checkRun("autoFarmersmarketCowracingFeed",runId)){ //todo true
        bot.setAction("autoFarmersmarketCowracingFeed ("+step+")");
        var help,help2,action=null,listeningEvent=null;
        switch(step){
        case 1:{ // open farmersmarket
            if((help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&(((help[1]=="r")&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP))||((help[1]=="e")&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP)))){
                if (parseInt(unsafeWindow.farm,10)==100) {
                        autoFarmersmarketCowracingFeed(runId,step+1);
                } else {
                    GM_logInfo("autoFarmersmarketCowracing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Goto Farmersmarket2");
                    action=function(){ click($("speedlink_farmersmarket2")); };
                    listeningEvent="gameFarmersmarketOpened";
                }
            } else {
                autoFarmersmarketCowracingFeed(runId,6); // -> exit
            }
        break;}

        case 2:{ // open farmersmarket building
            if( (help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&(help[1]=="r"||help[1]=="e")) {
                help=/-(\d)$/.exec(handled.zoneNrF)[1]; // determine which building to work on
                if($("farmersmarket_pos"+help+"_inner").style.display != "block"){
                    GM_logInfo("autoFarmersmarketCowracingFeed","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Open Cowracing");
                    action=function(){ click($("farmersmarket_pos"+help+"_click")); };
                    listeningEvent="gameFarmersmarketOpened"+help;
                }else{
                    GM_logInfo("autoFarmersmarketCowracingFeed","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Cowracing is open");
                    autoFarmersmarketCowracingFeed(runId,step+1);
                }
            }else{
                autoFarmersmarketCowracingFeed(runId,6); // -> exit
            }
        break;}
        case 3:{ // open cow
            GM_logInfo("autoFarmersmarketCowracingFeed","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" open cow");
            help = $("cowracing_cowslots_navi").querySelector('div[onclick*="cowracing.setCowSlot('+(handled.slot-4)+')');
            if (help) {
                action=function(){ click(help);};
                listeningEvent="gameCowRacingOpenCow";
            } else {
                autoFarmersmarketCowracingFeed(runId,6); // -> exit
            }

        break;}
        case 4:{ // cowracing open feedSelection
            GM_logInfo("autoFarmersmarketCowracingFeed","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" open feedSelection");
            var help = $("cowracing_feedbutton");
            if (help){
                action=function(){ click(help);};
                listeningEvent="gameCowRacingOpenFeedSeceltion";
            }
        break;}
        case 5:{ // feed cow
            GM_logInfo("autoFarmersmarketCowracingFeed","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Select feed" + zoneList[handled.zoneNrL][0][0]);
            if(help=$("cowracing_feed_selection")){
                help2=help.querySelector('div[onclick*="cowracing.feedCow('+zoneList[handled.zoneNrL][0][0]+')"]');
                var helpDown=$("cowracing_feed_selection_navi_down");
                var helpUp=$("cowracing_feed_selection_navi_up");
                if(help2) {
                    // link is visible, can be clicked on
                    action=function(){ click(help2); setNextQueueItem(handled.zoneNrS);};
                    listeningEvent="gameCowRacingFeedCow";
                }else if(helpDown || helpUp) {
                    // link not visible, we need to scroll
                    if (directionDown && helpDown.style.display=="none") { // Scroll-Down-Mode, but at bottom?
                        directionDown = false; // Switch to Scroll-Up-Mode
                    } else if (!directionDown && helpUp.style.display=="none") { // Scroll-Up-Mode, but at top?
                        directionDown = true; // Switch to Scroll-Down-Mode
                    }
                    action=function(){
                        if (directionDown) { // In Scroll-Down-Mode?
                            click(helpDown); // Scroll down
                        } else {
                            click(helpUp);   // Scroll up
                        }
                    };
                    step--;
                    listeningEvent="gameCowRacingfeedSelectionNavi";
                }else{
                    autoFarmersmarketCowracingFeed(runId,6); // -> exit
                }
            }

        break;}
        case 6:{
            GM_logInfo("autoFarmersmarketCowracingFeed","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"start other SLOT or exit");
            var zoneNrS,zoneNrL,help,next=false;
            if(unsafeData.zones.isMultiSlot(handled.zoneNrF)){
                //for(var slot=5;slot<=unsafeData.BUILDING_SLOTS[getZoneType(handled.zoneNrF)];slot++){
                for(var slot=5;slot<18;slot++){
                    zoneNrS=handled.zoneNrF+"."+slot;
                    if((help=unsafeData.readyZone[zoneNrS])&&help[2]){
                        zoneNrL=getZoneListId(zoneNrS);
                        if(((help[1]=="r")&&((zoneList[zoneNrL][0][0]!=PRODSTOP)||!settings.get("account","disableCropFields")))||((help[1]=="e")&&(zoneList[zoneNrL][0][0]!=PRODSTOP))){
                            next=true;
                            handled.set(zoneNrS);
                            break;
                        }
                    }
                }
            }

            if(next){
                autoFarmersmarketCowracingFeed(runId,1);
            }else{
                help=/-(\d)$/.exec(handled.zoneNrF)[1];
                var div=$("farmersmarket_pos"+help+"_inner").querySelector(".big_close");
                if (!div) {
                    var help2=$("farmersmarket_pos"+help+"_inner").querySelectorAll(".mini_close");
                    for (var i=0;i<help2.length;i++) {
                        if (help2[i].getAttribute("onclick")=="cowracing.close()"){
                            div = help2[i];
                            break;
                        }
                    }
                }
                if (!div) {
                    autoZoneFinish(runId);
                } else {
                    autoZoneFinish(runId,div);
                }

            }
        break;}
        }
        if(listeningEvent){
            document.addEventListener(listeningEvent,function(listeningEvent,runId,step){
                return function(){
                    document.removeEventListener(listeningEvent,arguments.callee,false);
                    window.setTimeout(autoFarmersmarketCowracingFeed,settings.getPause(),runId,step+1);
                };
            }(listeningEvent,runId,step),false);
        }
        if(action){ action(); }
        help=null;listeningEvent=null;action=null;
    }
 }catch(err){ GM_logError("autoFarmersmarketCowracingFeed","runId="+runId+" step="+step,"",err); }
}

//autoFarmersmarketCowracingRacing
function autoFarmersmarketCowracingRacing(runId, step, type){
try{
    GM_log("autoFarmersmarketCowracingRacing runId="+runId+" step="+step+" handled.zoneNrS="+handled.zoneNrS);
    if(settings.get("account","botUseFarmersmarket")&&bot.checkRun("autoFarmersmarketCowracingRacing",runId)){
        bot.setAction("autoFarmersmarketCowracingRacing ("+step+")");
        var help,help2,action=null,listeningEvent=null;
        var body=["body","head","foot"];
        var equip = { "normal":[11,1,6], "rain": [20,16,9], "mud":[15,3,18], "cold":[13,16,18], "heat":[20,5,8] };

        switch(step){
        case 1:{ // open farmersmarket
            if((help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&(((help[1]=="r")&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP))||((help[1]=="e")&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP)))){
                if (parseInt(unsafeWindow.farm,10)==100) {
                        autoFarmersmarketCowracingRacing(runId,step+1,type);
                } else {
                    GM_logInfo("autoFarmersmarketCowracing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Goto Farmersmarket2");
                    action=function(){ click($("speedlink_farmersmarket2")); };
                    listeningEvent="gameFarmersmarketOpened";
                }
            } else {
                autoFarmersmarketCowracingRacing(runId,11,type); // -> exit
            }
        break;}

        case 2:{ // open farmersmarket building
            if( (help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&(help[1]=="r"||help[1]=="e")) {
                help=/-(\d)$/.exec(handled.zoneNrF)[1]; // determine which building to work on
                if($("farmersmarket_pos"+help+"_inner").style.display != "block"){
                    GM_logInfo("autoFarmersmarketCowracingRacing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Open Cowracing");
                    action=function(){ click($("farmersmarket_pos"+help+"_click")); };
                    listeningEvent="gameFarmersmarketOpened"+help;
                }else{
                    GM_logInfo("autoFarmersmarketCowracingRacing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Cowracing is open");
                    autoFarmersmarketCowracingRacing(runId,step+1,type);
                }
            }else{
                autoFarmersmarketCowracingRacing(runId,11,type); // -> exit
            }
        break;}
        case 3:{ // open cow
            GM_logInfo("autoFarmersmarketCowracingRacing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" open cow");
            help = $("cowracing_cowslots_navi").querySelector('div[onclick*="cowracing.setCowSlot('+(handled.slot-4-15)+')');
            if (help) {
                action=function(){ click(help);};
                listeningEvent="gameCowRacingOpenCow";
            } else {
                autoFarmersmarketCowracingRacing(runId,11,type); // -> exit
            }

        break;}
        case 4:{ // cowracing equip
            GM_logInfo("autoFarmersmarketCowracingRacing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" cowracing unequip");
            var item=unsafeWindow.cowracing.data.data;
            var next = true;

            if (item.cows[handled.slot-4-15].ladder.rank == 1) { //not equip
                for (var i = 0; i<3; i++) {
                    if (item.cows[handled.slot-4-15]["slot_"+body[i]] == 0 ) {
                        continue;
                    }
                    help = $("cowracing_unequipslot"+body[i]);
                    if (help) {
                        action=function(){ click(help);};
                        step = 3; next = false;
                        listeningEvent="gameCowRacingUnequipItem";
                        break;
                    }
                }
                if (next) {
                    window.setTimeout(autoFarmersmarketCowracingRacing,settings.getPause(),runId,8,type); //cow racing
                }
            } else if (item.cows[handled.slot-4-15].level > 1) {
                window.setTimeout(autoFarmersmarketCowracingRacing,settings.getPause(),runId,step+1,type);
            } else {
                window.setTimeout(autoFarmersmarketCowracingRacing,settings.getPause(),runId,8,type);//cow racing
            }
        break;}

        case 5: { //open equip
            GM_logInfo("autoFarmersmarketCowracingRacing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Open equip" + zoneList[handled.zoneNrL][0][0]);
            var next = true;
            var item=unsafeWindow.cowracing.data.data;
            var weather=item.cows[handled.slot-4-15].lanestatus;

            for (var i = 0; i<3; i++) {
                next = true;
                if (item.cows[handled.slot-4-15]["slot_"+body[i]] > 0 && item.items[item.cows[handled.slot-4-15]["slot_"+body[i]]].type==equip[weather][i]) {
                    continue;
                } else {
                    next = false;
                    break;
                }
            }

            if (next) {
                window.setTimeout(autoFarmersmarketCowracingRacing,settings.getPause(),runId,8,type); //open cowracing
            } else {
                type = body[i];
                help = $("cowracing_cowslot").querySelector("."+type);
                if (help) {
                    action=function(){ click(help);};
                    listeningEvent="gameCowRacingOpenItemShhop";
                } else {
                    autoFarmersmarketCowracingRacing(runId,11,type); // -> exit
                }
            }
        break;}
        case 6:{ // open Itemshop
            GM_logInfo("autoFarmersmarketCowracingRacing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Open Itemshop" + zoneList[handled.zoneNrL][0][0]);
            var item=unsafeWindow.cowracing.data.data;
            var weather=item.cows[handled.slot-4-15].lanestatus;
            var bIndex=body.indexOf(type);

            for (var j in item.items) {
               if (!item.items.hasOwnProperty(j)) {
                   continue;
               }
               if (item.items[j].type == equip[weather][bIndex] && item.items[j].stock == 1 ) {
                   break;
               }
           }

           if (item.items[j].type == equip[weather][bIndex] && item.items[j].stock == 1 ) {
               help=$("cowracing_itemshop").querySelector('div[onclick*="cowracing.equipItem('+j+')"]');
               if (help) {
                   step=4;
                   action=function(){ click(help);};
                   listeningEvent="gameCowRacingEquipItem";
               } else {
                   autoFarmersmarketCowracingRacing(runId,11,type); // -> exit
               }

           } else {
               help=$("cowracing_itemshop").querySelector('div[onclick*="cowracing.itemShopBuyCommit('+equip[weather][bIndex]+')"]');
               if(help){
                   action=function(){ click(help); };
                   listeningEvent="gameCowRacingitemShopBuyCommit";
               }
           }
        break;}

        case 7:{ //buy
            GM_logInfo("autoFarmersmarketCowracingRacing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Buy item" + zoneList[handled.zoneNrL][0][0]);
            var item=unsafeWindow.cowracing.data.data;
            var weather=item.cows[handled.slot-4-15].lanestatus;
            var bIndex=body.indexOf(type);

            help =$("globalbox").querySelector('button[onclick*="cowracing.buyItem('+equip[weather][bIndex]+')"]');
            if (help){
                step = 5
                action = function(){ click(help); };
                listeningEvent="gameCowRacingBuyItem";
            }
        break;}

        case 8:{ // open cowracing
            GM_logInfo("autoFarmersmarketCowracingRacing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Open cowracing" + zoneList[handled.zoneNrL][0][0]);
            help = $("cowracing_racebutton");
            if (help) {
                action=function(){ click(help);};
                listeningEvent="gameCowRacingOpenCowRacingSelection";
            } else {
                autoFarmersmarketCowracingRacing(runId,11,type); // -> exit
            }
        break;}
        case 9:{ // start cowracing
            GM_logInfo("autoFarmersmarketCowracingRacing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Start cowracing" + zoneList[handled.zoneNrL][0][0]);
            help = $("cowracing_raceselection_startrace");
            if (help) {
                action=function(){ click(help); };
                listeningEvent="gameCowRacingOpenStartCowracing";
            } else {
                autoFarmersmarketCowracingRacing(runId,11,type); // -> exit
            }
        break;}

        case 10: { //close racing window
            GM_logInfo("autoFarmersmarketBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>close summary");
            if((help=$("globalbox")) && (help.style.display == "block")) {
                unsafeWindow.hideDiv('globalbox');
                unsafeWindow.hideDiv('globaltransp');
                autoFarmersmarketCowracingRacing(runId,11); // -> exit
            }else{
                autoFarmersmarketCowracingRacing(runId,11); // -> exit
            }
        break;}
        case 11:{
            GM_logInfo("autoFarmersmarketCowracingRacing","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"start other SLOT or exit");
            var zoneNrS,zoneNrL,help,next=false;
            if(unsafeData.zones.isMultiSlot(handled.zoneNrF)){
                for(var slot=18;slot<=unsafeData.BUILDING_SLOTS[getZoneType(handled.zoneNrF)];slot++){
                    zoneNrS=handled.zoneNrF+"."+slot;
                    if((help=unsafeData.readyZone[zoneNrS])&&help[2]){
                        zoneNrL=getZoneListId(zoneNrS);
                        if(((help[1]=="r")&&((zoneList[zoneNrL][0][0]!=PRODSTOP)||!settings.get("account","disableCropFields")))||((help[1]=="e")&&(zoneList[zoneNrL][0][0]!=PRODSTOP))){
                            next=true;
                            handled.set(zoneNrS);
                            break;
                        }
                    }
                }
            }

            if(next){
                autoFarmersmarketCowracingRacing(runId,1,type);
            }else{
                help=/-(\d)$/.exec(handled.zoneNrF)[1];
                var div=$("farmersmarket_pos"+help+"_inner").querySelector(".big_close");
                if (!div) {
                    var help2=$("farmersmarket_pos"+help+"_inner").querySelectorAll(".mini_close");
                    for (var i=0;i<help2.length;i++) {
                        if (help2[i].getAttribute("onclick")=="cowracing.close()"){
                            div = help2[i];
                            break;
                        }
                    }
                }
                if (!div) {
                    autoZoneFinish(runId);
                } else {
                    autoZoneFinish(runId,div);
                }
            }
        break;}
        }
        if(listeningEvent){
            document.addEventListener(listeningEvent,function(listeningEvent,runId,step){
                return function(){
                    document.removeEventListener(listeningEvent,arguments.callee,false);
                    if (step == 9){
                        window.setTimeout(autoFarmersmarketCowracingRacing,2000,runId,step+1,type);
                    } else {
                        window.setTimeout(autoFarmersmarketCowracingRacing,settings.getPause(),runId,step+1,type);
                    }
                };
            }(listeningEvent,runId,step),false);
        }
        if(action){ action(); }
        help=null;listeningEvent=null;action=null;
    }
 }catch(err){ GM_logError("autoFarmersmarketCowracingRacing","runId="+runId+" step="+step,"",err); }
}

//{"zoneNrS":"farmersmarket-6.1","slot":1,"zoneNrF":"farmersmarket-6","farmNr":null,"zoneNr":"farmersmarket","zoneNrL":"farmersmarket-6.1","zoneBuildingTyp":8}
function autoFarmersmarketFishing(runId, step, type){
try{
    GM_log("autoFarmersmarketFishing runId="+runId+" step="+step+" handled.zoneNrS="+handled.zoneNrS);
    if(settings.get("account","botUseFishing")&&bot.checkRun("autoFarmersmarketFishing",runId)){
        bot.setAction("autoFarmersmarketFishing ("+step+")");
        var help,help2,action=null,listeningEvent=null;
        switch(step){
        case 1: // open farmersmarket
            if((help=unsafeData.readyZone[handled.zoneNrS])&&(zoneList[handled.zoneNrS][0][0]!=PRODSTOP && zoneList[handled.zoneNrS][1][0]!=PRODSTOP && zoneList[handled.zoneNrS][2][0]!=PRODSTOP )) {
                if (parseInt(unsafeWindow.farm,10)==100) {
                        autoFarmersmarketFishing(runId,step+1,type);
                } else {
                    GM_logInfo("autoFarmersmarketFishing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Goto Farmersmarket2");
                    action=function(){ click($("speedlink_farmersmarket2")); };
                    listeningEvent="gameFarmersmarketOpened";
                }
            } else {
                autoFarmersmarketFishing(runId,9,type); // -> exit
            }
        break;
        case 2: // open farmersmarket building
            if( (help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&(help[1]=="r"||help[1]=="e")) {
                help=/-(\d)$/.exec(handled.zoneNrF)[1]; // determine which building to work on

                if($("farmersmarket_pos"+help+"_inner").style.display != "block"){
                    GM_logInfo("autoFarmersmarketFishing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Open Fishing");
                    action=function(){ click($("farmersmarket_pos"+help+"_click")); };
                    //listeningEvent="gameFarmersmarketOpened"+help;
                    listeningEvent="gameFishingBuildProduction";
                }else{
                    GM_logInfo("autoFarmersmarketFishing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Fishing is open");
                    autoFarmersmarketFishing(runId,step+1,type);
                }
            }else{
                autoFarmersmarketFishing(runId,9,type); // -> exit
            }
        break;
        case 3: //open pier
            GM_logInfo("autoFarmersmarketFishing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" open pier");
            if ($("fishing").className=="production") {
                help = $("fishing_view").querySelector('div[onclick*="fishing.setView(\'pier\')"]');
                if (help) {
                    action=function(){ click(help)};
                    listeningEvent="gameFishingBuildPier";
                } else {
                    autoFarmersmarketFishing(runId,9,type); // -> exit
                }
            } else {
                autoFarmersmarketFishing(runId,step + 1 ,type);
            }
        break;
        case 4: //harvest
            if (unsafeWindow.fishing.data.data.fishingslots[handled.slot-4].duration>0) {
                GM_logInfo("autoFarmersmarketFishing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" catch the fishing rod");
                help=$("fishing_fishingslot"+(handled.slot-4));
                if (help) {
                    action=function(){ click(help)};
                    listeningEvent="gameFishingFinishFishing";
                } else {
                    autoFarmersmarketFishing(runId,9,type); // -> exit
                }
            } else {
                window.setTimeout(autoFarmersmarketFishing,settings.getPause(),runId,7,type); // STart
            }
        break;
        case 5: //goodbye fish
            GM_logInfo("autoFarmersmarketFishing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" goodbye fish");
            help = $("fishing_reward").querySelector('div[onclick*="fishing.goodbyeFish()"]');

            if (help) {
                action=function(){ click(help)};
                listeningEvent="gameFishingGoodbyeFish";
            } else {
                autoFarmersmarketFishing(runId,9,type); // -> exit
            }

        break;
        case 6:  //close summary
            GM_logInfo("autoFarmersmarketFishing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>close summary");
            if ($("fishing_goodbye")) {
                unsafeWindow.hideDiv('globalbox');
                unsafeWindow.hideDiv('globaltransp');
                window.setTimeout(autoFarmersmarketFishing,settings.getPause(),runId,step+1,type);
            }else{
                autoFarmersmarketFishing(runId,9,type); // -> exit
            }
        break;
        case 7: //
            //GM_logInfo("autoFarmersmarketFishing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Open fishing selection" + zoneList[handled.zoneNrL][0][0]);
            var foodtype=["category","rarity","item"];
            var FISHING_INPUT=[[900,901,902,903,904,905,906,907,908,909,910,911],
                                 [912,913,914,915,916,917,918,919,920,921],
                                 [1,2,3,4,5,6]];
            var selectionFull=true; var buyItem = true;

            for (var i=0;i<2;i++) {
                if ( unsafeData.prodStock[0][zoneList[handled.zoneNrS][i][0]]>0 ) {
                    unsafeWindow.fishing.fishingSlotSelection[foodtype[i]]=zoneList[handled.zoneNrS][i][0];
                    //unsafeWindow.fishing.setFishingClickSelection(foodtype[i], zoneList[handled.zoneNrS][i][0]);
                } else {
                    for (var j = 0; j<FISHING_INPUT[i].length; j++) {
                        if ( unsafeData.prodStock[0][FISHING_INPUT[i][j]]>0 ) {
                            //unsafeWindow.fishing.setFishingClickSelection(foodtype[i], FISHING_INPUT[i][j]);
                            unsafeWindow.fishing.fishingSlotSelection[foodtype[i]]=FISHING_INPUT[i][j];
                            break;
                        }
                    }
                }
            }
            for (var i in unsafeWindow.fishing.data.data.items) {
                if(!unsafeWindow.fishing.data.data.items.hasOwnProperty(i)){ continue; }
                if (unsafeWindow.fishing.data.data.items[i].type == zoneList[handled.zoneNrS][2][0].toString() &&
                    unsafeWindow.fishing.data.data.items[i].stock == "1" ) {
                    unsafeWindow.fishing.fishingSlotSelection[foodtype[2]]=i;
                    //unsafeWindow.fishing.setFishingClickSelection(foodtype[2],i);
                    buyItem=false;
                    break;
                }
            }

            if (buyItem){
                GM_logInfo("autoFarmersmarketFishing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+"Buy Item" + zoneList[handled.zoneNrL][0][0]);
                unsafeWindow.fishing.shopBuy(zoneList[handled.zoneNrS][2][0]);
                window.setTimeout(autoFarmersmarketFishing,settings.getPause(),runId,step,type);
            } else {
                for (var i = 0; i < 3; i++){
                    if (!unsafeWindow.fishing.fishingSlotSelection.hasOwnProperty(foodtype[i])) {
                        selectionFull=false;
                        zoneList[handled.zoneNrS][i][0]=PRODSTOP;
                        break;
                    }
                }
                if(selectionFull) {
                    GM_logInfo("autoFarmersmarketFishing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Open fishing selection" + zoneList[handled.zoneNrL][0][0]);
                    action=function(){
                        unsafeWindow.fishing.startFishingSelection(handled.slot-4);
                     };
                    listeningEvent="gameFishingStartFishingSelection";
                }  else {
                    autoFarmersmarketFishing(runId,9,type); // -> exit
                }
            }
        break;
        case 8:
            GM_logInfo("autoFarmersmarketFishing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Start Fishing");
            help = $("fishing_start_selection").querySelector('div[onclick*="fishing.startFishing()"]');
            if (help) {
                action=function(){
                    GM_logInfo("autoFarmersmarketFishing","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" Klick Button");
                    click(help);
                 };
                listeningEvent="gameFishingStartFishing";
            } else {
                autoFarmersmarketFishing(runId,9,type); // -> exit
            }

        break;
        case 9:{
            GM_logInfo("autoFarmersmarketFishing","runId="+runId,"zoneNrL="+handled.zoneNrL+" zoneNrS="+handled.zoneNrS,"start other SLOT or exit");
            var zoneNrS,zoneNrL,help,next=false;

            if(unsafeData.zones.isMultiSlot(handled.zoneNrF)){
                for(var slot=5;slot<=unsafeData.BUILDING_SLOTS[getZoneType(handled.zoneNrF)];slot++){
                    if (handled.slot == slot) {continue;}
                    zoneNrS=handled.zoneNrF+"."+slot;
                    if((help=unsafeData.readyZone[zoneNrS])&&help[2]){
                        zoneNrL=getZoneListId(zoneNrS);
                        if(((help[1]=="r")&&((zoneList[zoneNrL][0][0]!=PRODSTOP)||!settings.get("account","disableCropFields")))||((help[1]=="e")&&(zoneList[zoneNrL][0][0]!=PRODSTOP))){
                            next=true;
                            handled.set(zoneNrS);
                            break;
                        }
                    }
                }
            }
            if(next){
                autoFarmersmarketFishing(runId,1,type);
            } else {
                help=/-(\d)$/.exec(handled.zoneNrF)[1];
                var div=$("farmersmarket_pos"+help+"_inner").querySelector(".big_close");
                if (!div) {
                    var help2=$("farmersmarket_pos"+help+"_inner").querySelectorAll(".mini_close");
                    for (var i=0;i<help2.length;i++) {
                        if (help2[i].getAttribute("onclick")=="fishing.close()"){
                            div = help2[i];
                            break;
                        }
                    }
                }
                if (!div) {
                    autoZoneFinish(runId);
                } else {
                    autoZoneFinish(runId,div);
                }
            }
        break;}
        }
        if(listeningEvent){
            document.addEventListener(listeningEvent,function(listeningEvent,runId,step){
                return function(){
                    document.removeEventListener(listeningEvent,arguments.callee,false);
                    if (step == 7 || step == 4){
                        window.setTimeout(autoFarmersmarketFishing,2000,runId,step+1,type);
                    } else {
                        window.setTimeout(autoFarmersmarketFishing,settings.getPause(),runId,step+1,type);
                    }
                };
            }(listeningEvent,runId,step),false);
        }
        if(action){ action(); }
        help=null;listeningEvent=null;action=null;
    }
 }catch(err){ GM_logError("autoFarmersmarketFishing","runId="+runId+" step="+step,"",err); }
}

function autoFoodworld(runId){
try{
    if(!settings.get("account","botUseFoodworld")){
        GM_logInfo("autoFoodworld","runId="+runId,"","BOT OFF");
    }else if(bot.checkRun("autoFoodworld",runId)){
        bot.setAction("autoFoodworld");
        var zoneNrS=getReadyZone("foodworld");
        if(zoneNrS==null){
            GM_logInfo("autoFoodworld","runId="+runId,"readyZone="+implode(unsafeData.readyZone,"autoFoodworld/readyZone"),"No ready zone"); // TODO text
            autoZoneFinish(runId);
        }else{
            handled.set(zoneNrS);
            try{ unsafeWindow.jsTimeStamp=unsafeWindow.Zeit.Client - unsafeWindow.Zeit.Verschiebung; }catch(err){}
            if(unsafeData.readyZone[handled.zoneNrS][2]){
                switch(handled.zoneBuildingTyp){
                case 4:
                    autoFoodworldBuilding(runId,1); break;
                }
            }else{
                GM_logInfo("autoFoodworld","runId="+runId,"handled="+implode(handled,"autoFoodworld/handled")+" readyZone[handled.zoneNrS]="+implode(unsafeData.readyZone[handled.zoneNrS],"autoFoodworld/readyZone"),"Data not ready");
                autoZoneFinish(runId); // TODO else
            }
        }
    }
    GM_logInfo("autoFoodworld","runId="+runId,"handled.zoneNrF="+handled.zoneNrF,"End",1);
}catch(err){
    GM_logError("autoFoodworld","runId="+runId,"",err);
    autoZoneFinish(runId);
}
}
function autoFoodworldBuilding(runId, step){
try{
    if(settings.get("account","botUseFoodworld")&&bot.checkRun("autoFoodworldBuilding",runId)){
        bot.setAction("autoFoodworldBuilding ("+step+")");
        var help,help2,action=null,listeningEvent=null;
        switch(step){
        case 1:{ // check required products
            if((zoneList[handled.zoneNrL][0][0]!=PRODSTOP)&&(help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&((help[1]=="r")||(help[1]=="e"))){
                help2=true;
                help=unsafeData.prodRequire[0][zoneList[handled.zoneNrL][0][0]]
                if(typeof help=="object"){
                    for(var i=0;i<help.length;i++){
                    if(unsafeData.prodStock[help[i][0]][help[i][1]]<help[i][2]){
                            zoneList[handled.zoneNrL].unshift(DEFAULT_ZONELIST_ITEM.clone());
                            updateQueueBox(handled.zoneNrS);
                            help2=false;
                            break;
                        }
                    }
                }
            }
            autoFoodworldBuilding(runId,step+1);
        break;}
        case 2:{ // open foodworld
            if((help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&(((help[1]=="r")&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP||!settings.get("account","disableCropFields")))||((help[1]=="e")&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP)))){
                if(unsafeData.gameLocation.check("foodworld")){
                    autoFoodworldBuilding(runId,step+1);
                }else{
                    action=function(){ click($("speedlink_foodworld")); };
                    listeningEvent="gameFoodworldOpened";
                }
            }else{
                autoFoodworldBuilding(runId,7); // -> exit
            }
        break;}
        case 3:{ // open foodworld building
            if((help=unsafeData.readyZone[handled.zoneNrS])&&help[2]&&(((help[1]=="r")&&((zoneList[handled.zoneNrL][0][0]!=PRODSTOP)||(!settings.get("account","disableCropFields"))))||((help[1]=="e")&&(zoneList[handled.zoneNrL][0][0]!=PRODSTOP)))){
                GM_logInfo("autoFoodworldBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Opening"); //TODO text
                help=/-(\d)$/.exec(handled.zoneNrF)[1]; // determine which building to work on
                if($("food_buildinginner").style.display != "block"){
                    action=function(){ click($("food_pos"+help)); };
                    listeningEvent="gameFoodworldOpened"+help;
                }else if(help != /building_inner(\d)_\d/.exec($("food_buildinginner").className)[1]){
                    GM_logInfo("autoFoodworldBuilding","runId="+runId+" step="+step,"","autoFoodworldBuilding: This is not the right building. Bailing out.")
                    autoFoodworldBuilding(runId,7); // finish (and start over)
                }else{
                    autoFoodworldBuilding(runId,step+1);
                }
            }else{
                autoFoodworldBuilding(runId,7); // -> exit
            }
        break;}
        case 4:{ // harvest
            help=unsafeData.readyZone[handled.zoneNrS];
            if((unsafeData.readyZone[handled.zoneNrS][1]=="r")&&((zoneList[handled.zoneNrL][0][0]!=PRODSTOP)||(!settings.get("account","disableCropFields")))){
                GM_logInfo("autoFoodworldBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Cropping"); //TODO text
                if((help=$("food_slot" + handled.slot + "_ready")) && (help.style.display=="block")){
                    action=function(){ click(help); };
                    listeningEvent="gameFoodworldCropped";
                }else{
                    autoFoodworldBuilding(runId,7); // -> exit
                }
            }else{
                autoFoodworldBuilding(runId,step+1);
            }
        break;}
        case 5:{ // open slot
            help=unsafeData.readyZone[handled.zoneNrS];
            if((zoneList[handled.zoneNrL][0][0]!=PRODSTOP)&&(help[1]=="e")){
                GM_logInfo("autoFoodworldBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Opening slot"); //TODO text
                if((help=$("food_slot" + handled.slot+"_back"))){
                    action=function(){ click($("food_slot" + handled.slot)); };
                    listeningEvent="gameFoodworldSlotOpened";
                }else{
                    autoFoodworldBuilding(runId,7); // -> exit
                }
            }else{
                GM_logInfo("autoFoodworldBuilding","runId="+runId+" step="+step,"","Could not find the empty slot to click on.");
                autoFoodworldBuilding(runId,7);
            }
        break;}
        case 6:{ // click production item
            if(help=$("foodworld_selection")){
                if((help=$("foodworld_selection_item" + zoneList[handled.zoneNrL][0][0])) && (help.classList.contains('link'))){
                    // link is visible, can be clicked on
                    GM_logInfo("autoFoodworldBuilding","runId="+runId+" step="+step,"",handled.zoneNrF.capitalize()+" automat<br>Start production"); //TODO text
                    action=function(){ click(help); };
                    listeningEvent="gameFoodworldStarted";
                    setNextQueueItem(handled.zoneNrS);
                }else if((help=$("foodworld_selection_navi_down")) && (help.className == "link")){
                    action=function(){ click(help); };
                    step--;
                    listeningEvent="gameFoodworldSlotOpened";
                }else{
                    autoFoodworldBuilding(runId,7); // -> exit
                }
            }else{
                autoFoodworldBuilding(runId,7); // -> exit
            }
        break;}
        case 7:{
            var zoneNrS,zoneNrL,help,next=false;
            for(var slot=1;slot<=3;slot++){
                zoneNrS=handled.zoneNrF+"."+slot;
                if((help=unsafeData.readyZone[zoneNrS])&&help[2]){
                    zoneNrL=getZoneListId(zoneNrS);
                    if(((help[1]=="r")&&((zoneList[zoneNrL][0][0]!=PRODSTOP)||!settings.get("account","disableCropFields")))||((help[1]=="e")&&(zoneList[zoneNrL][0][0]!=PRODSTOP))){
                        next=true;
                        handled.set(zoneNrS);
                        break;
                    }
                }
            }
            if(next){
                autoFoodworldBuilding(runId,1);
            }else{
                autoZoneFinish(runId,$("food_buildinginner_close"));
            }
        break;}
        }
        if(listeningEvent){
            document.addEventListener(listeningEvent,function(listeningEvent,runId,step){
                return function(){
                    document.removeEventListener(listeningEvent,arguments.callee,false);
                    window.setTimeout(autoFoodworldBuilding,settings.getPause(),runId,step+1);
                };
            }(listeningEvent,runId,step),false);
        }
        if(action){ action(); }
        help=null;listeningEvent=null;action=null;
    }
 }catch(err){ GM_logError("autoFoodworldBuilding","runId="+runId+" step="+step,"",err); }
}
function checkFarmi(mode){
try{
    GM_logInfo("checkFarmi","mode="+mode,"","Begin",1);
    var farmiNr=null;
    var farmiAmount=0;
    var farmiAcceptRemove=new Array();
    for(var i in unsafeWindow.farmisinfo[0]){
        if(!unsafeWindow.farmisinfo[0].hasOwnProperty(i)){ continue; }
        if(settings.get("account","farmiReject") && !unsafeWindow.farmisinfo[0][i]["sold"] && unsafeWindow.farmisinfo[0][i]["costQuotient"] < settings.get("account","farmiRejectUntilNr")){
            if(farmiNr==null){
                farmiNr=i;
                GM_logInfo("checkFarmi","mode="+mode,"farmiNr="+farmiNr,"farmiReject",0);
            }
            farmiAmount++;
        }else if(settings.get("account","farmiAccept") && !unsafeWindow.farmisinfo[0][i]["sold"] && unsafeWindow.farmisinfo[0][i]["costQuotient"]>=settings.get("account","farmiAcceptAboveNr") && !unsafeWindow.farmisinfo[0][i]["missing"] && ((settings.get("account","farmiAcceptBelowMinValue")&&!unsafeWindow.farmisinfo[0][i]["belowMinRackInit"]) || !unsafeWindow.farmisinfo[0][i]["belowMinRack"])){
            if(farmiNr==null){
                farmiNr=i;
                GM_logInfo("checkFarmi","mode="+mode,"farmiNr="+farmiNr,"farmiAccept",0);
            }
            farmiAmount++;
        }else if(settings.get("account","farmiAccept") && settings.get("account","farmiRemoveMissing") && !unsafeWindow.farmisinfo[0][i]["sold"] && unsafeWindow.farmisinfo[0][i]["costQuotient"]>=settings.get("account","farmiAcceptAboveNr") && unsafeWindow.farmisinfo[0][i]["missing"]){
            farmiAcceptRemove.push([i,unsafeWindow.farmisinfo[0][i]["price"]-unsafeWindow.farmisinfo[0][i]["marketValue"]]);
        }
    }
    if(settings.get("account","farmiRemoveMissing") && farmiAcceptRemove.length > settings.get("account","farmiRemoveMissingAboveNr")){
        farmiAmount += (farmiAcceptRemove.length-settings.get("account","farmiRemoveMissingAboveNr"));
        farmiAcceptRemove.sort(function(a,b){return (parseInt(b[1],10)-parseInt(a[1],10));});
        farmiAcceptRemove.splice(0,settings.get("account","farmiRemoveMissingAboveNr"));
        farmiAcceptRemove.reverse();
        GM_logInfo("checkFarmi","mode="+mode,"farmiNr="+farmiNr+" farmiAcceptRemove="+implode(farmiAcceptRemove,"checkFarmi/farmiAcceptRemove"),"farmiAcceptedRemove",0);
        if(farmiNr==null){farmiNr = farmiAcceptRemove[0][0];}
    }
    GM_logInfo("checkFarmi","mode="+mode,"","End",1);
    switch (mode){
    case 2:
        return [farmiAmount,farmiNr,farmiAcceptRemove];
        break;
    case 1:
        if(farmiNr!=null){
            botArbiter.add("farmi");
        }
        break;
    case 0:
    default:
        return (farmiNr!=null);
        break;
    }
}catch(err){ GM_logError("checkFarmi","mode="+mode,"",err); }
}
function autoFarmi(){
try{
    GM_logInfo("autoFarmi","","","Begin",1);
    if(!bot.isBusy()){
        GM_logInfo("autoFarmi","","","BUSY NOT SET");
        return false;
    }
    GM_logInfo("autoFarmi","","farmiNr="+farmiNr+" farmiAmount="+farmiAmount,"Begin for Farmi");
    var help=checkFarmi(2);
    var farmiNr=help[1];
    var farmiAmount=help[0];
    var farmiAcceptRemove = help[2];
    GM_logInfo("autoFarmi","","farmiAmount="+farmiAmount+" farmiNr="+farmiNr,"Begin");
    if(farmiAmount>0){
        if(unsafeWindow.farm!=1){
            // change farm
            document.addEventListener("gameFarmOpened",function(){
                document.removeEventListener("gameFarmOpened",arguments.callee,false);
                GM_logInfo("autoFarmi","","farmiNr="+farmiNr+" farmiAmount="+farmiAmount,"Arrived in farm"); //TODO text
                GM_logInfo("autoFarmi","","","Arrived in farm",1);
                autoFarmi();
            },false);
            GM_logInfo("autoFarmi","","","Change farm to 1",0);
            GM_logInfo("autoFarmi","","farmiNr="+farmiNr+" farmiAmount="+farmiAmount,"Change farm to 1");
            click($("speedlink_farm1"));
            // click($("farmlinks").getElementsByClassName("link")[0]);
        }else if(unsafeWindow.farm==1){
            var doFarmiInterval=window.setInterval(function(farmiNr,farmiAmount){
                try{
                    if($("cart").style.display=="block"){
                        try {
                            window.clearInterval(doFarmiInterval);
                            doFarmiInterval=null;
                        } catch (err){}
                        if(farmiAmount>=1){
                            document.addEventListener("gameFarmiResponse",function(){
                                document.removeEventListener("gameFarmiResponse",arguments.callee,false);
                                window.setTimeout(function(){
                                    GM_logInfo("autoFarmi","","farmiNr="+farmiNr+" farmiAmount="+farmiAmount,"Do next Farmi");
                                    autoFarmi();
                                },3000);
                            },false);
                            if(settings.get("account","farmiReject") && !unsafeWindow.farmisinfo[0][farmiNr]["sold"] && unsafeWindow.farmisinfo[0][farmiNr]["costQuotient"] < settings.get("account","farmiRejectUntilNr")){
                                GM_logInfo("autoFarmi","","farmiNr="+farmiNr,"farmiReject",0);
                                unsafeWindow.handleFarmi(farmiNr,2);
                                unsafeWindow.farmisinfo[0][farmiNr]["sold"]=1;
                            }else if(settings.get("account","farmiAccept") && !unsafeWindow.farmisinfo[0][farmiNr]["sold"] && unsafeWindow.farmisinfo[0][farmiNr]["costQuotient"]>=settings.get("account","farmiAcceptAboveNr") && !unsafeWindow.farmisinfo[0][farmiNr]["missing"] && ((settings.get("account","farmiAcceptBelowMinValue")&&!unsafeWindow.farmisinfo[0][farmiNr]["belowMinRackInit"]) || !unsafeWindow.farmisinfo[0][farmiNr]["belowMinRack"])){
                                GM_logInfo("autoFarmi","","farmiNr="+farmiNr,"farmiAccept",0);
                                unsafeWindow.handleFarmi(farmiNr,1);
                                unsafeWindow.farmisinfo[0][farmiNr]["sold"]=1;
                            }else if(settings.get("account","farmiAccept") && settings.get("account","farmiRemoveMissing") && !unsafeWindow.farmisinfo[0][farmiNr]["sold"] && unsafeWindow.farmisinfo[0][farmiNr]["costQuotient"]>=settings.get("account","farmiAcceptAboveNr") && unsafeWindow.farmisinfo[0][farmiNr]["missing"]){
                                GM_logInfo("autoFarmi","","farmiNr="+farmiNr,"farmiAcceptedRemove",0);
                                unsafeWindow.handleFarmi(farmiNr,2);
                                unsafeWindow.farmisinfo[0][farmiNr]["sold"]=1;
                            }else{
                                GM_logInfo("autoFarmi","","farmiNr="+farmiNr,"valFarmi Null");
                            }
                        }
                    }
                    GM_logInfo("autoFarmi","","farmiNr="+farmiNr,"Click Farmi",0);
                    GM_logInfo("autoFarmi","","farmiNr="+farmiNr+" farmiAmount="+farmiAmount,"Click  Farmi:"+farmiNr);
                    click($("customerline2").children[farmiNr]);

                }catch(err){ GM_logError("autoFarmi","","farmiNr="+farmiNr+" farmiAmount="+farmiAmount,"",err);}
            },settings.getPause(true),farmiNr,farmiAmount);
        }else{
            GM_logWarning("autoFarmi","","farmiNr="+farmiNr+" farmiAmount="+farmiAmount,"Exiting farmi. unknown combination");
            bot.end();
        }
    }else{
        GM_logInfo("autoFarmi","","farmiNr="+farmiNr+" farmiAmount="+farmiAmount,"Exiting farmi. no farmi");
        bot.end();
    }
}catch(err){ GM_logError("autoFarmi","","farmiNr="+farmiNr+" farmiAmount="+farmiAmount,err); }
}
function checkFoodworldFarmi() {
    try {
        var foodworldFarmis = unsafeWindow.foodworldfarmis;
        if (settings.get("account", "botUseFarmi")
                && settings.get("account", "botUseFoodworld")
                && settings.get("account", "botUseFarmiFoodworld")
                && settings.get("account", "farmiReject")
                && foodworldFarmis) {
            // So far, only kicking is implemented

            var toKickFoodworldFarmiIds = [];
            for (var i = 0; i < foodworldFarmis.length; i++) {
                if (foodworldFarmis[i].status == 0) {
                    var rate = parseFloat($("foodworldfarmi" + i).getAttribute("rate"));

                    if (rate < settings.get("account", "farmiRejectUntilNr")) {
                        toKickFoodworldFarmiIds.push(foodworldFarmis[i].id);
                    }
                }
            }

            // Kick farmis in separate thread
            window.setTimeout(function() {
                for (var i = toKickFoodworldFarmiIds.length - 1; i >= 0; i--) {
                    GM_logInfo("checkFoodworldFarmi", "", "", getText("automat_removeFoodworldFarmi") + ": " + toKickFoodworldFarmiIds[i]);
                    unsafeWindow.foodworldAction('kick', toKickFoodworldFarmiIds[i]);
                }
            }, 300);
        }
    } catch (err) { GM_logError("checkFoodworldFarmi", "", "", err); }
}
function doGameSessionEnds(){  //NOTICE: Use only in combination with botArbiter.add("sessionEnds");
    click($("divSessionEnd"));
}
function doGameOtherAccReady(){  //NOTICE: Use only in combination with botArbiter.add("otherAccReady");
    click($("linkOtherAccReady"));
}
function drawButtons(){
    if(!$("divAutomatButtonOverview")){
        newdiv=createElement("div",{"id":"divAutomatButtonOverview","class":"link beraterButtonIcon hoverBgGreen","mouseOverText":getText("automat_buttonOverview")},$("divBeraterButtons"));
        createElement("img",{"class":"link","src":IMAGES["gear"],"style":"position:relative;top:3px;left:0;width:28px;height:28px;"},newdiv);
        newdiv.addEventListener("click",function(){
            unsafeWindow.buildInfoPanel("automatOverview");
        },false);
    }
}
function drawZoneListTable(currZoneType){
try{
    var newtable=createElement("table",{style:"",border:"1",cellspacing:"0",style:"margin-bottom:10px;"});
    newtable.addEventListener("mouseout",function(event){
        for(var y=0;y<this.rows.length;y++){
            for(var x=0;x<this.rows[y].cells.length;x++){
                this.rows[y].cells[x].style.backgroundColor="";
            }
        }
    },false);
    newtable.addEventListener("mouseover",function(event){
        var node=event.target;
        while((node!=this)&&(node.nodeName!="TD")){ node=node.parentNode;}
        if(node!=this){
            var posX=node.cellIndex;
            var posY=node.parentNode.rowIndex;
            if(node.parentNode.cells.length>1){
                if(0<posX){
                    for(var v=0;v<this.rows.length;v++){
                        if(this.rows[v].cells[posX]){ this.rows[v].cells[posX].style.backgroundColor="lightblue"; }
                    }
                }
                if(0<posY){
                    for(var v=0;v<this.rows[posY].cells.length;v++){
                        if(this.rows[posY].cells[v]){ this.rows[posY].cells[v].style.backgroundColor="lightblue"; }
                    }
                }
            }
        }
    },false);
    // collect the handled zones
    var zones=new Array();
    for(var fz in unsafeData.ALL_SLOTS){
        if(!unsafeData.ALL_SLOTS.hasOwnProperty(fz)){ continue; }
        if(unsafeData.zones.getBlock(fz)){ continue; }
        if(getZoneType(fz)!=currZoneType){ continue; }
        //Zone Pairing ausschalten
        if(fz=="farmersmarket-4.5"||fz=="farmersmarket-4.6"||fz=="farmersmarket-4.7" ||
           fz=="farmersmarket-5.5"||fz=="farmersmarket-5.6"||fz=="farmersmarket-5.7" ||
           fz=="farmersmarket-9.5"||fz=="farmersmarket-9.6"||fz=="farmersmarket-9.7" || fz=="farmersmarket-9.8"){ continue; }
        if(currZoneType=="fl8"&&(parseInt(/\.(\d+)$/.exec(fz)[1],10)>4)){ continue; }
        //if(currZoneType=="m1" || currZoneType=="m2") { continue; }
        zones.push(fz);
    }
    // build table
    var newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
    var newtd=createElement("td",{"style":"text-align:right;border-bottom:none;"},newtr,"Zone"); // TODO text
    for(var i=0;i<zones.length;i++){
        newtd=createElement("td",{"align":"center","style":"width:10px;","rowspan":2},newtr,getZoneName(0,zones[i],zones[i],null,false,true,false,false)+"<br>"+getZoneName(0,zones[i],zones[i],null,false,false,true,false).replace(/,/g,"<br>"));
    }
    if(currZoneType=="1"){
        newtd=createElement("td",{align:"center","rowspan":2},newtr);
    }
    newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
    createElement("td",{"style":"text-align:left;border-top:none;"},newtr,getText("automat_titleQueue"));

    for(var lz in zoneList){
        if(!zoneList.hasOwnProperty(lz)){ continue; }
        if(lz==0 || lz=="windmill"){ continue; }
        //Zone Pairing ausschalten
        if(lz=="farmersmarket-4.5"||lz=="farmersmarket-4.6"||lz=="farmersmarket-4.7" ||
           lz=="farmersmarket-5.5"||lz=="farmersmarket-5.6"||lz=="farmersmarket-5.7" ||
           lz=="farmersmarket-9.5"||lz=="farmersmarket-9.6"||lz=="farmersmarket-9.7" || lz=="farmersmarket-9.8"){ continue; }
        if(getZoneType(lz)=="fl8"&&(parseInt(/\.(\d+)$/.exec(lz)[1],10)>4)){continue;}
        var extendedList=extendedListReg.exec(lz);
        if((!extendedList && currZoneType!=getZoneType(lz)) || (extendedList && currZoneType!=1)) continue;
        //if(currZoneType=="m1" || currZoneType=="m2") { continue; }
        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"nowrap":"","style":"width:50px;text-align:right;","class":"link","lz":lz}, newtr, getZoneName(0,lz,lz,null,false,true,true,false));
        // !!extendedList?
        // getText("automat_titleGeneral").replace(" ","&nbsp;")+"&nbsp;"+extendedList[1]
        // :getText("automat_titleQueue")+"&nbsp;"+((isNaN(Number(lz))?lz:(Math.ceil(lz/6)+"."+getGarden(lz))))
        newtd.addEventListener("mouseover",function(event){
            var zoneNrL=this.getAttribute("lz");
            var content=createElement("div");
            drawQueueListSmall(zoneNrL, zoneNrL, content);
            createElement("div",{"style":"margin:4px 0px 4px 0px;width:100%;height:0px;border-bottom:1px solid black;"},content);
            createElement("div",{"class":"queueTitle"},content,getText("automat_queueshow"));
            toolTip.show(event, content.innerHTML);
            content=null;
        },false);
        newtd.addEventListener("click",function(){
        try{
            var zoneNrL=this.getAttribute("lz");
            switch(getBuildingTyp(zoneNrL)){
            case 1:
                if(settings.get("account","useQueueList")){
                    redrawQueueBox(zoneNrL, zoneNrL, $("divQueueBoxInner"));
                }else{
                    drawQueueChooseItemBox(zoneNrL, zoneNrL, 0, $("divChooseBoxInner"));
                }
                break;
            case 2:
                drawStableChooseFeedBox(zoneNrL, zoneNrL, $("divChooseBoxInner"));
                break;
            case 3:
                if(settings.get("account","useQueueList")){
                    drawQueueBox(zoneNrL,zoneNrL,$("divChooseBoxInner"));
                }else{
                    drawFactoryChooseItemBox(zoneNrL,zoneNrL,$("divChooseBoxInner"));
                }
                break;
            case "windmill": case 4:
                redrawQueueBox(zoneNrL, zoneNrL, $("divQueueBoxInner"));
                break;
            case 5: // Pony - What ever it is...
                drawChooseItemBoxPony(zoneNrL, zoneNrL, 0, $("divChooseBoxInner"));
                break;
            }
        }catch(err){GM_logError("drawZoneListTable/table1/td.click","","zoneNrL="+zoneNrL,err);}
        },false);
        for(var i=0;i<zones.length;i++){
            var fz=zones[i];
            newtd=createElement("td",{align:"center"},newtr);
            var inp=createElement("input",{id:"inputZoneList"+lz,name:"farmZone"+fz,"class":"link",type:"radio",checked:getZoneListId(fz)==lz},newtd);
            inp.addEventListener("click",function(){
                var lz=this.id.replace("inputZoneList","");
                var fz=this.name.replace("farmZone","");
                setZoneListId(fz,lz);
                updateQueueBox(fz,lz);
            },false);
            inp.addEventListener("mouseover", function(event){
                var lz=this.id.replace("inputZoneList","");
                var content=createElement("div");
                drawQueueListSmall(lz, lz, content);
                toolTip.show(event, content.innerHTML);
            },false);
        }
        if(currZoneType=="1"){
            newtd=createElement("td",{align:"center"},newtr);
            if(extendedList){
                inp=createElement("img",{id:"inputZoneListDelete"+lz,"class":"link",style:"display:inline-block;width:15px;height:15px;",src:GFX+"button_cancel_off.png"},newtd);
                inp.addEventListener("mouseover", function(event){
                    this.setAttribute("src",GFX+"button_cancel_on.png");
                    toolTip.show(event, "Delete this queue");
                },false);
                inp.addEventListener("mouseout", function(event){
                    this.setAttribute("src",GFX+"button_cancel_off.png");
                },false);
                inp.addEventListener("click", function(){
                    var lz=this.id.replace("inputZoneListDelete","");
                    deleteZoneInList(lz);
                    click($("infoPanelZoneList"));
                },false);
            }
        }
    }
    if(currZoneType=="1"){
        var newtr=createElement("tr",{style:"line-height:18px;"},newtable);
        var newtd=createElement("td",{align:"center",colspan:(zones.length+2)},newtr);
        inp=createElement("button",{id:"inputZonesToGeneral","class":"link",style:"display:block;width:110px;margin:5px;padding:1px;"},newtd,"Add" + getText("automat_titleQueue"));
        inp.addEventListener("click",function(){
            addZoneToList();
            click($("infoPanelZoneList"));
        },false);
    }
    newtr=null;newtd=null;inp=null;help=null;zones=null;
    return newtable;
}catch(err){
    GM_logError("drawZoneListTable","","currZoneType="+currZoneType,err);
    return newtable;
}
}

unsafeWindow.buildInfoPanelAutomat=function(mode,mode2){
    try{
        var div;
        if(div=$("divQueueBoxClose")){ click(div); }
        if(div=$("divChooseBoxClose")){ click(div); }
        div=null;
        switch(mode){
        case "automatChangelog": buildInfoPanelChangelog(); break;
        case "automatOverview": buildInfoPanelOverview(mode2); break;
        }
    }catch(err){GM_logError("buildInfoPanelAutomat","","",err);}
}
function buildInfoPanelChangelog(){
    try{
        var table,tr,td,div;
        var container=$("infoPanelInner");
        container.innerHTML="";
        // Head
        newdiv=createElement("div",{"class":"borderBottom1Black","style":"height:50px;"},container);
        table=createElement("table",{"border":"0","cellspacing":"0","style":"width:100%;"},newdiv);
        tr=createElement("tr",{},table);
        createElement("td",{"class":"tnormal","style":"color:black;font-weight:bold;text-align:center;height:40px;"},tr,getText("automat")+" "+VERSION);
        createElement("td",{},tr);
        // Body
        newdiv=createElement("div",{"style":"height:470px;width:100%;overflow:auto;"},container);
        table=createElement("table",{"border":"0","cellspacing":"0","style":"width:100%;"},newdiv);
        tr=createElement("tr",{},table);
        createElement("th",{},tr,getText("version"));
        createElement("th",{},tr,getText("date"));
        createElement("th",{},tr,getText("change"));
        for(var i=CHANGELOG.length-1;i>-1;i--){
            tr=createElement("tr",{"class":"hoverBgCc9 borderBottom1dashedGrey"},table);
            createElement("td",{},tr,CHANGELOG[i][0]);
            createElement("td",{},tr,CHANGELOG[i][1]);
            td=createElement("td",{},tr);
            div=createElement("ul",{},td);
            for(var j=0;j<CHANGELOG[i][2].length;j++){
                createElement("li",{},div,CHANGELOG[i][2][j][LANGUAGE=="de"?0:1]);
            }
        }
        container=null;table=null;tr=null;td=null;div=null;
    }catch(err){GM_logError("buildInfoPanelChangelog","","",err);}
}
function buildInfoPanelOverview(mode){
    try{
        var newtable,newdiv,newdiv1,newdiv2,help;
        var modeDefault={"filterZone":"farm1,","filterType":"1,2,3,"};
        var modeOld=explode(GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_modeOverViewFarms"),"buildInfoPanelOverview/modeOld");
        if(typeof modeOld!="object"){ modeOld=modeDefault; }
        if(typeof mode!="object"){ mode=modeOld; }
        for(var v in modeDefault){
            if(!modeDefault.hasOwnProperty(v)){ continue; }
            if(mode[v]===undefined){ mode[v]=(modeOld[v]===undefined?modeDefault[v]:modeOld[v]); }
        }
        GM_setValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_modeOverViewFarms",implode(mode,"buildInfoPanelOverview/mode"));
        newdiv=$("infoPanelInner");
        newdiv.innerHTML="";
        newdiv=createElement("div",{"id":"infoPanelHeader","style":"height:75px;width:100%;border:0px solid red;-moz-user-select:none;"},newdiv);
        newdiv.addEventListener("mouseover", function(event){
            var node=event.target;
            while((node!=this)&&(!node.getAttribute("mouseOverText"))){ node=node.parentNode; }
            if(node!=this){ toolTip.show(event,node.getAttribute("mouseOverText")); }
        },false);
        newdiv1=createElement("div",{"id":"farmlinks2","name":0,"class":"farmlinks"},newdiv);
        newdiv1.addEventListener("click",function(filter){
        return function(event){
        try{
            var newFilter;
            var thisFilter=event.target.getAttribute("filter");
            if(thisFilter){
                if(!event.ctrlKey){
                    newFilter=thisFilter;
                }else if(filter.search(thisFilter)!=-1){
                    newFilter=filter.replace(thisFilter,"")
                }else{
                    newFilter=filter+thisFilter;
                }
                buildInfoPanelOverview({"filterZone":newFilter});
            }
        }catch(err){GM_logError("farmlinks2.click","event.ctrlKey="+event.ctrlKey,"filter="+filter+" thisFilter="+thisFilter+" newFilter="+newFilter,err);}
        }}(mode["filterZone"]),false);
        for(var farmNr=1;farmNr<=unsafeData.ALL_ZONES["farm"].length/6;farmNr++){
            if(unsafeWindow.farms_data.blocked[farmNr]){ continue; }
            if(mode["filterZone"].search("farm"+farmNr+",")==-1){
                newdiv2=createElement("div",{"filter":"farm"+farmNr+",","class":"link speedlink speedlink_farm","style":"display:block;float:left;margin-left:0px;margin-right:2px;","mouseOverText":getText("automat_title_on_farm"+farmNr)},newdiv1);
            }else{
                newdiv2=createElement("div",{"filter":"farm"+farmNr+",","class":"link speedlink speedlink_farm_active","style":"display:block;float:left;margin-left:0px;margin-right:2px;","mouseOverText":getText("automat_title_off_farm"+farmNr)},newdiv1);
            }
            createElement("div",{"filter":"farm"+farmNr+",","class":"speedlink_number"},newdiv2,farmNr);
        }
        /*
        for(var farmNr=1;farmNr<=unsafeWindow.farmamount;farmNr++){ // Farm-Buttons
            if(mode["filterZone"].search("farm"+farmNr+",")==-1){
                newdiv2=createElement("div",{"filter":"farm"+farmNr+",","class":"link speedlink speedlink_farm","style":"display:block;float:left;margin-left:0px;margin-right:2px;","mouseOverText":getText("automat_title_on_farm"+farmNr)},newdiv1);
            }else{
                newdiv2=createElement("div",{"filter":"farm"+farmNr+",","class":"link speedlink speedlink_farm_active","style":"display:block;float:left;margin-left:0px;margin-right:2px;","mouseOverText":getText("automat_title_off_farm"+farmNr)},newdiv1);
            }
            createElement("div",{"filter":"farm"+farmNr+",","class":"speedlink_number"},newdiv2,farmNr);
        }*/
        if(!unsafeData.zones.getBlock(unsafeData.ALL_ZONES["farmersmarket"][0])){
            if(mode["filterZone"].search("farmersmarket,")==-1){
                createElement("div",{"filter":"farmersmarket,","class":"link speedlink speedlink_farmersmarket","style":"display:block;float:left;margin-left:0px;margin-right:2px;","mouseOverText":getText("automat_title_on_farmersmarket")},newdiv1);
            }else{
                createElement("div",{"filter":"farmersmarket,","class":"link speedlink speedlink_farmersmarket_active","style":"display:block;float:left;margin-left:0px;margin-right:2px;","mouseOverText":getText("automat_title_off_farmersmarket")},newdiv1);
            }
        }
        if(!unsafeData.zones.getBlock(unsafeData.ALL_ZONES["megafield"][0])){
            if(mode["filterZone"].search("megafield,")==-1){
                createElement("div",{"filter":"megafield,","class":"link speedlink speedlink_megafield","style":"display:block;float:left;margin-left:0px;margin-right:2px;","mouseOverText":getText("automat_title_on_megafield")},newdiv1);
            }else{
                createElement("div",{"filter":"megafield,","class":"link speedlink speedlink_megafield_active","style":"display:block;float:left;margin-left:0px;margin-right:2px;","mouseOverText":getText("automat_title_off_megafield")},newdiv1);
            }
        }
        for(var j=0;j<unsafeData.ALL_ZONES["forestry"].length;j++){
            if(!unsafeData.zones.getBlock(unsafeData.ALL_ZONES["forestry"][j])){
                if(mode["filterZone"].search("forestry,")==-1){
                    createElement("div",{"filter":"forestry,","class":"link speedlink speedlink_forestry","style":"display:block;float:left;margin-left:0px;margin-right:2px;","mouseOverText":getText("automat_title_on_forestry")},newdiv1);
                }else{
                    createElement("div",{"filter":"forestry,","class":"link speedlink speedlink_forestry_active","style":"display:block;float:left;margin-left:0px;margin-right:2px;","mouseOverText":getText("automat_title_off_forestry")},newdiv1);
                }
                break;
            }
        }
        for(var j=0;j<unsafeData.ALL_ZONES["city"].length;j++){
            if(!unsafeData.zones.getBlock(unsafeData.ALL_ZONES["city"][j])){
                if(mode["filterZone"].search("city,")==-1){
                    createElement("div",{"filter":"city,","class":"link speedlink speedlink_city1","style":"display:block;float:left;margin-left:0px;margin-right:2px;","mouseOverText":getText("automat_title_on_city")},newdiv1);
                }else{
                    createElement("div",{"filter":"city,","class":"link speedlink speedlink_city_active","style":"display:block;float:left;margin-left:0px;margin-right:2px;","mouseOverText":getText("automat_title_off_city")},newdiv1);
                }
                break;
            }
        }
        for(var j=0;j<unsafeData.ALL_ZONES["foodworld"].length;j++){
            if(!unsafeData.zones.getBlock(unsafeData.ALL_ZONES["foodworld"][j])){
                if(mode["filterZone"].search("foodworld,")==-1){
                    createElement("div",{"filter":"foodworld,","class":"link speedlink speedlink_foodworld","style":"display:block;float:left;margin-left:0px;margin-right:2px;","mouseOverText":getText("automat_title_on_foodworld")},newdiv1);
                }else{
                    createElement("div",{"filter":"foodworld,","class":"link speedlink speedlink_foodworld_active","style":"display:block;float:left;margin-left:0px;margin-right:2px;","mouseOverText":getText("automat_title_off_foodworld")},newdiv1);
                }
                break;
            }
        }
        newdiv1=createElement("div",{"id":"fieldlinks","name":1,"class":"fieldlinks","style":"-moz-user-select:none;"},newdiv);
        newdiv1.addEventListener("click",function(filter){
        return function(event){
        try{
            var newFilter;
            var thisFilter=event.target.getAttribute("filter");
            if(thisFilter){
                if(!event.ctrlKey){
                    newFilter=thisFilter;
                }else if(filter.search(thisFilter)!=-1){
                    newFilter=filter.replace(thisFilter,"")
                }else{
                    newFilter=filter+thisFilter;
                }
                buildInfoPanelOverview({"filterType":newFilter});
            }
        }catch(err){GM_logError("fieldlinks.click","event.ctrlKey="+event.ctrlKey,"filter="+filter+" thisFilter="+thisFilter+" newFilter="+newFilter,err);}
        }}(mode["filterType"]),false);

        for(var i=3;i>=1;i--){ // Zonetype-Buttons
            if(mode["filterType"].search(i+",")==-1){
                createElement("div",{"filter":i+",","class":"link fieldlinkitem"+i,"mouseOverText":getText("automat_title_on_type"+i)},newdiv1);
            }else{
                createElement("div",{"filter":i+",","class":"link fieldlinkitemactivate"+i,"mouseOverText":getText("automat_title_off_type"+i)},newdiv1);
            }
        }

        newdiv=createElement("div",{style:"overflow-y:auto;overflow-x:hidden;width:100%;height:"+($("infoPanelInner").clientHeight-75)+"px;"},$("infoPanelInner"));
        newtable=createElement("table",{"class":"border1",style:"width:100%;"},newdiv);
        var newtr,newtd,zoneNrS;
        // collect all handled zones
        var zones=new Array();
        for(var i in unsafeData.ALL_SLOTS){
            if(!unsafeData.ALL_SLOTS.hasOwnProperty(i)){ continue; }
            if(unsafeData.zones.getBlock(i)){ continue; }
            if (i=="farmersmarket-5.5"||i=="farmersmarket-5.6"||i=="farmersmarket-5.7" ) {continue;}
            if(unsafeData.ALL_SLOTS[i]=="farm"){
                if(mode["filterZone"].search(unsafeData.ALL_SLOTS[i]+Math.ceil(parseInt(i,10)/6))!=-1){
                    zones.push([unsafeData.ALL_SLOTS[i]+Math.ceil(parseInt(i,10)/6),i]);
                }
            }else{
                if(mode["filterZone"].search(unsafeData.ALL_SLOTS[i])!=-1){
                    zones.push([unsafeData.ALL_SLOTS[i],i]);
                }
            }
        }
        // GM_log("ALL_SLOTS:\n"+print_r(unsafeData.ALL_SLOTS,"",true,"\n"));
        // GM_log("zones:\n"+print_r(zones,"",true,"\n"));
        // build table
        var old=null;
        for(var i=0;i<zones.length;i++){
            if(old!=zones[i][0]){
                if(old!=null){
                    newtr=createElement("tr",{style:"line-height:1px;"},newtable);
                    newtd=createElement("td",{"colspan":"3",style:"background-color:black;"},newtr);
                }
                old=zones[i][0];
            }
            zoneNrS=zones[i][1];
            zoneNrL=getZoneListId(zoneNrS);
            // GM_log("loop farmNr:" + farmNr + " zoneNr:"+zoneNr + " zoneNrS:"+zoneNrS + " zoneNrL:"+zoneNrL+" feldtyp:"+getBuildingTyp(zoneNrF));
            switch(getBuildingTyp(zoneNrS)){
            case 1:{ // field
                if((mode["filterType"].search("1,")!=-1) && !$("tdAutoMatOverview_"+zoneNrL)){
                    newtr=createElement("tr",{},newtable);
                    newtd=createElement("td",{"id":"tdAutoMatOverview_"+zoneNrL},newtr);
                    if(settings.get("account","useQueueList")){
                        drawQueueBox(zoneNrS, null, newtd);
                    }else{
                        drawQueueChooseItemBox(zoneNrS, null, 0, newtd);
                    }
                }
            break;}
            case 2:{ //stable
                if((mode["filterType"].search("2,")!=-1) && !$("tdAutoMatOverview_"+zoneNrL)){
                    newtr=createElement("tr",{},newtable);
                    newtd=createElement("td",{"id":"tdAutoMatOverview_"+zoneNrL},newtr);
                    drawStableChooseFeedBox(zoneNrS,null,newtd);
                }
            break;}
            case 3:{ //factory
                if((mode["filterType"].search("3,")!=-1) && !$("tdAutoMatOverview_"+zoneNrL)){
                    newtr=createElement("tr",{},newtable);
                    newtd=createElement("td",{"id":"tdAutoMatOverview_"+zoneNrL},newtr);
                    if(settings.get("account","useQueueList")){
                        drawQueueBox(zoneNrS,null,newtd);
                    }else{
                        drawFactoryChooseItemBox(zoneNrS,null,newtd);
                    }
                }
            break;}
            case 5:{ // Pony
                // We use the factory category for filter
                if((mode["filterType"].search("3,")!=-1) && !$("tdAutoMatOverview_"+zoneNrL)){
                    newtr=createElement("tr",{},newtable);
                    newtd=createElement("td",{"id":"tdAutoMatOverview_"+zoneNrL},newtr);
                    drawChooseItemBoxPony(zoneNrS, null, 0, newtd);
                }

            break;}
            case 6:{ // Fuelstation
                if((mode["filterType"].search("3,")!=-1) && !$("tdAutoMatOverview_"+zoneNrL)){
                    newtr=createElement("tr",{},newtable);
                    newtd=createElement("td",{"id":"tdAutoMatOverview_"+zoneNrL},newtr);
                    drawFuelstationChooseItemBox(zoneNrS, zoneNrL,newtd);
                }
            break;}
            case 7:{ //monster fruit culture
                if((mode["filterType"].search("3,")!=-1) && !$("tdAutoMatOverview_"+zoneNrL)){
                    newtr=createElement("tr",{},newtable);
                    newtd=createElement("td",{"id":"tdAutoMatOverview_"+zoneNrL},newtr);
                    drawMonsterfruitChooseItemBox(zoneNrS, zoneNrL,newtd);
                }
            break;
            }
            case 8:
            case 9: { //speed eating and butterfly
            break;}
            default:{
                var slot=(zoneNrS.toString().match(/\.(\d+)$/)?parseInt(/\.(\d+)$/.exec(zoneNrS)[1],10):null);
                if (slot > 19) {continue}; // Kuhrennen ab Slot 20 werden nicht angezeigt
                if(!$("tdAutoMatOverview_"+zoneNrL)){
                    newtr=createElement("tr",{},newtable);
                    newtd=createElement("td",{"id":"tdAutoMatOverview_"+zoneNrL},newtr);
                    drawQueueBox(zoneNrS, null, newtd);
                }
            }
            }
        }
        newtr=null;newtd=null;newinput=null;
        newimg=null;newtable=null;newdiv=null;
    }catch(err){GM_logError("buildInfoPanelOverview","","",err);}
}
unsafeWindow.buildInfoPanelAutomatMenu=function(mode){
    try{
        var newdiv,newdiv1;
        newdiv=$("infoPanelL");
        newdiv1=createElement("div",{"style":"margin-top:15px;border-bottom:1px solid #685338;font-weight:bold;float:left;width:100%;"},newdiv,getText("automat"));
        newdiv1.addEventListener("mouseover",function(event){
            toolTip.show(event,getText("showChangelog"));
        },false);
        newdiv1.classList.add("link");
        newdiv1.addEventListener("click",function(event){
            unsafeWindow.buildInfoPanel("automatChangelog");
        },false);
        if(USERNAME){
            newdiv1=createElement("div",{"id":"infoPanelNaviAutomatOptions","class":"link naviItem","style":"margin-top:5px;width:95px;"},newdiv,getText("options"));
            newdiv1.addEventListener("click",function(event){ unsafeWindow.buildInfoPanelMenu("automatOptions"); },false);
            newdiv1=createElement("div",{"id":"infoPanelNaviAutomatZonePairing","class":"link naviItem","style":"margin-top:5px;width:95px;"},newdiv,getText("automat_zonePairing"));
            newdiv1.addEventListener("click",function(event){ unsafeWindow.buildInfoPanelMenu("automatZonePairing"); },false);
            newdiv1=createElement("div",{"id":"infoPanelNaviAutomatDebugInfo","class":"link naviItem","style":"margin-top:5px;width:95px;"},newdiv,getText("automat_debugInfo"));
            newdiv1.addEventListener("click",function(event){ unsafeWindow.buildInfoPanelMenu("automatDebugInfo"); },false);
        }else{
            createElement("div",{"id":"infoPanelNaviAutomatOptions","class":"naviItemInactive","style":"margin-top:5px;width:95px;"},newdiv,getText("options"));
            createElement("div",{"id":"infoPanelNaviAutomatZonePairing","class":"naviItemInactive","style":"margin-top:5px;width:95px;"},newdiv,getText("automat_zonePairing"));
            createElement("div",{"id":"infoPanelNaviAutomatDebugInfo","class":"naviItemInactive","style":"margin-top:5px;width:95px;"},newdiv,getText("automat_debugInfo"));
        }
        // switch call
        switch(mode){
        case "automatOptions": buildInfoPanelOptions(); break;
        case "automatZonePairing": buildInfoPanelZonePairing(); break;
        case "automatDebugInfo": buildInfoPanelDebugInfo(); break;
        }
        newdiv=null;newdiv1=null;
    }catch(err){GM_logError("buildInfoPanelAutomatMenu","","",err);}
}
function buildInfoPanelOptions(){
    try{
        var newdiv,newtable,newtr,newtd,inp;
        newdiv=$("infoPanelNaviAutomatOptions");
        newdiv.classList.remove("naviItem");
        newdiv.classList.add("naviItemActive");
        newdiv=$("infoPanelR");
        newtable=createElement("table",{"class":"hoverRowBgCc9","style":"width:100%","border":"1"},newdiv);
        // *********** FARM ***************************************
        newtr=createElement("tr",{"style":"background-color:#b69162;"},newtable);
        createElement("th",{colspan:"3"},newtr,getText("farm"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","style":"max-width:120px;"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","autoPlant")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","autoPlant",this.checked);
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_autoPlant"));

        newtr=createElement("tr",{style:"line-height:18px;"},newtable);
        newtd=createElement("td",{align:"center","style":"max-width:120px;"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","autoWater")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","autoWater",this.checked);
        },false);
        newtd=createElement("td",{colspan:"2"},newtr,getText("automat_settings_autoWater"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","autoFeed")},newtd);
        inp.disabled=(unsafeWindow.premium==1 || parseInt(top.document.getElementById("levelnum").innerHTML,10)<10);
        inp.addEventListener("click",function(){
            settings.set("account","autoFeed",this.checked);
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_autoFeed"));

        newtr=createElement("tr",{style:"line-height:18px;"},newtable);
        newtd=createElement("td",{align:"center","style":"max-width:120px;"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","disableCropFields")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","disableCropFields",this.checked);
            checkReadyZone();
        },false);
        newtd=createElement("td",{colspan:"2"},newtr,getText("automat_settings_disableCropFields"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center"},newtr);
        inp=createElement("select",{"class":"link"},newtd);
        createElement("option",{"value":0},inp,"--");
        createElement("option",{"value":5},inp,"5s");
        createElement("option",{"value":10},inp,"10s");
        createElement("option",{"value":30},inp,"30s");
        createElement("option",{"value":60},inp,"1min");
        createElement("option",{"value":120},inp,"2min");
        createElement("option",{"value":300},inp,"5min");
        createElement("option",{"value":600},inp,"10min");
        inp.value=settings.get("account","seedWaitForCrop");
        inp.addEventListener("change",function(){
            settings.set("account","seedWaitForCrop",this.value);
        },false);
        newtd=createElement("td",{colspan:"2"},newtr,getText("automat_settings_seedWaitForCrop"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center"},newtr);
        inp=createElement("input",{"id":"inputEmergencyPlants","style":"width:100px;text-align:center;background-color:transparent;","value":emergencyPlants.join(",")},newtd);
        inp.addEventListener("change",function(){
            emergencyPlants=this.value.split(/,/);
            for(var v=emergencyPlants.length-1;0<=v;v--){
                if((!unsafeData.prodTyp[0][emergencyPlants[v]])||(unsafeData.prodTyp[0][emergencyPlants[v]]!="v")||(unsafeData.prodBlock[0][emergencyPlants[v]].match(/l/))){
                    // check if the entry is a plant and not blocked by level
                    emergencyPlants.splice(v,1);
                }
            }
            if(emergencyPlants.length==0){
                // no entry=> set to default (Grain,Carrots)
                emergencyPlants=[1,17];
            }else{
                // remove duplicates
                for(var v=0;v<emergencyPlants.length;v++){
                    for(var w=emergencyPlants.length-1;v<w;w--){
                        if(emergencyPlants[v]==emergencyPlants[w]){
                            emergencyPlants.splice(w,1);
                        }
                    }
                }
            }
            // update the select-box
            var cell=$("selectEmergencyPlants");
            for(var v=0;v<cell.children.length;v++){
                var found=false;
                for(var w=0;w<emergencyPlants.length;w++){
                    if(emergencyPlants[w]==cell.children[v].value){ found=true; }
                }
                cell.children[v].style.backgroundColor=(found?"#cc9":"");
            }

            this.value=emergencyPlants.join(",");
            GM_setValue2(COUNTRY+"_"+SERVER+"_"+USERNAME+"_emergencyPlants", implode(emergencyPlants,"gameInfoPanelOpen/options/emergencyPlants"));
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_emergencyPlants"));
        newdiv=createElement("div",{},newtd);
        inp=createElement("select",{"class":"link","id":"selectEmergencyPlants"},newdiv);
        for(var v=0;v<unsafeData.prodTyp[0].length;v++){
            if((unsafeData.prodTyp[0][v]=="v")&&(!unsafeData.prodBlock[0][v].match(/l/))){
                var found=false;
                for(var w=0;w<emergencyPlants.length;w++){
                    if(emergencyPlants[w]==v){ found=true; }
                }
                createElement("option",{"value":v,"style":(found?"background-color:#cc9;":"")},inp,v+" "+unsafeData.prodName[0][v]+" ("+numberFormat(unsafeData.prodPlantSize[0][v])+")");
            }
        }
        inp.addEventListener("change",function(){
            var cell=$("inputEmergencyPlants");
            cell.value +=","+this.value;
            change(cell);
            cell=null;
        },false);

        newtr=createElement("tr",{style:"line-height:18px;"},newtable);
        newtd=createElement("td",{align:"center",width:"40"},newtr);
        inp=createElement("input",{"class":"link",type:"checkbox",checked:settings.get("account","useQueueList")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","useQueueList",this.checked)
            if($("divQueueBox").style.display=="block"){
                var zoneNrF=$("divQueueBoxInner").getAttribute("zoneNrF");
                click($("divQueueBoxClose"));
                if(settings.get("account","useQueueList")){ click($("divAutomatIcon_"+zoneNrF)); }
            }
        },false);
        newtd=createElement("td","",newtr,getText("automat_settings_useQueueList"));
        inp=createElement("img",{"src":IMAGES["help"],"style":"margin-left:3px;height:14px;width:14px;"},newtd);
        inp.addEventListener("mouseover",function(event){ toolTip.show(event,"<div style='width:300px'><b>"+getText("automat_help_3")[0]+"</b><br>"+getText("automat_help_3")[1]+"</div>"); },false);
        inp=createElement("img",{"src":IMAGES["help"],"style":"margin-left:3px;height:14px;width:14px;"},newtd);
        inp.addEventListener("mouseover",function(event){ toolTip.show(event,"<div style='width:300px'><b>"+getText("automat_help_9")[0]+"</b><br>"+getText("automat_help_9")[1]+"</div>"); },false);
        newtd=createElement("td",{"style":"width:120px;"},newtr);
        inp=createElement("button",{id:"inputDeleteAllQueueData","class":"link hoverBgCc9",style:"display:block;width:110px;margin:5px;padding:1px;"},newtd,getText("automat_set12a"));
        inp.addEventListener("click",function(){
            this.disabled=true;
            zoneList={};
            zoneSettings={};
            zoneToList={};
            for(var fz in unsafeData.ALL_SLOTS){
                if(!unsafeData.ALL_SLOTS.hasOwnProperty(fz)){ continue; }
                zoneList[fz]=(fz=="windmill"?DEFAULT_ZONELIST_MILL_ARRAY.clone():DEFAULT_ZONELIST_ITEM_ARRAY.clone());
                zoneSettings[fz]={"repeat":false,"shuffle":false};
                zoneToList[fz]=fz;
                reFillQueueBox(fz,fz,0);
            }
            GM_setValue2(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList",implode(zoneList,"gameInfoPanelOpen/options/zoneList"));
            GM_setValue2(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneSettings",implode(zoneSettings,"gameInfoPanelOpen/options/zoneSettings"));
            GM_setValue2(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneToList",implode(zoneToList,"gameInfoPanelOpen/options/zoneToList"));
            alert(getText("automat_set12b"));
            this.disabled=false;
        },false);

        newtr=createElement("tr",{style:"line-height:18px;"},newtable);
        newtd=createElement("td",{align:"center","style":"max-width:120px;"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseWeather")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","botUseWeather",this.checked);
        },false);
        newtd=createElement("td",{colspan:"2"},newtr,getText("automat_settings_useWeather"));

        newtr=createElement("tr",{style:"line-height:18px;"},newtable);
        newtd=createElement("td",{align:"center"},newtr);
        inp=createElement("input",{"class":"link",type:"checkbox",checked:settings.get("account","showQueueTime")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","showQueueTime",this.checked)
            for(var i=0;i<unsafeData.ALL_ZONES["farm"].length;i++){
                updateQueueBox(unsafeData.ALL_ZONES["farm"][i]);
            }
            updateQueueBox("windmill",0);
            //TODO ALL_SLOTS?
        },false);
        createElement("td",{colspan:"2"},newtr,getText("automat_settings_showQueueTime"));


        // *********** FARMIE *************************************
        newtr=createElement("tr",{"style":"background-color:#b69162;"},newtable);
        newtd=createElement("th",{colspan:"3"},newtr,"Farmis"); // TODO text
        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"colspan":"3","align":"center"},newtr,"This bot needs a review ... :(");

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseFarmi")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","botUseFarmi",this.checked);
            buildInfoPanelOptionsDisabling();
            botArbiter.check();
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_botUse"));

        newtr=createElement("tr",{"style":"line-height:18px;","set":"account_farmiReject"},newtable);
        newtd=createElement("td",{align:"center","style":"max-width:120px;"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox",checked:settings.get("account","farmiReject")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","farmiReject",this.checked);
            botArbiter.check();
        },false);
        newtd=createElement("td",{colspan:"1"},newtr,getText("automat_settings_farmiReject"));
        newtd=createElement("td",{"style":"width:120px;"},newtr);
        inp=createElement("input",{"style":"width:100%;height:18px;direction:rtl",value:settings.get("account","farmiRejectUntilNr")+"%"},newtd);
        inp.addEventListener("change",function(){
            var help=parseInt(this.value.replace("%",""),10);
            if(isNaN(help)){
                this.value=settings.get("account","farmiRejectUntilNr")+"%";
            }else{
                settings.set("account","farmiRejectUntilNr",Math.max(0,Math.min(999,Math.min(help,settings.get("account","farmiAcceptAboveNr")))));
                this.value=settings.get("account","farmiRejectUntilNr")+"%";
                botArbiter.check();
            }
        },false);

        newtr=createElement("tr",{style:"line-height:18px;","set":"account_farmiAccept"},newtable);
        newtd=createElement("td",{align:"center","style":"max-width:120px;"},newtr);
        inp=createElement("input",{"class":"link",type:"checkbox",checked:settings.get("account","farmiAccept")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","farmiAccept",this.checked);
            buildInfoPanelOptionsDisabling();
            botArbiter.check();
        },false);
        newtd=createElement("td",{colspan:"1"},newtr,getText("automat_settings_farmiAccept"));
        newtd=createElement("td",{"style":"width:120px;"},newtr);
        inp=createElement("input",{"style":"width:100%;height:18px;direction:rtl",value:settings.get("account","farmiAcceptAboveNr")+"%"},newtd);
        inp.addEventListener("change",function(){
            var help=parseInt(this.value.replace("%",""),10);
            if(isNaN(help)){
                this.value=settings.get("account","farmiAcceptAboveNr")+"%";
            }else{
                settings.set("account","farmiAcceptAboveNr",Math.max(0,Math.min(999,Math.max(help,settings.get("account","farmiRejectUntilNr")))));
                this.value=settings.get("account","farmiAcceptAboveNr")+"%";
                botArbiter.check();
            }
        },false);

        newtr=createElement("tr",{style:"line-height:18px;","set":"account_farmiAcceptBelowMinValue"},newtable);
        newtd=createElement("td",{align:"center","style":"max-width:120px;"},newtr);
        inp=createElement("input",{"class":"link",type:"checkbox",checked:settings.get("account","farmiAcceptBelowMinValue")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","farmiAcceptBelowMinValue",this.checked);
            botArbiter.check();
        },false);
        newtd=createElement("td",{colspan:"2"},newtr,getText("automat_settings_farmiAcceptBelowMinValue"));

        newtr=createElement("tr",{style:"line-height:18px;","set":"account_farmiRemoveMissing"},newtable);
        newtd=createElement("td",{align:"center","style":"max-width:120px;"},newtr);
        inp=createElement("input",{"class":"link",type:"checkbox",checked:settings.get("account","farmiRemoveMissing")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","farmiRemoveMissing",this.checked);
            botArbiter.check();
        },false);
        newtd=createElement("td",{colspan:"1"},newtr,getText("automat_settings_farmiRemoveMissing"));
        newtd=createElement("td",{"style":"width:120px;"},newtr);
        inp=createElement("input",{"style":"width:100%;height:18px;direction:rtl",value:settings.get("account","farmiRemoveMissingAboveNr")},newtd);
        inp.addEventListener("change",function(){
            var help=parseInt(this.value,10);
            if(isNaN(help)){
                this.value=settings.get("account","farmiRemoveMissingAboveNr");
            }else{
                settings.set("account","farmiRemoveMissingAboveNr",Math.max(0,Math.min(999,help)));
                this.value=settings.get("account","farmiRemoveMissingAboveNr");
                botArbiter.check();
            }
        },false);

        // *********** FARMERSMARKET ***********************************

        newtr=createElement("tr",{"style":"background-color:#b69162;"},newtable);
        createElement("th",{"colspan":"3"},newtr,getText("farmersmarket"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseFarmersmarket")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","botUseFarmersmarket",this.checked);
            buildInfoPanelOptionsDisabling();
            botArbiter.check();
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_botUse"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseMegafruit")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","botUseMegafruit",this.checked);
            zoneList["farmersmarket-3"][0][0] = this.checked ? 1 : PRODSTOP;
            GM_setValue2(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList",implode(zoneList,"gameInfoPanelOpen/options/zoneList"));
            buildInfoPanelOptionsDisabling();
            botArbiter.check();
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_botUseMegafruit"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseVetTreatment")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","botUseVetTreatment",this.checked);
            buildInfoPanelOptionsDisabling();
            botArbiter.check();
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_botUseVetTreatment"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseSpeedEating")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","botUseSpeedEating",this.checked);
            zoneList["farmersmarket-6"][0][0] = this.checked ? 1 : PRODSTOP;
            GM_setValue2(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList",implode(zoneList,"gameInfoPanelOpen/options/zoneList"));
            buildInfoPanelOptionsDisabling();
            botArbiter.check();
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_botUseSpeedEating"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseButterfly")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","botUseButterfly",this.checked);
            for(var slot=1;slot<=6;slot++){
                if( (slot == 1)||(slot>1 && (unsafeWindow.butterfly.data.data.slots[slot]) ) ) {
                    zoneList["farmersmarket-7."+slot][0][0] = this.checked ? 1 : PRODSTOP;
                }
            }
            GM_setValue2(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList",implode(zoneList,"gameInfoPanelOpen/options/zoneList"));
            buildInfoPanelOptionsDisabling();
            botArbiter.check();
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_botUseButterfly"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseFishing")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","botUseFishing",this.checked);
            buildInfoPanelOptionsDisabling();
            botArbiter.check();
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_botUseFishing"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseFishingLookSp")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","botUseFishingLookSp",this.checked);
            buildInfoPanelOptionsDisabling();
            botArbiter.check();
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_botUseFishingLookSp"));

        // *********** 24h Bonusse ***********************************
        newtr=createElement("tr",{"style":"background-color:#b69162;"},newtable);
        createElement("th",{"colspan":"3"},newtr,getText("automat_settings_botDailyBonus"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseDonkey")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account", "botUseDonkey", this.checked);
            botArbiter.check();
        }, false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("donkey"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseFarmDog")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account", "botUseFarmDog", this.checked);
            botArbiter.check();
        }, false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_FarmDog"));

        // *********** buyPetsParts ***********************************
        //22102016
        newtr=createElement("tr",{"style":"background-color:#b69162;"},newtable);
        createElement("th",{"colspan":"3"},newtr,getText("buyPetsParts"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUsebuyPetsParts")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account", "botUsebuyPetsParts", this.checked);
            // buildInfoPanelOptionsDisabling();
            botArbiter.check();
        }, false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_botUse"));

        // *********** CLOTHING DONATION ***********************************
        newtr=createElement("tr",{"style":"background-color:#b69162;"},newtable);
        createElement("th",{"colspan":"3"},newtr,getText("settings_clothingDonation")[0]);

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseClothingDonation")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account", "botUseClothingDonation", this.checked);
            botArbiter.check();
        }, false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_botUse") + getText("automat_settings_donating"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseClothingGamble")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account", "botUseClothingGamble", this.checked);
            botArbiter.check();
        }, false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_botUse") + getText("automat_settings_gambling"));

        // *********** LOTTERY ************************************
        newtr=createElement("tr",{"style":"background-color:#b69162;"},newtable);
        newtd=createElement("th",{colspan:"3"},newtr,"Lottery"); // TODO text

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseLottery")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","botUseLottery",this.checked);
            buildInfoPanelOptionsDisabling();
            botArbiter.check();
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_botUse"));

        newtr=createElement("tr",{"style":"line-height:18px;","set":"account_lotteryActivate"},newtable);
        newtd=createElement("td",{align:"center","style":"max-width:120px;"},newtr);
        inp=createElement("input",{"class":"link",type:"checkbox","checked":settings.get("account","lotteryActivate")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","lotteryActivate",this.checked);
            buildInfoPanelOptionsDisabling();
            botArbiter.check();
        },false);
        newtd=createElement("td",{colspan:"2"},newtr,getText("automat_settings_lotteryActivate"));

        newtr=createElement("tr",{"style":"line-height:18px;","set":"account_lotteryDailyLot"},newtable);
        newtd=createElement("td",{align:"center","style":"max-width:120px;"},newtr);
        inp=createElement("input",{"class":"link",type:"checkbox",checked:settings.get("account","lotteryDailyLot")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","lotteryDailyLot",this.checked);
        },false);
        newtd=createElement("td",{colspan:"2"},newtr,getText("automat_settings_lotteryDailyLot"));

        // *********** Events ***********************************
        newtr=createElement("tr",{"style":"background-color:#b69162;"},newtable);
        createElement("th",{"colspan":"3"},newtr,"Events");

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseOlympiaRun")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account", "botUseOlympiaRun", this.checked);
            botArbiter.check();
        }, false);
        newtd=createElement("td",{"colspan":"2"},newtr,"Olympia Run");

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseIceDelivery")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account", "botUseIceDelivery", this.checked);
            botArbiter.check();
        }, false);
        newtd=createElement("td",{"colspan":"2"},newtr,"Ice delivery event");

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseDailyLoginBonus")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account", "botUseDailyLoginBonus", this.checked);
            botArbiter.check();
        }, false);
        newtd=createElement("td",{"colspan":"2"},newtr,"Daily Login Bonus");

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseBattleDailyBonus")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account", "botUseBattleDailyBonus", this.checked);
            botArbiter.check();
        }, false);
        newtd=createElement("td",{"colspan":"2"},newtr,"Alien-Invasion Daily-Bonus");

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseXMasCalendar")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account", "botUseXMasCalendar", this.checked);
            botArbiter.check();
        }, false);
        newtd=createElement("td",{"colspan":"2"},newtr,"Christmas Calendar");


        // *********** QUEST **************************************
        /* quest-bot needs review
        newtr=createElement("tr",{style:"line-height:18px;"},newtable);
        newtd=createElement("td",{align:"center","style":"max-width:120px;"},newtr);
        inp=createElement("input",{id:"inputvalQuestActivate","class":"link",type:"checkbox",checked:valQuestActivate||GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valQuestActivate", false)},newtd);
        inp.addEventListener("click",function(){
            valQuestActivate=this.checked;
            GM_setValue2(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valQuestActivate", valQuestActivate);
            if(valQuestActivate){botArbiter.check();}
        },false);
        inp.disabled=valQuestActivateUntilNr<unsafeData.questData["farm"]["1"]["nr"];
        newtd=createElement("td",{colspan:"1"},newtr,getText("automat_settings_questActivate"));
        newtd=createElement("td",{"style":"width:120px;"},newtr);
        inp=createElement("select",{"id":"valQuestActivateUntilNrSelector","style":"width:100%;height:18px;direction:rtl"},newtd);
        createElement("option",{"value":"-"},inp,"-");
        for(var i=unsafeData.questData["farm"]["1"]["nr"];i<unsafeData.QUESTS["farm"]["1"].length;i++){
            createElement("option",{"value":i},inp,i);
        }
        inp.value=(valQuestActivateUntilNr<unsafeData.questData["farm"]["1"]["nr"])?"-":valQuestActivateUntilNr;
        inp.addEventListener("change",function(){
            if(this.value=="-"){
                valQuestActivateUntilNr=0;
            }else{
                valQuestActivateUntilNr=parseInt(this.value,10);
            }
            GM_setValue2(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valQuestActivateUntilNr", valQuestActivateUntilNr);
            $("inputvalQuestActivate").disabled=valQuestActivateUntilNr<unsafeData.questData["farm"]["1"]["nr"];
            if(valQuestActivateUntilNr < unsafeData.questData["farm"]["1"]["nr"]) valQuestActivate=false;
            if(valQuestActivate){botArbiter.check();}
        },false);

        newtr=createElement("tr",{style:"line-height:18px;"},newtable);
        newtd=createElement("td",{align:"center","style":"max-width:120px;"},newtr);
        inp=createElement("input",{id:"inputvalQuestSolving","class":"link",type:"checkbox",checked:valQuestSolving||GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valQuestSolving", false)},newtd);
        inp.addEventListener("click",function(){
            valQuestSolving=this.checked;
            GM_setValue2(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valQuestSolving", valQuestSolving);
            if(valQuestSolving){botArbiter.check();}
        },false);
        inp.disabled=valQuestSolvingUntilNr<unsafeData.questData["farm"]["1"]["nr"];
        newtd=createElement("td",{colspan:"1"},newtr,getText("automat_settings_questSolving"));
        newtd=createElement("td",{"style":"width:120px;"},newtr);
        inp=createElement("select",{"id":"valQuestActivateUntilNrSelector","style":"width:100%;height:18px;direction:rtl"},newtd);
        createElement("option",{"value":"-"},inp,"-");
        for(var i=unsafeData.questData["farm"]["1"]["nr"];i<unsafeData.QUESTS["farm"]["1"].length;i++){
            createElement("option",{"value":i},inp,i);
        }
        inp.value=(valQuestSolvingUntilNr<unsafeData.questData["farm"]["1"]["nr"])?"-":valQuestSolvingUntilNr;
        inp.addEventListener("change",function(){
            if(this.value=="-"){
                valQuestSolvingUntilNr=0;
            }else{
                valQuestSolvingUntilNr=parseInt(this.value,10);
            }
            GM_setValue2(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valQuestSolvingUntilNr", valQuestSolvingUntilNr);
            $("inputvalQuestSolving").disabled=valQuestSolvingUntilNr<unsafeData.questData["farm"]["1"]["nr"];
            if(valQuestSolvingUntilNr < unsafeData.questData["farm"]["1"]["nr"]) valQuestSolving=false;
            if(valQuestSolving){botArbiter.check();}
        },false);
        //TODO add valLodgeQuestSolving
        newtr=createElement("tr",{style:"line-height:18px;"},newtable);
        newtd=createElement("td",{align:"center","style":"max-width:120px;"},newtr);
        inp=createElement("input",{id:"inputvalLodgeQuestSolving","class":"link",type:"checkbox",checked:valLodgeQuestSolving||GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valLodgeQuestSolving", false)},newtd);
        inp.addEventListener("click",function(){
            valLodgeQuestSolving=this.checked;
            GM_setValue2(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valLodgeQuestSolving", valLodgeQuestSolving);
            if(valLodgeQuestSolving){botArbiter.check();}
        },false);
        newtd=createElement("td",{colspan:"1"},newtr,"setvalLodgeQuestSolving");//getText("automat_setvalLodgeQuestSolving"));
        newtd=createElement("td",{"style":"width:120px;"},newtr);

        inp.disabled=valLodgeQuestSolvingUntilNr<unsafeData.questData["farm"]["1"]["nr"];
        inp=createElement("select",{"id":"valLodgeQuestActivateUntilNrSelector","style":"width:100%;height:18px;direction:rtl"},newtd);
        createElement("option",{"value":"-"},inp,"-");
        for(var i=unsafeData.questData["farm"]["1"]["nr"];i<unsafeData.QUESTS["farm"]["1"].length;i++){
            createElement("option",{"value":i},inp,i);
        }
        inp.value=(valLodgeQuestSolvingUntilNr<unsafeData.questData["farm"]["1"]["nr"])?"-":valLodgeQuestSolvingUntilNr;
        inp.addEventListener("change",function(){
            if(this.value=="-"){
                valLodgeQuestSolvingUntilNr=0;
            }else{
                valLodgeQuestSolvingUntilNr=parseInt(this.value,10);
            }
            GM_setValue2(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valLodgeQuestSolvingUntilNr", valLodgeQuestSolvingUntilNr);
            $("inputvalLodgeQuestSolving").disabled=valLodgeQuestSolvingUntilNr<unsafeData.questData["farm"]["1"]["nr"];
            if(valLodgeQuestSolvingUntilNr < unsafeData.questData["farm"]["1"]["nr"]) valLodgeQuestSolving=false;
            if(valLodgeQuestSolving){botArbiter.check();}
        },false);
        */

        // *********** WINDMILL ***********************************

        newtr=createElement("tr",{"style":"background-color:#b69162;"},newtable);
        createElement("th",{"colspan":"3"},newtr,getText("windmill"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseWindmill")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","botUseWindmill",this.checked);
            buildInfoPanelOptionsDisabling();
            botArbiter.check();
        },false);
        newtd=createElement("td",{},newtr,getText("automat_settings_botUse"));
        inp=createElement("img",{"src":IMAGES["help"],"style":"margin-left:3px;height:14px;width:14px;"},newtd);
        inp.addEventListener("mouseover",function(event){ toolTip.show(event,"<div style='width:300px'><b>"+getText("automat_help_9")[0]+"</b><br>"+getText("automat_help_9")[1]+"</div>"); },false);
        newtd=createElement("td",{"style":"width:120px;"},newtr);
        inp=createElement("button",{"class":"link hoverBgCc9",style:"display:block;width:110px;margin:5px;padding:1px;"},newtd,getText("automat_set18a"));
        inp.addEventListener("click",function(){
            this.disabled=true;
            zoneList["windmill"]=DEFAULT_ZONELIST_MILL_ARRAY;
            zoneSettings["windmill"]={"shuffle":false,"lack":0,"detail":new Array()};
            autoMillStorage=new Array();
            reFillQueueBox("windmill","windmill",0);
            GM_setValue2(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList",implode(zoneList,"gameInfoPanelOpen/options/zoneList"));
            GM_setValue2(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneSettings",implode(zoneSettings,"gameInfoPanelOpen/options/zoneSettings"));
            GM_setValue2(COUNTRY+"_"+SERVER+"_"+USERNAME+"_autoMillStorage",implode(autoMillStorage,"gameInfoPanelOpen/options/autoMillStorage"));
            alert(getText("automat_set18b"));
            this.disabled=false;
        },false);

        newtr=createElement("tr",{"style":"line-height:18px;","set":"account_powerUpActivate"},newtable);
        newtd=createElement("td",{"align":"center","style":"max-width:120px;"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","powerUpActivate")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","powerUpActivate",this.checked);
            buildInfoPanelOptionsDisabling();
            botArbiter.check();
        },false);
        newtd=createElement("td",{colspan:"2"},newtr,getText("automat_settings_powerUpActivate"));

        // *********** FOODWORLD ***********************************

        newtr=createElement("tr",{"style":"background-color:#b69162;"},newtable);
        createElement("th",{"colspan":"3"},newtr,getText("foodworld"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseFoodworld")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","botUseFoodworld",this.checked);
            buildInfoPanelOptionsDisabling();
            botArbiter.check();
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_botUse"));

        newtr=createElement("tr",{"style":"line-height:18px;","set":"account_botUseFarmiFoodworld"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseFarmiFoodworld")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","botUseFarmiFoodworld",this.checked);
            buildInfoPanelOptionsDisabling(); // To get this working, we need the "set" this <tr> and the definition in settings.require
            botArbiter.check();
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_botUseFoodworld"));

        // *********** FORESTRY ***********************************

        newtr=createElement("tr",{"style":"background-color:#b69162;"},newtable);
        createElement("th",{"colspan":"3"},newtr,getText("forestry"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseForestry")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","botUseForestry",this.checked);
            buildInfoPanelOptionsDisabling();
            botArbiter.check();
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_botUse"));

        // *********** MEGAFIELD ***************************************

        newtr=createElement("tr",{"style":"background-color:#b69162;"},newtable);
        createElement("th",{"colspan":"3"},newtr,getText("megafield"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseMegafield")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","botUseMegafield",this.checked);
            buildInfoPanelOptionsDisabling();
            botArbiter.check();
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_botUse"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable); // No "set" attribute, since the option shall always be selectable
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botPreferMegafield")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","botPreferMegafield",this.checked);
            botArbiter.check();
        },false);
        newtd=createElement("td",{"colspan":"2", "title":getText("automat_settings_megafieldPreferenceTooltip")},newtr,getText("automat_settings_megafieldPreference"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseMegafieldPremiumPlanting")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","botUseMegafieldPremiumPlanting",this.checked);
        },false);
        inp.disabled=!unsafeWindow.premium;
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_megafieldUsePremium"));
        newtr.style.opacity=(inp.disabled?"0.6":"1")

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center"},newtr);
        inp=createElement("select",{"id":"input_smallHarvester","class":"link", "style":"max-width:100%; width:100%;"},newtd);
        for (var v_id in unsafeWindow.megafield_data.vehicles_unlock) {
            var v = unsafeWindow.megafield_data.vehicle_slots[v_id];
            if (v.size == 1 && v.type == "harvest") {
                createElement("option",{"value":v_id},inp,v.name + " (" + v_id + ")");
            }
        }
        inp.value=settings.get("account","megafieldSmallVehicle");
        inp.addEventListener("change",function(){
            settings.set("account","megafieldSmallVehicle",this.value)
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_megafieldSmallHarvester"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center"},newtr);
        inp=createElement("select",{"id":"input_bigHarvester","class":"link", "style":"max-width:100%; width:100%;"},newtd);
        createElement("option",{"value":0},inp,getText("no"));
        for (var v_id in unsafeWindow.megafield_data.vehicles_unlock) {
            var v = unsafeWindow.megafield_data.vehicle_slots[v_id];
            if (v.size == 4 && v.type == "harvest") {
                createElement("option",{"value":v_id},inp,v.name + " (" + v_id + ")");
            }
        }
        inp.value=settings.get("account","megafieldBigVehicle");
        inp.addEventListener("change",function(){
            settings.set("account","megafieldBigVehicle",this.value)
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_megafieldBigHarvester"));

        // ********** Map / Obststand ********************************
        newtr=createElement("tr",{"style":"background-color:#b69162;"},newtable);
        createElement("th",{colspan:"3"},newtr,getText("automat_map"));
        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseMap_stall")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","botUseMap_stall",this.checked);
            buildInfoPanelOptionsDisabling();
            botArbiter.check();
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_botUseMapStall"));

        // *********** GUILD *****************************************
        newtr=createElement("tr",{"style":"background-color:#b69162;"},newtable);
        createElement("th",{colspan:"3"},newtr,getText("automat_guild"));
        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center","width":"40"},newtr);
        inp=createElement("input",{"class":"link","type":"checkbox","checked":settings.get("account","botUseGuildJop")},newtd);
        inp.addEventListener("click",function(){
            settings.set("account","botUseGuildJop",this.checked);
            buildInfoPanelOptionsDisabling();
            botArbiter.check();
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_botUseGuildJop"));


        // *********** GENERAL *****************************************

        newtr=createElement("tr",{"style":"background-color:#b69162;"},newtable);
        createElement("th",{colspan:"3"},newtr,getText("automat_general"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center"},newtr);
        inp=createElement("input",{"id":"settings_pauseShortMin","value":settings.get("country","pauseShort")[0],"size":"5px","style":"text-align:center;background-color:transparent;"},newtd);
        inp.addEventListener("change",function(){
            var val=settings.get("country","pauseShort");
            val[0]=Math.max(0,Math.min(parseInt(this.value,10),val[1]));
            this.value=val[0];
            settings.set("country","pauseShort",val);
        },false);
        createElement("span","",newtd,"ms");
        createElement("td",{},newtr,getText("automat_settings_pauseShortMin"));
        newtd=createElement("td",{"rowspan":"2","style":"width:120px;"},newtr);
        inp=createElement("button",{"class":"link hoverBgCc9","style":"display:block;width:110px;margin:5px;padding:1px;"},newtd,getText("automat_setToDefault"));
        inp.addEventListener("click",function(){
            var help=settings.reset("country","pauseShort");
            $("settings_pauseShortMin").value=help[0];
            $("settings_pauseShortMax").value=help[1];
        },false);
        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center"},newtr);
        inp=createElement("input",{"id":"settings_pauseShortMax","value":settings.get("country","pauseShort")[1],"size":"5px","style":"text-align:center;background-color:transparent;"},newtd);
        inp.addEventListener("change",function(){
            var val=settings.get("country","pauseShort");
            val[1]=Math.max(0,Math.max(parseInt(this.value,10),val[0]));
            this.value=val[1];
            settings.set("country","pauseShort",val);
        },false);
        createElement("span","",newtd,"ms");
        createElement("td",{},newtr,getText("automat_settings_pauseShortMax"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center"},newtr);
        inp=createElement("input",{"id":"settings_pauseMin","value":settings.get("country","pause")[0],"size":"5px","style":"text-align:center;background-color:transparent;"},newtd);
        inp.addEventListener("change",function(){
            var val=settings.get("country","pause");
            val[0]=Math.max(0,Math.min(parseInt(this.value,10),val[1]));
            this.value=val[0];
            settings.set("country","pause",val);
        },false);
        createElement("span","",newtd,"ms");
        createElement("td",{},newtr,getText("automat_settings_pauseMin"));
        newtd=createElement("td",{"rowspan":"2","style":"width:120px;"},newtr);
        inp=createElement("button",{"class":"link hoverBgCc9","style":"display:block;width:110px;margin:5px;padding:1px;"},newtd,getText("automat_setToDefault"));
        inp.addEventListener("click",function(){
            var help=settings.reset("country","pause");
            $("settings_pauseMin").value=help[0];
            $("settings_pauseMax").value=help[1];
        },false);

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center"},newtr);
        inp=createElement("input",{"id":"settings_pauseMax",value:settings.get("country","pause")[1],"size":"5px","style":"text-align:center;background-color:transparent;"},newtd);
        inp.addEventListener("change",function(){
            var val=settings.get("country","pause");
            val[1]=Math.max(0,Math.max(parseInt(this.value,10),val[0]));
            this.value=val[1];
            settings.set("country","pause",val);
        },false);
        createElement("span","",newtd,"ms");
        createElement("td",{},newtr,getText("automat_settings_pauseMax"));

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center"},newtr);
        inp=createElement("input",{"id":"settings_maxDurationBotRun","value":settings.get("country","maxDurationBotRun"),"size":"5px","style":"text-align:center;background-color:transparent;"},newtd);
        inp.addEventListener("change",function(){
            var help=parseInt(this.value,10);
            if (isNaN(help)){
                this.value="";
            }else{
                if(help<0){ help*=-1; }
                this.value=help;
                settings.set("country","maxDurationBotRun",help);
            }
        },false);
        createElement("span","",newtd,"s");
        createElement("td",{},newtr,getText("automat_settings_maxDurationBotRun"));
        newtd=createElement("td",{"style":"width:120px;"},newtr);
        inp=createElement("button",{"class":"link hoverBgCc9","style":"display:block;width:110px;margin:5px;padding:1px;"},newtd,getText("automat_setToDefault"));
        inp.addEventListener("click",function(){
            $("settings_maxDurationBotRun").value=settings.reset("country","maxDurationBotRun");
        },false);

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center"},newtr);
        inp=createElement("input",{"id":"settings_maxDurationBotStep","value":settings.get("country","maxDurationBotStep"),"size":"5px","style":"text-align:center;background-color:transparent;"},newtd);
        inp.addEventListener("change",function(){
            var help=parseInt(this.value,10);
            if (isNaN(help)){
                this.value="";
            }else{
                if(help<0){ help*=-1; }
                this.value=help;
                settings.set("country","maxDurationBotStep",help);
            }
        },false);
        createElement("span","",newtd,"s");
        createElement("td",{},newtr,getText("automat_settings_maxDurationBotStep"));
        newtd=createElement("td",{"style":"width:120px;"},newtr);
        inp=createElement("button",{"class":"link hoverBgCc9","style":"display:block;width:110px;margin:5px;padding:1px;"},newtd,getText("automat_setToDefault"));
        inp.addEventListener("click",function(){
            $("settings_maxDurationBotStep").value=settings.reset("country","maxDurationBotStep");
        },false);

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center"},newtr);
        inp=createElement("input",{"id":"settings_closeWindowTimer","value":settings.get("country","valCloseWindowTimer"),"size":"5px","style":"text-align:center;background-color:transparent;"},newtd);
        inp.addEventListener("change",function(){
            var help=parseInt(this.value,10);
            if (isNaN(help)){
                this.value="";
            }else{
                if(help<0){ help*=-1; }
                this.value=help;
                settings.set("country","valCloseWindowTimer",help);
            }
        },false);
        createElement("span","",newtd,"s");
        createElement("td",{},newtr,getText("automat_settings_closeWindowTimer"));
        newtd=createElement("td",{"style":"width:120px;"},newtr);
        inp=createElement("button",{"class":"link hoverBgCc9","style":"display:block;width:110px;margin:5px;padding:1px;"},newtd,getText("automat_setToDefault"));
        inp.addEventListener("click",function(){
            $("settings_closeWindowTimer").value=settings.reset("country","valCloseWindowTimer");
        },false);

            //new
        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center"},newtr);
        inp=createElement("input",{"id":"settings_restartBotTimer","value":settings.get("country","valRestartBotTimer"),"size":"5px","style":"text-align:center;background-color:transparent;"},newtd);
        inp.addEventListener("change",function(){
            var help=parseInt(this.value,10);
            if (isNaN(help)){
                this.value=-1;
                settings.set("country","valRestartBotTimer",help);
            }else{
                this.value=help;
                settings.set("country","valRestartBotTimer",help);
            }
        },false);
        createElement("span","",newtd,"s");
        createElement("td",{},newtr,getText("automat_settings_restartBotTimer"));
        newtd=createElement("td",{"style":"width:120px;"},newtr);
        inp=createElement("button",{"class":"link hoverBgCc9","style":"display:block;width:110px;margin:5px;padding:1px;"},newtd,getText("automat_setToDefault"));
        inp.addEventListener("click",function(){
            $("settings_restartBotTimer").value=settings.reset("country","valRestartBotTimer");
        },false);

        newtr=createElement("tr",{"style":"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center"},newtr);
        inp=createElement("select",{"id":"input_botErrorBehaviour","class":"link"},newtd);
        createElement("option",{"value":"reload"},inp,getText("automat_settings_pageReload"));
        createElement("option",{"value":"restart"},inp,getText("automat_settings_botRestart"));
        inp.value=settings.get("country","botErrorBehaviour");
        inp.addEventListener("change",function(){
            settings.set("country","botErrorBehaviour",this.value)
        },false);
        newtd=createElement("td",{"colspan":"2"},newtr,getText("automat_settings_botErrorBehaviour"));

        // *****

        newtr=createElement("tr",{"style":"background-color:#b69162;"},newtable);
        createElement("th",{colspan:"3"},newtr,getText("automat_development"));

        newtr=createElement("tr",{style:"line-height:18px;"},newtable);
        newtd=createElement("td",{"align":"center"},newtr);
        newinput=createElement("input",{"id":"inputDevmode","type":"checkbox","class":"link","checked":DEVMODE},newtd);
        newinput.addEventListener("click",function(){GM_setValue2("devmode",DEVMODE=this.checked);},false);
        createElement("td",{},newtr,"Developer Mode");
        createElement("td",{},newtr);

        newtr=createElement("tr",{},newtable);
        newtd=createElement("td",{"align":"center"},newtr);
        newinput=createElement("input",{"id":"inputDevmodeFunctions","type":"checkbox","class":"link","checked":DEVMODE_FUNCTION},newtd);
        newinput.addEventListener("click",function(){GM_setValue2("devmode_function",DEVMODE_FUNCTION=this.checked);},false);
        createElement("td",{},newtr,"Developer Function");
        createElement("td",{},newtr,"Show function calls");
        buildInfoPanelOptionsDisabling();
        newdiv=null;newtable=null;newtr=null;newtd=null;inp=null;
    }catch(err){GM_logError("buildInfoPanelOptions","","",err);}
}
function buildInfoPanelOptionsDisabling(){
    try{
        var set,disabled,help,help2;
        help=$("infoPanelR").querySelectorAll("[set]");
        for(var i=help.length-1;i>=0;i--){
            if(set=help[i].getAttribute("set").split("_")){
                disabled=!settings.checkRequire(set[0],set[1]);
                if(help[i].disabled!=disabled){
                    help[i].disabled=disabled;
                    help[i].style.opacity=(disabled?"0.6":"1");
                }
            }
            help2=help[i].querySelectorAll("input");
            for(var j=help2.length-1;j>=0;j--){
                if(help2[j].disabled!=disabled){
                    help2[j].disabled=disabled;
                }
            }
        }
        help=null;
    }catch(err){GM_logError("buildInfoPanelOptionsDisabling","","",err);}
}
function buildInfoPanelZonePairing(){
    try{
        var container,newdiv;
        newdiv=$("infoPanelNaviAutomatZonePairing");
        newdiv.classList.remove("naviItem");
        newdiv.classList.add("naviItemActive");
        container=$("infoPanelR");
        // count zones
        var slotCount=new Object();
        var zoneType;
        for(var i in unsafeData.ALL_SLOTS){
            if(!unsafeData.ALL_SLOTS.hasOwnProperty(i)){ continue; }
            if(unsafeData.zones.getBlock(i)){ continue; }
            //monster fruit culture, animal treatment and speed eating not show
            if(i=="farmersmarket-3.1"||i=="farmersmarket-3.2"||i=="farmersmarket-3.3" ||
               i=="farmersmarket-7.1"||i=="farmersmarket-7.2" || i=="farmersmarket-7.3"||i=="farmersmarket-7.4" || i=="farmersmarket-7.5"||i=="farmersmarket-7.6" ) { continue; }
            zoneType=getZoneType(i);
            if(!slotCount[zoneType]){ slotCount[zoneType]=0; }
            slotCount[zoneType]++;
        }
        for(var i in slotCount){
            if(!slotCount.hasOwnProperty(i)){ continue; }
            if((i==1)||(slotCount[i]>1)){
                newdiv=createElement("div",{"style":"font-weight:bold;"},container,isNaN(i)?getText(i):unsafeWindow.buildinginfos[0][i][10]);
                newdiv.appendChild(drawZoneListTable(i));
            }
        }
        container=null;newdiv=null;
    }catch(err){GM_logError("buildInfoPanelZonePairing","","",err);}
}
function buildInfoPanelDebugInfo(){
    try{
        newdiv=$("infoPanelNaviAutomatDebugInfo");
        newdiv.classList.remove("naviItem");
        newdiv.classList.add("naviItemActive");
        container=$("infoPanelR");
        newdiv=createElement("TEXTAREA", {"id":"debugbox","style":"width:99%;height:99%;"},container);
        newdiv.innerHTML +="scriptversion:"+VERSION + ";\n";
        newdiv.innerHTML +="neededVersionBerater:"+neededVersionBerater + ";\n";
        newdiv.innerHTML +="neededVersionFunctionFile:"+neededVersionFunctionFile + ";\n";
        newdiv.innerHTML +="zoneSettings:"+implode(zoneSettings,"Debug/zoneSettings") + ";\n";
        newdiv.innerHTML +="zoneList:"+implode(zoneList,"Debug/zoneList") + ";\n";
        newdiv.innerHTML +="zoneToList:"+implode(zoneToList,"Debug/zoneToList") + ";\n";
        newdiv.innerHTML +="autoMillStorage:"+implode(autoMillStorage,"Debug/autoMillStorage") + ";\n";
        newdiv.innerHTML +="emergencyPlants:"+implode(emergencyPlants,"Debug/emergencyPlants") + ";\n";
        newdiv.innerHTML +="bot.isActive():"+bot.isActive()+ ";\n";
        /* quest-bot needs review
        newdiv.innerHTML +="valQuestActivate:"+valQuestActivate+ ";\n";
        newdiv.innerHTML +="valQuestActivateUntilNr:"+valQuestActivateUntilNr+ ";\n";
        newdiv.innerHTML +="valQuestSolving:"+valQuestSolving+ ";\n";
        newdiv.innerHTML +="valQuestSolvingUntilNr:"+valQuestSolvingUntilNr+ ";\n";
        newdiv.innerHTML +="valLodgeQuestSolving:"+valLodgeQuestSolving+ ";\n";
        */
        newdiv.innerHTML +="devMode:"+DEVMODE+";\n";
        container=null;newdiv=null;
    }catch(err){GM_logError("buildInfoPanelDebugInfo","","",err);}
}

// ***************************************************************************************************

function do_main(){
try{
    GM_logInfo("do_main","","","Automat started",1);
    // **************************************************
    // Changes:
    // ....
    // GM_setValue2("changedata",1);
    //
    // **************************************************
    // Show changelog of new version
    var err_trace="Changelog of new version";
    var container, newdiv;
    if(CHANGELOG[CHANGELOG.length-1][0]!=GM_getValue("automatChangelogShownVersion","")){
        container=createElement("div");
        createElement("div",{},container,getText("automat_confirmChangelogVersion").replace("%1%",CHANGELOG[CHANGELOG.length-1][0]));
        newdiv=createElement("ul",{},container);
        for(var i=0;i<CHANGELOG[CHANGELOG.length-1][2].length;i++){
            createElement("li",{},newdiv,CHANGELOG[CHANGELOG.length-1][2][i][LANGUAGE=="de"?0:1]);
        }
        alert2(container.innerHTML,getText("ok"),getText("showChangelog"),
        function(){
            GM_setValueCache("automatChangelogShownVersion",CHANGELOG[CHANGELOG.length-1][0]);
        },
        function(){
            GM_setValueCache("automatChangelogShownVersion",CHANGELOG[CHANGELOG.length-1][0]);
            unsafeWindow.buildInfoPanel("automatChangelog");
        });
    }

    document.addEventListener("gameZoneReady",function(){
        GM_logInfo("gameZoneReady.listener","","bot.isActive()="+bot.isActive(),"event found",0);
        checkReadyZone();
    },false);

    /* quest-bot needs review
    document.addEventListener("gameQuestNewAvailable",function(){
        GM_logInfo("gameQuestNewAvailable.listener","","valQuestActivate="+valQuestActivate,"event found",0);
        if(unsafeData.questData["farm"]["1"]["state"]==1 && valQuestActivate && valQuestActivateUntilNr>=unsafeData.questData["farm"]["1"]["nr"]){
            botArbiter.add("quest");
        }
    },false);
    document.addEventListener("gameQuestSolvable",function(){
        if(DEVMODE){ logBubble.add("event found:gameQuestSolvable: "+valQuestSolving); }
        if(unsafeData.questData["farm"]["1"]["state"]==2 && valQuestSolving && valQuestSolvingUntilNr>=unsafeData.questData["farm"]["1"]["nr"] && checkQuest()){
            botArbiter.add("quest");
        }
    },false);
    */

        err_trace="loading";
        ////--------------------------------------------------------------------------------------------------------------------------------
        //[zoneNrF][QueNr][0]=product number, [1]=number to grow, [2]=number grown in loop modus, [3]=Behaviour (Field (default), Rack, Time(//TODO)), [4]=mode (1 time (default), repeat)
        //[zoneNrF][mill][0]=product number, [1]=number to grow, [2]=number grown in loop modus, [3]=Min([4]), [4]=Array([X]=Max recipes for product X)
        zoneList=explode(GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList"),"settings/zoneList",{});
        if((typeof zoneList!="object")||(zoneList instanceof Array)){ zoneList={}; }
        // check consistence
        var bChanged=false;
        for(var fz in zoneList){
            if(!zoneList.hasOwnProperty(fz)){ continue; }
            if(!(zoneList[fz] instanceof Array)){
                GM_logInfo("do_main","","fz="+fz+"("+getZoneType(fz)+")","(zoneList) delete not array");
                delete zoneList[fz]; bChanged=true; continue;
            }
            if(extendedListReg.test(fz)){ continue; }
            if(!unsafeData.ALL_SLOTS[fz]){
                GM_logInfo("do_main","","fz="+fz+"("+getZoneType(fz)+")","(zoneList) delete bad queue");
                delete zoneList[fz]; bChanged=true; continue;
            }
            if(unsafeData.zones.getBlock(fz)){
                GM_logInfo("do_main","","fz="+fz+"("+getZoneType(fz)+")","(zoneList) delete blocked queue");
                delete zoneList[fz]; bChanged=true; continue;
            }
        }
        // check completeness
        for(var fz in unsafeData.ALL_SLOTS){
            if(!unsafeData.ALL_SLOTS.hasOwnProperty(fz)){ continue; }
            if(unsafeData.zones.getBlock(fz)){ continue; }
            if(!zoneList[fz]){ createZoneList(fz); }
        }
        if(bChanged){ GM_setValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList",implode(zoneList,"settings/zoneList")); }
        zoneSettings=explode(GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneSettings"),"settings/zoneSettings",{});
        if((typeof zoneSettings!="object")||(zoneSettings instanceof Array)){ zoneSettings={}; }
        zoneToList=explode(GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneToList"),"settings/zoneToList",{});
        if((typeof zoneToList!="object")||(zoneToList instanceof Array)){ zoneToList={}; }
        // check consistence
        var bChanged=false;
        for(var fz in zoneToList){
            if(!zoneToList.hasOwnProperty(fz)){ continue; }
            if(!unsafeData.ALL_SLOTS[fz]){
                GM_logInfo("do_main","","fz="+fz+"("+getZoneType(fz)+") zoneToList[fz]="+zoneToList[fz]+"("+getZoneType(zoneToList[fz])+")","(zoneToList) delete bad zone");
                delete zoneToList[fz]; bChanged=true; continue;
            }
            if((!extendedListReg.test(zoneToList[fz]))&&(!unsafeData.ALL_SLOTS[zoneToList[fz]])){
                GM_logInfo("do_main","","fz="+fz+"("+getZoneType(fz)+") zoneToList[fz]="+zoneToList[fz]+"("+getZoneType(zoneToList[fz])+")","(zoneToList) delete bad queue");
                delete zoneToList[fz]; bChanged=true; continue;
            }
            if(unsafeData.zones.getBlock(fz)){
                GM_logInfo("do_main","","fz="+fz+"("+getZoneType(fz)+") zoneToList[fz]="+zoneToList[fz]+"("+getZoneType(zoneToList[fz])+")","(zoneToList) delete blocked zone");
                delete zoneToList[fz]; bChanged=true; continue;
            }
            if(getZoneType(fz)!=getZoneType(zoneToList[fz])){
                GM_logInfo("do_main","","fz="+fz+"("+getZoneType(fz)+") zoneToList[fz]="+zoneToList[fz]+"("+getZoneType(zoneToList[fz])+")","(zoneToList) delete bad pairing");
                delete zoneToList[fz]; bChanged=true; continue;
            }
        }
        if(bChanged){ GM_setValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneToList",implode(zoneToList,"settings/zoneToList")); }
        // check completeness
        for(var fz in unsafeData.ALL_SLOTS){
            if(!unsafeData.ALL_SLOTS.hasOwnProperty(fz)){ continue; }
            if(unsafeData.zones.getBlock(fz)){ continue; }
            if(!zoneSettings[fz]){ zoneSettings[fz]={"repeat":false,"shuffle":false}; }
            if(!zoneToList[fz]){ setZoneListId(fz,fz); }
        }
        zoneList.sortObj();
        zoneSettings.sortObj(); // TODO performance? "Error: Script terminated by timeout"
        zoneToList.sortObj();

        if(settings.get("account","botUseWindmill")&&(unsafeWindow.currentuserlevel<8)){
            settings.set("account","botUseWindmill",false);
        }

        emergencyPlants=explode(GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_emergencyPlants","[1,17]"),"settings/emergencyPlants",[1,17]); // Grain,Carrots
        //autoMillStorage: {[rId][0]=number bought, [1]=total number in zoneList[getZoneListId("windmill")], [2]=max number of recipes on products global Math.min([3][pId]), [3][pId]=max number of recipes for this products per products
        autoMillStorage=explode(GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_autoMillStorage","[]"),"settings/autoMillStorage",[]);
        modeOverViewFarms=explode(GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_modeOverViewFarms"),"settings/modeOverViewFarms",null);
        if(null==modeOverViewFarms){
            modeOverViewFarms=[,true,true,true];
            GM_setValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_modeOverViewFarms",implode(modeOverViewFarms,"settings/modeOverViewFarms"));
        }
        /* quest-bot needs review
        valQuestActivate=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valQuestActivate", false);
        valQuestActivateUntilNr=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valQuestActivateUntilNr", 0);
        if(valQuestActivateUntilNr < unsafeData.questData["farm"]["1"]["nr"]) valQuestActivate=false;
        valQuestSolving =GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valQuestSolving", false);
        valQuestSolvingUntilNr =GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valQuestSolvingUntilNr", 0);
        if(valQuestSolvingUntilNr < unsafeData.questData["farm"]["1"]["nr"]) valQuestSolving=false;
        valLodgeQuestSolving=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valLodgeQuestSolving", false);
        // TODO add valLodgeQuestSolving limits
        */
        if(unsafeWindow.premium==1 || parseInt(top.document.getElementById("levelnum").innerHTML,10)<10){ settings.set("account","autoFeed",false); }

        //make generic queue Box
        err_trace="generic queue Box";
        newdiv=createElement("div",{id:"divQueueBox",style:"position:absolute;top:240px;left:170px;width:380px;padding:2.5% 3%;background-color:#b8a789;z-index:102;display:none;"},$("garten_komplett"));
        createElement("img",{"src":GFX+"guild/help_back.jpg",style:"position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;"},newdiv);
        var newimg=createElement("img",{id:"divQueueBoxClose","class":"link queueBoxClose",style:"position:absolute;right:2px;top:2px;","title":getText("automat_QueClose"),"src":GFX+"close.jpg"},newdiv);
        newimg.addEventListener("click",function(event){if(this.id==event.target.id){
            this.parentNode.style.display="none";
            if($("divChooseBox").style.display="block" && $("divChooseBoxInner").getAttribute("zoneNrF")==$("divQueueBoxInner").getAttribute("zoneNrF")) click($("divChooseBoxClose"));
            $("divQueueBoxInner").setAttribute("zoneNrF","");
            $("divQueueBoxInner").setAttribute("zoneNrL","");
            $("divQueueBoxInner").innerHTML="";
        }},false);
        createElement("div",{id:"divQueueBoxInner",style:""},newdiv);

        //make chooseBox
        err_trace="chooseBox";
        newdiv=createElement("div",{id:"divChooseBox",style:"position:absolute;top:240px;left:170px;width:380px;padding:2.5% 3%;background-color:#b8a789;z-index:103;display:none;"},$("garten_komplett"));
        createElement("img",{"src":GFX+"guild/help_back.jpg",style:"position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;"},newdiv);
        var newimg=createElement("img",{id:"divChooseBoxClose","class":"link queueBoxClose",style:"position:absolute;right:2px;top:2px;","title":getText("automat_QueClose"),"src":GFX+"close.jpg"},newdiv);
        newimg.addEventListener("click",function(event){if(this.id==event.target.id){
            this.parentNode.style.display="none";
            $("divChooseBoxInner").setAttribute("zoneNrF","");
            $("divChooseBoxInner").setAttribute("zoneNrL","");
            $("divChooseBoxInner").innerHTML="";
        }},false);
        createElement("div",{id:"divChooseBoxInner",style:""},newdiv);

        newdiv=null;newimg=null;

        GM_addStyle(
            ".rotate90 {-webkit-transform: rotate(90deg);-moz-transform: rotate(90deg);filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);}\n"+
            ".rotate180 {-webkit-transform: rotate(180deg);-moz-transform: rotate(180deg);filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2)}\n"+
            ".rotate270 {-webkit-transform: rotate(270deg);-moz-transform: rotate(270deg);filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);}"+
            "#buildinginfo0, #buildinginfo1, #buildinginfo2, #buildinginfo3, #buildinginfo4, #buildinginfo5, #buildinginfo6 {top:52px; !important;}\n"+
            ".divZoneIcon {position:absolute;bottom:0;right:5px;z-index:10;border:2px solid black;border-radius:10px;background-color:#000000;}\n"+
            ".divZoneAutoMonsterFruitCultureIcon {top:30px; background-color: white; -moz-transform: scale(0.6)}\n"+
            ".divZoneMonsterFruitCultureIcon {left:-20px; top: -15px; background-color: white; -moz-transform: scale(0.5)}\n"+
            ".divZonePonyIcon {width: 30px; height: 30px; background-size: 100%; background-color: white;}\n"+
            "#divAutomatIconContainer {position:absolute;top:125px;left:1001px;width:76px;margin:2px 0px;}\n"+
            ".divWindmillIcon {position:relative;float:left;height:26px;width:26px;border:2px solid black;border-radius:10px;background-color:#CBAD85;margin:-20px 0 0 -20px;padding:2px;}\n"+
            ".divForestryIcon {position:relative;float:left;height:25px;width:25px;border:2px solid black;border-radius:10px;background-color:#FFFFFF;margin:2px;padding:2.5px;}\n"+
            ".divFoodworldIcon {position:relative;float:left;height:25px;width:25px;border:2px solid black;border-radius:10px;background-color:#FFFFFF;margin:2px;padding:2.5px;}\n"+
            ".fmm"+PRODSTOP+" {background:url("+IMAGES["PRODSTOP_windmill_26"]+") no-repeat scroll 0 0 transparent;height:24px;width:26px;position:absolute;}\n"+
            ".fm"+PRODSTOP+" {background:url("+IMAGES["PRODSTOP_windmill_52"]+") no-repeat scroll 0 0 transparent;height:49px;width:52px;position:absolute;}\n"+
            ".v"+PRODSTOP+" {background:url("+IMAGES["PRODSTOP_30"]+") no-repeat scroll 0 0 transparent;height:30px;width:30px;!IMPORTANT}\n"+
            ".kp"+PRODSTOP+" {background:url("+IMAGES["PRODSTOP_15"]+") no-repeat scroll 0 0 transparent;height:15px;width:15px;!IMPORTANT}\n"+
            ".f_symbol"+PRODSTOP+" {background:url("+IMAGES["PRODSTOP_25"]+") no-repeat scroll 0 0 transparent;height:25px;width:25px;!IMPORTANT}\n"+
            ".f_m_symbol"+PRODSTOP+" {background:url("+IMAGES["PRODSTOP_15"]+") no-repeat scroll 0 0 transparent;height:15px;width:15px;!IMPORTANT}\n"+
            ".pointstar {background:url('"+GFX+"points.gif') no-repeat scroll 2 2 transparent;height:15px;width:15px;}\n"+
            ".tableTd1 {width:40%;display:table-cell;padding:0px 10px 0px 0px;white-space:nowrap;}\n"+
            ".tableTd2 {width:60%;display:table-cell;padding:0px 10px 0px 0px;white-space:nowrap;}\n"+
            ".tableSeperater {display:table-cell;padding:2px 0px 2px 0px;max-height:2px;}\n"+
            ".tableSepBorder {border-top:1px solid black;max-height:1px;width:100%;}\n"+

            ".divChooseFeedTime {float:right;color:black;font-weight:bold;}\n"+
            ".divChooseFeed {float:left;margin:2px;width:280px;}\n"+
            ".divChooseFeed div{float:left;}\n"+
            ".divChooseFeedIcon {border-radius:10px;border:2px solid grey;}\n"+
            ".divChooseFeedAmount {float:left;border:1px solid black;}\n"+
            ".divChooseFeedAmount div{float:left;height:17px;border-left:1px solid grey;}\n"+
            ".divChooseFeedAmount div:hover{background-color:red!important;}\n"+
            ".divChooseFeedButton{float:right;text-align:center;margin-left:1px;width:25px;border:1px solid black;}\n"+
            ".divChooseFeedButton:hover{color:black;background-color:blue;}\n"+
            ".divChooseItem {float:left;margin:5px;border-radius:10px;border:2px solid grey;}\n"+
            ".divChooseItem:hover {border:2px solid red;}\n"+

            ".divMillChooseItem {float:left;position:relative;margin:5px;width:52px;height:52px;border-radius:7px;}\n"+
            ".divMillChooseItem:hover {background-color:red;}\n"+
            ".divMillChooseItemNumber {position:absolute;right:0px;bottom:0px;margin:3px;color:black;font-weight:bold;font-size:16px;}\n"+

            ".divQueueItemListTitle {float:left;display:block;font-weight:bold;padding:0px 2px 1px 2px;}\n"+
            ".divQueueItemListTitle2 {float:right;display:block;font-weight:bold;padding:0px 2px 1px 2px;}\n"+
            ".divQueueItemListHeader {margin-bottom:3px;display:inline-block;}\n"+
            ".divQueueItemListSelect {float:right;position:relative;display:block;font-weight:bold;padding:0px 2px 1px 2px;margin-bottom:5px;}\n"+
            ".divQueueItemListBox {position:relative;display:block;border:1px solid black;margin:5px;min-height:45px;}\n"+
            ".divQueueItemListChooseItem {position:relative;display:inline-block;margin:3px 5px 13px 5px;border-radius:10px;border:2px solid grey;}\n"+
            ".divQueueItemListNumber {position:absolute;right:0px;bottom:-16px;font-weight:bold;font-size:12px;}\n"+
            ".divQueueItemListFooter {position:relative;display:block;height:40px;}\n"+
            ".divItem {float:left;margin:2px;border-radius:10px;border:2px solid grey;}\n"+

            ".queueTitle {display:inline-block;font-weight:bold;padding:0px 2px 1px 2px;}\n"+
            ".queueTime {float:right;display:block;font-weight:bold;padding:0px 2px 1px 2px;}\n"+
            ".queueBoxerButton {float:left;display:inline-block;left:0px;height:"+(row7+2)+"px;display:block;padding:0px 2px 0px 1px;border-right:1px solid black;}\n"+
            ".queueBoxerQueueBox {float:left;display:inline-block;white-space:nowrap;left:27px;overflow:hidden;}\n"+
            ".queueItemBox {text-align:center;display:inline-block;position:relative;width:"+(queueItemBoxWidth-1)+"px;border-right:1px solid black;height:100%;}\n"+
            ".queueButtonScrollLeft {float:left;display:block;margin-left:29px;background:url("+IMAGES["arrowleft"]+") no-repeat scroll left top transparent;height:17px;width:25px;}\n"+
            ".queueButtonScrollRight {float:right;display:block;margin-right:3px;background:url("+IMAGES["arrowright"]+") no-repeat scroll left top transparent;height:17px;width:25px;}\n"+
            ".queueBoxerButton .queueButtonScrollLeft {float:none;position:relative;margin:2px 1px 0px 0px;}\n"+
            ".queueBoxerButton .queueButtonScrollRight {float:none;position:relative;margin:2px 1px 0px 0px;}\n"+
            ".queueButtonRepeat,.queueButtonShuffle, .queueButtonRotate, .queueButtonAdd, .queueButtonAddAll, .queueButtonCopy{display:block;width:22px;height:16px;border:1px solid #6C441E;border-radius:5px;margin:2px 1px 0px 0px;background:#FFFFFF}\n"+
            ".queueButtonRepeat {background: #FFFFFF no-repeat 2px 0px;}\n"+
            ".queueButtonShuffle {background: #FFFFFF no-repeat 2px 0px;}\n"+
            ".queueButtonRotate {background: #FFFFFF no-repeat 3px 0px;}\n"+
            ".queueButtonAdd {background: url("+IMAGES["plus"]+") #FFFFFF no-repeat 4px 1px;}\n"+
            ".queueButtonCopy {background: url("+IMAGES["copy"]+") #FFFFFF no-repeat 3px 2px;}\n"+

            ".queueItemProduct {left:"+(col2-2)+"px;top:"+(row1)+"px;position:relative;border:2px solid grey;border-radius:10px;margin-left:2px;}\n"+
            ".windmillItemProduct {left:"+(col2-2)+"px;top:"+(row1)+"px;position:relative;border:2px solid grey;border-radius:10px;margin-left:2px;background-color:#CBAD85;width:26px;height:24px;padding:3px 2px 3px 2px;}\n"+
            ".forestryItemProduct {left:"+(col2-2)+"px;top:"+(row1)+"px;position:relative;border:2px solid grey;border-radius:10px;margin-left:2px;background-color:#FFFFFF;width:25px;height:25px;padding:2.5px;}\n"+
            ".queueItemInput1, .queueItemInput2, .queueItemInput3{position:absolute;height:11px;background-color:transparent;color:black;text-align:right;}\n"+
            ".queueItemInput1 {top:"+row3+"px;}\n"+
            ".queueItemInput2 {top:"+row4+"px;}\n"+
            ".queueItemInput3 {top:"+row6+"px;}\n"+
            ".queueItemInputWidth1 {width:"+(col4-col1-2)+"px;left:"+col1+"px;}\n"+
            ".queueItemInputWidth2 {width:"+(col4-col2-2)+"px;left:"+col2+"px;}\n"+
            ".queueButtonMin  {left:0px;background:url("+IMAGES["minus"]+") no-repeat 0px 0px #FFFFFF;} \n"+
            ".queueButtonPlus {right:0px;background:url("+IMAGES["plus"]+") no-repeat 0px 0px #FFFFFF;} \n"+
            ".queueItemButton {border:1px solid #6C441E;position:absolute;width:13px;height:13px;}\n"+
            ".queueItemPlusButton {top:"+row1+"px;left:"+col1+"px;background:url("+IMAGES["plus"]+") no-repeat 0px 0px #FFFFFF;}\n"+
            ".queueItemMinButton {top:"+row2+"px;left:"+col1+"px;background:url("+IMAGES["minus"]+") no-repeat 0px 0px #FFFFFF;}\n"+
            ".queueItemUpButton {top:"+row5+"px;left:"+col1+"px;background:url("+IMAGES["singleArrowUp"]+") no-repeat 3px 2px #FFFFFF;}\n"+
            ".queueItemDownButton {top:"+row5+"px;left:"+col3+"px;background:url("+IMAGES["singleArrowDown"]+") no-repeat 5px 2px #FFFFFF;}\n"+
            ".queueItemBehaviourButton {top:"+row5+"px;left:"+col2+"px;background:no-repeat -1px -1px #FFFFFF;}\n"+
            ".queueItemModeButton {top:"+row6+"px;left:"+col1+"px;background:no-repeat 0px 0px #FFFFFF;}\n"+

            ".queueItemAddButton, .queueItemDeleteButton {display:block;position:absolute;width:15px;height:15px;}\n"+
            ".queueItemAddButton {top:"+row3+"px;left:"+col1+"px;}\n"+
            ".queueItemDeleteButton {top:"+row4+"px;left:"+col1+"px;}\n"+

            ".queueItemText {text-align:center;vertical-align:middle;position:absolute;width:"+(col4-col2)+"px;color:black;font-family:Verdana,sans-serif}\n"+
            ".queueItemTextInf {top:"+(row3-7)+"px;left:"+(col2)+"px;font-size:20px;font-weight:normal;}\n"+
            ".queueItemTextStop {top:"+(row3)+"px;left:"+(col2-2)+"px;font-size:12px;font-weight:bold;}\n"+
            ".queueItemTime {position:absolute;width:100%;overflow:hidden;text-align:center;border-top:1px solid black;margin:0px 1px;width:"+(queueItemBoxWidth-3)+"px;}\n"+
            ".queueItemTime {top:"+(row7+2)+"px;}\n"+
            ".hoverBgPurple:hover{background-color:#ff00ff!important;}\n"+
            ".hoverBgWhite:hover{background-color:#ffffff!important;}\n"+

            ".queueBoxSpacer {float:left;display:block;width:100%;padding:2px 0px 2px 0px;}\n"+
            ".queueBox {z-index:5;position:absolute;text-align:center;display:none;background-color: #b8a789;padding: 0px 0px 3px 0px;position:absolute;border:2px solid black;border-radius:10px;color:black;}\n"+
            ".queueBoxerGeneral {width:100%;overflow:hidden;overflow-y:auto;border-top:1px solid black;border-bottom:1px solid black}\n"+
            ".queueBoxerGeneral {max-height:280px;}\n"+
            ".queueBoxClose {float:right;top:3px;width:15px;height:15px;margin-right:1px;padding:2px 2px 2px 2px;}\n"+

            ".fieldlinks {height:25px;left:0;position:absolute;top:35px;}\n"+
            ".fieldlinkitem1,.fieldlinkitem2,.fieldlinkitem3,.fieldlinkitemactivate1,.fieldlinkitemactivate2,.fieldlinkitemactivate3{float:left;color:#FFFFFF;font-size:16px;font-weight:bold;margin: 5px 7px 0px 0px;padding-top:2px;text-align:center;height:34px;width:40px;}\n"+
            ".fieldlinkitem1{background:url("+IMAGES["zone_off_1"]+") no-repeat scroll 2px 0px transparent;background-size: 40px 30px;}\n"+
            ".fieldlinkitemactivate1{background:url("+IMAGES["zone_on_1"]+") no-repeat scroll left top transparent;background-size: 40px 30px;}\n"+
            ".fieldlinkitem2{background:url("+IMAGES["zone_off_2"]+") no-repeat scroll 2px 0px transparent;background-size: 40px 30px;}\n"+
            ".fieldlinkitemactivate2{background:url("+IMAGES["zone_on_2"]+") no-repeat scroll left top transparent;background-size: 40px 30px;}\n"+
            ".fieldlinkitem3 {background:url("+IMAGES["zone_off_3"]+") no-repeat scroll 2px 0px transparent;background-size: 40px 30px;}\n"+
            ".fieldlinkitemactivate3{background:url("+IMAGES["zone_on_3"]+") no-repeat scroll left top transparent;background-size: 40px 30px;}\n"+

            ".lineZoneItem {border-radius:3px;margin:1px 0px 1px 1px;display:inline-block;height:15px;overflow:hidden;}\n"+
            ".lineZoneItem:hover {background-color:red;}\n"+
            ".lineZoneTypeB1 {background-color:#800000}\n"+
            ".lineZoneTypeB2 {background-color:#808080}\n"+
            ".lineZoneTypeB3 {background-color:#808000}\n"+
            ".lineZoneTypeBmill {background-color:#DEDE16}\n"+
            ".lineZoneTypeL1 {background-color:#993300}\n"+
            ".lineZoneTypeL2 {background-color:#C0C0C0}\n"+
            ".lineZoneTypeL3 {background-color:#B08000}\n"+
            ".lineZoneTypeLmill {background-color:#C8C814}\n"+
            "#lineZonemill {height:28px;}\n"+
            ".lineZone {display:block;white-space:nowrap;text-align:left;height:17px;width:100%;background-color:#333300;}\n"+

            ".ernte13 {position:absolute;top:98px;left:145px;width:30px;height:30px;border:2px solid black;border-radius:10px;}\n"+
            ".ernte14 {position:absolute;top:98px;left:210px;width:30px;height:30px;border:2px solid black;border-radius:10px;}\n"+
            ".ernte15 {position:absolute;top:98px;left:415px;width:30px;height:30px;border:2px solid black;border-radius:10px;}\n"+
            ".ernte16 {position:absolute;top:98px;left:480px;width:30px;height:30px;border:2px solid black;border-radius:10px;}\n"+
            ".r1, .r2, .r3, .r4, .r5, .r6, .r7, .r8, .r9, .r10, .r11, .r12, .r13, .r14, .r15, .r16, .r17, .r18, .r19, .r20, .r21 {background:url("+IMAGES["powerups"]+") no-repeat scroll left top transparent;height: 30px;width: 30px;position:relative;}\n"+
            ".r2, .r7, .r8, .r9, .r10, .r11, .r12, .r13, .r19, .r20 {background-position:0px -0.5px;}\n"+
            ".r3, .r5, .r15, .r18 {background-position:-31px -0.5px;}\n"+
            ".r1, .r4, .r6, .r14, .r16, .r17, .r21 {background-position:-61px -0.5px;}\n"+
            ""
        );
//const row1=2;const row2=21;const row3=38;const row4=55;const row5=72;const row6=89;const row7=108;
//const col1=2;const col2=21;const col3=40;const col4=55;

        // createElement("div",{"id":"divAutomatIconContainer"},$("divGame").children[0]);
        drawButtons();

        err_trace="listener gameFieldOpened";
        document.addEventListener("gameFieldOpened",function(){ // field open
        try{
            if(settings.get("account","autoPlant")&&(!$("autoplantbutton"))){ //autoFarmPlant button
                if((unsafeWindow.premium!=1)||(unsafeWindow.currentuserlevel<unsafeWindow.autoplantlevel)){
                    var newdiv=createElement("div",{"id":"autoplantbutton","class":"autoplantbutton link","style":"display:block;position:absolute;top:100px;left:273px;"},$("gardenmaincontainer")); // z-index:4;
                    newdiv.addEventListener("mouseover",function(event){
                        // this.src=GFX+"autoplant_on.png";
                        toolTip.show(event,getText("automat_automatPlanting"));
                    },false);
                    // newdiv.addEventListener("mouseout",function(){this.src=GFX+"autoplant_off.png";},false);
                    newdiv.addEventListener("click",function(){
                        unsafeWindow.jsTimeStamp=unsafeWindow.Zeit.Client - unsafeWindow.Zeit.Verschiebung;
                        handled.set(getFarmZone(unsafeWindow.currentposition?unsafeWindow.currentposition:1));
                        if(unsafeWindow.mode=="2"){
                            autoFarmWater(bot.start(),1,false,false);
                        }else{
                            autoFarmPlant(bot.start(),1,false,false);
                        }
                    },false);
                    newdiv=null;
                }
            }
            if(DEVMODE){  //only for viewing
                for(var v=1;v<=unsafeData.BUILDING_SIZE["1"];v++){
                    $("f"+v).setAttribute("title",v+"|kat"+unsafeWindow.garten_kategorie[v]+"|zt"+unsafeWindow.garten_zeit[v]+"|wa"+unsafeWindow.garten_wasser[v]+"|pr"+unsafeWindow.garten_prod[v]);
                }
            }
            showCropWeed();
        }catch(err){GM_logError("eventListener:gameFieldOpened ","","",err);}
        },false);

        err_trace="listener gameOpenMegafield";
        document.addEventListener("gameOpenMegafield",function(){
        try{
            // Automat icon
            drawAutomatIcon("megafield","megafield",$("megafield_back"),"position:absolute;top:350px;left:600px;");
        }catch(err){GM_logError("eventListener:gameOpenMegafield ","","",err);}
        },false);

        err_trace = "listener gameMegafieldDataDone";
        document.addEventListener("gameMegafieldDataDone", function() {
          try {
            var log = unsafeData.logMegafieldJob;
            if (!log) {
              // Exit here, if no current log is available
              return;
            }
            var data = unsafeWindow.megafield_data;
            var item; // Temp variable

            var planted = {}; // pId -> amount currently planted
            for (var num in data["area"]) {
              if (!data["area"].hasOwnProperty(num)) { continue; }
              item = data["area"][num];
              if (!planted[item.pid]) { planted[item.pid]=0; }
              planted[item.pid]++;
            }

            var sumInQueue = {}; // pId -> amount in queue
            for (var i=0; i<zoneList["megafield"].length; i++) {
              item = zoneList["megafield"][i];
              if (!sumInQueue[item[0]]) {sumInQueue[item[0]]=0;}
              sumInQueue[item[0]]+=item[1];
            }

            var missing = {}; // pId -> amount missing (due to log)
            for (var i=0; i<log[4].length; i++) {
              item = log[4][i];
              missing[item[0]]=item[1]-item[2];
            }

            for (var pId in sumInQueue) {
              if (!sumInQueue.hasOwnProperty(pId)) { continue; }
              if (!planted[pId]) {planted[pId]=0;}

              item = sumInQueue[pId];
              if (item == missing[pId]-planted[pId]) {
                // Queue contains exactly the remaining amounts
              } else if (item > missing[pId]-planted[pId]) {
                // More amount of pId in queue than allowed
                var delta = item-(missing[pId]-planted[pId]);
                var newZoneListMegafield=[];
                for (var i=0; i<zoneList["megafield"].length; i++) {
                  item = zoneList["megafield"][i].clone();
                  if (item[0]==pId) {
                    var minValue=Math.min(item[1], delta);
                    delta-=minValue;
                    if (item[1] > minValue) {
                      item[1]-=minValue; // Just subtract delta amount
                      newZoneListMegafield.push(item);
                    } else {
                      // Remove whole entry from megafield queue (by not pushing it here to newZoneListMegafield)
                    }
                  } else {
                    // Wrong pId, skip entry
                    newZoneListMegafield.push(item);
                  }
                }
                zoneList["megafield"]=newZoneListMegafield;

              } else if (item < missing[pId]-planted[pId]) {
                // Fewer amount of pId in queue than possible
              } else {
                // Any value was undefined (pId not in megafield queue or PRODSTOP)
              }
            }
          } catch (err) { GM_logError("eventListener:gameMegafieldDataDone ", "", "", err); }
        }, false);

        err_trace="listener gameCity2";
        document.addEventListener("gameCity2",function(){
        try{
            // Automat icons
            drawAutomatIcon("windmill","windmill.1",$("cityzone_2_1"),"position:absolute;bottom:0;right:0;");
        }catch(err){GM_logError("eventListener:gameCity2 ","","",err);}
        },false);

        err_trace="listener gameOpenForestry";
        document.addEventListener("gameOpenForestry",function(){
        try{
            // Cropping automat
            if(unsafeWindow.premium!=1){
                //logBubble.add("reset frestry croppping",10,"red");
                $("forestry_forest_button2").setAttribute("onclick","");
                $("forestry_forest_button2").addEventListener("click",function(){
                    if(!bot.isBusy()){
                        handled.set("forest");
                        autoForestryForest(bot.start(),3,1,false,false);
                    }
                },false);
            }
            // Planting automat
            var el1=createElement("img",{"id":"autoFarmForest","class":"link","style":"position:absolute;top:-25px;left:0;width:25px;height:25px;","src":GFX+"autoplant_off.png"},$("forestry_forest_buttons"));
            el1.addEventListener("mouseover",function(event){
                this.src=GFX+"autoplant_on.png";
                toolTip.show(event,"Automatic planting"); // TODO text
            },false);
            el1.addEventListener("mouseout",function(){this.src=GFX+"autoplant_off.png";},false);
            el1.addEventListener("click",function(){
                if(!bot.isBusy()){
                    handled.set("forest");
                    autoForestryForest(bot.start(),5,1,false,false);
                }
            },false);
            // Automat icons
            drawAutomatIcon("forest","forest",$("forestry_forest_buttons"),"margin-top:10px;");
            if(!unsafeData.zones.getBlock("sawmill.1")){
                drawAutomatIcon("sawmill","sawmill.1",$("forestry_building1"),"position:absolute;right:0pt;bottom:15px;");
            }
            if(!unsafeData.zones.getBlock("carpentry.1")){
                drawAutomatIcon("carpentry","carpentry.1",$("forestry_building2"),"position:absolute;right:0pt;bottom:15px;");
            }
            el1=null;
        }catch(err){GM_logError("eventListener:gameOpenForestry ","","",err);}
        },false);
        err_trace="listener gameSawmillOpened";
        document.addEventListener("gameSawmillOpened",function(){
            try{
                var zoneNrF="sawmill";
                var zoneNrS;
                var container,help;
                for(var slot=1;slot<=3;slot++){
                    zoneNrS=zoneNrF+"."+slot;
                    container=$("forestry_building_inner_slot"+slot);
                    if(help=container.querySelector(".divForestryIcon")){
                        removeElement(help);
                    }
                    if(!unsafeData.zones.getBlock(zoneNrS)){
                        drawAutomatIcon(zoneNrS,zoneNrS,container,"left:90px;bottom:-95px;");
                    }
                }
                container=null;help=null;
            }catch(err){GM_logError("eventListener:gameSawmillOpened","","",err);}
        },false);
        err_trace="listener gameCarpentryOpened";
        document.addEventListener("gameCarpentryOpened",function(){
            try{
                var zoneNrF="carpentry";
                var zoneNrS;
                var container,help;

                for(var slot=1;slot<=3;slot++){
                    zoneNrS=zoneNrF+"."+slot;
                    container=$("forestry_building_inner_slot"+slot);
                    if(help=container.querySelector(".divForestryIcon")){
                        removeElement(help);
                    }
                    if(!unsafeData.zones.getBlock(zoneNrS)){
                        drawAutomatIcon(zoneNrS,zoneNrS,container,"left:90px;bottom:-95px;");
                    }
                }
                container=null;help=null;
            }catch(err){GM_logError("eventListener:gameCarpentryOpened","","",err);}
        },false);
        err_trace="listener gameFoodworldOpened";
        document.addEventListener("gameFoodworldOpened", function() {
            try {
                // Kick Foodworld-Farmis
                checkFoodworldFarmi();

                // Automat icons
                for (var v = 1; v <= 4; v++) {
                    if (v < 4) {
                        if (!unsafeData.zones.getBlock("foodworld-" + v + ".1")) {
                            drawAutomatIcon("foodworld-" + v,
                                "foodworld-" + v + ".1",
                                $("food_pos" + v),
                                "position:absolute;left:90px;top:100px;");
                        }
                    } else {
                        if (!unsafeData.zones.getBlock("foodworld-" + v + ".1")) {
                            drawAutomatIcon("foodworld-" + v,
                                "foodworld-" + v + ".1",
                                $("food_pos" + v),
                                "position:absolute;right:52px;bottom:27px;");
                        }
                    }
                }
            } catch (err) { GM_logError("eventListener:gameFoodworldOpened ", "", "", err); }
        }, false);
        for(var v=1;v<=4;v++){
            err_trace="listener gameFoodworldOpened"+v;
            document.addEventListener("gameFoodworldOpened"+v,function(id){
                return function(){
                try{
                    var zoneNrF="foodworld-"+id;
                    var zoneNrS;
                    var container,help;
                    for(var slot=1;slot<=3;slot++){
                        zoneNrS=zoneNrF+"."+slot;
                        container=$("food_slot"+slot+"_back");
                        if(help=container.querySelector(".divZoneIcon")){
                            removeElement(help);
                        }
                        if(!unsafeData.zones.getBlock(zoneNrS)){
                            drawAutomatIcon(zoneNrS,zoneNrS,container,"left:-10px;");
                        }
                    }
                    container=null;help=null;
                }catch(err){GM_logError("eventListener:gameFoodworldOpened"+id+"","","",err);}
                }
            }(v),false);
        }
        function showCropWeed(){
        try{
            GM_logInfo("showCropWeed","","","Begin",1);
            var velds=new Array();
            var newspan=null;
            for(var v=1;v<=120;v++){
                if(!velds[unsafeWindow.garten_prod[v]]) velds[unsafeWindow.garten_prod[v]]=new Array();
                velds[unsafeWindow.garten_prod[v]].push(v);
            }
            for(var product in CROPCOST){
                if(!CROPCOST.hasOwnProperty(product)){ continue; }
                if(velds[product] && velds[product].length > 0){
                    if(!$("cropWeed"+product)){
                        newspan=createElement("div",{id:"cropWeed"+product,"class":"link ernte"+product+ " v"+product},$("gardenmaincontainer"));
                        newspan.addEventListener("click",function(){
                        try{
                            if(this.getAttribute("run")=="false"){
                                this.setAttribute("run",true);
                                bot.deactivate();
                                var product=this.getAttribute("product");
                                GM_logInfo("showCropWeed","","","Autoclear: "+unsafeData.prodName[0][product],5,"#880808");
                                this.style.border="2px solid red";
                                autoCropUndefined(explode(this.getAttribute("velds"),"showCropWeed/click/velds"), product);
                            }else{
                                this.setAttribute("run",false);
                                this.style.border="";
                                GM_logInfo("showCropWeed","","","Exiting Autoclear: stopping",5,"#880808");
                            }
                        }catch(err){GM_logError("showCropWeed Icon Click ","","",err);}
                        },false);
                        newspan.addEventListener("mouseover",function(event){
                            var product=this.getAttribute("product");
                            var amount=explode(this.getAttribute("velds"),"showCropWeed/mouseover/velds").length;
                            toolTip.show(event,getText("automat_removeAllWeed").replace("%PROD%",unsafeData.prodName[0][product]).replace("%TCOST%",moneyFormat(amount*CROPCOST[product])).replace("%AMOUNT%",amount).replace("%COST%",moneyFormat(CROPCOST[product])));
                        },false);
                    }else{
                        newspan=$("cropWeed"+product);
                    }
                    newspan.style.border="";
                    newspan.setAttribute("run",false);
                    newspan.setAttribute("product",product);
                    newspan.setAttribute("velds",implode(velds[product],"showCropWeed/velds"));
                }else if($("cropWeed"+product)){
                    removeElement($("cropWeed"+product));
                }
            }
            newspan=null;prods=null;product=null;
            $("gardenclearer").style.display="none";
        }catch(err){GM_logError("showCropWeed ","","",err);}
        }

        function autoCropUndefined(felds,product){
            GM_logInfo("autoCropUndefined","felds="+implode(felds,"autoCropUndefined/felds")+" product="+product,"handled.zoneNr="+handled.zoneNr,"Begin",1);
            if(unsafeData.money < CROPCOST[product]){
                GM_logInfo("autoCropUndefined","felds="+implode(felds,"autoCropUndefined/felds")+" product="+product,"handled.zoneNr="+handled.zoneNr,"Exiting Autoclear: not enough money",5,"#880808");
                showCropWeed();
            }else if($("cropWeed"+product).getAttribute("run")=="true" && felds.length > 0){
                GM_logInfo("autoCropUndefined","felds="+implode(felds,"autoCropUndefined/felds")+" product="+product,"handled.zoneNr="+handled.zoneNr,"Autoclear: "+ felds.length +"x "+unsafeData.prodName[0][product],5,"#880808");
                if(unsafeWindow.garten_prod[felds[0]]==product){
                    //unsafeWindow.raeumeFeld(handled.zoneNr,felds[0]);
                    $("globalbox").addEventListener("DOMAttrModified",function(){
                        if(this.style.display=="block"){
                            document.addEventListener("gameFieldDemolish",function(felds,product){
                                return function(){
                                    try{
                                    document.removeEventListener("gameFieldDemolish",arguments.callee,false);
                                    felds.shift();
                                    $("cropWeed"+product).setAttribute("velds",implode(felds,"autoCropUndefined/velds"));
                                    if($("fundpopup").style.display=="block"){
                                        click($("fundpopup").firstElementChild);
                                        var cell;
                                        GM_logInfo("autoCropUndefined","felds="+implode(felds,"autoCropUndefined/felds")+" product="+product,"handled.zoneNr="+handled.zoneNr,"Found Money: "+((cell=$("fundpopupbetrag"))?cell.innerHTML:""),10,"green");
                                        cell=null;
                                    }
                                    toolTip.adjust($("cropWeed"+product));
                                    window.setTimeout(autoCropUndefined,3*settings.getPause(true),felds,product);
                                }catch(err){GM_logError("autoCropUndefined/gameFieldDemolish","felds="+felds+" product="+product,"",err);}
                                }
                            }(felds,product),false);
                            click($("globalbox").getElementsByClassName("link")[0]);
                            this.removeEventListener("DOMAttrModified",arguments.callee,false);
                        }
                    },false);
                    click($("f"+felds[0]));
                }
            }else if(felds.length<=0){
                felds=null;product=null;
                GM_logInfo("autoCropUndefined","felds="+implode(felds,"autoCropUndefined/felds")+" product="+product,"handled.zoneNr="+handled.zoneNr,"Exiting Autoclear: Done",5,"#880808");
                showCropWeed();
            }else{
                showCropWeed();
            }
        }

        err_trace="listener gameOpenStable";
        document.addEventListener("gameOpenStable",function(){ // stable open
        try{
            if(settings.get("account","autoFeed")){ //autoFarmStable button
                var zoneNrF=getFarmZone(unsafeWindow.currentposition);
                var v=getZoneType(zoneNrF);
                for(var w=0;w<BUILDING2FEED[v].length;w++){
                    if($("feed_item"+BUILDING2FEED[v][w]+"_normal")){
                        if(!$("autoFarmStable"+v+"t"+BUILDING2FEED[v][w])){
                            var newimg=createElement("img",{"id":"autoFarmStable"+v+"t"+BUILDING2FEED[v][w],"class":"link","style":"position:absolute;top:50px;width: 25px; height: 25px;z-index:11;","src":GFX+"autoplant_off.png"},$("feed_item"+BUILDING2FEED[v][w]+"_normal"));
                            newimg.addEventListener("mouseover",function(event){
                                this.src=GFX+"autoplant_on.png";
                                toolTip.show(event,"Automatic feeding"); // TODO text
                            },false);
                            newimg.addEventListener("mouseout",function(){this.src=GFX+"autoplant_off.png";},false);
                            newimg.addEventListener("click",function(){
                                var help=/(\d+)t(\d+)/.exec(this.id);
                                handled.set(unsafeWindow.currentposition);
                                autoFarmStable(bot.start(),1,false,false,help[2],0,240); //could be calculated exactly
                            },false);
                            newimg=null;
                        }
                    }
                }
            }
        }catch(err){GM_logError("eventListener:gameOpenStable ","","",err);}
        },false);

        err_trace="listener gameOpenFactoryOilKnittingTea";
        document.addEventListener("gameOpenFactoryOilKnittingTea",function(){ // oil-factory open
        try{
            var farmNr = unsafeData.gameLocation.get()[1]+1;
            var position = unsafeWindow.currentposition;
            var zoneNrF=getFarmZone(unsafeWindow.currentposition);
            var zoneNrS;
            for(var slot=1;slot<=3;slot++){
                zoneNrS=zoneNrF+"."+slot;
                if(!unsafeData.zones.getBlock(zoneNrS)){
                    drawAutomatIcon(zoneNrS,zoneNrS,$("production_slot_info"+farmNr+"_"+position+"_"+slot).parentNode,"top:110px;left:100px;");
                }
            }
        }catch(err){GM_logError("eventListener:gameOpenFactoryOilKnittingTea ","","",err);}
        },false);

        err_trace="listener gameOpenFuelstation";
        document.addEventListener("gameOpenFuelstation",function(){ // Fuelstation open
        try{
            var farmNr = unsafeData.gameLocation.get()[1]+1;
            var position = unsafeWindow.currentposition;
            var zoneNrF=getFarmZone(unsafeWindow.currentposition);
            var zoneNrS;
            for(var slot=1;slot<=4;slot++){
                zoneNrS=zoneNrF+"."+slot;
                if(!unsafeData.zones.getBlock(zoneNrS)){
                    drawAutomatIcon(zoneNrS,zoneNrS,$("fuelstation_slot"+slot),"top:110px;left:50px;");
                }
            }
        }catch(err){GM_logError("eventListener:gameOpenFuelstation ","","",err);}
        },false);

        err_trace="listener gameOpenPony";
        document.addEventListener("gameOpenPony",function(){ // pony open
            drawPonyIcons();
        },false);
        err_trace="listener gamePonyCropped";
        document.addEventListener("gamePonyCropped",function(){ // pony fed
            drawPonyIcons();
        },false);
        err_trace="listener gamePonyFed";
        document.addEventListener("gamePonyFed",function(){ // pony fed
            drawPonyIcons();
        },false);
        err_trace="listener gamePonyFarmiSet";
        document.addEventListener("gamePonyFarmiSet",function(){ // pony farmi set on pony
            drawPonyIcons();
        },false);
        err_trace="listener gamePonySpeedup";
        document.addEventListener("gamePonySpeedup",function(){ // pony farmi set on pony
            drawPonyIcons();
        },false);

        function drawPonyIcons() {
        try{
            var zoneNrF=getFarmZone(unsafeWindow.currentposition);
            var zoneNrS;
            for(var slot=1;slot<=3;slot++){
                zoneNrS=zoneNrF+"."+slot;
                if(!unsafeData.zones.getBlock(zoneNrS)){
                    var topV="left:-16px;top:70px;";
                    if (slot == 1) {
                        topV="left:34px;top:70px;";
                    }
                    drawAutomatIcon(zoneNrS,zoneNrS,$("pony_ponys").children[slot-1],topV);
                    drawPonySpeedUp(zoneNrS,zoneNrS,$("pony_ponys").children[slot-1],(slot==1)?"left:80px;":"left:30px;");
                }
            }
          }catch(err){GM_logError("eventListener:gameOpenPony ","","",err);}
        }
        function drawPonySpeedUp(name,zoneNrS,appendTo,style) {
            var frame=createElement("div", {
                "style":style+"position:absolute;z-index:10;top:70px;padding-left: 4px;background-color:#FEE5AA;border: 1px solid black;border-radius: 5px;"},
                appendTo,"SpeedUp:");
            var inp = createElement("select", {"id":"e160"+name}, frame);

            for (var i=0;i<=zoneList[zoneToList[zoneNrS]][0][0]/2;i++){
                createElement("option", {"value":i}, inp, i+" ");
            }
            inp.value=Math.min(zoneList[zoneToList[zoneNrS]][0][1],zoneList[zoneToList[zoneNrS]][0][0]/2);

            inp.addEventListener("change",function(){
                zoneList[zoneNrS][0][1]=parseInt(this.value,10);
                GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList", implode(zoneList,"updateQueueBox/zoneList"));
            },false);

            document.addEventListener("ponyFarmiSelect",function(zoneNrS){
                return function(){
                    var inp = $("e160"+zoneNrS);
                    inp.length = 0;
                    for (var i=0;i<=zoneList[zoneToList[zoneNrS]][0][0]/2;i++){
                        createElement("option", {"value":i}, inp, i+" ");
                    }
                    inp.value=Math.min(zoneList[zoneToList[zoneNrS]][0][1],zoneList[zoneToList[zoneNrS]][0][0]/2);
                };
            }(zoneNrS),false);
        }

        rr_trace="listener gameOpenSushiBarProduction";
        document.addEventListener("gameOpenSushiBarProduction",function(){ // oil-factory open
        try{
            // var farmNr = unsafeData.gameLocation.get()[1]+1;
            // var position = unsafeWindow.currentposition;
            // var zoneNrF=getFarmZone(unsafeWindow.currentposition);
            // var zoneNrS;

            var zoneNrF = (parseInt(unsafeWindow.sushibar.data.data.farm,10) -1)*6 + parseInt(unsafeWindow.sushibar.data.data.position,10);
            var zoneNrS;
            for(var slot=1;slot<=4;slot++){
                zoneNrS=zoneNrF+"."+slot;
                if(!unsafeData.zones.getBlock(zoneNrS)){
                    drawAutomatIcon(zoneNrS,zoneNrS,$("sushibar_productionslot"+slot),"top:110px;left:100px;");
                }
            }
        }catch(err){GM_logError("eventListener:gameOpenFactoryOilKnittingTea ","","",err);}
        },false);



        function drawFarmIcons(){
        try{
            var farmNR,zoneNr,zoneNrF;
            for(var i=unsafeData.ALL_ZONES["farm"].length-1;i>=0;i--){
                zoneNrF=unsafeData.ALL_ZONES["farm"][i];
                if((!unsafeData.zones.getBlock(zoneNrF))&&(getBuildingTyp(zoneNrF)!=0)){
                    farmNR=Math.floor((unsafeData.ALL_ZONES["farm"][i]-1)/6)+1;
                    zoneNr=zoneNrF-6*(farmNR-1);
                    drawAutomatIcon(zoneNrF,zoneNrF+(unsafeData.zones.isMultiSlot(zoneNrF)?".1":""),$("farm"+farmNR+"_pos"+zoneNr),"");
                }
            }
        }catch(err){GM_logError("drawFarmIcons","","",err);}
        }
        document.addEventListener("gameFarmLoaded",drawFarmIcons,false);
        function updateFarmIcons(){
        try{
            var zoneNrF;
            for(var i=unsafeData.ALL_ZONES["farm"].length-1;i>=0;i--){
                zoneNrF=unsafeData.ALL_ZONES["farm"][i];
                if((!unsafeData.zones.getBlock(zoneNrF))&&(getBuildingTyp(zoneNrF)!=0)){
                    updateQueueBox(zoneNrF+(unsafeData.zones.isMultiSlot(zoneNrF)?".1":""));
                }
            }
        }catch(err){GM_logError("updateFarmIcons","","",err);}
        }
        document.addEventListener("gameFarmOpened",updateFarmIcons,false);
        drawFarmIcons();
        err_trace="devMode";
        function viewDev(mode){
            // GM_log("viewDev: " + mode);
            if(mode!=""){
                viewDevMode=explode(GM_getValue("viewDevMode",implode(["",""],"viewDev/viewDevMode"),"viewDev/viewDevMode",["",""]));
                viewDevMode=viewDevMode.slice(0,1);
                viewDevMode.unshift(mode);
                GM_setValue2("viewDevMode",implode(viewDevMode,"viewDev/viewDevMode"));
            }else{
                viewDevMode=["",""];
                GM_setValue2("viewDevMode",implode(["",""],"viewDev/viewDevMode"));

                try{
                    window.clearInterval(autoDevRefresh);
                    autoDevRefresh=null;
                }catch(err){
                    autoDevRefresh=null;
                }
            }
            showDevMode();
        }
        function showDevMode(){
            for(var i=0;i<viewDevMode.length;i++){
                // GM_log("showDevMode: " + viewDevMode[i]);
                switch (viewDevMode[i]){
                    case "punkte":
                    case "zoneToList":
                    case "zoneSettings":
                    case "zoneList":
                    case "autoMillStorage":
                    case "QUESTS":
                    case "now":
                        $("divPrintArray"+i).style.display="block";
                        $("divPrintArray"+i).innerHTML=viewDevMode[i]+"<br/>" + print_r(eval(viewDevMode[i]));
                        break;
                    case "":
                        $("divPrintArray"+i).style.display="none";
                        $("divPrintArray"+i).innerHTML="";
                        break;
                    default:
                        $("divPrintArray"+i).style.display="block";
                        $("divPrintArray"+i).innerHTML=viewDevMode[i]+"<br/>" + print_r(eval("unsafeWindow."+viewDevMode[i]));
                        // GM_log("unsafeWindow."+viewDevMode[i]+"="+implode(eval("unsafeWindow."+viewDevMode[i])));
                        break;
                }
            }
            if(!autoDevRefresh){
                autoDevRefresh=window.setInterval(function (){
                    showDevMode();
                },1000);
            }
        }
        if(DEVMODE){
            newdiv=createElement("div",{id:"divPrintArray0",style:"height:100%;padding:4px;margin-bottom:30px;color:black;background-color:black;top:10px;float:left;border:1px solid red;"});
            ALL.insertBefore(newdiv,$("uptoolbar"));
            newdiv=createElement("div",{id:"divPrintArray1",style:"height:100%;padding:4px;margin-bottom:30px;color:black;background-color:black;top:10px;float:right;border:1px solid red;"});
            ALL.insertBefore(newdiv,$("uptoolbar"));

            GM_registerMenuCommand("View none", function(){viewDev("");});
            //GM_registerMenuCommand("Refresh", function(){devRefresh("manual");});
            //GM_registerMenuCommand("Auto Refresh", function(){devRefresh("auto");});
            MenuCommand.sort();
            for(i in MenuCommand){
                if(!MenuCommand.hasOwnProperty(i)){ continue; }
                GM_registerMenuCommand("View "+MenuCommand[i], function(i){return function(){viewDev(MenuCommand[i]);};}(i));
            }

            document.getElementsByTagName("body")[0].style.overflow="auto";
            var autoDevRefresh=null;
            var viewDevMode=explode(GM_getValue("viewDevMode",implode(["",""],"do_main/viewDevMode")),"do_main/viewDevMode",["",""]);
            showDevMode();
        }

        document.addEventListener("gameReallocateBuilding",function(){
            GM_logInfo("gameReallocateBuilding","","","Begin",1);
            try{
                var building1=unsafeData.reallocateBuildingSet[0];
                var building2=unsafeData.reallocateBuildingSet[1];
                var zoneL1 = getZoneListId(building1);
                var zoneL2 = getZoneListId(building2);
                GM_logInfo("gameReallocateBuilding","","building1="+building1+" building2="+building2,"",0);
                var help;

                help=zoneList[zoneL1].clone();
                zoneList[zoneL1]=zoneList[zoneL2].clone();
                zoneList[zoneL2]=help;
                GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList",implode(zoneList,"gameReallocateBuilding/zoneList"));

                help=zoneSettings[zoneL1].clone();
                zoneSettings[zoneL1]=zoneSettings[zoneL2].clone();
                zoneSettings[zoneL2]=help;
                GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneSettings",implode(zoneSettings,"gameReallocateBuilding/zoneSettings"));

                help=zoneToList[building1].clone();
                zoneToList[building1]=zoneToList[building2].clone();
                zoneToList[building2]=help;
                GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneToList",implode(zoneToList,"gameReallocateBuilding/zoneToList"));

                // GM_log("End Automat gameReallocateBuilding: " + building1 + " : " + building2);
            }catch(err){GM_logError("gameReallocateBuilding ","","",err);}
            GM_logInfo("gameReallocateBuilding","","","End",1);
        },false);

        document.addEventListener("gameUpdateRack",function(){
            // reCalculateWindmill();
        },false);

        // get dealer items
        document.addEventListener("gameUpdateFormuladealerRack",function(){ // Bought a recipe
        try{
            var help=new Object();
            for(var v=0; v<$("formuladealerrackinner").childNodes.length;v++){
                if($("formuladealerrackinner").childNodes[v].childNodes.length > 0){
                    rId=parseInt($("formuladealerrackinner").childNodes[v].childNodes[0].getAttribute("class").replace("fmm",""),10);
                    rNum=parseInt($("formuladealerrackinner").childNodes[v].childNodes[1].innerHTML,10);
                    if(!!rId && !!rNum) help[rId]=[rNum,0,NEVER];
                }
            }
            autoMillStorage=help.clone();
            help=null;
            reFillQueueBox("windmill","windmill",0);
        }catch(err){GM_logError("eventListener:gameUpdateFormuladealerRack ","","",err);}
        },false);

        document.addEventListener("gameOpenWindmill",function(){ // Windmill
        try{
            // var help=new Object();
            // for(var v=0; v<$("windmillformula").childNodes.length;v++){
            //  if($("windmillformula").childNodes[v].childNodes.length > 0){
            //      rId=parseInt($("windmillformula").childNodes[v].childNodes[0].getAttribute("class").replace("fm",""),10);
            //      rNum=parseInt($("windmillformula").childNodes[v].childNodes[1].innerHTML,10);
            //      if(!!rId && !!rNum) help[rId]=[rNum,0,NEVER];
            //  }
            // }
            // autoMillStorage=help.clone();
            // help=null;
            for(var slot=1;slot<=2;slot++){
                var zoneNrS="windmill."+slot;
                if(!unsafeData.zones.getBlock(zoneNrS)){
                    drawAutomatIcon(zoneNrS,zoneNrS,$("windmill_slot"+slot),"top:135px;");
                }
            }
            reFillQueueBox("windmill","windmill",0);
        }catch(err){GM_logError("eventListener:gameOpenWindmill ","","",err);}
        },false);

        // Farmersmarket
        err_trace="listener gameFarmersmarketOpened";
        document.addEventListener("gameFarmersmarketOpened",function(){
        try{
            // Automat icons
            for(var v=1;v<=11;v++){
                if (v==3 || v == 6 || v == 7 || v == 10) {continue;} //Automat-Icon blockieren (Farmersmarket-3)
                if(!unsafeData.zones.getBlock("farmersmarket-"+v)){
                    drawAutomatIcon("farmersmarket-"+v,
                                    "farmersmarket-"+v+(unsafeData.zones.isMultiSlot("farmersmarket-"+v)?".1":""),
                                    $("farmersmarket_pos"+v),
                                    "position:absolute;right:0;bottom:0;");
                }
            }
        }catch(err){GM_logError("eventListener:gameFarmersmarketOpened ","","",err);}
        },false);

        for(var v=1;v<=11;v++){
            err_trace="listener gameFarmersmarketOpened"+v;
            if (v == 10) {continue;}
            document.addEventListener("gameFarmersmarketOpened"+v,function(id){
                return function(){
                try{
                    var zoneNrF="farmersmarket-"+id;
                    var zoneNrS;
                    var container,help;
                    for(var slot=1;slot<=unsafeData.BUILDING_SLOTS[getZoneType(zoneNrF)];slot++){
                        zoneNrS=zoneNrF+"."+slot;
                        switch(id) {
                            case 2: container=$("nursery_slot_item"+slot); break;
                            case 3: container=$("megafruit_needs").children[slot-1];
                                    break;
                            case 4: if (slot<=4) {
                                      container=$("pets_productionslot"+slot);
                                    }
                                    else {
                                      container=$("pets_pet_needs").children[slot-5];
                                    }
                                    break;
                            case 5: container=$("vet_production_slot"+slot); break;
                            case 8: if (slot<=4) {
                                      container=$("cowracing_productionslot"+slot);
                                    }
                                    else if (slot > 4 && slot <= 19){
                                      container=$("cowracing_cowslots_navi").querySelector('div[onclick*="cowracing.setCowSlot('+(slot-4)+')');
                                    }
                                    else {
                                      container=$("cowracing_cowslots_navi").querySelector('div[onclick*="cowracing.setCowSlot('+(slot-4-15)+')');
                                    }
                                    break;
                            case 9:
                                    if(slot<=4) {
                                        container=$("fishing_productionslot"+slot);
                                    }
                                    break;
                            case 11:
                                    if(slot<=4) {
                                        container=$("scouts_productionslot"+slot);
                                    }
                                    break;
                            default: container=null;
                        }
                        if(container && (help=container.querySelector(".divZoneIcon"))){
                            if((id==8) && (slot <=19))
                                removeElement(help);
                        }
                        if(container && !unsafeData.zones.getBlock(zoneNrS)){
                            if (id == 3) {
                                drawAutomatIcon(zoneNrS,zoneNrS,container,"left:25px;");
                            } else if((id==8) && (slot >4)){
                                if (slot <= 19) {
                                    drawAutomatIcon(zoneNrS,zoneNrS,container,"left:10px;top:10px;");
                                } else {
                                    drawCowRacingCheckbox(zoneNrS,zoneNrS,container, "left:10px;top:-30px;");
                                }
                            } else if (id == 9 && slot > 4) {
                                    //drawFishingFishing(zoneNrS,zoneNrS,container, "left:10px;top:-30px;");
                            } else {
                                drawAutomatIcon(zoneNrS,zoneNrS,container,"left:-10px;");
                            }
                        }
                    }
                    container=null;help=null;
                }catch(err){GM_logError("eventListener:gameFarmersmarketOpened"+id+"","","",err);}
                }
            }(v),false);
        }


        err_trace="listener gameFishingBuildPier";
        document.addEventListener("gameFishingBuildPier",function(id){
            return function(){
            try{
                var zoneNrF="farmersmarket-"+id;
                var zoneNrS;
                var container,help;

                for(var slot=5;slot<=unsafeData.BUILDING_SLOTS[getZoneType(zoneNrF)];slot++){
                    zoneNrS=zoneNrF+"."+slot;
                    container=$("fishing_fishingslot"+(slot-4));

                    if(container && !unsafeData.zones.getBlock(zoneNrS)){
                        drawFishingFishing(zoneNrS,zoneNrS,container, "left:10px;top:-30px;");
                    }
                }
                container=null;help=null;
            }catch(err){GM_logError("eventListener:gameFishingBuildPier"+id+"","","",err);}
            }
        }(9),false);

        function drawCowRacingCheckbox(name, zoneNrS, appendTo, style) {
            var frame=createElement("div", {
                "style":style+"position:absolute;z-index:100;top:-50px;background-color:#FEE5AA;border: 1px solid black;border-radius: 5px;"},
                appendTo,"");
            inp=createElement("input",{"class":"link","type":"checkbox","checked":zoneList[zoneNrS][0][0]!=PRODSTOP?true:false},frame);

            inp.addEventListener("click",function(){
                zoneList[zoneNrS][0][0] = this.checked ? 1 : PRODSTOP;
                GM_setValue2(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList",implode(zoneList,"gameInfoPanelOpen/options/zoneList"));
                botArbiter.check();
            },false);
        }

        function drawFishingFishing(name,zoneNrS,appendTo, style ){
            var frame=createElement("div", {
                "style":style+"position:absolute;z-index:100;top:-50px;background-color:#FEE5AA;border: 1px solid black;border-radius: 5px;"},
                appendTo,"Hallo");

            for (var x=1;x<=3;x++){
                if(!(automatIcons[name]&&automatIcons[name][x])){
                    automatIcons[name]=[zoneNrS];
                    if (x==3) {
                        automatIcons[name][x]=createElement("div",{"id":"divAutomatIcon_"+name+"_"+x,"class":"link divZoneIcon v"+PRODSTOP,"product":PRODSTOP,"zoneNrS":zoneNrS,"uSlot":x,"style":"left:"+((x-1)*35)+"px;top:100px; height:30px; width:30px;background-size: 30px 30px;background-color: white "},appendTo);
                    } else {
                        automatIcons[name][x]=createElement("div",{"id":"divAutomatIcon_"+name+"_"+x,"class":"link divZoneIcon v"+PRODSTOP,"product":PRODSTOP,"zoneNrS":zoneNrS,"uSlot":x,"style":"left:"+((x-1)*35)+"px;top:100px;"},appendTo);
                    }

                    if (zoneList[zoneNrS]&&zoneList[zoneNrS][x-1]){
                        if (x==3){
                            automatIcons[name][x].setAttribute("class","link divZoneIcon " +(zoneList[zoneNrS][x-1][0]==PRODSTOP?"v"+PRODSTOP:"fishing_item"+zoneList[zoneNrS][x-1][0]));
                            automatIcons[name][x].setAttribute("product",zoneList[zoneNrS][x-1][0]);
                            automatIcons[name][x].style.display="block";
                        } else {
                            automatIcons[name][x].setAttribute("class","link divZoneIcon v"+(zoneList[zoneNrS][x-1][0]==PRODSTOP?PRODSTOP:zoneList[zoneNrS][x-1][0]));
                            automatIcons[name][x].setAttribute("product",zoneList[zoneNrS][x-1][0]);
                            //automatIcons[name][x].setAttribute("zoneBeginTime",implode(zoneTimes,"updateQueueBox/zoneTimes"));
                            automatIcons[name][x].style.display="block";
                        }
                    }

                    automatIcons[name][x].addEventListener("click", function(event){
                    try {
                        event.stopPropagation();
                        var zoneNrF=getFarmZone(this.id.replace("divAutomatIcon_","").replace("global_",""));
                        var zoneNrS=this.getAttribute("zoneNrS");
                        var zoneNrL=getZoneListId(zoneNrS);
                        var uSlot=parseInt(this.getAttribute("uSlot"),10);
                        drawFishingChooseItemBox(zoneNrS, zoneNrL, uSlot,$("divChooseBoxInner"));
                        zoneNrF=null;zoneNrS=null;zoneNrL=null;
                    }catch(err){GM_logError("automatIcon.click","$('"+this.id+"') zoneNrF="+zoneNrF+" zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL,"",err);}
                    },false);

                    automatIcons[name][x].addEventListener("mouseover", function(event){
                        var product = parseInt(this.getAttribute("product"),10);
                        var newnode = unsafeWindow.fishing.itemTT(product);
                        toolTip.show(event, newnode);
                    },false);

                    //updateQueueBox(zoneNrS);
                } else if(appendTo&&(!automatIcons[name][x].offsetParent)){
                    // append again
                    appendTo.appendChild(automatIcons[name][x]);
                }
            }
        }
        function drawFishingChooseItemBox(zoneNrS, zoneNrL, uSlot, appendTo){
        try{
            var zoneNrF=zoneNrS.toString().replace(/\.\d+$/,"");
            if(zoneNrL===undefined || zoneNrL==null){ zoneNrL=getZoneListId(zoneNrS); }
            appendTo.innerHTML="";
            appendTo.setAttribute("zoneNrS",zoneNrS);
            appendTo.setAttribute("zoneNrF",zoneNrF);
            appendTo.setAttribute("zoneNrL",zoneNrL);
            appendTo.setAttribute("uSlot",uSlot);

            //var fzZoneType=getZoneType(zoneNrS); //kann weg

            if(zoneList[zoneNrL].length!=3){
                zoneList[zoneNrL]=DEFAULT_ZONELIST_ITEM_ARRAY3.clone();
            }else{
                if(zoneList[zoneNrL][0][0]==PRODSTOP){ zoneList[zoneNrL][0]=DEFAULT_ZONELIST_ITEM_ARRAY3[0].clone(); }
                if(zoneList[zoneNrL][1][0]==PRODSTOP){ zoneList[zoneNrL][1]=DEFAULT_ZONELIST_ITEM_ARRAY3[0].clone(); }
                if(zoneList[zoneNrL][2][0]==PRODSTOP){ zoneList[zoneNrL][2]=DEFAULT_ZONELIST_ITEM_ARRAY3[0].clone(); }
            }

            createElement("div",{"id":"divChooseTitle"+zoneNrL,"class":"queueTitle"},appendTo, getZoneName(0,zoneNrS,zoneNrL,null, 20, true, true));
            createElement("div",{"id":"divChooseEndTime"+zoneNrL,"class":"queueTime"},appendTo);
            createElement("div",{"style":"clear:both;"},appendTo);
            newdiv=createElement("div",{"class":"divChooseItem link v"+PRODSTOP,"id":"divChooseItem"+zoneNrL+"Q0I"+PRODSTOP},appendTo);

            if(zoneList[zoneNrL][uSlot-1][0]==PRODSTOP){ newdiv.style.border="2px solid black"; }
            newdiv.addEventListener("click",function(){
                var zoneNrF=this.parentNode.getAttribute("zoneNrF");
                var zoneNrL=this.parentNode.getAttribute("zoneNrL");
                var uSlot=this.parentNode.getAttribute("uSlot");
                var help = zoneList[zoneToList[zoneNrL]][uSlot-1][1];

                zoneList[zoneToList[zoneNrL]][uSlot-1]=DEFAULT_ZONELIST_ITEM_ARRAY3[0].clone();
                zoneList[zoneToList[zoneNrL]][uSlot-1][1] = help;

                if(this.parentNode==$("divChooseBoxInner")){ click($("divChooseBoxClose")); }

                document.getElementById("divAutomatIcon_"+zoneNrL+"_"+uSlot).setAttribute("class","link divZoneIcon v"+PRODSTOP);
                GM_logInfo("updateQueueBox","zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL,"","End",1);
                GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneSettings",implode(zoneSettings,"updateQueueBox/zoneSettings"));
                GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList", implode(zoneList,"updateQueueBox/zoneList"));
                checkReadyZone();
            },false);
            newdiv.addEventListener("mouseover", function(event){
                var zoneNrF=this.parentNode.getAttribute("zoneNrF");
                var zoneNrL=this.parentNode.getAttribute("zoneNrL");
                toolTip.show(event, toolTipProductSmall(zoneNrF, zoneNrL, 0, this));
            },false);
            const FISHING_INPUT=[[900,901,902,903,904,905,906,907,908,909,910,911],
                                 [912,913,914,915,916,917,918,919,920,921],
                                 [1,2,3,4,5,6]];

            for(var i=0; i<FISHING_INPUT[uSlot-1].length; i++){
                if (uSlot==3){
                    if (unsafeWindow.fishing.data.config.items[FISHING_INPUT[uSlot-1][i]].quest &&
                        unsafeWindow.fishing.data.config.items[FISHING_INPUT[uSlot-1][i]].quest > 0 &&
                        unsafeWindow.fishing.data.config.items[FISHING_INPUT[uSlot-1][i]].quest > unsafeWindow.fishing.data.highestquest) {
                        continue;
                    } else {
                        newdiv=createElement("div",{"class":"divChooseItem link fishing_item"+FISHING_INPUT[uSlot-1][i],"id":"divChooseItem"+zoneNrL+"Q0I"+FISHING_INPUT[uSlot-1][i],"style":"height:35px; width:35px;background-size: 35px 35px"},appendTo);
                    }
                } else {
                    if(unsafeData.prodBlock[0][FISHING_INPUT[uSlot-1][i]]&&unsafeData.prodBlock[0][FISHING_INPUT[uSlot-1][i]].match(/[uvlq]/)) {continue;}
                    newdiv=createElement("div",{"class":"divChooseItem link v"+FISHING_INPUT[uSlot-1][i],"id":"divChooseItem"+zoneNrL+"Q0I"+FISHING_INPUT[uSlot-1][i]},appendTo);
                }

                if(zoneList[zoneNrL][uSlot-1][0]==FISHING_INPUT[uSlot-1][i]){ newdiv.style.border="2px solid black"; }
                newdiv.addEventListener("click",function(){
                    var zoneNrF=this.parentNode.getAttribute("zoneNrF");
                    var zoneNrL=this.parentNode.getAttribute("zoneNrL");
                    var uSlot=this.parentNode.getAttribute("uslot");
                    var help = zoneList[zoneToList[zoneNrL]][uSlot-1][1];
                    zoneList[zoneToList[zoneNrL]][uSlot-1]=DEFAULT_ZONELIST_ITEM_ARRAY3[0].clone();
                    zoneList[zoneToList[zoneNrL]][uSlot-1][1] = help;
                    zoneList[zoneNrL][uSlot-1][0]=parseInt(/Q0I(.*)$/.exec(this.id)[1],10);

                    if (this.parentNode==$("divChooseBoxInner")) {
                        click($("divChooseBoxClose"));
                    }
                    if (uSlot==3){
                        document.getElementById("divAutomatIcon_"+zoneNrL+"_"+uSlot).setAttribute("class","link divZoneIcon fishing_item"+zoneList[zoneNrL][uSlot-1][0]);
                        document.getElementById("divAutomatIcon_"+zoneNrL+"_"+uSlot).setAttribute("product",zoneList[zoneNrL][uSlot-1][0]);

                    } else {
                        document.getElementById("divAutomatIcon_"+zoneNrL+"_"+uSlot).setAttribute("class","link divZoneIcon v"+zoneList[zoneNrL][uSlot-1][0]);
                        document.getElementById("divAutomatIcon_"+zoneNrL+"_"+uSlot).setAttribute("product",zoneList[zoneNrL][uSlot-1][0]);
                    }

                    GM_logInfo("updateQueueBox","zoneNrS="+zoneNrS+" zoneNrL="+zoneNrL,"","End",1);
                    GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneSettings",implode(zoneSettings,"updateQueueBox/zoneSettings"));
                    GM_setValueCache(COUNTRY+"_"+SERVER+"_"+USERNAME+"_zoneList", implode(zoneList,"updateQueueBox/zoneList"));
                    checkReadyZone();

                    //updateQueueBox(zoneNrF, zoneNrL);
                },false);
                newdiv.addEventListener("mouseover", function(event){
                    var product = parseInt(/Q0I(.*)$/.exec(this.id)[1],10);
                    var newnode = unsafeWindow.fishing.itemTT(product);
                    toolTip.show(event, newnode);
                },false);
            }
            if(appendTo==$("divChooseBoxInner")){
                $("divChooseBox").style.display="block";
                $("divChooseBox").style.top=Math.round(255 - $("divChooseBox").offsetHeight/2)+"px";
            }
            //updateQueueBox(zoneNrF, zoneNrL);
            zoneFeedCurr=null;zoneProdCurr=null;
            newdiv=null;appendTo=null;
        }catch(err){GM_logError("drawChooseItemBoxPony ","","",err);}
        }

        for(var v=1;v<=6;v++){
            err_trace="listener gameMapVehicle"+v;
            document.addEventListener("gameMapVehicle"+v,function(id){
                return function(){
                try{
                    var item = unsafeWindow.farms_data.map;
                    var container = $("map_vehiclesheet_inner");
                    var newNode = createElement("div",{"id":"divVehicle","class":"","style":"height:50px"});
                    var newtable=createElement("table",{"border":"0","class":"","style":"width:100%"},newNode);
                    var newtr=createElement("tr",{},newtable);

                    createElement("td",{},newtr,getText("automat_mapHeadingVehicle"));
                    createElement("td",{},newtr,getText("automat_mapVehicleDeliveryQuantity"));
                    createElement("td",{},newtr,getText("automat_mapToFarm").replace(/%1%/,"1").replace(/%2%/,4+id));
                    createElement("td",{},newtr,getText("automat_mapToFarm").replace(/%1%/,4+id).replace(/%2%/,1));

                    newtr=createElement("tr",{},newtable);

                    var newtd = createElement("td",{},newtr);

                    var selectVehicle = createElement("select", {
                        "id": "vehicleSelection",
                        "size":"1",
                        "name": "vehicleSelection"+id,
                        "style": "margin: 0px 0px 0px 10px"
                    }, newtd, false);
                    createElement("option", {"value":0}, selectVehicle, "-----------"); // Add vehicles to combobox
                    for (var i in item.vehicles[id]) {
                        if(!item.vehicles[id].hasOwnProperty(i)){ continue; }
                        if (parseInt(item.vehicles[id][i].route,10) == id) {
                            createElement("option", {"value":i}, selectVehicle, item.config.vehicles[i].name); // Add vehicles to combobox
                        }
                    }
                    selectVehicle.addEventListener("change",function(){
                        settings.set("account","garage"+id,this.value);
                    },false);

                    newtd = createElement("td",{},newtr);
                    var DeliveryQuantity = createElement("input",{
                        "id":"input_DeliveryQuantity",
                        "value":GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_DeliveryQuantityFarm"+eval("4 + id"),1000),
                        "size":"5px",
                        "style":"text-align:center;"
                    },newtd);
                    DeliveryQuantity.addEventListener("keyup",function(){
                        var valDeliveryQuantity=parseInt(this.value,10);
                        if (isNaN(valDeliveryQuantity)){
                            this.value="";
                        }else{
                            this.value=valDeliveryQuantity;
                            if (valDeliveryQuantity<1) {valDeliveryQuantity=1} // only allow values > 0
                            GM_setValue2(COUNTRY+"_"+SERVER+"_"+USERNAME+"_DeliveryQuantityFarm"+eval("4 + id"), valDeliveryQuantity,1000);
                        }
                    },false);

                    newtd = createElement("td",{},newtr);
                    var selectProductFromFarm1 = createElement("select", {
                        "id": "selectProductFromFarm1",
                        "size":"1",
                        "name": "selectProductFromFarm1",
                        "style": "margin: 0px 0px 0px 10px"
                    }, newtd, false);
                    selectProductFromFarm1.addEventListener("change",function(){
                        settings.set("account","garage"+id+"ProductFrom1",this.value)
                    },false);
                    createElement("option", {"value":0}, selectProductFromFarm1, getText("automat_mapOutOfService"));

                    newtd = createElement("td",{},newtr);
                    var selectProductFromFarm5 = createElement("select", {
                        "id": "selectProductFromFarm5",
                        "size":"1",
                        "name": "selectProductFromFarm5",
                        "style": "margin: 0px 0px 0px 10px"
                    }, newtd, false);
                    selectProductFromFarm5.addEventListener("change",function(){
                        settings.set("account","garage"+id+"ProductFrom"+(id+4),this.value)
                    },false);
                    createElement("option", {"value":0}, selectProductFromFarm5, getText("automat_mapOutOfService"));

                    for(var iProd=1;iProd<unsafeData.prodName[0].length;iProd++){
                        if(unsafeData.prodBlock[0][iProd]&&unsafeData.prodBlock[0][iProd].match(/[uvlq]/)) {continue;}
                        if(["v","ex","e","o","alpin","water"].indexOf(unsafeData.prodTyp[0][iProd]) >= 0){
                            createElement("option", {"value":iProd}, selectProductFromFarm1, unsafeData.prodName[0][iProd]); // Add product to combobox
                            createElement("option", {"value":iProd}, selectProductFromFarm5, unsafeData.prodName[0][iProd]); // Add product to combobox
                        }
                    }

                    selectVehicle.value = settings.get("account","garage"+id); // Init combobox on startup
                    selectProductFromFarm1.value = settings.get("account","garage"+id+"ProductFrom1"); // Init combobox on startup
                    selectProductFromFarm5.value = settings.get("account","garage"+id+"ProductFrom"+(id+4)); // Init combobox on startup

                    container.insertBefore(newNode, container.firstChild);
                    container=null;help=null;
                }catch(err){GM_logError("eventListener:gameMapVehicle"+v+"","","",err);}
                }
            }(v),false);
        }
        //gameOpenMapStall1
        for (var v=1;v<=2;v++) {
            err_trace="listener gameOpenMapStall"+v;

            document.addEventListener("gameOpenMapStall"+v,function(nr){ // Obststand open
                return function () {
                    try{
                        var zoneNrF="map_stall"+nr;
                        var zoneNrS;
                        for(var slot=1;slot<=unsafeData.BUILDING_SLOTS["m"+nr];slot++){
                            zoneNrS=zoneNrF+"."+slot;
                            if(!unsafeData.zones.getBlock(zoneNrS)){
                                drawAutomatIcon(zoneNrS,zoneNrS,$("map_stall"+nr+"_slot"+slot),"top:75px;left:10px;");
                            }
                        }
                    }catch(err){GM_logError("eventListener:gameOpenMapStall ","","",err);}
                }
            }(v),false);
        }

        err_trace="listener gameDailyLoginBonusOpen";
        document.addEventListener("gameSetDailyLoginProduct",function(id){
            return function(){
            try{
                var item = unsafeWindow.loginbonus;

                if(item.currentDay==7) {
                    item.selectedProduct=settings.get("account","dailyLoginSelectProduct");
                }
                item=null;
            }catch(err){GM_logError("eventListener:gameFarmersmarketOpened"+id+"","","",err);}
            }
        }(v),false);

        document.addEventListener("gamegoToOpenDailyLoginBonus",function(id){
            return function(){
            try{
                var item = unsafeWindow.loginbonus;
                var container = $("loginbonus");
                if(!$("divLoginBonus")){
                    var newNode = createElement("div",{"id":"divLoginBonus","class":"","style":"height:25px"});
                    var newtable=createElement("table",{"border":"0","class":"","style":"width:100%"},newNode);
                    var newtr=createElement("tr",{},newtable);
                    createElement("td",{},newtr,"Produkt: ");

                    var newtd = createElement("td",{},newtr);
                    var selectProduct = createElement("select", {
                        "id": "dailyLoginSelectProduct_ID",
                        "size":"1",
                        "name": "dailyLoginSelectProduct",
                        "style": "margin: 0px 0px 0px 10px;width: 200px"
                    }, newtd, false);
                    for(var b in item.data.products){
                        if(!unsafeWindow.produkt_name[item.data.products[b]]){continue};

                        createElement("option", {"class":"kp"+item.data.products[b],"value":item.data.products[b] ,"style":"background-image:url('"+GFX+"maps/kundenprodukt_map.32.gif')"}, selectProduct,unsafeWindow.produkt_name[item.data.products[b]]); // Add products to combobox
                    }
                    selectProduct.addEventListener("change",function(){
                        settings.set("account","dailyLoginSelectProduct",this.value);
                        unsafeWindow.loginbonus.build();


                    },false);

                    selectProduct.value=settings.get("account","dailyLoginSelectProduct");

                    container.insertBefore(newNode, container.firstChild);
                }

                container=null;item=null;
            }catch(err){GM_logError("eventListener:gameFarmersmarketOpened"+id+"","","",err);}
            }
        }(v),false);


        //Bot Start-Stop-Button
        err_trace="Start-Stop-Button";
        newdiv=createElement("div",{"id":"divAutomatButtonBot","class":"link beraterButtonIcon hoverBgGreen"},$("divBeraterButtons"));
        createElement("img",{"class":"rotating","src":IMAGES["gearFlat"],"style":"position:relative;top:2px;left:0;width:26px;height:26px;"},newdiv);
        newdiv.addEventListener("click",function(){
            if(bot.isActive()){
                bot.deactivate();
                restartBotTime=settings.get("country","valRestartBotTimer");
                restartBot();
            }else{
                restartBotTime=-1;
                bot.activate();
            }
        },false);
        newdiv=createElement("div",{"id":"divBotInfo","class":"link blackbox","style":"position:fixed;bottom:0px;left:0px;z-index:999;"},ALL);
        newdiv.addEventListener("mouseover",function(event){
            toolTip.show(event,"Click to break Automat business");
        },false);
        newdiv.addEventListener("click",bot.end,false);
        bot.init();

        newdiv=createElement("div",{"id":"divCloseWindowLayer","class":"link ","style":"opacity:0.7;position:absolute;top:20px;z-index:101;display:none;background:black;height:84px;left:210px;width:770px;"},$("headercontainer"));
        newdiv=createElement("div",{"id":"divCloseWindow","class":"link blackbox","style":"width:250px;display:none;text-align:center;padding:10px;border-radius:5px 5px 5px 5px;position:relative;z-index:101;top:30px;left:470px;"},$("headercontainer"));
        newdiv.addEventListener("mouseover",function(event){
            toolTip.show(event,"Restart closing timer");
        },false);
        newdiv.addEventListener("click",function(){
            stopCloseWindowTimer();
        },false);

        //newdiv=createElement("div",{"id":"divRestartLayer","class":"link ","style":"opacity:0.7;position:absolute;top:20px;z-index:101;display:none;background:black;height:84px;left:210px;width:770px;"},$("headercontainer"));
        newdiv=createElement("div",{"id":"divRestart","class":"link blackbox","style":"width:250px;display:none;text-align:center;padding:10px;border-radius:5px 5px 5px 5px;position:relative;z-index:101;top:30px;left:470px;"},$("headercontainer"));
        newdiv.addEventListener("mouseover",function(event){
            toolTip.show(event,"Automat-Restart timer +30s");
        },false);
        newdiv.addEventListener("click",function(){
            //restartBotTime=settings.get("country","valRestartBotTimer");
            restartBotTime+=30;
        },false);

        if(!bot.isActive()){
            restartBotTime=settings.get("country","valRestartBotTimer");
            restartBot();
        }

/*
        link=createElement("button",{type:"button","class":"link2",style:"margin-left:3px;border:2px solid red;"},$("divBeraterButtons"),"botArbiter.check");
        link.addEventListener("click",function(){botArbiter.check();},false);

        link=createElement("button",{type:"button","class":"link2",style:"margin-left:3px;border:2px solid red;"},$("divBeraterButtons"),"autoForestryCrop");
        link.addEventListener("click",function(){autoForestryCrop(1);},false);

        link=createElement("button",{type:"button","class":"link2",style:"margin-left:3px;border:2px solid red;"},$("divBeraterButtons"),"test 3");
        link.addEventListener("click",function(){GM_log("test :" +reSortQueue(4,false));},false);

        link=createElement("button",{type:"button","class":"link2",style:"margin-left:3px;border:2px solid red;"},$("divBeraterButtons"),getText("options"));
        link.addEventListener("click",function(){
            document.addEventListener("nodeInsertedInfoPanelLAutomat",function(){
                click($("infoPanelLAutomat"));
                document.removeEventListener("nodeInsertedInfoPanelLAutomat",arguments.callee,false);
            },false);
            click($("berateroptionen"));
        },false);

        link=createElement("button",{type:"button","class":"link2",style:"margin-left:3px;border:2px solid red;"},$("divBeraterButtons"),getText("automat_titleQueue"));
        link.addEventListener("click",function(){
            document.addEventListener("nodeInsertedInfoPanelLAutomat",function(){
                click($("infoPanelZoneList"));
                document.removeEventListener("nodeInsertedInfoPanelLAutomat",arguments.callee,false);
            },false);
            click($("berateroptionen"));
        },false);

        link=createElement("button",{type:"button","class":"link2",style:"margin-left:3px;border:2px solid red;"},$("divBeraterButtons"),"test");
        link.addEventListener("click",function(){
            click($("multiframe").contentDocument.getElementsByClassName("link2")[0].firstElementChild);
        },false);

        link=createElement("button",{type:"button","class":"link2",style:"margin-left:3px;border:2px solid red;"},$("divBeraterButtons"),"Q active");
        link.addEventListener("click",function(){raiseEvent("gameQuestNewAvailable");},false);

        link=createElement("button",{type:"button","class":"link2",style:"margin-left:3px;border:2px solid red;"},$("divBeraterButtons"),"Q solve");
        link.addEventListener("click",function(){raiseEvent("gameQuestSolvable");},false);

        link=createElement("button",{type:"button","class":"link2",style:"margin-left:3px;border:2px solid red;"},$("divBeraterButtons"),"PowerUp");
        link.addEventListener("click",function(){botArbiter.add("activatePowerUp");},false);

        link=createElement("button",{type:"button","class":"link2",style:"margin-left:3px;border:2px solid red;"},$("divBeraterButtons"),"DailyLot");
        link.addEventListener("click",function(){raiseEvent("gameLotteryDailyLotAvailable");},false);

        link=createElement("button",{type:"button","class":"link2",style:"margin-left:3px;border:2px solid red;"},$("divBeraterButtons"),"Windmill");
        link.addEventListener("click",function(){raiseEvent("gameWindmillReady");},false);

        link=createElement("button",{type:"button","class":"link2",style:"margin-left:3px;border:2px solid red;"},$("divBeraterButtons"),"Zone Ready");
        link.addEventListener("click",function(){raiseEvent("gameZoneReady");},false);

*/
    document.addEventListener("gameSessionEnds",function(){
        botArbiter.add("sessionEnds");
    },false);

    document.addEventListener("gameLotteryDailyLotAvailable",function(){
        if(settings.get("account","botUseLottery")&&settings.get("account","lotteryActivate")){
            botArbiter.add("lottery");
        }
    },false);

    document.addEventListener("gameOtherAccReady",function(){
        botArbiter.add("otherAccReady");
    },false);

    document.addEventListener("gameFarmiNew",function(){
        if(settings.get("account","botUseFarmi")){ checkFarmi(1); }
    },false);
    document.addEventListener("gameFarmOpened",function(){
        if(settings.get("account","botUseFarmi")){ checkFarmi(1); }
    },false);
} catch(err){GM_logError("do_main","","err_trace="+err_trace,err);}
}

function do_hilfe(){
    GM_addStyle(
        ".queueButtonAddAll {display:inline-block;width:22px;height:16px;border:1px solid #6C441E;border-radius:5px;margin:0px 1px 0px 1px;}\n"+
        ".queueButtonAddAll {background: url("+IMAGES["reload_all"]+") #FFFFFF no-repeat 1px -1px;width:28px;}\n"+
        ".kp"+PRODSTOP+" {background:url("+IMAGES["PRODSTOP_15"]+") no-repeat scroll 0 0 transparent;height:15px;width:15px;!IMPORTANT}"
    );

    var newdiv=createElement("div",{},$("helpmenuLinks"));
    var newa=createElement("a",{"class":"list_header","href":"#"},newdiv,getText("automat"));
    newa.addEventListener("click",function(){
        try{
            var div,help,i=0;
            var container=$("helpbody");
            container.innerHTML="";
            div=createElement("div",{"class":"tnormal"},container);
            createElement("b",{},div,getText("automat"));
            while(help=getText("automat_help_"+(i++))){
                div=createElement("div",{"class":"tmenu"},container);
                if(help[0]){ createElement("b",{},div,help[0]); }
                if(help[1]){ createElement("p",{},div,help[1]); }
            }
            container=null;div=null;
        }catch(err){GM_logError("help.click","","",err);}
    },false);
    newdiv=null;newa=null;
}

function manageVariables(){
    // 1: historic data - not reproducible!
    // 2: collectable data, temporary data
    // 3: options, settings
    const variableInfo = { "GLOBAL":{"automatChangedata":["Data version",1],
                                     "automatChangelogShownVersion":["",3],
                                     "devmode":["Developer mode",3],
                                     "devmode_function":["Developer mode",3],
                                     "settings":["Settings",3]},
                           "COUNTRY":{"automatChangedata":["Data version",1],
                                     "settings":["Settings",3]},
                           "SERVER":{"automatChangedata":["Data version",1],
                                     "settings":["Settings",3]},
                           "USER":{"automatChangedata":["Data version",1],
                                   "autoMillStorage":["Mill data",3],
                                   "emergencyPlants":["Emergency plants",3],
                                   "lotteryCollectForPrize":["Lottery collection data",3],
                                   "raisedEvents":["Stack of raised event",2],
                                   "settings":["Settings",3],
                                   "valDevRefresh":["Developer",2],
                                   "valQuestActivate":["Option",3],
                                   "valQuestActivateUntilNr":["Option",3],
                                   "valQuestSolving":["Option",3],
                                   "valQuestSolvingUntilNr":["Option",3],
                                   "viewDevMode":["Option",3],
                                   "modeOverViewFarms":["Selection Automat-overview",3],
                                   "zoneList":["Zone automat settings",3],
                                   "zoneSettings":["Zone modes",3],
                                   "zoneToList":["Zone pairing",3]}
                        };

    function buildManageVariables(){
        var container=$("divManageVariablesInner");
        container.innerHTML="";
        var containerPart = createElement("div",{"style":"height:10%;"},container);
        createElement("div",{"style":"font-weight:bold;"},containerPart,"Variable Management "+getText("automat"));

        var newinput=createElement("select",{"class":"link"},containerPart);
        createElement("option",{"value":"GLOBAL"},newinput,"GLOBAL");
        createElement("option",{"value":"ALL"},newinput,"ALL");
        createElement("option",{"value":"UNKNOWN"},newinput,"UNKNOWN");
        createElement("option",{"value":"USELESS"},newinput,"USELESS");
        newinput.addEventListener("click",function(){
            buildExportTable(this.value);
        },false);

        var variables = {};
        variables["GLOBAL"] = [];
        var help = cloneInto(GM_listValues(), unsafeWindow);
        help.sort();
        var help2;
        for(var v=0;v<help.length;v++){
            help2 = (/^([A-Z]{2}_\d+_.+?_)(.*)$/).exec(help[v]); // LNG_SERVER_USER_...
            if(!help2){ help2 = (/^([A-Z]{2}_\d+_)(.*)$/).exec(help[v]); // LNG_SERVER_...
                if(!help2){ help2 = (/^([A-Z]{2}_)(.*)$/).exec(help[v]); // LNG_...
            }   }

            if(help2){
                if(!variables[help2[1]]){
                    variables[help2[1]] = [];
                    createElement("option",{"value":help2[1]},newinput,help2[1]);
                }
                variables[help2[1]].push(help2[2]);
            } else {
                variables["GLOBAL"].push(help[v]); // GLOBAL
            }
        }

        newinput=createElement("button",{"class":"link","style":"margin-left:20px;"},containerPart,"Select all");
        newinput.addEventListener("click",function(){
            var container=$("divManageVariablesInner");
            var rows = container.children[1].getElementsByTagName("tr");
            var checkedNew;
            if(this.innerHTML=="Select all"){
                checkedNew = true;
                this.innerHTML="Unselect all";
            } else {
                checkedNew = false;
                this.innerHTML="Select all";
            }
            for (var v=0;v<rows.length;v++){
                rows[v].children[0].children[0].checked = checkedNew;
            }

        },false);

        newinput=createElement("button",{"class":"link","style":"margin-left:20px;"},containerPart,"Delete");
        newinput.addEventListener("click",function(){
            var container=$("divManageVariablesInner");
            var rows = container.children[1].getElementsByTagName("tr");
            var variables = [];
            var acc, varname;
            var str = "Delete following variables:";
            for (var v=0;v<rows.length;v++){
                if(rows[v].children[0].children[0].checked){
                    acc = rows[v].children[1].innerHTML;
                    varname = rows[v].children[2].innerHTML;
                    variables.push(acc+varname);
                    if(variables.length<11){ str += "\n"+acc+varname; }
                }
            }
            if(variables.length>0){
                if(variables.length>10){ str += "\n..." }
                if(confirm(str)){
                    for (var v=0;v<variables.length;v++){
                        GM_deleteValue(variables[v]);
                    }
                    buildManageVariables();
                }
            } else {
                alert("Nothing selected");
            }
        },false);

        newinput=createElement("button",{"class":"link","style":"margin-left:20px;"},containerPart,"Create storage string");
        newinput.addEventListener("click",function(){
            var container=$("divManageVariablesInner");
            var rows = container.children[1].getElementsByTagName("tr");
            var variables = [];
            var acc, varname;
            for (var v=0;v<rows.length;v++){
                if(rows[v].children[0].children[0].checked){
                    acc = rows[v].children[1].innerHTML;
                    varname = rows[v].children[2].innerHTML;
                    variables.push([acc+varname,GM_getValue(acc+varname)]);
                }
            }
            if(variables.length>0){
                prompt("Copy this string to a text-file", implode(variables,"buildManageVariables/variables"));
            } else {
                alert("Nothing selected");
            }
        },false);

        newinput=createElement("button",{"class":"link","style":"margin-left:20px;"},containerPart,"Import storage string");
        newinput.addEventListener("click",function(){
            var data = prompt("Enter storage string");
            if(data){
                try{
                    data = explode(data,"buildImportTable/storageString");
                    buildImportTable(data);
                }catch(err){ alert("Sorry. Can't read the entered string.\n"+err); }
            }
        },false);

        newinput=createElement("button",{"class":"link","style":"margin-left:20px;"},containerPart,"Import OLD storage string");
        newinput.addEventListener("click",function(){
            var data = prompt("Enter storage string");
            var user = prompt("Enter prefix like 'de_7_Johnny_' if needed");
            if(data){
                try{
                    data=data.split("::");
                    for(var v=0;v<data.length;v++){
                        data[v] = [,data[v].split(":")];
                        data[v][0] = user+data[v][1].splice(0,1)[0];
                        var impType=data[v][1].splice(0,1)[0];
                        data[v][1] = data[v][1].join(":");
                        if(impType == "n"){ data[v][1] = parseFloat(data[v][1],10); }
                        else if(impType == "b"){ data[v][1] = (data[v][1]=="true"); }
                    }
                    buildImportTable(data);
                }catch(err){ alert("Sorry. Can't read the entered string.\n"+err); }
            }
        },false);

        containerPart = createElement("div",{"style":"height:90%;overflow-y:scroll;"},container);
        function buildExportTable(filter){
            var container=$("divManageVariablesInner");
            container.children[1].innerHTML = "";
            var newtable=createElement("table",{"border":"1","class":"hoverRowBgCc9","style":"width:100%"},container.children[1]);
            var newtr,newtd;
            var help3=cloneInto(GM_listValues(), unsafeWindow);
            var help=[],help2;
            for(var v=0;v<help3.length;v++){
                help2 = (/^([A-Z]{2}_\d+_.+?_)(.*)$/).exec(help3[v]); // COUNTRY_SERVER_USER_...
                if(help2){
                    help[v] = [help2[1],help2[2],"USER"];
                } else {
                    help2 = (/^([A-Z]{2}_\d+_)(.*)$/).exec(help3[v]); // COUNTRY_SERVER_...
                    if(help2){
                        help[v] = [help2[1],help2[2],"SERVER"];
                    } else {
                        help2 = (/^([A-Z]{2}_)(.*)$/).exec(help3[v]); // COUNTRY_...
                        if(help2){
                            help[v] = [help2[1],help2[2],"COUNTRY"];
                        } else {
                            help[v] = ["",help3[v],"GLOBAL"];
                        }
                    }
                }
            }
            help.sort(function(a,b){
                if(a[0]==b[0]){ return ((a[1]>b[1])-(a[1]<b[1])); }
                          else{ return ((a[0]>b[0])-(a[0]<b[0])); }
            });

            for(var v=0;v<help.length;v++){
                switch(filter){
                case "ALL": break;
                case "GLOBAL":if(help[v][0]!=""){ continue; } break;
                case "UNKNOWN":if(variableInfo[help[v][2]][help[v][1]]){ continue; } break;
                case "USELESS":if((!variableInfo[help[v][2]][help[v][1]])||(variableInfo[help[v][2]][help[v][1]][1]!=5)){ continue; } break;
                default: if(help[v][0]!=filter){ continue; }
                }

                help[v][4] = GM_getValue(help[v][0]+help[v][1]);
                help[v][3] = "s";
                // if(help[v][4]==""){ help[v][4]=" "; }
                if(typeof help[v][4]=="number"){ help[v][3]="n"; }
                else if(typeof help[v][4]=="boolean"){ help[v][3]="b"; }
                else{   // help[v][4] = help[v][4].replace(/(:+)/g,":");
                        if(help[v][4].length>100){
                            help[v][4] = help[v][4].substr(0,97)+"...";
                        }
                    }

                newtr=createElement("tr",{},newtable);
                newtd = createElement("td",{},newtr);
                createElement("input",{"type":"checkbox","class":"link","checked":false},newtd);
                createElement("td",{},newtr,help[v][0]);
                createElement("td",{},newtr,help[v][1]);
                createElement("td",{},newtr,help[v][3]);
                if(variableInfo[help[v][2]][help[v][1]]){
                    createElement("td",{},newtr,variableInfo[help[v][2]][help[v][1]][0]);
                    createElement("td",{},newtr,[,"historic data - not reproducible!","collectable data","options, settings","temporary data","useless, old data"][variableInfo[help[v][2]][help[v][1]][1]]);
                } else {
                    createElement("td",{},newtr,"unknown");
                    createElement("td",{},newtr,"");
                }
                createElement("td",{},newtr,help[v][4]);

            }
            container=null;newtable=null;newtr=null;newtd=null;
        }
        buildExportTable("GLOBAL");

        function buildImportTable(data){
            var container=$("divManageVariablesInner");
            container.children[1].innerHTML = "";
            var newinput=createElement("button",{"class":"link"},container.children[1],"SAVE !");
            newinput.addEventListener("click",function(){
                var container=$("divManageVariablesInner");
                var rows = container.children[1].getElementsByTagName("tr");
                var variables = [];
                var acc, varname;
                for (var v=0;v<rows.length;v++){
                    if(rows[v].children[0].children[0].checked){
                        GM_setValue(data[v][0]+data[v][1],data[v][3]);
                    }
                }
                buildManageVariables();
            },false);
            var newtable=createElement("table",{"border":"1","class":"hoverRowBgCc9","style":"width:100%"},container.children[1]);
            var newtr,newtd;
            var help2;
            var dataLevel;
            for(var v=0;v<data.length;v++){
                help2 = (/^([A-Z]{2}_\d+_.+?_)(.*)$/).exec(data[v][0]); // LNG_SERVER_USER_...
                if(help2){
                    dataLevel = "USER";
                    data[v] = [help2[1],help2[2],"s",data[v][1]];
                } else {
                    help2 = (/^([A-Z]{2}_\d+_)(.*)$/).exec(data[v][0]); // LNG_SERVER_...
                    if(help2){
                        dataLevel = "SERVER";
                        data[v] = [help2[1],help2[2],"s",data[v][1]];
                    } else {
                        help2 = (/^([A-Z]{2}_)(.*)$/).exec(data[v][0]); // LNG_...
                        if(help2){
                            dataLevel = "COUNTRY";
                            data[v] = [help2[1],help2[2],"s",data[v][1]];
                        } else {
                            dataLevel = "GLOBAL";
                            data[v] = ["",data[v][0],"s",data[v][1]];
                        }
                    }
                }
                if(typeof data[v][3]=="number"){ data[v][2]="n"; }
                else if(typeof data[v][3]=="boolean"){ data[v][2]="b"; }

                newtr=createElement("tr",{},newtable);
                newtd = createElement("td",{},newtr);
                createElement("input",{"type":"checkbox","class":"link","checked":true},newtd);
                createElement("td",{},newtr,data[v][0]);
                createElement("td",{},newtr,data[v][1]);
                createElement("td",{},newtr,data[v][2]);
                if(variableInfo[dataLevel][data[v][1]]){
                    createElement("td",{},newtr,variableInfo[dataLevel][data[v][1]][0]);
                    createElement("td",{},newtr,[,"historic data - not reproducible!","collectable data","options, settings","temporary data","useless, old data"][variableInfo[dataLevel][data[v][1]][1]]);
                } else {
                    createElement("td",{},newtr,"unknown");
                    createElement("td",{},newtr,"");
                }
                if(data[v][3].length>100){
                    createElement("td",{},newtr,data[v][3].substr(0,97)+"...");
                } else {
                    createElement("td",{},newtr,data[v][3]);
                }
            }
            container=null;newtable=null;newtr=null;newtd=null;newinput=null;
        }

        container=null;containerPart=null;newselect=null;
        newdiv=null;newinput=null;
    }

    if($("divManageVariables")){ return false; }
    var newdiv=createElement("div",{"id":"divManageVariables","mode":"","style":"position:fixed;top:0;left:0;width:100%;height:100%;background-color:#b8a789;z-index:1000;display:block;"},ALL);
    createElement("img",{"src":GFX+"guild/help_back.jpg","style":"position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;"},newdiv);
    createElement("div",{"id":"divManageVariablesInner","class":"tnormal","style":"position:absolute;top:6%;left:5%;width:90%;height:88%;overflow:auto;"},newdiv);
    var newimg=createElement("img",{"id":"infoPanelClose","class":"link","src":GFX+"close.jpg","style":"position:absolute;top:8px;right:8px;width:20px;height:20px;"},newdiv);
    newimg.addEventListener("click",function(){ removeElement(this.parentNode); },false);
    newdiv = null;newimg=null;
    buildManageVariables();
}

function do_login(){
    var cell = $("divBeraterButtons");
    if(cell){
        cell=createElement("div",{"class":"link beraterButtonIcon hoverBgBlue","mouseOverText":getText("manageVariables")+" ("+getText("automat")+")"},cell);
        createElement("img",{"src":IMAGES["floppyDisk"],"style":"position:relative;top:3px;left:3px;;width:24px;height:24px;"},cell);
        cell.addEventListener("click",manageVariables,false);
    }
    cell=null;
}

function do_relogin(time){
    var newdiv=$("automatDoRelogin");
    if(document.getElementsByTagName("div").length>10){
        if(newdiv){ removeElement(newdiv); }
    }else{
        if(time>0){
            if(!newdiv){ newdiv=createElement("div",{"id":"automatDoRelogin","class":"alertbubble tbig link"},document.body); }
            newdiv.innerHTML="Relogin in "+getTimeStr(time);
            newdiv=null;
            window.setTimeout(do_relogin,1000,--time);
        }else if(GAMEPAGES[top.unsafeData.COUNTRY]){
            location.href="http://www."+GAMEPAGES[top.unsafeData.COUNTRY];
        }
    }
    newdiv=null;
}

function start_script(){
try{
    COUNTRY=top.unsafeData.COUNTRY;
    LANGUAGE=top.unsafeData.LANGUAGE;
    PAGE=location.pathname.replace(/^\//,"").replace(/\.php.*$/,"");
    // **************************************************
    // ChangeData Global
    // -->> add var to delete also to resetVariables
    var err_trace="ChangeData Global";
    var help,help2;
    try{
        var changedata = GM_getValue("automatChangedata",0);
        switch(changedata){
        case 0:{
            help=cloneInto(GM_listValues(), unsafeWindow);
            for(var v=help.length-1;v>=0;v--){
                if(help2=/^([a-z]{2})(_.*)$/.exec(help[v])){
                    GM_setValue(help2[1].toUpperCase()+help2[2],GM_getValue(help[v]));
                    GM_deleteValue(help[v]);
                }
            }
        }
        }
        if(changedata<1){ GM_setValue("automatChangedata",1); }
    }catch(err){GM_logError("changedata global","","",err);}
    // **************************************************
    // ChangeData Country
    err_trace="ChangeData Country";
    try{
        var changedata = GM_getValue(COUNTRY+"_automatChangedata",0);
        switch(changedata){
        case 0:{
            help=settings.get("country","pauseShort");
            if(help2=GM_getValue(COUNTRY+"_tmin")){
                help[0]=help2;
                GM_deleteValue(COUNTRY+"_tmin");
            }
            if(help2=GM_getValue(COUNTRY+"_tmax")){
                help[1]=help2;
                GM_deleteValue(COUNTRY+"_tmax");
            }
            settings.set("country","pauseShort",help);
            help=settings.get("country","pause");
            if(help2=GM_getValue(COUNTRY+"_tmin2")){
                help[0]=help2;
                GM_deleteValue(COUNTRY+"_tmin2");
            }
            if(help2=GM_getValue(COUNTRY+"_tmax2")){
                help[1]=help2;
                GM_deleteValue(COUNTRY+"_tmax2");
            }
            settings.set("country","pause",help);
        }
        }
        if(changedata<1){ GM_setValue(COUNTRY+"_automatChangedata",1); }
    }catch(err){GM_logError("changedata country","","",err);}
    // **************************************************

    // Multilingual
    err_trace="text";
    text=top.unsafeData.text;
    if(undefined===text["de"]["automat"]){
        text["de"]["automat"] = "Automat";
        text["de"]["automat_planting"] = "Pflanze...";
        text["de"]["automat_waiting"] = "Warte...";
        text["de"]["automat_watering"] = "Gieße...";
        text["de"]["automat_feeding"] = "Füttere...";
        text["de"]["automat_automatPlanting"] = "Pflanz-Automat";
        text["de"]["automat_automatFeeding"] = "Futter-Automat";
        text["de"]["automat_automatFactory"] = "Fabrik-Automat";
        text["de"]["automat_automatMegafield"]="Güterhof-Automat";
        text["de"]["automat_automatWindmill"] = "Mühlen-Automat";
        text["de"]["automat_botStart"] = "Automat-Bot starten";
        text["de"]["automat_botStop"] = "Automat-Bot stoppen";
        text["de"]["automat_settings_botErrorBehaviour"] = "Verhalten des Automaten im Fall eines Fehlers";
        text["de"]["automat_settings_pageReload"] = "Neu Laden der Seite";
        text["de"]["automat_settings_botRestart"] = "Neu Starten des Bots";
        text["de"]["automat_zonePairing"] = "Zone pairing";
        text["de"]["automat_debugInfo"] = "Debug Info";
        text["de"]["automat_windmill"] = "Windmühle";
        text["de"]["automat_timing"] = "Timing";
        text["de"]["automat_general"] = "General";
        text["de"]["automat_guild"] = "Bauernclub";
        text["de"]["automat_map"] = "Farmkarte";
        text["de"]["automat_development"] = "Development";
        text["de"]["automat_arrivedInFarm"] = "Farm erreicht";
        text["de"]["automat_changeToFarmX"] = "Gehe nach Farm %1%";
        text["de"]["automat_changingToX"] = "Gehe nach %1%";
        text["de"]["automat_closingFieldContainer"] = "Schließe Acker";
        text["de"]["automat_closingFactoryContainer"] = "Schließe Fabrik";
        text["de"]["automat_closingStableContainer"] = "Schließe Stall";
        text["de"]["automat_openingZoneX"] = "Öffne Zone %1%";
        text["de"]["automat_zoneXIsOpened"] = "Zone %1% ist geöffnet";
        text["de"]["automat_confirmChangelogVersion"]="Du hast eine neue Version des Automat-Scriptes installiert.<br>Die Version %1% beinhaltet folgende Änderungen:";
        text["de"]["automat_maximumStockCapacityReached"]="Maximale Lagerkapazität wird erreicht werden.";
        text["de"]["automat_nothingToCrop"]="Nichts zum Ernten.";
        text["de"]["automat_openAutoplantDialog"]="Öffne Auto-Pflanz-Dialog.";
        text["de"]["automat_confirmAutoplantDialog"]="Bestätige Auto-Pflanz-Dialog.";
        text["de"]["automat_cropWaitingInX"]="Warte auf Ernten in %1%.";
        text["de"]["automat_plantingAtX"]="Pflanze auf %1%.";
        text["de"]["automat_plantingNoFreeField"]="Kein freies Feld zum Pflanzen.";
        text["de"]["automat_plantingSetX"]="Wähle Pflanze \"%1%\".";
        text["de"]["automat_queueItemAmountDecreased"]="Queue-Eintrag Anzahl verringert.";
        text["de"]["automat_queueItemDeleted"]="Queue-Eintrag gelöscht.";
        text["de"]["automat_responseWaiting"]="Warte auf Antwort.";
        text["de"]["automat_stopAdding"]="Füge \"Stop\" in Queue ein.";
        text["de"]["automat_tourStarting"]="Starte Tour.";
        text["de"]["automat_vehicleNotKnown"]="Kein Fahrzeug bekannt.";
        text["de"]["automat_vehicleXNotAvailable"]="Fahrzeug \"%1%\" nicht verfügbar.";
        text["de"]["automat_vehicleXBuying"]="Kaufe Fahrzeug \"%1%\".";
        text["de"]["automat_vehicleXSelected"]="Fahrzeug  ist ausgewählt.";
        text["de"]["automat_removeFoodworldFarmi"]="Entferne Picknick-Farmi";
        text["de"]["automat_shouldUpdateAdviser"] = "Du solltest das Berater-Script aktualisieren!<br>Der Automat wird nicht ordnungsgemäß arbeiten.";
        text["de"]["automat_settings_autoPlant"] = "Soll der Pflanz-Automat angezeigt werden?";
        text["de"]["automat_settings_autoWater"] = "Sollen die Äcker gegossen werden?";
        text["de"]["automat_settings_autoFeed"] = "Soll der Futter-Automat angezeigt werden?";
        text["de"]["automat_settings_botUse"] = "Verwende Bot";
        text["de"]["automat_settings_botDailyBonus"] = "Täglicher Bonus / sonstige Bonuse";
        text["de"]["automat_settings_botUseButterfly"] = "Schmetterling";
        text["de"]["automat_settings_FarmDog"] = "Braver Ben";
        text["de"]["automat_settings_botUseFishing"] = "Angelhütte: Angeln";
        text["de"]["automat_settings_botUseFishingLookSp"] = "Angelhütte: automatisch besonderes Futter produzieren";
        text["de"]["automat_settings_botUseFoodworld"] = "Auto-Ablehnung für Picknick-Farmis";
        text["de"]["automat_settings_botUseGuildJop"] = "Verwende Bot für Clubauftrag";
        text["de"]["automat_settings_botUseMapStall"] = "Verwende Bot für Obststand";
        text["de"]["automat_settings_botUseMegafruit"] = "Monsterfruchtzucht";
        text["de"]["automat_settings_botUseSpeedEating"] = "Wettessen";
        text["de"]["automat_settings_botUseVetTreatment"] = "Tierarzt: Automatisches Heilen";
        text["de"]["automat_settings_closeWindowTimer"] = "Timer: Zeit, die der Bot wartet um ein offenes Fenster zu schließen.";
        text["de"]["automat_settings_disableCropFields"]="Schlafende Felder nicht ernten";
        text["de"]["automat_settings_megafieldPreference"]="Bevorzuge Güterhof (auf anderen Accounts)";
        text["de"]["automat_settings_megafieldPreferenceTooltip"]="Wechsle zu anderem Account mit fertigem Güterhof, auch wenn auf dem aktuellen noch nicht alle Farmen bearbeitet wurden.";
        text["de"]["automat_settings_megafieldUsePremium"]="Benutze Premium-Anpflanzen";
        text["de"]["automat_settings_megafieldSmallHarvester"]="Erntemaschine Größe 1x1";
        text["de"]["automat_settings_megafieldBigHarvester"]="Erntemaschine Größe 2x2";
        text["de"]["automat_settings_pauseShortMin"] = "Minimale Klickzeit der Automaten";
        text["de"]["automat_settings_pauseShortMax"] = "Maximale Klickzeit der Automaten";
        text["de"]["automat_settings_pauseMin"] = "Minimale Wartezeiten der Automaten";
        text["de"]["automat_settings_pauseMax"] = "Maximale Wartezeiten der Automaten";
        text["de"]["automat_settings_restartBotTimer"] = "Timer: Zeit in Sekunden, bis der Bot wieder startet. -1 = aus";
        text["de"]["automat_settings_maxDurationBotRun"] = "Maximale Laufzeit des Automaten";
        text["de"]["automat_settings_maxDurationBotStep"] = "Maximale Laufzeit eines Schrittes des Automaten";
        text["de"]["automat_setToDefault"] = "Standard setzen";
        text["de"]["automat_settings_seedWaitForCrop"] = "Das Pflanzen wartet, falls innerhalb dieser Zeit geerntet werden kann.";
        text["de"]["automat_emergencyPlants"] = "Notfall-Pflanzen. Diese werden zuerst genommen, falls die benötigte Pflanze nicht verfügbar oder passend ist.";
        text["de"]["automat_settings_useQueueList"] = "Benutze Queue-Listen für die Äcker";
        text["de"]["automat_settings_useWeather"] = "Benutze Wetter auf Farm 5 und 6";
        text["de"]["automat_set12a"] = "Lösche \n alle zone Queue\n Daten";
        text["de"]["automat_set12b"] = "Gelöscht.";
        text["de"]["automat_settings_showQueueTime"] = "Zeige berechnete Zeiten in der Queue-Liste.";
        text["de"]["automat_set18a"] = "Lösche alle Daten der Mühlen-Queue";
        text["de"]["automat_set18b"] = "Löschen erfolgreich";
        text["de"]["automat_settings_powerUpActivate"] = "Aktiviere Produkt-Powerups";
        text["de"]["automat_settings_donating"] = " zum Spenden";
        text["de"]["automat_settings_gambling"] = " zum Würfeln";
        text["de"]["automat_settings_lotteryActivate"] = "Aktiviere das tägliche Lotterie-Los";
        text["de"]["automat_settings_lotteryDailyLot"] = "Behalte das tägliche Lotterie-Los";
        text["de"]["automat_settings_questActivate"] = "Aktiviere den Quest to quest:";
        text["de"]["automat_settings_questSolving"] = "Erfülle den Quest to quest:";
        text["de"]["automat_settings_farmiReject"] = "Auto-Ablehnung Farmi unter";
        text["de"]["automat_settings_farmiAccept"] = "Auto-Annahme Farmi über";
        text["de"]["automat_settings_farmiAcceptBelowMinValue"] = "Nimm Farmi an, der ein Produkt verlangt unter minimalem Lagerbestand";
        text["de"]["automat_settings_farmiRemoveMissing"] = "Entferne Farmi mit fehlenden Produkten und wenigstem Gewinn. Schwelle:";
        text["de"]["automat_fields"] = "Äcker";
        text["de"]["automat_titleGeneral"] = "Allgemein-Queue";
        text["de"]["automat_titleQueue"] = "Queue";
        text["de"]["automat_QueCopyTextHeader"] = "Kopiere Queue";
        text["de"]["automat_QueCopyTextHeaderFrom"] = "Kopiere von:";
        text["de"]["automat_QueCopyTextHeaderTo"] = "Kopiere nach:";
        text["de"]["automat_QueAddText"] = "Eine weitere Pflanze an die Liste anhängen"; //Add product
        text["de"]["automat_QueAddAboveText"] = "Eine weitere Pflanze in die Liste schieben";
        text["de"]["automat_QueDeleteText"] = "Diese Pflanze löschen";
        text["de"]["automat_QueClose"] = "Menü schließen";
        text["de"]["automat_QueCloseAll"] = "Alle geöffneten Queue-Fenster schließen";
        text["de"]["automat_QueMin"] = "Weniger";
        text["de"]["automat_QuePlus"] = "Mehr";
        text["de"]["automat_QueBehaviourF"] = "Klick um in den Lager-Modus zu schalten";
        text["de"]["automat_QueBehaviourR"] = "Klick um in den Felder-Modus zu schalten";
        text["de"]["automat_QueUpButton"] = "Früher";
        text["de"]["automat_QueDownButton"] = "Später";
        text["de"]["automat_buttonTimeLine"] = "Zeige Felder-Zeitverlauf";
        text["de"]["automat_buttonOverview"] = "Zeige Automaten-Übersicht";
        text["de"]["automat_repeat_on"] = "Wiederholung AN";
        text["de"]["automat_repeat_off"] = "Wiederholung AUS";
        text["de"]["automat_shuffle_on"] = "Zufall AN";
        text["de"]["automat_shuffle_off"] = "Zufall AUS";
        text["de"]["automat_rotate"] = "Rotieren";
        text["de"]["automat_stop"] = "STOPP";
        text["de"]["automat_week"] = "Wochen";
        text["de"]["automat_inftext"] = "Läuft ohne Ende";
        text["de"]["automat_removeAllWeed"] = "Entferne alle %AMOUNT% %PROD%<br>Stück = %COST%<br>Total = %TCOST%";
        text["de"]["automat_usedFarmFieldsReadyAt"] = "Benutzte Felder sind fertig um:";
        text["de"]["automat_CloseWindowTimer"] = "Schließe Fenster in %1%";
        text["de"]["automat_CloseWindowTimerClick"] = "Klick um Timer zurückzusetzen";
        //%PRODNAME% = product name, %FLDFROM% = field nr from, %FLDTO% = field nr until,
        text["de"]["automat_QueDoWork"] = "Zone wird vom Bot bearbeitet";
        text["de"]["automat_QueDontWork"] = "Zone wird vom Bot ignoriert";
        text["de"]["automat_QueueStoped"] = "Diese %PRODNAME% werden nicht gepflanzt, da vorher gestoppt wird.";
        text["de"]["automat_QueStop0"] = "Das automatische Pflanzen wird gestoppt.";
        text["de"]["automat_QueStop1"] = "Nach Pflanzen von %FLDFROM% Feld wird gestoppt.";
        text["de"]["automat_QueStopX"] = "Nach Pflanzen von %FLDFROM% Feldern wird gestoppt.";
        text["de"]["automat_QueRepeat"] = "(Wiederholung)";
        text["de"]["automat_QueShuffle"] = "(Zufall)";
        text["de"]["automat_QueRepeatShuffle"] = "(Zufallswiederholung)";
        text["de"]["automat_QueFieldInRow1"] = "(Nr. %FLDFROM%)";
        text["de"]["automat_QueFieldInRowX"] = "(Nr. %FLDFROM% bis %FLDTO%)";
        text["de"]["automat_QueRoundDoneR"] = "These fields %PRODNAME% are already cultured and will be skiped";
        text["de"]["automat_QueRoundDone1"] = "%PRODNAME% ist diese Runde bereits gepflanzt <br/>und wird erneut geplanzt.";
        text["de"]["automat_QueRoundDoneX"] = "%PRODNAME% sind diese Runde bereits gepflanzt <br/>und werden erneut geplanzt.";
        text["de"]["automat_QueFieldMake"] = "Total:";
        text["de"]["automat_QueFieldToGo"] = "Noch:";
        text["de"]["automat_QueRoundMake"] = "Jede Runde:";
        text["de"]["automat_QueRoundMade"] = "Erledigt:";
        text["de"]["automat_QueRoundToGo"] = "Noch:";
        text["de"]["automat_QueUses"] = "Benutzt:";
        text["de"]["automat_QueGives"] = "Ertrag:";
        text["de"]["automat_QueFutter"] = "Zeitersparnis:";
        text["de"]["automat_QueTimeThis"] = "Wachstumszeit:";
        text["de"]["automat_QueTimeToGo"] = "Verbleibende Wachstumszeit:";
        text["de"]["automat_QueTimeReady"] = "Fertig um:";
        text["de"]["automat_QueTimeFirstReady"] = "Erstes fertig:";
        text["de"]["automat_QueTimeNextReady"] = "Nächstes fertig:";
        text["de"]["automat_QueTimeRound"] = "Durchschnitt jede Runde:";
        text["de"]["automat_QueRackMode"]="(Regal Modus)";
        text["de"]["automat_queueshow"]="Klick zum Ändern der Queue";
        text["de"]["automat_RestartBotTimer"] = "Starte Bot in %1%";
        text["de"]["automat_RestartBotTimerClick"] = "Klick Timer +30s";
        text["de"]["automat_zoneXWaiting"]="Zone \"%1%\" wartet";
        //mapVehicle
        text["de"]["automat_mapHeadingVehicle"]="Fahrzeug";
        text["de"]["automat_mapVehicleDeliveryQuantity"]="Mindestmenge";
        text["de"]["automat_mapOutOfService"]="Leerfahrt";
        text["de"]["automat_mapToFarm"]="von Farm %1% nach Farm %2%";
        //For the Mill
        //%PRODNAME% = product name, %FLDFROM% = field nr from, %FLDTO% = field nr until,
        text["de"]["automat_MillQueue"] = "Mühlen-Queue";
        text["de"]["automat_MillDoWork"] = "Windmühle wird automatisch bearbeitet.";
        text["de"]["automat_MillDontWork"] = "Windmühle wird ignoriert. Manuelle Bedienung.";
        text["de"]["automat_MillClearAddAll"] = "Lösche Windmühlen-Queue und nehme dann alle Rezepte auf";
        text["de"]["automat_MillShuffle"] = "(Zufallsmodus)";
        text["de"]["automat_MillInRow1"] = "(Nr. %FLDFROM%)";
        text["de"]["automat_MillInRowX"] = "(Nr. %FLDFROM% bis %FLDTO%)";
        text["de"]["automat_MillTimeTotal"] = "Total Backzeit:";
        text["de"]["automat_MillTimeReady"] = "Fertig:";
        text["de"]["automat_MillStoped"] = "Es ist ein Stopp in der Liste. %PRODNAME% wird nicht gebacken.";
        text["de"]["automat_MillStop0"] = "Der automatische Prozess wird gestoppt.";
        text["de"]["automat_MillStop1"] = "Nach %FLDFROM% Rezept wird der automatische Prozess gestoppt.";
        text["de"]["automat_MillStopX"] = "Nach %FLDFROM% Rezepten wird der automatische Prozess gestoppt.";
        try{
        text["de"]["automat_MillTimeThis"] = top.window.wrappedJSObject.windmill_bakeingtime;
        text["de"]["automat_MillPowerUpText_0"] = top.window.wrappedJSObject.powerup_bonustext1;
        text["de"]["automat_MillPowerUpText_1"] = top.window.wrappedJSObject.powerup_bonustext2;
        text["de"]["automat_MillPowerUpText_2"] = top.window.wrappedJSObject.powerup_bonustext3;
        text["de"]["automat_MillIngredients"] = top.window.wrappedJSObject.windmill_zutaten;
        }catch(err){GM_logError("text mill","","",err);}
        text["de"]["automat_number"] = "Anzahl";
        text["de"]["automat_lack"] = "Fehlend";
        text["de"]["automat_MillRecipesBought"] = "Total gekaufte Rezepte: ";
        text["de"]["automat_MillRecipesUsed"] = "Total benutzte Rezepte: ";
        text["de"]["automat_MillRecipesBake"] = "Max zu backende Rezepte: ";
        //title
        text["de"]["automat_title_on_general"] = "Zeige nur Allgemein-Queue<br>+Strg: Zeige Allgemein-Queue";
        text["de"]["automat_title_off_general"] = "Zeige nur Allgemein-Queue<br>+Strg: Verstecke Allgemein-Queue";
        text["de"]["automat_title_on_farm1"] = "Zeige nur 1. Farm<br>+Strg: Zeige 1. Farm";
        text["de"]["automat_title_off_farm1"] = "Zeige nur 1. Farm<br>+Strg: Verstecke 1. Farm";
        text["de"]["automat_title_on_farm2"] = "Zeige nur 2. Farm<br>+Strg: Zeige 2. Farm";
        text["de"]["automat_title_off_farm2"] = "Zeige nur 2. Farm<br>+Strg: Verstecke 2. Farm";
        text["de"]["automat_title_on_farm3"] = "Zeige nur 3. Farm<br>+Strg: Zeige 3. Farm";
        text["de"]["automat_title_off_farm3"] = "Zeige nur 3. Farm<br>+Strg: Verstecke 3. Farm";
        text["de"]["automat_title_on_farm4"] = "Zeige nur 4. Farm<br>+Strg: Zeige 4. Farm";
        text["de"]["automat_title_off_farm4"] = "Zeige nur 4. Farm<br>+Strg: Verstecke 4. Farm";
        text["de"]["automat_title_on_farm5"] = "Zeige nur 5. Farm<br>+Strg: Zeige 5. Farm";
        text["de"]["automat_title_off_farm5"] = "Zeige nur 5. Farm<br>+Strg: Verstecke 5. Farm";
        text["de"]["automat_title_on_farmersmarket"] = "Zeige nur Bauernmarkt<br>+Strg: Zeige Bauernmarkt";
        text["de"]["automat_title_off_farmersmarket"] = "Zeige nur Bauernmarkt<br>+Strg: Verstecke Bauernmarkt";
        text["de"]["automat_title_on_megafield"] = "Zeige nur Güterhof<br>+Strg: Zeige Güterhof";
        text["de"]["automat_title_off_megafield"] = "Zeige nur Güterhof<br>+Strg: Verstecke Güterhof";
        text["de"]["automat_title_on_city"] = "Zeige nur Stadt<br>+Strg: Zeige Stadt";
        text["de"]["automat_title_off_city"] = "Zeige nur Stadt<br>+Strg: Verstecke Stadt";
        text["de"]["automat_title_on_forestry"] = "Zeige nur Baumerei<br>+Strg: Zeige Baumerei";
        text["de"]["automat_title_off_forestry"] = "Zeige nur Baumerei<br>+Strg: Verstecke Baumerei";
        text["de"]["automat_title_on_foodworld"] = "Zeige nur Picknickarea<br>+Strg: Zeige Picknickarea";
        text["de"]["automat_title_off_foodworld"] = "Zeige nur Picknickarea<br>+Strg: Verstecke Picknickarea";
        text["de"]["automat_title_on_type1"] = "Zeige nur Äcker<br>+Strg: Zeige Äcker";
        text["de"]["automat_title_off_type1"] = "Zeige nur Äcker<br>+Strg: Verstecke Äcker";
        text["de"]["automat_title_on_type2"] = "Zeige nur Ställe<br>+Strg: Zeige Ställe";
        text["de"]["automat_title_off_type2"] = "Zeige nur Ställe<br>+Strg: Verstecke Ställe";
        text["de"]["automat_title_on_type3"] = "Zeige nur Fabriken<br>+Strg: Zeige Fabriken";
        text["de"]["automat_title_off_type3"] = "Zeige nur Fabriken<br>+Strg: Verstecke Fabriken";
        text["de"]["automat_title_on_all"] = "Show all farm queues";
        text["de"]["automat_title_off_all"] = "Hide all farm queues";
        //help
        text["de"]["automat_help_0"] = [,"This script can be used to add automation to the cultivation process."];
        text["de"]["automat_help_1"] = ["How it works","If you click the \""+text["de"]["automat_botStart"]+"\" button at the bottom of the page the automation process will be started.<br>You even can continue gaming as long as nothing is ready. Then the bot begins to simulate the clicks a user does. During that period you shouldn't interact."];
        text["de"]["automat_help_2"] = ["Field","At the bottom of every zone an icon is displayed. If the icon shows <div class = \"kp"+PRODSTOP+"\" style = \"display:inline-block;\">&nbsp;</div> the automation process is stopped or will be stopped at the next culture moment. There will not be any culturing for this garden until you select an other product. When a product icon is displayed this product is cultured next at the field."];
        text["de"]["automat_help_3"] = ["Queue","If in the option menu of the Automat the queue checkbox is checked, clicking the product culturing icon of a zone will display a queue where multiple products can be queued. If the background of a queue item is red this item will not be cultered because a production stop item is added somewhere before in the list."];
        text["de"]["automat_help_4"] = ["Repeat","Enabling the \"Repeat\" check box will enable the \"loop\" feature of the queue."];
        text["de"]["automat_help_5"] = ["Shuffle","Enabling the \"Shuffle\" check box will randomly culture a product from the list."];
        text["de"]["automat_help_6"] = ["Stables","At the bottom of every zone with a stable an icon is displayed. If the icon shows <div class = \"kp"+PRODSTOP+"\" style = \"display:inline-block;\">&nbsp;</div> the automation process is stopped or will be stopped at the next culture moment. When a product is displayed this product will be used to feed the stable. Click this icon to choose the feed amount through the slider or change the feed product by selecting the product."];
        text["de"]["automat_help_7"] = ["Factories","At the bottom of every zone with a factory an icon is displayed. If the icon shows <div class = \"kp"+PRODSTOP+"\" style = \"display:inline-block;\">&nbsp;</div> the automation process is stopped or will be stopped at the next culture moment. When a product is displayed this will be the produced product of this factory."];
        text["de"]["automat_help_8"] = [text["de"]["automat_zonePairing"],"In the \""+text["de"]["automat_zonePairing"]+"\" menu of the Automat the radio-buttons controle the pairing of the zones. Also the general queue is extended to allow multiple general queues."];
        text["de"]["automat_help_9"] = ["Windmill","The windmill queue works the same as the zone queue but instead of products recipes are baked.<br>As extra the mill queue has a <div class = \"queueButtonAddAll\">&nbsp;</div> button which can be used to clear and refill the queue with all available recipes that were bought and where there are enough ingredients in the rack to bake them.<br>If the background of a queue item is yellow then there are not enough products to bake all these recipes.<br><br><b>Note: </b>For first time user that have already bought recipes. Go to the miller or the trading lady screen so the bought recipes can be stored into the system."];
    }
    if(undefined===text["en"]["automat"]){
        text["en"]["automat"] = "Automaton";
        text["en"]["automat_planting"] = "Planting...";
        text["en"]["automat_waiting"] = "Waiting...";
        text["en"]["automat_watering"] = "Watering...";
        text["en"]["automat_feeding"] = "Feeding...";
        text["en"]["automat_automatPlanting"] = "Seeding machine";
        text["en"]["automat_automatFeeding"] = "Feeding machine";
        text["en"]["automat_automatFactory"] = "Factory machine";
        text["en"]["automat_automatMegafield"] = "Megafield machine";
        text["en"]["automat_automatWindmill"] = "Mill machine";
        text["en"]["automat_botStart"] = "Start Automaton-Bot";
        text["en"]["automat_botStop"] = "Stop Automaton-Bot";
        text["en"]["automat_settings_botErrorBehaviour"] = "Behaviour of Automaton in case of errors";
        text["en"]["automat_settings_pageReload"] = "Reload of page";
        text["en"]["automat_settings_botRestart"] = "Restart bot";
        text["en"]["automat_zonePairing"] = "Zone pairing";
        text["en"]["automat_debugInfo"] = "Debug Info";
        text["en"]["automat_windmill"] = "windmill";
        text["en"]["automat_timing"] = "Timing";
        text["en"]["automat_general"] = "General";
        text["en"]["automat_guild"] = "Guild";
        text["en"]["automat_map"] = "Farmmap";
        text["en"]["automat_development"] = "Development";
        text["en"]["automat_arrivedInFarm"] = "Arrived in farm";
        text["en"]["automat_changeToFarmX"] = "Going to farm %1%";
        text["en"]["automat_changingToX"] = "Going to %1%";
        text["en"]["automat_closingFieldContainer"] = "Closing field";
        text["en"]["automat_closingFactoryContainer"] = "Closing factory";
        text["en"]["automat_closingStableContainer"] = "Closing stable";
        text["en"]["automat_openingZoneX"] = "Opening zone %1%";
        text["en"]["automat_zoneXIsOpened"] = "Zone %1% is opened";
        text["en"]["automat_confirmChangelogVersion"]="You have installed a new version of the Automaton script.<br>The version %1% contains the following changes:";
        text["en"]["automat_maximumStockCapacityReached"]="Maximum stock capacity will be reached.";
        text["en"]["automat_nothingToCrop"]="Nothing to crop.";
        text["en"]["automat_openAutoplantDialog"]="Open autoplant dialog.";
        text["en"]["automat_confirmAutoplantDialog"]="Confirm autoplant dialog.";
        text["en"]["automat_cropWaitingInX"]="Waiting for crop in %1%.";
        text["en"]["automat_plantingAtX"]="Planting at %1%.";
        text["en"]["automat_plantingNoFreeField"]="No free field to plant.";
        text["en"]["automat_plantingSetX"]="Setting plant \"%1%\".";
        text["en"]["automat_queueItemAmountDecreased"]="Queue item amount decreased..";
        text["en"]["automat_queueItemDeleted"]="Queue item deleted.";
        text["en"]["automat_responseWaiting"]="Waiting for response.";
        text["en"]["automat_stopAdding"]="Adding stop to queue.";
        text["en"]["automat_tourStarting"]="Starting tour.";
        text["en"]["automat_vehicleNotKnown"]="No vehicle known.";
        text["en"]["automat_vehicleXNotAvailable"]="Vehicle \"%1%\" not available.";
        text["en"]["automat_vehicleXBuying"]="Buying vehicle \"%1%\".";
        text["en"]["automat_vehicleXSelected"]="Vehicle \"%1%\" is selected.";
        text["en"]["automat_msgUpdate"] = "There is a new script version of the automaton. Install?";
        text["en"]["automat_removeFoodworldFarmi"]="Kick Foodworld-Farmi";
        text["en"]["automat_shouldUpdateAdviser"] = "You should update the script of the Adviser!<br>The Automaton will not run properly.";
        text["en"]["automat_settings_autoPlant"] = "Shall the planting machine be displayed?";
        text["en"]["automat_settings_autoWater"] = "Shall the fields be watered?";
        text["en"]["automat_settings_autoFeed"] = "Shall the feeding machine be displayed?";
        text["en"]["automat_settings_botUse"] = "Use bot";
        text["en"]["automat_settings_botDailyBonus"] = "Daily bonus / other bonuses";
        text["en"]["automat_settings_botUseButterfly"] = "Butterfly";
        text["en"]["automat_settings_FarmDog"] = "Farmdog";
        text["en"]["automat_settings_botUseFishing"] = "Fishing: Fisherman";
        text["en"]["automat_settings_botUseFishingLookSp"] = "Fishing: look for special products";
        text["en"]["automat_settings_botUseFoodworld"] = "Auto reject foodworld farmis";
        text["en"]["automat_settings_botUseGuildJop"] = "Use bot for guildjob ";
        text["en"]["automat_settings_botUseMapStall"] = "Use bot for fruit shop";
        text["en"]["automat_settings_botUseMegafruit"] = "Megafruit";
        text["en"]["automat_settings_botUseSpeedEating"] = "Speedeating";
        text["en"]["automat_settings_botUseVetTreatment"] = "Vet: Automatic treatment";
        text["en"]["automat_settings_closeWindowTimer"] = "Timer: Waiting time to close an open window.";
        text["en"]["automat_settings_disableCropFields"]="Block the cropping of sleeping fields.";
        text["en"]["automat_settings_megafieldPreference"]="Prefer megafield (on other accounts)";
        text["en"]["automat_settings_megafieldPreferenceTooltip"]="Switch to other account with ready megafield, even though not all fields on this one have been treated.";
        text["en"]["automat_settings_megafieldUsePremium"]="Use premium planting";
        text["en"]["automat_settings_megafieldSmallHarvester"]="Harvester (small): 1x1";
        text["en"]["automat_settings_megafieldBigHarvester"]="Harvester (big): 2x2";
        text["en"]["automat_settings_pauseShortMin"] = "Minimal clicking delay of the automaton";
        text["en"]["automat_settings_pauseShortMax"] = "Maximal clicking delay of the automaton";
        text["en"]["automat_settings_pauseMin"] = "Minimal waiting delay of the automaton";
        text["en"]["automat_settings_pauseMax"] = "Maximal waiting delay of the automaton";
        text["en"]["automat_settings_maxDurationBotRun"] = "Maximal running time of the automaton";
        text["en"]["automat_settings_maxDurationBotStep"] = "Maximal running time for a step of the automaton";
        text["en"]["automat_settings_restartBotTimer"] = "Timer: Waitimg time, before the bot is startimg. -1 = off";
        text["en"]["automat_setToDefault"] = "Set to default";
        text["en"]["automat_settings_seedWaitForCrop"] = "Wait planting if next cropping time is less than";
        text["en"]["automat_emergencyPlants"] = "Emergency Plants. They are taken first if the needed plant is not available or fitting.";
        text["en"]["automat_settings_useQueueList"] = "Use queue for the fields.";
        text["en"]["automat_settings_useWeather"] = "Use Weather on farm 5 und 6";
        text["en"]["automat_set12a"] = "Delete \n all zone queue\n data";
        text["en"]["automat_set12b"] = "Delete Completed.";
        text["en"]["automat_settings_showQueueTime"] = "Show calculated product ready time in the queue.";
        text["en"]["automat_set18a"] = "Delete all mill queue data";
        text["en"]["automat_set18b"] = "Delete Completed";
        text["en"]["automat_settings_powerUpActivate"] = "Activate powerups for products";
        text["en"]["automat_settings_donating"] = " to donate";
        text["en"]["automat_settings_gambling"] = " to gamble";
        text["en"]["automat_settings_lotteryActivate"] = "Activate the daily lottery automatically";
        text["en"]["automat_settings_lotteryDailyLot"] = "Choose to keep the daily lot";
        text["en"]["automat_settings_questActivate"] = "Activate the Quest automatically to quest:";
        text["en"]["automat_settings_questSolving"] = "Solve the Quest automatically to quest:";
        text["en"]["automat_settings_farmiReject"] = "Auto reject farmi below:";
        text["en"]["automat_settings_farmiAccept"] = "Auto accept farmi above:";
        text["en"]["automat_settings_farmiAcceptBelowMinValue"] = "Accept a farmi with an product item that is below the minimal product amount in the rack.";
        text["en"]["automat_settings_farmiRemoveMissing"] = "Remove a farmi with missing products and the lowest yield. Threshold:";
        text["en"]["automat_fields"] = "Fields";
        text["en"]["automat_titleGeneral"] = "General queue";
        text["en"]["automat_titleQueue"] = "Queue";
        text["en"]["automat_QueCopyTextHeader"] = "Copy queue";
        text["en"]["automat_QueCopyTextHeaderFrom"] = "Copy from:";
        text["en"]["automat_QueCopyTextHeaderTo"] = "Copy to:";
        text["en"]["automat_QueAddText"] = "Click to add a product to the list."; //Add product
        text["en"]["automat_QueAddAboveText"] = "Click to add a product to the list before this product";
        text["en"]["automat_QueDeleteText"] = "Delete this product from the list.";
        text["en"]["automat_QueClose"] = "Close this menu";
        text["en"]["automat_QueCloseAll"] = "Close all open Queue windows.";
        text["en"]["automat_QueMin"] = "Lower value";
        text["en"]["automat_QuePlus"] = "Increase value";
        text["en"]["automat_QueBehaviourF"] = "Click to switch to rack-mode";
        text["en"]["automat_QueBehaviourR"] = "Click to switch to field-mode";
        text["en"]["automat_QueUpButton"] = "Move Up";
        text["en"]["automat_QueDownButton"] = "Move Down";
        text["en"]["automat_buttonTimeLine"] = "Show field timelines";
        text["en"]["automat_buttonOverview"] = "Show overview of automatons";
        text["en"]["automat_repeat_on"] = "Repeat list is ON, press to turn off repeat.";
        text["en"]["automat_repeat_off"] = "Repeat list is OFF, press to turn on repeat.";
        text["en"]["automat_shuffle_on"] = "Shuffle list is ON, press to turn off shuffle.";
        text["en"]["automat_shuffle_off"] = "Shuffle list is OFF, press to turn on shuffle.";
        text["en"]["automat_rotate"] = "Rotate: place first entry after the last entry";
        text["en"]["automat_stop"] = "STOP";
        text["en"]["automat_week"] = "week";
        text["en"]["automat_inftext"] = "Runs indefinitely";
        text["en"]["automat_removeAllWeed"] = "Remove all %AMOUNT% %PROD%<br>a piece = %COST%<br>total = %TCOST%";
        text["en"]["automat_usedFarmFieldsReadyAt"] = "Used farm fields are ready at:";
        text["en"]["automat_CloseWindowTimer"] = "Closing screen in %1%";
        text["en"]["automat_CloseWindowTimerClick"] = "Click to reset timer";
        //%PRODNAME% = product name, %FLDFROM% = field nr from, %FLDTO% = field nr until,
        text["en"]["automat_QueDoWork"] = "Zone is done by bot";
        text["en"]["automat_QueDontWork"] = "Zone is ignored by bot";
        text["en"]["automat_QueueStoped"] = "A culture stop is detected these %PRODNAME% will not be cultured.";
        text["en"]["automat_QueStop0"] = "The automatic culturing process will be stopped";
        text["en"]["automat_QueStop1"] = "After culturing %FLDFROM% field the automatic process will be stopped.";
        text["en"]["automat_QueStopX"] = "After culturing %FLDFROM% fields the automatic process will be stopped.";
        text["en"]["automat_QueRepeat"] = "(Repeat mode)";
        text["en"]["automat_QueShuffle"] = "(Shuffle mode)";
        text["en"]["automat_QueRepeatShuffle"] = "(Shuffle repeat mode)";
        text["en"]["automat_QueFieldInRow1"] = "(Nr. %FLDFROM%)";
        text["en"]["automat_QueFieldInRowX"] = "(Nr. %FLDFROM% to %FLDTO%)";
        text["en"]["automat_QueRoundDoneR"] = "These fields %PRODNAME% are already cultured and will be skipped";
        text["en"]["automat_QueRoundDone1"] = "This field %PRODNAME% s already cultured in this turn, <br/>next turn it will be cultured again.";
        text["en"]["automat_QueRoundDoneX"] = "These fields %PRODNAME% are already cultured in this turn, <br/>next turn they will be cultured again.";
        text["en"]["automat_QueFieldMake"] = "Total:";
        text["en"]["automat_QueFieldToGo"] = "To go:";
        text["en"]["automat_QueRoundMake"] = "Each turn: ";
        text["en"]["automat_QueRoundMade"] = "Made:";
        text["en"]["automat_QueRoundToGo"] = "To do:";
        text["en"]["automat_QueUses"] = "Uses:";
        text["en"]["automat_QueGives"] = "Yield:";
        text["en"]["automat_QueFutter"] = "Time discount:";
        text["en"]["automat_QueTimeThis"] = "Production time:";
        text["en"]["automat_QueTimeToGo"] = "Culture time to go:";
        text["en"]["automat_QueTimeReady"] = "Ready at:";
        text["en"]["automat_QueTimeFirstReady"] = "First is ready at:";
        text["en"]["automat_QueTimeNextReady"] = "Next is ready at:";
        text["en"]["automat_QueTimeRound"] = "Average each turn:";
        text["en"]["automat_QueRackMode"]="(Rack mode)";
        text["en"]["automat_queueshow"]="Click to edit the queue";
        text["en"]["automat_RestartBotTimer"] = "Start Bot in %1%";
        text["en"]["automat_RestartBotTimerClick"] = "Click to add 30s";
        text["en"]["automat_zoneXWaiting"]="Zone \"%1%\" is waiting";
        //mapVehicle
        text["en"]["automat_mapHeadingVehicle"]="Vehicle";
        text["en"]["automat_mapVehicleDeliveryQuantity"]="Minimum quantity";
        text["en"]["automat_mapOutOfService"]="Out of service";
        text["en"]["automat_mapToFarm"]="from farm %1% to farm %2%";
        //For the Mill
        //%PRODNAME% = product name, %FLDFROM% = field nr from, %FLDTO% = field nr until,
        text["en"]["automat_MillQueue"] = "Mill Queue";
        text["en"]["automat_MillDoWork"] = "The windmill is automatically maintained.";
        text["en"]["automat_MillDontWork"] = "The windmill is ignored. Manual maintenance is required.";
        text["en"]["automat_MillClearAddAll"] = "Clear mill list then add all recipes";
        text["en"]["automat_MillShuffle"] = "(Shuffle mode)";
        text["en"]["automat_MillInRow1"] = "(Nr. %FLDFROM%)";
        text["en"]["automat_MillInRowX"] = "(Nr. %FLDFROM% to %FLDTO%)";
        text["en"]["automat_MillTimeTotal"] = "Total baking time:";
        text["en"]["automat_MillTimeReady"] = "Ready:";
        text["en"]["automat_MillStoped"] = "There is a stop added to the queue this %PRODNAME% will not be baked";
        text["en"]["automat_MillStop0"] = "The automatic baking process will be stopped";
        text["en"]["automat_MillStop1"] = "After %FLDFROM% recipe the automatic baking process will be stopped.";
        text["en"]["automat_MillStopX"] = "After %FLDFROM% recipes the automatic baking process will be stopped.";
        try{
        text["en"]["automat_MillTimeThis"] = top.window.wrappedJSObject.windmill_bakeingtime;
        text["en"]["automat_MillPowerUpText_0"] = top.window.wrappedJSObject.powerup_bonustext1;
        text["en"]["automat_MillPowerUpText_1"] = top.window.wrappedJSObject.powerup_bonustext2;
        text["en"]["automat_MillPowerUpText_2"] = top.window.wrappedJSObject.powerup_bonustext3;
        text["en"]["automat_MillIngredients"] = top.window.wrappedJSObject.windmill_zutaten;
        }catch(err){GM_logError("text mill","","",err);}
        text["en"]["automat_number"] = "Number";
        text["en"]["automat_lack"] = "Lack";
        text["en"]["automat_MillRecipesBought"] = "Total recipes bought: ";
        text["en"]["automat_MillRecipesUsed"] = "Total recipes used: ";
        text["en"]["automat_MillRecipesBake"] = "Max recipes to bake: ";
        //title
        text["en"]["automat_title_on_general"] = "Show general queue only<br>+Ctrl: Show general queue";
        text["en"]["automat_title_off_general"] = "Show general queue only<br>+Ctrl: Hide general queue";
        text["en"]["automat_title_on_farm1"] = "Show first farm only<br>+Ctrl: Show first farm";
        text["en"]["automat_title_off_farm1"] = "Show first farm only<br>+Ctrl: Hide first farm";
        text["en"]["automat_title_on_farm2"] = "Show second farm only<br>+Ctrl: Show second farm";
        text["en"]["automat_title_off_farm2"] = "Show second farm only<br>+Ctrl: Hide second farm";
        text["en"]["automat_title_on_farm3"] = "Show third farm only<br>+Ctrl: Show third farm";
        text["en"]["automat_title_off_farm3"] = "Show third farm only<br>+Ctrl: Hide third farm";
        text["en"]["automat_title_on_farm4"] = "Show fourth farm only<br>+Ctrl: Show fourth farm";
        text["en"]["automat_title_off_farm4"] = "Show fourth farm only<br>+Ctrl: Hide fourth farm";
        text["en"]["automat_title_on_farm5"] = "Show fifth farm only<br>+Ctrl: Show fifth farm";
        text["en"]["automat_title_off_farm5"] = "Show fifth farm only<br>+Ctrl: Hide fifth farm";
        text["en"]["automat_title_on_farmersmarket"] = "Show farmersmarket only<br>+Ctrl: Show farmersmarket";
        text["en"]["automat_title_off_farmersmarket"] = "Show farmersmarket only<br>+Ctrl: Hide farmersmarket";
        text["en"]["automat_title_on_megafield"] = "Show megafield only<br>+Ctrl: Show megafield";
        text["en"]["automat_title_off_megafield"] = "Show megafield only<br>+Ctrl: Hide megafield";
        text["en"]["automat_title_on_city"] = "Show city only<br>+Ctrl: Show city";
        text["en"]["automat_title_off_city"] = "Show city only<br>+Ctrl: Hide city";
        text["en"]["automat_title_on_forestry"] = "Show forestry only<br>+Ctrl: Show forestry";
        text["en"]["automat_title_off_forestry"] = "Show forestry only<br>+Ctrl: Hide forestry";
        text["en"]["automat_title_on_foodworld"] = "Show picnic area only<br>+Ctrl: Show picnic area";
        text["en"]["automat_title_off_foodworld"] = "Show picnic area only<br>+Ctrl: Hide picnic area";
        text["en"]["automat_title_on_type1"] = "Show fields only<br>+Ctrl: Show fields";
        text["en"]["automat_title_off_type1"] = "Show fields only<br>+Ctrl: Hide fields";
        text["en"]["automat_title_on_type2"] = "Show stables only<br>+Ctrl: Show stables";
        text["en"]["automat_title_off_type2"] = "Show stables only<br>+Ctrl: Hide stables";
        text["en"]["automat_title_on_type3"] = "Show factories only<br>+Ctrl: Show factories";
        text["en"]["automat_title_off_type3"] = "Show factories only<br>+Ctrl: Hide factories";
        text["en"]["automat_title_on_all"] = "Show all farm queues";
        text["en"]["automat_title_off_all"] = "Hide all farm queues";

        //help
        text["en"]["automat_help_0"] = [,"This script can be used to add automation to the cultivation process."];
        text["en"]["automat_help_1"] = ["How it works","If you click the \""+text["en"]["automat_botStart"]+"\" button at the bottom of the page the automation process will be started.<br>You even can continue gaming as long as nothing is ready. Then the bot begins to simulate the clicks a user does. During that period you shouldn't interact."];
        text["en"]["automat_help_2"] = ["Field","At the bottom of every zone an icon is displayed. If the icon shows <div class = \"kp"+PRODSTOP+"\" style = \"display:inline-block;\">&nbsp;</div> the automation process is stopped or will be stopped at the next culture moment. There will not be any culturing for this garden until you select an other product. When a product icon is displayed this product is cultured next at the field."];
        text["en"]["automat_help_3"] = ["Queue","If in the option menu of the Automat the queue checkbox is checked, clicking the product culturing icon of a zone will display a queue where multiple products can be queued. If the background of a queue item is red this item will not be cultered because a production stop item is added somewhere before in the list."];
        text["en"]["automat_help_4"] = ["Repeat","Enabling the \"Repeat\" check box will enable the \"loop\" feature of the queue."];
        text["en"]["automat_help_5"] = ["Shuffle","Enabling the \"Shuffle\" check box will randomly culture a product from the list."];
        text["en"]["automat_help_6"] = ["Stables","At the bottom of every zone with a stable an icon is displayed. If the icon shows <div class = \"kp"+PRODSTOP+"\" style = \"display:inline-block;\">&nbsp;</div> the automation process is stopped or will be stopped at the next culture moment. When a product is displayed this product will be used to feed the stable. Click this icon to choose the feed amount through the slider or change the feed product by selecting the product."];
        text["en"]["automat_help_7"] = ["Factories","At the bottom of every zone with a factory an icon is displayed. If the icon shows <div class = \"kp"+PRODSTOP+"\" style = \"display:inline-block;\">&nbsp;</div> the automation process is stopped or will be stopped at the next culture moment. When a product is displayed this will be the produced product of this factory."];
        text["en"]["automat_help_8"] = [text["en"]["automat_zonePairing"],"In the \""+text["en"]["automat_zonePairing"]+"\" menu of the Automat the radio-buttons controle the pairing of the zones. Also the general queue is extended to allow multiple general queues."];
        text["en"]["automat_help_9"] = ["Windmill","The windmill queue works the same as the zone queue but instead of products recipes are baked.<br>As extra the mill queue has a <div class = \"queueButtonAddAll\">&nbsp;</div> button which can be used to clear and refill the queue with all available recipes that were bought and where there are enough ingredients in the rack to bake them.<br>If the background of a queue item is yellow then there are not enough products to bake all these recipes.<br><br><b>Note: </b>For first time user that have already bought recipes. Go to the miller or the trading lady screen so the bought recipes can be stored into the system."];
    }
    delimThou=top.unsafeData.delimThou;
    regDelimThou=new RegExp(top.unsafeData.regDelimThou,"g");
    delimDeci=top.unsafeData.delimDeci;
    regDelimDeci=new RegExp(top.unsafeData.regDelimDeci);
    window.setInterval(function (){
        now=Math.floor((new Date()).getTime()/1000);
    },1000);

    GM_registerMenuCommand(getText("automat")+" Update", function(){
        location.href=GM_Source;
    });
    GM_registerMenuCommand(getText("automat")+" "+getText("scriptHomepage"), function(){
        window.open(GM_Home);
    });
    // Version check
    err_trace="Version check";
    if((!unsafeData.beraterVersion)||(compareVersions(neededVersionBerater,unsafeData.beraterVersion)>0)){
        alert2(getText("automat_shouldUpdateAdviser"),getText("ok"));
    }
    var loc=new RegExp("s(\\d+)\\."+GAMEPAGES[COUNTRY].replace(/\./g,"\\."),"i").exec(location.hostname);
    if(loc){
        SERVER=loc[1];
        USERNAME=unsafeData.username.slice();
        settings.init();
        // **************************************************
        // ChangeData Server
        err_trace="ChangeData Server";
        try{
            var changedata = GM_getValue(COUNTRY+"_"+SERVER+"_automatChangedata",0);
            switch(changedata){
            case 0:{
                if(help=GM_getValue(COUNTRY+"_"+SERVER+"_valBot")){
                    GM_deleteValue(COUNTRY+"_"+SERVER+"_valBot");
                    settings.set("server","botActive",help);
                }
            }
            }
            if(changedata<1){ GM_setValue(COUNTRY+"_"+SERVER+"_automatChangedata",1); }
        }catch(err){GM_logError("changedata server","","",err);}
        // **************************************************
        // ChangeData User
        err_trace="ChangeData Server";
        try{
            var changedata = GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_automatChangedata",0);
            switch(changedata){
            case 0:{
                if(help=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valAutoPflanz")){
                    GM_deleteValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valAutoPflanz");
                    settings.set("account","autoPlant",help);
                }
                if(help=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valAutoFutter")){
                    GM_deleteValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valAutoFutter");
                    settings.set("account","autoFeed",help);
                }
                if(help=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valUseQueueList")){
                    GM_deleteValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valUseQueueList");
                    settings.set("account","useQueueList",help);
                }
                if(help=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valSeedWaitForCrop")){
                    GM_deleteValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valSeedWaitForCrop");
                    settings.set("account","seedWaitForCrop",help);
                }
                if(help=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valDisableCropFields")){
                    GM_deleteValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valDisableCropFields");
                    settings.set("account","disableCropFields",help);
                }
                if(help=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valShowQueueTime")){
                    GM_deleteValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valShowQueueTime");
                    settings.set("account","showQueueTime",help);
                }
                if(help=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valPowerUpActivate")){
                    GM_deleteValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valPowerUpActivate");
                    settings.set("account","powerUpActivate",help);
                }
                if(help=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valLotteryActivate")){
                    GM_deleteValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valLotteryActivate");
                    settings.set("account","lotteryActivate",help);
                }
                if(help=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valLotteryDailyLot")){
                    GM_deleteValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valLotteryDailyLot");
                    settings.set("account","lotteryDailyLot",help);
                }
                if(help=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valFarmiReject")){
                    GM_deleteValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valFarmiReject");
                    settings.set("account","farmiReject",help);
                }
                if(help=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valFarmiRejectUntilNr")){
                    GM_deleteValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valFarmiRejectUntilNr");
                    settings.set("account","farmiRejectUntilNr",help);
                }
                if(help=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valFarmiAccept")){
                    GM_deleteValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valFarmiAccept");
                    settings.set("account","farmiAccept",help);
                }
                if(help=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valFarmiAcceptAboveNr")){
                    GM_deleteValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valFarmiAcceptAboveNr");
                    settings.set("account","farmiAcceptAboveNr",help);
                }
                if(help=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valFarmiAcceptBelowMinValue")){
                    GM_deleteValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valFarmiAcceptBelowMinValue");
                    settings.set("account","farmiAcceptBelowMinValue",help);
                }
                if(help=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valFarmiRemoveMissing")){
                    GM_deleteValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valFarmiRemoveMissing");
                    settings.set("account","farmiRemoveMissing",help);
                }
                if(help=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valFarmiRemoveMissingAboveNr")){
                    GM_deleteValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valFarmiRemoveMissingAboveNr");
                    settings.set("account","farmiRemoveMissingAboveNr",help);
                }
                if((help=GM_getValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valUseBot"))&&(help=explode(help,"changedata country/valUseBot"))){
                    GM_deleteValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_valUseBot");
                    for(var i in help){
                        if(!help.hasOwnProperty(i)){ continue; }
                        settings.set("account","botUse"+i.toTitleCase(),!!help[i]);
                    }
                }
            }
            }
            if(changedata<1){ GM_setValue(COUNTRY+"_"+SERVER+"_"+USERNAME+"_automatChangedata",1); }
        }catch(err){GM_logError("changedata user","","",err);}
        // **************************************************

        switch (PAGE){
            //case "dbfehler":
            //case "wartung":   break;
            case "main":    do_main();break;
            case "hilfe":   do_hilfe();break;
        }
    } else {
        settings.init();
        do_login();
    }
    GM_logInfo("start_script","","Page="+location.href,"Userscript \"MyFreeFarm Automat\" has started");
    unsafeData.automatStarted=automatStarted=true;
}catch(err){GM_logError("start_script","","err_trace="+err_trace,err);}
};

window.addEventListener("load",function(){
    if(self==top){ do_relogin(60); }
    if(unsafeData.beraterDone){
        start_script();
    }else{
        document.addEventListener("beraterDone",function(){
            start_script();
            document.removeEventListener("beraterDone",arguments.callee,false);
        },false);
    }
},false);
