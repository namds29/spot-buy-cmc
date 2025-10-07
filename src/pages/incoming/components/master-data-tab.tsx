import {
  LockKeyhole,
  Mail,
  Package2,
  RefreshCw,
  Search,
  Trash
} from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { incomingData } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
const MasterDataTab = () => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='relative flex gap-4'>
          <div>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
            <input
              type='text'
              className='border w-full pl-10 pr-4 py-1 rounded-md'
              placeholder='Search...'
            />
          </div>
          <Select>
            <SelectTrigger className=''>
              <SelectValue placeholder={<Package2 />} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
          <div className='flex items-center'>
            <div className='bg-orange-400 text-white px-4 py-1 rounded text-sm'>
              PI
            </div>
            <span className='ml-2'>14.220.545</span>
          </div>
        </div>
        <div className='text-sm flex gap-4 text-white'>
          <div className='bg-blue-400 px-2 rounded'>PEPPOL: 123456</div>
          <div className='bg-gray-500 px-2 rounded'>BPO225123</div>
        </div>
      </div>

      <div className=' w-full flex mt-4 border-1 border-gray-200'>
        <div className='w-1/5 overflow-auto h-[calc(100vh-310px)]'>
          {incomingData.map(item => (
            <div key={item.id}>
              <p className='font-bold bg-gray-400 p-2'>{item.title}</p>
              <ul className=''>
                {item.child.map(child => (
                  <li
                    key={child.id}
                    className='hover:bg-blue-400 hover:text-white cursor-pointer p-2 border-b-1'
                  >
                    <div className='flex gap-4 items-center'>
                      <div className='bg-orange-400 text-white px-4 h-[25px]  rounded text-sm flex items-center'>
                        PI
                      </div>
                      <div className='text-xs'>
                        <p>{child.pi}</p>
                        <p>{child.peppolInvoiceNumber}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='w-4/5'>
          <div className='flex bg-yellow-100 px-4 py-2 font-bold items-center'>
            User X is working on this invoices
            <LockKeyhole className='ml-2' size={18} />
          </div>
          <div className='flex w-full h-[calc(100vh-400px)]'>
            <div className='w-1/2 h-full px-4 py-2'>
              <div className='flex justify-between'>
                <p className='text-lg font-bold'>Invoice data</p>
                <Button>Edit</Button>
              </div>
              <div className='overflow-auto h-[400px]'>
                <div className='mt-4 flex'>
                  <span className='mr-3'>Name:</span>
                  <Input className='h-[30px]' />
                </div>
                <div className='mt-4 flex'>
                  <span className='mr-3'>Address:</span>
                  <Input className='h-[30px]' />
                </div>
                <div className='mt-4 flex'>
                  <span className='mr-3 w-[140px]'>VAT number:</span>
                  <Input className='h-[30px]' />
                </div>
                <div className='mt-4 flex'>
                  <span className='mr-3'>Email:</span>
                  <Input className='h-[30px]' />
                </div>
                <div className='mt-4 flex'>
                  <span className='mr-3'>IBAN:</span>
                  <Input className='h-[30px]' />
                </div>
                <div className='mt-4 flex'>
                  <span className='mr-3'>BIC:</span>
                  <Input className='h-[30px]' />
                </div>
                <div className='mt-4 flex'>
                  <span className='mr-3 w-[170px]'>Invoice number:</span>
                  <Input className='h-[30px]' />
                </div>
                <div className='mt-4 flex'>
                  <span className='mr-3 w-[140px]'>OGM:</span>
                  <Input className='h-[30px]' />
                </div>
                <div className='mt-4 flex'>
                  <span className='w-[140px]'>Invoice date:</span>
                  <Input className='h-[30px]' />
                </div>
              </div>
            </div>
            <div className='w-1/2 bg-gray-100 h-full flex flex-col'>
              <div className='flex-1 p-4'>
                <iframe
                  src='/10MB-TESTFILE.ORG.pdf'
                  className='w-full h-full border border-gray-300 rounded-md'
                  title='PDF Preview'
                />
              </div>
            </div>
          </div>

          <div className='flex justify-between px-4 mt-2'>
            <div className='flex gap-4'>
              <Button variant={'destructive'}>
                <Trash /> Delete
              </Button>
              <Button variant={'destructive'}>
                <Mail /> Protest
              </Button>
            </div>
            <div>
              <Button variant={'default'}>
                <RefreshCw /> Reprocess
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MasterDataTab
