/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Form from '../content/Form'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 158 22">
                            <g fill="#1B42EA">
                                <path d="M115.781 6.35918c.468 0 .917.08406 1.356.25219.439.16813.819.43516 1.151.79614.331.36592.599.8258.799 1.37469.205.55383.308 1.2115.308 1.9829 0 1.439-.23 2.8384-.688 4.1983-.458 1.3598-1.083 2.5565-1.882 3.5949-.8 1.0385-1.726 1.8692-2.785 2.4972-1.058.633-2.199.9445-3.428.9445-.624 0-1.131-.1088-1.531-.3264-.4-.2175-.707-.4945-.916-.8258l-3.238 1.0929 2.886-17.06005c.157-.96427.093-1.70106-.19-2.2005-.282-.50438-.736-.77141-1.355-.81097l.029-.14835c1.009-.21757 1.946-.44504 2.799-.6824.853-.23735 1.76-.5835 2.711-1.03349h.088l-2.302 13.18816c.254-.6923.566-1.4341.932-2.2302.37-.7961.799-1.53786 1.297-2.21532.497-.6824 1.068-1.24612 1.721-1.70105.649-.45494 1.395-.6824 2.229-.6824l.009-.00495Zm-4.983 15.16612c.834 0 1.594-.2918 2.272-.8703.678-.5835 1.263-1.3253 1.751-2.2302.487-.9049.863-1.9038 1.136-2.9867.273-1.083.409-2.1263.409-3.1351 0-.7863-.063-1.439-.19-1.9533-.127-.51423-.292-.91972-.497-1.2263-.205-.30659-.439-.51922-.702-.6379-.264-.11868-.542-.17802-.829-.17802-.585 0-1.122.21758-1.619.65273-.498.43516-.941.96921-1.341 1.61209-.4.6428-.746 1.3104-1.049 2.0125-.302.7022-.551 1.3154-.741 1.8495l-.99 5.7361c.176.4351.454.7664.829 1.0038.381.2374.898.356 1.561.356v-.0049ZM123.277 22c-.854 0-1.439-.267-1.751-.7961-.312-.5341-.39-1.2214-.234-2.072l2.389-14.19191c.059-.33626.088-.66757.088-1.00382 0-.33626-.049-.65274-.146-.94449-.098-.29669-.268-.54888-.512-.75657-.244-.20769-.571-.33131-.976-.37087l.03-.14835c2.023-.37581 3.857-.94448 5.51-1.71589h.088l-3.238 18.7759c-.098.4549-.093.7615.014.9297.108.1681.288.2521.542.2521.409 0 .785-.1681 1.136-.5043.351-.3363.668-.7171.946-1.1522.283-.4352.512-.8555.687-1.2709.176-.4153.293-.6873.352-.8258l.146.0297c-.176.4154-.4.9494-.673 1.6121-.273.6626-.619 1.2955-1.034 1.9087-.419.6132-.902 1.1373-1.458 1.5824-.556.445-1.19.6675-1.911.6675l.005-.0049Zm22.596-5.7658c-.195.4945-.434 1.0681-.712 1.7307-.283.6627-.629 1.2907-1.034 1.8939-.404.6033-.887 1.1077-1.443 1.5231s-1.18.623-1.882.623c-.815 0-1.39-.2571-1.722-.7664-.331-.5143-.419-1.2115-.263-2.1016l.673-3.7532c-.892 2.0917-1.858 3.7136-2.887 4.8806-1.029 1.1621-2.131 1.7456-3.296 1.7456-1.048 0-1.79-.3462-2.214-1.0335-.424-.6873-.526-1.7357-.292-3.1351l1.37-7.98111c.097-.43515.088-.7813-.029-1.04832-.117-.26703-.371-.40054-.756-.40054-.351 0-.678.12857-.976.3857-.302.25714-.575.55384-.814.88515-.244.33622-.448.65772-.614.95932-.166.3066-.288.5192-.366.6379l-.146-.0297c.195-.4154.429-.9.697-1.46368.273-.56372.614-1.09283 1.019-1.59721.41-.50439.878-.92965 1.414-1.28569.537-.35603 1.161-.53405 1.883-.53405.814 0 1.389.25219 1.721.75163.331.50438.419 1.20656.263 2.11643l-1.458 8.36687c-.156.8851-.117 1.5329.117 1.9384.234.4055.605.6082 1.107.6082.332 0 .688-.1632 1.063-.4896.38-.3263.766-.7615 1.166-1.3153.399-.5538.785-1.1967 1.165-1.9384.38-.7418.731-1.5329 1.063-2.3785l1.282-7.33336h3.15L142.05 18.7611c-.097.4945-.083.8159.044.9741.127.1583.307.2374.541.2374.39 0 .746-.1632 1.078-.4896.331-.3263.629-.7022.902-1.1225.273-.4252.502-.8406.683-1.256.18-.4154.317-.7121.395-.8851l.175.0296.005-.0148Zm8.25-9.87502c1.127 0 2.009.28187 2.638.84064.629.56373.946 1.31535.946 2.25984 0 1.00384-.268 1.86914-.8 2.58624-.536.7219-1.214 1.3203-2.043 1.8049-.824.4846-1.736.8604-2.726 1.1373-.989.2769-1.945.4846-2.857.6181.098.5538.258 1.0731.483 1.5675.224.4945.507.9198.843 1.2857.342.366.746.6528 1.224.8555.478.2077 1.015.3115 1.619.3115.951 0 1.819-.3066 2.594-.9148.776-.6082 1.38-1.4686 1.809-2.5713l.147.0593c-.507 1.795-1.273 3.2093-2.302 4.2427-1.029 1.0335-2.301 1.5528-3.818 1.5528-.775 0-1.477-.1434-2.097-.4303-.624-.2868-1.141-.6824-1.56-1.1966-.419-.5143-.741-1.1225-.961-1.8346-.224-.7071-.336-1.4884-.336-2.334 0-1.1818.17-2.3637.512-3.5455.341-1.1819.819-2.2351 1.443-3.16477.624-.92471 1.375-1.68128 2.258-2.25984.882-.57855 1.882-.87031 2.989-.87031h-.005Zm-4.983 7.63002c0 .178 0 .356.014.5341.01.178.025.356.044.534.795-.1187 1.541-.3016 2.229-.5489.692-.2472 1.292-.5785 1.809-.989.517-.4153.921-.8999 1.224-1.4637.302-.5637.453-1.2065.453-1.9384 0-.39556-.049-.76643-.146-1.12247-.098-.35603-.239-.66262-.424-.92964-.186-.26703-.415-.47472-.688-.62307-.273-.14834-.585-.22252-.931-.22252-.41 0-.82.13846-1.239.41538-.419.27691-.8.69229-1.151 1.24117-.351.55384-.639 1.25105-.858 2.10165-.224.8455-.336 1.8543-.336 3.0164v-.005ZM15.0773 5.34052h-4.252L5.86124 12.0607 3.35973 15.626V5.68667H0V21.5648h3.35973v-.0098l.01463.0049 3.06716-4.6334 4.37398 4.4653h4.7982l-7.12416-7.2246 6.58776-8.82668Zm26.4484.21759H38.166V21.5648h3.3597V5.55811Zm-11.7322 1.1126c-1.3751-1.12744-3.1793-1.76534-5.2615-1.76534-4.7787 0-8.1091 3.40706-8.1091 8.34703 0 4.94 3.3304 8.3174 8.1091 8.3174 2.0822 0 3.8864-.633 5.2615-1.7555v1.444h3.3597V5.24657h-3.3597v1.42414ZM24.532 18.6276c-2.8038 0-4.6568-2.1264-4.6568-5.4098 0-3.28343 1.8481-5.40975 4.6568-5.40975 2.8088 0 4.6861 2.09665 4.6861 5.40975s-1.8481 5.4098-4.6861 5.4098ZM65.7508 4.90537c-4.7787 0-8.1092 3.40706-8.1092 8.34703 0 4.94 3.3305 8.3174 8.1092 8.3174s8.1384-3.3774 8.1384-8.3174c0-4.93997-3.3304-8.34703-8.1384-8.34703Zm0 13.72223c-2.8038 0-4.6568-2.1264-4.6568-5.4098 0-3.28343 1.8481-5.40975 4.6568-5.40975 2.8087 0 4.6861 2.09665 4.6861 5.40975s-1.8481 5.4098-4.6861 5.4098ZM50.2298 6.61632V5.5581h-3.3597v16.0067h3.3597v-8.6239c.2292-2.9175 1.9457-4.73232 4.4569-4.73232.4486 0 .8778.0544 1.2727.16813V5.38997c-.4096-.05934-.8338-.08901-1.2727-.08901-1.7115 0-3.228.46977-4.4569 1.31536ZM85.7881 12.125l-3.116-.5637c-1.7554-.3116-2.56-.8456-2.56-2.00274 0-1.31536 1.1703-2.09666 3.0233-2.09666 1.9407 0 3.3305.90493 3.3597 2.53181h3.3305c-.0293-3.18948-2.838-5.06361-6.6902-5.06361-3.5743 0-6.383 1.87413-6.383 4.75208 0 2.27962 1.2044 3.90652 4.2862 4.44052l3.1744.5637c1.7896.2819 2.404.9396 2.404 2.156 0 1.4044-1.2337 2.1906-3.2963 2.1906-2.0627 0-3.5743-.9692-3.6084-2.6257h-3.3598c.0634 3.1252 2.8673 5.1575 7.0267 5.1575 3.6669 0 6.6902-1.7208 6.6902-5.0339 0-2.4082-1.3556-3.8768-4.2862-4.4059h.0049Zm12.3418 2.6702c.8079 0 1.4628-.6641 1.4628-1.4834s-.6549-1.4835-1.4628-1.4835c-.808 0-1.4629.6642-1.4629 1.4835s.6549 1.4834 1.4629 1.4834Z" />
                            </g>
                        </svg>
                        <div className="footer_top">
                            <h2>
                                Kairos Blue, An ocean of simplicity to contain <span>your waves of data.</span>
                            </h2>
                        </div>
                        <hr />
                        <div className="footer_bottom">
                            <div>
                                <Link href="/legal">Legal</Link>
                                <Link href="/">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <Form />
                </div>
                <div className="bottom">
                    <p className="small light-grey">Kairos blue, a software edited with love by Kairos Agency</p>
                </div>
            </footer>
        </>
    )
}
